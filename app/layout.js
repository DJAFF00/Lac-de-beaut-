import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lacdebeaute.lovable.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lac de Beauté | Coiffure mixte et soins de beauté à Abomey-Calavi",
  description:
    "Institut de beauté à Tanpkè carrefour, Abomey-Calavi : coiffure mixte, tresses, ongles, cils, sourcils, massage et maquillage. Ouvert tous les jours jusqu'à 22h. Réservation par WhatsApp.",
  openGraph: {
    title: "Lac de Beauté | Coiffure mixte et soins de beauté",
    description:
      "Coiffure, tresses, ongles, cils, massage et maquillage à Abomey-Calavi. Réservez par WhatsApp.",
    type: "website",
    locale: "fr_BJ",
    images: [{ url: "/images/equipe.jpg", width: 881, height: 566 }],
  },
};

export const viewport = {
  themeColor: "#1d1814",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Lac de Beauté",
  telephone: "+2290150787878",
  image: `${SITE_URL}/images/equipe.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tanpkè carrefour",
    addressLocality: "Abomey-Calavi",
    addressCountry: "BJ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.4502938, longitude: 2.3468167 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    closes: "22:00",
  },
  sameAs: ["https://www.tiktok.com/@lac_de_beaute"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
