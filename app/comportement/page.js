import PageClient from "./PageClient";

export const metadata = {
  title: "Comportementaliste animaux – Chien, Chat, Cheval | CANIFELINK",
  description:
    "Choisissez l'espèce pour laquelle vous cherchez un comportementaliste : chien, chat ou cheval. CANIFELINK intervient en présentiel dans le Rhône et en visio dans toute la francophonie.",
  alternates: {
    canonical: "https://www.canifelink.fr/comportement",
  },
};

export default function ComportementPage() {
  return <PageClient />;
}
