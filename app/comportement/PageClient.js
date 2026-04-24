"use client";

import Link from "next/link";

const SPECIES = [
  {
    slug: "/comportementaliste-chien-rhone",
    label: "Chien",
    sub: "Comportementaliste canin",
    img: "/img/border.jpg",
    accent: "#4A7C6F",
    tags: ["Agressivité", "Anxiété", "Réactivité", "Destructions"],
  },
  {
    slug: "/comportementaliste-chat-rhone",
    label: "Chat",
    sub: "Comportementaliste félin",
    img: "/img/maine-coon-table.jpg",
    accent: "#8B6A1A",
    tags: ["Éliminations", "Griffades", "Peur", "Cohabitation"],
  },
  {
    slug: "/comportementaliste-cheval-rhone",
    label: "Cheval",
    sub: "Comportementaliste équin",
    img: "/img/chevaux.jpg",
    accent: "#2A9DAA",
    tags: ["Relation cavalier", "Peurs", "Refus", "Bien-être"],
  },
];

export default function PageClient() {
  return (
    <main className="species-picker">
      <div className="sp-intro">
        <p className="sp-eyebrow">Comportement animal</p>
        <h1 className="sp-title">Pour quelle espèce<br />cherchez-vous de l'aide ?</h1>
      </div>

      <div className="sp-grid">
        {SPECIES.map((s) => (
          <Link key={s.slug} href={s.slug} className="sp-card" style={{ "--accent": s.accent }}>
            <img src={s.img} alt={s.label} className="sp-bg" />
            <div className="sp-overlay" />
            <div className="sp-content">
              <p className="sp-sub">{s.sub}</p>
              <h2 className="sp-name">{s.label}</h2>
              <div className="sp-tags">
                {s.tags.map((t) => (
                  <span key={t} className="sp-tag">{t}</span>
                ))}
              </div>
              <span className="sp-cta">Découvrir →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
