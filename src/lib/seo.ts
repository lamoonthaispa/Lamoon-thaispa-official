const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const SITE_URL = envSiteUrl && envSiteUrl.length > 0
  ? envSiteUrl
  : "https://www.lamoon.com";

export const SITE_NAME = "Lamoon Thaï Spa";
export const SITE_LOCALE = "fr_FR";

export const DEFAULT_DESCRIPTION =
  "Lamoon Thaï Spa est un institut de beauté et salon de massage traditionnel situé à Paris 8e, proposant massages thaïlandais, soins du visage, gommages et épilation à la cire orientale.";

export const DEFAULT_KEYWORDS = [
  "spa thaï paris",
  "massage thaïlandais paris",
  "institut de beauté paris 8",
  "gommage corps paris",
  "soins du visage paris",
  "épilation cire orientale paris"
];

export const HOME_PAGE_TITLE = "Lamoon";
export const HOME_PAGE_DESCRIPTION =
  "Découvrez Lamoon Thaï Spa à Paris 8 : massages thaï traditionnels, gommages, soins du visage et épilation à la cire orientale dans un cadre apaisant.";
export const HOME_PAGE_KEYWORDS = [
  "lamoon thai spa",
  "massage paris 8",
  "spa détente paris",
  "soin beauté paris",
  "bien-être thaïlandais"
];

export const INFO_PAGE_TITLE = "Infos et tarifs des soins Lamoon Thaï Spa";
export const INFO_PAGE_DESCRIPTION =
  "Consultez toutes les informations pratiques, tarifs et prestations disponibles chez Lamoon Thaï Spa, votre institut de beauté et spa thaï à Paris.";
export const INFO_PAGE_KEYWORDS = [
  "tarifs spa paris",
  "infos massage thaïlandais",
  "prix épilation cire orientale",
  "carte soins spa paris"
];

type ServiceMetadata = {
  title: string;
  description: string;
  keywords: string[];
  imagePath: string;
};

export const SERVICE_PATHS = [
  "massage",
  "gommage",
  "teinture",
  "cire-orientale",
  "soin-du-visage"
] as const;

export const SERVICE_PAGE_METADATA: Record<typeof SERVICE_PATHS[number], ServiceMetadata> = {
  massage: {
    title: "Massage thaïlandais à Paris | Lamoon Thaï Spa",
    description:
      "Optez pour un massage thaïlandais authentique au cœur du 8e arrondissement de Paris et relâchez les tensions grâce à l'expertise Lamoon Thaï Spa.",
    keywords: [
      "massage thaïlandais paris",
      "massage traditionnel thaï",
      "détente paris 8",
      "spa massage paris"
    ],
    imagePath: "/images/massage.jpg"
  },
  gommage: {
    title: "Gommage corps à Paris | Lamoon Thaï Spa",
    description:
      "Offrez à votre peau douceur et éclat avec les rituels de gommage Lamoon Thaï Spa, combinés à des soins relaxants dans notre institut parisien.",
    keywords: [
      "gommage corps paris",
      "soin exfoliant paris",
      "rituel bien-être paris",
      "spa gommage paris"
    ],
    imagePath: "/images/gommage.png"
  },
  teinture: {
    title: "Teinture des cils et sourcils à Paris | Lamoon Thaï Spa",
    description:
      "Sublimez votre regard avec la teinture des cils et sourcils signée Lamoon Thaï Spa, pour un résultat naturel et longue durée à Paris 8.",
    keywords: [
      "teinture cils paris",
      "teinture sourcils paris",
      "regard intense paris",
      "spa beauté du regard"
    ],
    imagePath: "/images/teinture.png"
  },
  "cire-orientale": {
    title: "Épilation à la cire orientale à Paris | Lamoon Thaï Spa",
    description:
      "Découvrez l'épilation à la cire orientale (sucre) chez Lamoon Thaï Spa et profitez d'une peau douce grâce à une méthode naturelle et respectueuse.",
    keywords: [
      "épilation cire orientale paris",
      "épilation au sucre paris",
      "épilation naturelle paris",
      "spa épilation paris"
    ],
    imagePath: "/images/cire-orientae.png"
  },
  "soin-du-visage": {
    title: "Soins du visage à Paris | Lamoon Thaï Spa",
    description:
      "Hydratez, purifiez et illuminez votre peau avec les soins du visage sur mesure Lamoon Thaï Spa, réalisés avec des ingrédients naturels à Paris 8.",
    keywords: [
      "soin du visage paris",
      "soin beauté paris 8",
      "soin hydratant visage",
      "spa visage paris"
    ],
    imagePath: "/images/soin-du-visage.png"
  }
};

export const OPEN_GRAPH_IMAGE = `${SITE_URL}/images/banner.jpg`;

export const LOCAL_BUSINESS_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: OPEN_GRAPH_IMAGE,
  telephone: "+33 1 86 04 54 48",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Rue de Turin",
    addressLocality: "Paris",
    postalCode: "75008",
    addressCountry: "FR"
  },
  areaServed: {
    "@type": "City",
    name: "Paris"
  },
  sameAs: []
} as const;


