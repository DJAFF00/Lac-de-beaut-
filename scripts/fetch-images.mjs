/*
  Télécharge les photos d'origine (pleine résolution) depuis l'ancien site
  et remplace les images provisoires de public/images.

  npm run images        télécharge (et remplace) toutes les images
  --auto                n'agit qu'une fois (utilisé par « npm install »)

  Nécessite Node 18+ et une connexion Internet. Ne fait jamais échouer l'installation.
*/
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const BASE = "https://lacdebeaute.lovable.app";
const OUT = path.join(process.cwd(), "public", "images");
const MARKER = path.join(OUT, ".originals");
const auto = process.argv.includes("--auto");

// fichier local -> chemin connu sur l'ancien site
const FILES = {
  "hero-salon.jpg": "/hero-salon.jpg",
  "equipe.jpg": "/equipe.jpg",
  "salon-facade.png": "/__l5e/assets-v1/4e85ec45-857d-471d-b4a9-bfd34cef6d2d/salon-facade.png",
  "logo-white.png": "/__l5e/assets-v1/89a28455-15df-4fa5-89e5-abc530808c2e/logo-white.png",
  "service-coiffure.jpg": "/assets/service-coiffure-OwJoKnP0.jpg",
  "service-cils.jpg": "/assets/service-maquillage-iha4bwOx.jpg",
  "service-sourcils.jpg": "/assets/service-sourcils-DTQuY1-U.jpg",
  "service-massage.jpg": "/assets/service-massage-DfX8UEvL.jpg",
  "services-tresses.jpg": "/services-tresses.jpg",
  "services-ongles.jpg": "/services-ongles.jpg",
  "services-maquillage.jpg": "/services-maquillage.jpg",
  "galerie-coupe-homme-1.jpg": "/galerie-coupe-homme-1.jpg",
  "galerie-coupe-homme-2.jpg": "/galerie-coupe-homme-2.jpg",
  "galerie-manucure-duo.jpg": "/galerie-manucure-duo.jpg",
  "galerie-nail-art-1.jpg": "/galerie-nail-art-1.jpg",
  "galerie-nail-art-2.jpg": "/galerie-nail-art-2.jpg",
  "galerie-tressage.jpg": "/galerie-tressage.jpg",
  "galerie-cliente.jpg": "/galerie-cliente.jpg",
  "galerie-pedicure-fauteuil.jpg": "/galerie-pedicure-fauteuil.jpg",
};

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function getImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = res.headers.get("content-type") || "";
  if (!type.startsWith("image/")) throw new Error(`type inattendu : ${type}`);
  return Buffer.from(await res.arrayBuffer());
}

// Plan B : retrouver les chemins en lisant la page d'accueil et ses scripts
async function discoverPaths() {
  const found = new Set();
  const grab = (text) => {
    for (const m of text.matchAll(/["'(]((?:\/|https?:\/\/[^"'()\s]+\/)[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp))/g)) {
      found.add(m[1].replace(BASE, ""));
    }
  };
  const html = await (await fetch(BASE + "/")).text();
  grab(html);
  const scripts = [...html.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
  for (const src of scripts) {
    try {
      const url = src.startsWith("http") ? src : BASE + src;
      grab(await (await fetch(url)).text());
    } catch {}
  }
  return [...found];
}

function matchCandidate(local, candidates) {
  const ext = path.extname(local);
  const stem = path.basename(local, ext);
  const re = new RegExp(`/${stem}(?:-[A-Za-z0-9_-]{8})?\\${ext}$`);
  return candidates.find((c) => re.test(c));
}

async function main() {
  if (auto && (await exists(MARKER))) return;
  await mkdir(OUT, { recursive: true });

  let ok = 0;
  const failed = [];
  let discovered = null;

  for (const [local, remote] of Object.entries(FILES)) {
    try {
      let data;
      try {
        data = await getImage(BASE + remote);
      } catch (firstError) {
        if (!discovered) discovered = await discoverPaths();
        const alt = matchCandidate(local, discovered);
        if (!alt) throw firstError;
        data = await getImage(alt.startsWith("http") ? alt : BASE + alt);
      }
      await writeFile(path.join(OUT, local), data);
      ok++;
      console.log("ok     ", local);
    } catch (err) {
      failed.push(local);
      console.log("échec  ", local, "-", err.message);
    }
  }

  console.log(`\n${ok}/${Object.keys(FILES).length} images d'origine téléchargées.`);
  if (failed.length) {
    console.log("À enregistrer à la main dans public/images :", failed.join(", "));
  }
  if (ok >= Math.ceil(Object.keys(FILES).length * 0.8)) await writeFile(MARKER, new Date().toISOString());
}

main().catch((err) => {
  console.log("Téléchargement des images impossible :", err.message);
});
