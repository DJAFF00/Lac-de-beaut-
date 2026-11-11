export const SITE = {
  name: "Lac de Beauté",
  phone: "01 50 78 78 78",
  phoneHref: "tel:+2290150787878",
  whatsapp: "2290150787878",
  address: "Tanpkè carrefour, Abomey-Calavi, Bénin",
  hours: "Ouvert tous les jours, fermeture à 22h",
  tiktok: "https://www.tiktok.com/@lac_de_beaute",
  mapsLink: "https://www.google.com/maps/place/LAC+DE+BEAUT%C3%89/@6.4502991,2.3442418,17z",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Tanpk%C3%A8%20carrefour%2C%20Abomey-Calavi%2C%20B%C3%A9nin",
  mapsEmbed: "https://www.google.com/maps?q=6.4502938,2.3468167&z=17&output=embed",
};

export function waLink(message = "Bonjour, je souhaite prendre rendez-vous chez Lac de Beauté") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export const MARQUEE = [
  "Coiffure",
  "Tresses",
  "Dreadlocks",
  "Manucure",
  "Pédicure",
  "Extensions de cils",
  "Sourcils",
  "Massage",
  "Maquillage",
  "Perruques",
];

export const TAGS = ["Coiffure", "Tresses", "Ongles", "Cils", "Massage"];

export const SERVICES = [
  {
    id: "coiffure",
    title: "Coiffure",
    image: "/images/service-coiffure.jpg",
    from: "1 000 F",
    text: "Coupe, couleur et mise en forme pour hommes, femmes et enfants.",
    items: ["Brushing", "Coiffure", "Coiffure pour mariage", "Shampoings et après-shampoings"],
  },
  {
    id: "tresses",
    title: "Tresses & perruques",
    image: "/images/services-tresses.jpg",
    from: "500 F",
    text: "Tresses, locks et extensions, posés et entretenus avec soin.",
    items: ["Tresses", "Dreadlocks", "Extensions de cheveux", "Pose et confection de perruques"],
  },
  {
    id: "ongles",
    title: "Ongles",
    image: "/images/services-ongles.jpg",
    from: "3 000 F",
    text: "Mains et pieds soignés, du vernis permanent à la résine.",
    items: ["Manucure", "Pédicure", "Ongles en acrylique"],
  },
  {
    id: "cils",
    title: "Cils & sourcils",
    image: "/images/service-cils.jpg",
    from: "3 000 F",
    text: "Un regard structuré, naturel ou plus intense selon votre envie.",
    items: [
      "Extensions de cils",
      "Rehaussement de cils",
      "Permanente des cils",
      "Embellissement des sourcils",
      "Laminage des sourcils",
      "Épilation à la cire",
    ],
  },
  {
    id: "soins",
    title: "Soins & massage",
    image: "/images/service-massage.jpg",
    from: "5 000 F",
    text: "Une pause pour la peau et le corps, au calme.",
    items: ["Massage", "Soin du visage", "Traitements de l'acné"],
  },
  {
    id: "maquillage",
    title: "Maquillage",
    image: "/images/services-maquillage.jpg",
    from: null,
    text: "Maquillage de jour, de soirée ou de mariage, et maquillage permanent.",
    items: ["Maquillage", "Maquillage permanent"],
  },
];

