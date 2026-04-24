"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [isSending, setIsSending] = useState(false);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "idle", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Envoi impossible pour le moment.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        text: "Votre message a bien ete envoye. Nous vous repondrons rapidement.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message || "Une erreur est survenue.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact" aria-label="Formulaire de contact">
      <h2>Nous contacter</h2>
      <p>
        Ecrivez-nous directement ici pour demander des informations sur les
        prochaines portees.
      </p>

      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={onChange}
          placeholder="Votre nom"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onChange}
          placeholder="vous@example.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={onChange}
          placeholder="Parlez-nous de votre projet d'adoption..."
        />

        <button className="cta" type="submit" disabled={isSending}>
          {isSending ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>

      {status.type !== "idle" ? (
        <p className={`form-status ${status.type}`}>{status.text}</p>
      ) : null}
    </section>
  );
}
