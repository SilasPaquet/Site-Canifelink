import PageServer from "./PageServer";

export const metadata = {
  title: "À propos — Manue, Comportementaliste CANIFELINK",
  description:
    "Découvrez Manue, comportementaliste animalière certifiée spécialisée chien, chat et cheval à Lyon (Rhône). Son parcours, ses méthodes éthologiques, ses valeurs et ses chiffres.",
  keywords: [
    "qui est CANIFELINK",
    "comportementaliste Manue Rhône",
    "comportementaliste éthologiste Lyon",
    "à propos CANIFELINK comportementaliste",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/a-propos",
  },
};

export default function AProposPage() {
  return <PageServer />;
}
