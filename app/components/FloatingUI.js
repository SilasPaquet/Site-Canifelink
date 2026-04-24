"use client";

export default function FloatingUI() {
  return (
    <>
      <a
        href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20prendre%20rendez-vous"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter CANIFELINK sur WhatsApp"
      >
        <span aria-hidden="true">💬</span>
        <span className="wa-tooltip">Écrire sur WhatsApp</span>
      </a>

      <div className="sticky-bottom" aria-label="Actions rapides mobile">
        <a href="/prendre-rendez-vous" className="sticky-btn sticky-rdv">
          📅 Prendre RDV
        </a>
        <a
          href="https://wa.me/33600000000"
          className="sticky-btn sticky-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
