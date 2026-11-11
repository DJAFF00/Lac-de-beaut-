# Lac de Beauté — site Next.js

Refonte du site de l'institut (Next.js 15, App Router, JavaScript).
Animations : Motion (`motion/react`) + défilement fluide Lenis.

## Démarrer

```bash
npm install
npm run images   # télécharge les photos d'origine en pleine résolution
npm run dev      # http://localhost:3000
```

Production : `npm run build && npm start`, ou déploiement direct sur Vercel.

## Images

`public/images/` contient des images **provisoires** découpées dans vos captures d'écran
(basse résolution). Lancez `npm run images` une fois : le script récupère les originaux
sur l'ancien site et les remplace (mêmes noms de fichiers).
Si une image échoue, le script la liste : enregistrez-la à la main dans `public/images/`.

## Modifier le contenu

Tout le texte est dans **`lib/data.js`** : coordonnées, services, grille de tarifs, avis, FAQ.
Aucune modification de composant n'est nécessaire pour changer un prix ou un horaire.

Variable optionnelle : `NEXT_PUBLIC_SITE_URL` (adresse définitive du site, pour le SEO et les aperçus de partage).

## Structure

```
app/            layout (polices, SEO, JSON-LD), page, styles globaux
components/     Hero, Marquee, Services, About, Pricing, Gallery, Reviews, Faq, Booking, Footer…
lib/data.js     contenu du site
scripts/        fetch-images.mjs
```

## Animations

- Titre du hero : lettres qui sortent d'un masque, photo révélée en arche, léger parallaxe au scroll
- Bande défilante : accélère et s'inverse selon la vitesse du scroll
- Titres de sections : mots qui montent depuis un masque
- Texte « À propos » : les mots s'allument au fil du scroll
- Galerie : deux rangées qui glissent en sens inverse
- Services, tarifs, FAQ : ouverture animée, changement d'onglet en cascade
- Les animations sont désactivées si l'appareil demande « réduire les animations »
