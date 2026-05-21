import TarifsClient from "./TarifsClient";

export const metadata = {
  title: "Tarifs comportementaliste chien chat cheval | CANIFELINK",
  description:
    "Découvrez les tarifs CANIFELINK : consultations comportementales chien, chat et cheval, formations particuliers et pros, mentoring comportementalistes. Visio & présentiel Rhône.",
  alternates: { canonical: "https://www.canifelink.fr/tarifs" },
};

export default function TarifsPage() {
  return <TarifsClient />;
}
