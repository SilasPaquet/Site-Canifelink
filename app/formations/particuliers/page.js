import FormationsParticuliersServer from "./PageServer";

export const metadata = {
  title: "Formations Comportement Animal — Particuliers",
  description:
    "Formations en ligne et en présentiel pour comprendre le comportement de votre chien, chat ou cheval. Accessible à tous, sans prérequis.",
  keywords: [
    "formation comportement animal particulier",
    "formation comportementaliste en ligne",
    "formation comportement chien chat cheval",
    "formation éthologie animale",
  ],
  alternates: {
    canonical: "/formations/particuliers",
  },
};

export default function FormationsParticuliersPage() {
  return <FormationsParticuliersServer />;
}
