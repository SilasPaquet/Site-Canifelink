import PageServer from "./PageServer";

export const metadata = {
  title: "Blog — Comportement Animal, Conseils &amp; Ressources",
  description:
    "Conseils comportementalistes, articles éthologie chien, chat et cheval, guides téléchargeables — ressources gratuites pour comprendre votre animal et prévenir les problèmes.",
  keywords: [
    "blog comportement animal",
    "conseils chien chat cheval",
    "comprendre son animal",
    "éthologie chien blog",
    "comportement chat conseils",
  ],
  alternates: {
    canonical: "https://www.canifelink.fr/blog",
  },
};

export default function BlogPage() {
  return <PageServer />;
}
