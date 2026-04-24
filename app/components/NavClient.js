"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topbarVisible, setTopbarVisible] = useState(true);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {topbarVisible && (
        <div className="top-bar" role="banner">
          📅 Prochains créneaux disponibles cette semaine ·{" "}
          <span>Rhône &amp; Visio</span> ·{" "}
          <Link
            href="/prendre-rendez-vous"
            style={{ color: "white", textDecoration: "underline", fontWeight: 700 }}
          >
            Réserver maintenant →
          </Link>
          <button
            className="top-bar-close"
            onClick={() => setTopbarVisible(false)}
            aria-label="Fermer la bannière"
          >
            ✕
          </button>
        </div>
      )}

      <nav aria-label="Navigation principale">
        <Link className="nav-logo" href="/" aria-label="CANIFELINK - Retour à l'accueil">
          <span className="nav-logo-text">CANIFELINK</span>
        </Link>

        <div className="nav-links">
          <Link href="/" className="nav-plain-link">Accueil</Link>

          <Link href="/comportement" className="nav-plain-link">Comportement</Link>

          <div className="nav-drop">
            <span className="nav-drop-toggle">Formations ▾</span>
            <div className="nav-drop-panel">
              <Link href="/formations#particuliers">Particuliers</Link>
              <Link href="/formations#professionnels">Professionnels</Link>
            </div>
          </div>

          <Link href="/a-propos" className="nav-plain-link">À propos</Link>
          <Link href="/blog" className="nav-plain-link">Blog</Link>
          <a href="tel:+33600000000" className="nav-tel">📞 06 XX XX XX XX</a>
          <Link href="/prendre-rendez-vous" className="nav-cta">📅 Prendre RDV</Link>
        </div>

        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile nav drawer */}
      <div
        className={`mobile-nav${menuOpen ? " active" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menu de navigation"
      >
        <div className="mobile-nav-head">
          <span className="nav-logo-text" style={{ color: "var(--teal-dark)" }}>
            CANIFELINK
          </span>
          <button
            className="mobile-nav-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-nav-body">
          <Link href="/comportement" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Comportement
          </Link>

          <p className="mobile-nav-section">Formations</p>
          <Link href="/formations#particuliers" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Particuliers
          </Link>
          <Link href="/formations#professionnels" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Professionnels
          </Link>

          <p className="mobile-nav-section">Info</p>
          <Link href="/a-propos" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/blog" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Blog &amp; ressources
          </Link>
        </div>

        <div className="mobile-nav-ctas">
          <Link
            href="/prendre-rendez-vous"
            className="btn-main"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setMenuOpen(false)}
          >
            📅 Prendre rendez-vous
          </Link>
          <a
            href="tel:+33600000000"
            className="btn-ghost"
            style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
          >
            📞 Appeler
          </a>
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
