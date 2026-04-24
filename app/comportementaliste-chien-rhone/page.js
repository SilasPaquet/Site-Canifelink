import PageServer from "./PageServer";

export const metadata = {
  title: "Comportementaliste Chien Lyon Rhône",
  description:
    "Comportementaliste canin certifiée à Lyon (Rhône 69) et en visio. Agressivité, anxiété, destructions, réactivité — je vous aide à comprendre votre chien grâce à l'éthologie bienveillante.",
  keywords: [
    "comportementaliste chien Lyon",
    "comportementaliste canin Rhône",
    "éducateur canin Lyon",
    "chien agressif Lyon",
    "anxiété chien Rhône",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/comportementaliste-chien-rhone",
  },
};

export default function ChienPage() {
  return <PageServer />;
}
