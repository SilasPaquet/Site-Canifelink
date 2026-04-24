export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">CANIFELINK</div>
          <p className="footer-tagline">
            Comportementaliste animalière certifiée · Chien, Chat et Cheval ·
            Éthologie bienveillante · Rhône (69) &amp; francophonie
          </p>
        </div>
        <div className="footer-col">
          <h4>Comportement</h4>
          <a href="/comportementaliste-chien-rhone">Chien Lyon</a>
          <a href="/comportementaliste-chat-rhone">Chat Rhône</a>
          <a href="/comportementaliste-cheval-rhone">Cheval Rhône</a>
        </div>
        <div className="footer-col">
          <h4>Formations</h4>
          <a href="/formations#particuliers">Pour les particuliers</a>
          <a href="/formations#professionnels">Pour les professionnels</a>
        </div>
        <div className="footer-col">
          <h4>CANIFELINK</h4>
          <a href="/a-propos">À propos</a>
          <a href="/blog">Blog &amp; ressources</a>
          <a href="/prendre-rendez-vous">Prendre RDV</a>
          <a
            href="https://instagram.com/canifelink"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 CANIFELINK · Rhône (69) ·{" "}
          <a href="mailto:contact@canifelink.fr" style={{ color: "inherit" }}>
            contact@canifelink.fr
          </a>
        </span>
        <div className="footer-legal">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgv">CGV</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
