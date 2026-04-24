import PageServer from "./PageServer";

export const metadata = {
  title: "Formations Comportement Animal — Particuliers &amp; Professionnels",
  description:
    "Formations en ligne et en présentiel pour comprendre le comportement de votre chien, chat ou cheval. Cibles : particuliers passionnés et professionnels de l'animal (vétérinaires, refuges, éleveurs).",
  keywords: [
    "formation comportementaliste animal",
    "formation comportement chien chat cheval",
    "formation éthologie animale en ligne",
    "formation professionnels animaliers",
    "formation refuge vétérinaire comportement",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/formations",
  },
};

export default function FormationsPage() {
  return <PageServer />;
}
