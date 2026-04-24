import PageServer from "./PageServer";

export const metadata = {
  title: "Comportementaliste Cheval Rhône — Éthologie Équine",
  description:
    "Comportementaliste équin certifiée à Lyon (Rhône) et en visio. Peur, refus, agressivité, relation cavalier-cheval — approche éthologique équine bienveillante. Niche rare en France.",
  keywords: [
    "comportementaliste cheval Rhône",
    "comportementaliste équin Lyon",
    "éthologie équine Rhône",
    "cheval peureux comportementaliste",
    "relation cavalier cheval Auvergne-Rhône-Alpes",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/comportementaliste-cheval-rhone",
  },
};

export default function ChevalPage() {
  return <PageServer />;
}