export const PRICES = [
  {
    id: "coiffure",
    label: "Coiffure",
    groups: [
      {
        title: "Homme & femme",
        rows: [
          ["Coupe simple", "1 000 F"],
          ["Coupe avec teinte + shampoing", "1 500 – 2 000 F"],
          ["Coupe avec teinte couleur", "5 000 F"],
          ["Coupe avec teinte ADORE", "7 000 F"],
        ],
      },
    ],
  },
  {
    id: "locks",
    label: "Locks & tresses",
    groups: [
      {
        title: "Locks & tresses",
        rows: [
          ["Entretien (Sister, Micro, Dreadlocks)", "5 000 – 30 000 F"],
          ["Confection locks", "Selon le style"],
          ["Natte", "500 – 1 000 F"],
          ["Détressage + shampoing", "2 000 – 2 500 F"],
          ["Coupe avec Curly", "5 000 F"],
        ],
      },
    ],
  },
  {
    id: "ongles",
    label: "Manucure",
    groups: [
      {
        title: "Manucure",
        rows: [
          ["Pose vernis permanent", "3 000 F"],
          ["Pose capsule + vernis permanent", "5 000 – 6 000 F"],
          ["Polygel, résine", "8 000 – 12 000 F"],
          ["Gainage", "5 000 – 6 000 F"],
        ],
      },
    ],
  },
  {
    id: "pedicure",
    label: "Pédicure",
    groups: [
      {
        title: "Pédicure",
        rows: [
          ["Pédicure", "5 000 – 7 000 F"],
          ["Pédicure + massage du dos au fauteuil SPA", "15 000 F"],
          ["Capsules pied", "2 000 F"],
          ["Vernis permanent", "2 000 F"],
          ["Gainage", "5 000 – 6 000 F"],
        ],
      },
    ],
  },
  {
    id: "soins",
    label: "Massage & visage",
    groups: [
      {
        title: "Massage",
        rows: [
          ["Massage du dos", "5 000 F"],
          ["Massage amincissant", "7 000 F"],
          ["Massage complet du corps", "25 000 F"],
        ],
      },
      { title: "Soin du visage", rows: [["Soin basique", "10 000 – 15 000 F"]] },
    ],
  },
  {
    id: "perruques",
    label: "Perruques",
    groups: [
      {
        title: "Perruques",
        rows: [
          ["Placage", "3 000 F"],
          ["Pose perruque frontale", "10 000 F"],
          ["Pose perruque closure", "8 000 F"],
          ["Pose sans colle", "5 000 F"],
          ["Confection de perruque frontale", "7 000 F"],
          ["Confection de perruque closure", "5 000 F"],
          ["Entretien des perruques", "5 000 F"],
        ],
      },
    ],
  },
  {
    id: "cils",
    label: "Cils",
    groups: [
      {
        title: "Faux cils, extension cluster",
        rows: [
          ["Classique", "3 000 F"],
          ["Hybride", "4 000 F"],
          ["Volume", "5 000 F"],
        ],
      },
      {
        title: "Extension de cils naturels",
        rows: [
          ["Classique", "10 000 F"],
          ["Hybride", "12 000 F"],
          ["Volume", "15 000 F"],
        ],
      },
    ],
  },
];

export const GALLERY_TOP = [
  { src: "/images/galerie-coupe-homme-1.jpg", alt: "Coupe homme dégradée", ratio: "4 / 3" },
  { src: "/images/galerie-nail-art-1.jpg", alt: "Nail art à motifs floraux", ratio: "4 / 5" },
  { src: "/images/galerie-tressage.jpg", alt: "Tressage en cours", ratio: "1 / 1" },
  { src: "/images/galerie-manucure-duo.jpg", alt: "Séance de manucure", ratio: "4 / 3" },
  { src: "/images/galerie-cliente.jpg", alt: "Cliente au salon", ratio: "4 / 5" },
];

export const GALLERY_BOTTOM = [
  { src: "/images/galerie-coupe-homme-2.jpg", alt: "Coupe courte homme", ratio: "1 / 1" },
  { src: "/images/galerie-nail-art-2.jpg", alt: "Nail art rose et argent", ratio: "4 / 3" },
  { src: "/images/galerie-pedicure-fauteuil.jpg", alt: "Fauteuil de pédicure", ratio: "4 / 5" },
  { src: "/images/equipe.jpg", alt: "L'équipe du salon", ratio: "4 / 3" },
  { src: "/images/salon-facade.png", alt: "Façade du salon à Tanpkè", ratio: "1 / 1" },
];

export const REVIEWS = [
  {
    name: "Franklin K.",
    stars: 5,
    when: "il y a 3 mois",
    text: "Je suis venu en vacances et j'ai découvert Lac de Beauté à Calavi. Par curiosité j'y suis allé pour une coiffure homme, mais je suis resté et j'ai essayé plusieurs autres services tel que le soin de visage (magnifique et relaxant)…",
  },
  {
    name: "Mouïzath L.",
    stars: 4,
    when: "il y a 2 mois",
    text: "J'ai été bien accueillie chez Lac beauté aujourd'hui pour le resserrage de mes microtwist. Ce qui m'a le plus marqué c'est la rapidité dans le travail. Je vous conseille vivement d'aller vous sublimer chez Lac beauté…",
  },
  {
    name: "MotivaEDI",
    stars: 5,
    when: "il y a 5 mois",
    text: "Un très bon salon de coiffure pour homme et famille, devant le carrefour.",
  },
];

export const FAQ = [
  {
    q: "Comment réserver un rendez-vous ?",
    a: "Le plus simple est de nous écrire sur WhatsApp, ou de remplir le formulaire de réservation de cette page. Nous confirmons rapidement votre créneau.",
  },
  {
    q: "Faut-il prévenir en cas d'empêchement ?",
    a: "Oui, merci de nous prévenir dès que possible par WhatsApp afin que nous puissions libérer le créneau pour une autre cliente.",
  },
  {
    q: "Accueillez-vous les hommes et les enfants ?",
    a: "Oui. Lac de Beauté est un institut mixte : hommes, femmes et enfants sont les bienvenus pour la coiffure et plusieurs de nos soins.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "Nous sommes à Tanpkè carrefour, à Abomey-Calavi. Le bouton Itinéraire de la section Contact ouvre directement Google Maps.",
  },
];
