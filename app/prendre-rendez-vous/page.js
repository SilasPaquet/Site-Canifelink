import PageClient from "./PageClient";

export const metadata = {
  title: "Prendre Rendez-vous — Consultation Comportementaliste",
  description:
    "Prenez rendez-vous avec CANIFELINK — comportementaliste certifiée chien, chat et cheval à Lyon (Rhône) et en visio. Réponse sous 24h, premier échange gratuit.",
  keywords: [
    "prendre rdv comportementaliste Lyon",
    "consulter comportementaliste Rhône en ligne",
    "rendez-vous comportementaliste chien chat cheval",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/prendre-rendez-vous",
  },
};

export default function PrendreRdvPage() {
  return <PageClient />;
}
