import "./globals.css";
import NavClient from "./components/NavClient";
import Footer from "./components/Footer";
import FloatingUI from "./components/FloatingUI";

export const metadata = {
  title: {
    default: "Comportementaliste Chien Chat Cheval Lyon Rhône | CANIFELINK",
    template: "%s | CANIFELINK",
  },
  description:
    "CANIFELINK — Comportementaliste certifiée chien, chat et cheval à Lyon (Rhône 69) et en visio. Méthodes éthologiques et bienveillantes. Consultations sur-mesure.",
  keywords: [
    "comportementaliste chien Lyon",
    "comportementaliste chat Rhône",
    "comportementaliste cheval Rhône",
    "éducateur canin Lyon",
    "comportementaliste félin Lyon",
    "éthologie équine",
    "CANIFELINK",
  ],
  authors: [{ name: "CANIFELINK" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.canifelink.fr",
    siteName: "CANIFELINK",
    title: "Comportementaliste Chien Chat Cheval Lyon | CANIFELINK",
    description:
      "Comprenez votre animal grâce à l'éthologie. Comportementaliste certifiée chien, chat et cheval à Lyon (69) et en visio dans toute la francophonie.",
    images: [{ url: "https://www.canifelink.fr/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comportementaliste Chien Chat Cheval Lyon | CANIFELINK",
    description:
      "Comportementaliste certifiée chien, chat et cheval · Lyon & distanciel · Méthodes éthologiques · Suivi 30j inclus",
  },
  alternates: {
    canonical: "https://www.canifelink.fr/",
  },
};

const JSON_LD = `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.canifelink.fr/#business",
      "name": "CANIFELINK",
      "description": "Comportementaliste certifiée chien, chat et cheval à Lyon (Rhône) et en visio dans toute la francophonie. Méthodes éthologiques et bienveillantes.",
      "url": "https://www.canifelink.fr",
      "telephone": "+33-X-XX-XX-XX-XX",
      "email": "contact@canifelink.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Éveux",
        "addressRegion": "Rhône",
        "postalCode": "69931",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.7,
        "longitude": 4.71
      },
      "areaServed": [
        {"@type": "AdministrativeArea", "name": "Rhône"},
        {"@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes"},
        {"@type": "Country", "name": "France"},
        {"@type": "Country", "name": "Belgique"},
        {"@type": "Country", "name": "Suisse"}
      ],
      "priceRange": "€€",
      "openingHours": "Mo-Sa 09:00-19:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services CANIFELINK",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Consultation comportementaliste chien"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Consultation comportementaliste chat"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Consultation comportementaliste cheval"}}
        ]
      },
      "sameAs": [
        "https://www.instagram.com/canifelink",
        "https://www.facebook.com/canifelink"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.canifelink.fr/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment se déroule une consultation comportementaliste ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La consultation dure entre 1h30 et 2h. Après un bilan comportemental complet, je vous explique les causes du comportement et vous propose des solutions concrètes adaptées à votre quotidien. Un compte-rendu écrit vous est envoyé sous 48h, et un suivi par messages est inclus pendant 30 jours."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que vous intervenez à distance (visio) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, je propose des consultations en visio pour toute la France, la Belgique, la Suisse et le Québec. La visio est souvent aussi efficace que le présentiel, notamment pour les chats qui sont moins stressés dans leur environnement habituel."
          }
        },
        {
          "@type": "Question",
          "name": "Travaillez-vous avec des chevaux en plus des chiens et chats ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, CANIFELINK est l'une des rares structures en France à proposer une expertise comportementale pour trois espèces : chien, chat et cheval. Mon approche éthologique équine traite les problèmes de relation cavalier-cheval, les peurs, refus et comportements agressifs."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un comportementaliste et un éducateur canin ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'éducateur canin travaille principalement sur l'apprentissage d'ordres et de comportements souhaités. Le comportementaliste analyse les causes profondes d'un comportement problématique (anxiété, peur, traumatisme) pour y apporter une réponse thérapeutique durable, basée sur l'éthologie."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûte une consultation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les tarifs varient selon l'espèce et le mode de consultation (présentiel ou visio). Contactez-moi pour recevoir une grille tarifaire détaillée et transparente. Le suivi 30 jours est toujours inclus dans le tarif."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [{"@type": "ListItem","position": 1,"name": "Accueil","item": "https://www.canifelink.fr/"}]
    }
  ]
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" prefix="og: https://ogp.me/ns#">
      <head>
        <meta name="geo.region" content="FR-69" />
        <meta name="geo.placename" content="Rhône, Auvergne-Rhône-Alpes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavClient />
        {children}
        <Footer />
        <FloatingUI />
      </body>
    </html>
  );
}
