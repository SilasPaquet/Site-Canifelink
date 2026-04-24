"use client";

import { useState } from "react";



const ESPECES = ["🐕 Chien", "🐈 Chat", "🐴 Cheval"];
const MODES = ["📍 Présentiel (Rhône 69)", "💻 Distanciel (visio)"];

export default function PrendreRdvPage() {
  const [espece, setEspece] = useState("");
  const [mode, setMode] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    probleme: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [sending, setSending] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "idle", text: "" });

    const fullMessage = [
      espece ? `Espèce : ${espece}` : "",
      mode ? `Mode : ${mode}` : "",
      form.probleme ? `Problème : ${form.probleme}` : "",
      form.message ? `Message : ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: fullMessage || "(Sans message)",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Envoi impossible.");
      setStatus({
        type: "success",
        text: "✓ Votre demande a bien été envoyée ! Je vous réponds sous 24h.",
      });
      setForm({ name: "", email: "", probleme: "", message: "" });
      setEspece("");
      setMode("");
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Une erreur est survenue." });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <header className="rdv-hero" role="banner" aria-labelledby="rdv-h1">
        <div>
          <h1 id="rdv-h1">Prenez rendez-vous<br />avec CANIFELINK</h1>
          <p>
            Décrivez votre situation en quelques lignes — je vous réponds sous
            24h pour organiser votre consultation. Premier échange gratuit.
          </p>
        </div>
      </header>

      {/* FORMULAIRE + SIDEBAR */}
      <section className="rdv-form-section" aria-label="Formulaire de prise de rendez-vous">
        <div className="rdv-form-grid">
          {/* FORMULAIRE */}
          <div className="rdv-form">
            <h2>Votre demande de consultation</h2>

            {status.type === "success" && (
              <div
                style={{
                  background: "#E8F6EF",
                  border: "1.5px solid #1E6B3A",
                  borderRadius: 12,
                  padding: "16px 20px",
                  marginBottom: 24,
                  color: "#1E6B3A",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                role="alert"
              >
                {status.text}
              </div>
            )}
            {status.type === "error" && (
              <div
                style={{
                  background: "#FEF3F2",
                  border: "1.5px solid #C1674A",
                  borderRadius: 12,
                  padding: "16px 20px",
                  marginBottom: 24,
                  color: "#C1674A",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                role="alert"
              >
                {status.text}
              </div>
            )}

            <form onSubmit={onSubmit} noValidate>
              {/* ESPÈCE */}
              <div className="rdv-field">
                <span className="rdv-label">Pour quelle espèce ?</span>
                <div className="rdv-options">
                  {ESPECES.map((e) => (
                    <button
                      key={e}
                      type="button"
                      className={`rdv-option${espece === e ? " selected" : ""}`}
                      onClick={() => setEspece(e)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* MODE */}
              <div className="rdv-field">
                <span className="rdv-label">Présentiel ou distanciel ?</span>
                <div className="rdv-options">
                  {MODES.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`rdv-option${mode === m ? " selected" : ""}`}
                      onClick={() => setMode(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* PROBLÈME */}
              <div className="rdv-field">
                <label className="rdv-label" htmlFor="probleme">
                  Quel est le problème principal ?
                </label>
                <input
                  id="probleme"
                  name="probleme"
                  type="text"
                  className="rdv-input"
                  placeholder="ex : agressivité en laisse, urine hors litière, refus des soins…"
                  value={form.probleme}
                  onChange={onChange}
                />
              </div>

              {/* NOM */}
              <div className="rdv-field">
                <label className="rdv-label" htmlFor="name">
                  Votre prénom &amp; nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="rdv-input"
                  placeholder="Marie Dupont"
                  required
                  value={form.name}
                  onChange={onChange}
                />
              </div>

              {/* EMAIL */}
              <div className="rdv-field">
                <label className="rdv-label" htmlFor="email">
                  Votre adresse email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="rdv-input"
                  placeholder="vous@example.com"
                  required
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="rdv-field">
                <label className="rdv-label" htmlFor="message">
                  Décrivez la situation (facultatif)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="rdv-textarea"
                  rows={4}
                  placeholder="Quelques lignes sur votre animal, son histoire, la durée du problème…"
                  value={form.message}
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="rdv-submit" disabled={sending}>
                {sending ? "Envoi en cours…" : "📅 Envoyer ma demande →"}
              </button>

              <p
                style={{
                  fontSize: 12,
                  color: "var(--ink-soft)",
                  textAlign: "center",
                  marginTop: 12,
                }}
              >
                ✓ Réponse garantie sous 24h · Premier échange gratuit · Sans
                engagement
              </p>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="rdv-sidebar">
            {/* GARANTIES */}
            <div className="rdv-garanties">
              <h3>Ce qui est inclus</h3>
              <div className="gar-item">
                <span className="gar-icon">⏱</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    Réponse sous 24h
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Je vous rappelle ou vous écris dans les 24h ouvrées.
                  </span>
                </div>
              </div>
              <div className="gar-item">
                <span className="gar-icon">💬</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    Premier échange gratuit
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    On clarifie la situation et le format ensemble, sans frais.
                  </span>
                </div>
              </div>
              <div className="gar-item">
                <span className="gar-icon">📋</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    Compte-rendu écrit inclus
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Envoyé sous 48h après la consultation.
                  </span>
                </div>
              </div>
              <div className="gar-item">
                <span className="gar-icon">📱</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    Suivi 30 jours inclus
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Questions lors de l'application du protocole ? Je réponds.
                  </span>
                </div>
              </div>
              <div className="gar-item">
                <span className="gar-icon">🌿</span>
                <div>
                  <strong style={{ display: "block", fontSize: 14 }}>
                    100% bienveillant
                  </strong>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Sans coercition, sans punition, méthodes éthologiques validées.
                  </span>
                </div>
              </div>
            </div>

            {/* TARIFS RÉCAP */}
            <div
              style={{
                background: "white",
                borderRadius: 16,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "var(--ink)",
                }}
              >
                Tarifs récapitulatifs
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--teal-light)",
                  fontSize: 14,
                }}
              >
                <span>Consultation Chien/Chat/Cheval</span>
                <strong>Sur devis</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--teal-light)",
                  fontSize: 14,
                }}
              >
                <span>Suivi 30 jours</span>
                <strong style={{ color: "var(--teal)" }}>Inclus</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  fontSize: 14,
                }}
              >
                <span>Compte-rendu écrit</span>
                <strong style={{ color: "var(--teal)" }}>Inclus</strong>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--ink-soft)",
                  marginTop: 12,
                }}
              >
                Tarifs détaillés communiqués par email sous 24h après votre demande.
              </p>
            </div>

            {/* TÉMOIGNAGE RENFORT */}
            <div
              style={{
                background: "var(--teal-pale)",
                borderRadius: 16,
                padding: 24,
                border: "1.5px solid var(--teal-light)",
              }}
            >
              <div className="quote-mark" style={{ fontSize: 40 }}>
                "
              </div>
              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "var(--ink-mid)",
                  lineHeight: 1.7,
                  marginBottom: 14,
                }}
              >
                Mon chat urinait partout depuis des mois. En visio, on a
                identifié la cause en 45 min. Deux semaines plus tard, problème
                résolu.
              </p>
              <div
                style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}
              >
                Claire D.
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>
                Bordeaux · Distanciel
              </div>
              <div
                style={{
                  color: "var(--gold)",
                  fontSize: 13,
                  marginTop: 6,
                }}
              >
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATIONS PRATIQUES */}
      <section
        style={{ background: "white", padding: "72px 52px" }}
        aria-labelledby="info-pratiques-title"
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            className="section-title"
            id="info-pratiques-title"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            Informations pratiques
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "var(--cream)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>
                📍
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Zone présentiel
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                Rhône (69) et départements limitrophes à domicile. Pour le cheval : Rhône-Alpes.
              </p>
            </div>
            <div
              style={{
                background: "var(--cream)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>
                💻
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Distanciel partout
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                France, Belgique, Suisse, Québec — toute la francophonie accessible en visio.
              </p>
            </div>
            <div
              style={{
                background: "var(--cream)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>
                ⏰
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Délai de réponse
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                Réponse garantie sous 24h ouvrées. Consultations disponibles du lundi au samedi, 9h–19h.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
