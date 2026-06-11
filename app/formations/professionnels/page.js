import FormationsProServer from "./PageServer";

export const metadata = {
  title: "Formations Comportement Animal — Professionnels",
  description:
    "Formations comportementales pour vétérinaires, équipes de refuge, éleveurs, toiletteurs et dog-sitters. Montez en compétences sur la lecture comportementale animale.",
  keywords: [
    "formation comportementaliste professionnels",
    "formation refuge comportement animal",
    "formation vétérinaire comportement",
    "formation éleveur comportement chien chat cheval",
  ],
  alternates: {
    canonical: "/formations/professionnels",
  },
};

export default function FormationsProPage() {
  return <FormationsProServer />;
}
