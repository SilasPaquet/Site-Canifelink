import content from "@/content/a-propos.json";

const CV_BLOCS_HTML = `
<div class="cv-bloc">
  <div class="cv-bloc-head"><div class="cv-bloc-icon">🎓</div><p class="cv-bloc-title">Diplômes &amp; certifications universitaires</p></div>
  <div class="cv-entry"><span class="cv-entry-when">2014</span><div class="cv-entry-body"><p class="cv-entry-title">Licence de psychologie — Travail &amp; Intervention psychologique</p><p class="cv-entry-detail">Université de Clermont-Ferrand</p><span class="cv-tag cv-tag-blue">Diplôme</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2015</span><div class="cv-entry-body"><p class="cv-entry-title">DU Éthologie appliquée</p><p class="cv-entry-detail">Université de Rennes 1</p><span class="cv-tag cv-tag-blue">Diplôme universitaire</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2020</span><div class="cv-entry-body"><p class="cv-entry-title">The Truth About Cats and Dogs</p><p class="cv-entry-detail">University of Edinburgh</p><span class="cv-tag cv-tag-blue">Certificat universitaire</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2021</span><div class="cv-entry-body"><p class="cv-entry-title">Animal &amp; Society</p><p class="cv-entry-detail">University of Colorado Boulder</p><span class="cv-tag cv-tag-blue">Certificat universitaire</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2021</span><div class="cv-entry-body"><p class="cv-entry-title">Émotion et cognition chez le chien</p><p class="cv-entry-detail">Duke University</p><span class="cv-tag cv-tag-blue">Certificat universitaire</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2022</span><div class="cv-entry-body"><p class="cv-entry-title">Horse Care</p><p class="cv-entry-detail">University of Florida</p><span class="cv-tag cv-tag-blue">Certificat universitaire</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2026</span><div class="cv-entry-body"><p class="cv-entry-title">Animal Welfare in the Clinic</p><p class="cv-entry-detail">University of Edinburgh</p><span class="cv-tag cv-tag-blue">Certificat universitaire</span></div></div>
</div>

<div class="cv-bloc">
  <div class="cv-bloc-head"><div class="cv-bloc-icon">✅</div><p class="cv-bloc-title">Certifications professionnelles</p></div>
  <div class="cv-two-col">
    <div class="cv-entry"><span class="cv-entry-when">2019</span><div class="cv-entry-body"><p class="cv-entry-title">ACACED Chat</p><span class="cv-tag cv-tag-green">Certification</span></div></div>
    <div class="cv-entry"><span class="cv-entry-when">2020</span><div class="cv-entry-body"><p class="cv-entry-title">ACACED Chien &amp; NAC</p><span class="cv-tag cv-tag-green">Certification</span></div></div>
    <div class="cv-entry"><span class="cv-entry-when">2020</span><div class="cv-entry-body"><p class="cv-entry-title">TAV</p><p class="cv-entry-detail">Transport d'animaux vivants</p><span class="cv-tag cv-tag-green">Certification</span></div></div>
    <div class="cv-entry"><span class="cv-entry-when">2021</span><div class="cv-entry-body"><p class="cv-entry-title">IAABC</p><p class="cv-entry-detail">Membre associée internationale</p><span class="cv-tag cv-tag-green">Certification</span></div></div>
    <div class="cv-entry"><span class="cv-entry-when">2021</span><div class="cv-entry-body"><p class="cv-entry-title">FCA 1</p><p class="cv-entry-detail">Formation comportementaliste animalier</p><span class="cv-tag cv-tag-green">Certification</span></div></div>
  </div>
</div>

<div class="cv-bloc">
  <div class="cv-bloc-head"><div class="cv-bloc-icon">💼</div><p class="cv-bloc-title">Expériences professionnelles</p></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 2022</span><div class="cv-entry-body"><p class="cv-entry-title">Référente FCA</p><p class="cv-entry-detail">Formation comportementaliste animalier</p><span class="cv-tag cv-tag-teal">Poste actuel</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 2023</span><div class="cv-entry-body"><p class="cv-entry-title">Référente du module félin — ANIMHO</p><p class="cv-entry-detail">Formatrice &amp; référente pédagogique au sein de l'organisme</p><span class="cv-tag cv-tag-teal">Poste actuel</span></div></div>
</div>

<div class="cv-bloc">
  <div class="cv-bloc-head"><div class="cv-bloc-icon">📚</div><p class="cv-bloc-title">Formations spécialisées</p></div>
  <div class="cv-entry"><span class="cv-entry-when">2021</span><div class="cv-entry-body"><p class="cv-entry-title">Comportementaliste félin, canin &amp; équin — ANIMHO</p><p class="cv-entry-detail">600 h + mémoire professionnel</p><span class="cv-tag cv-tag-purple">Formation longue</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2024</span><div class="cv-entry-body"><p class="cv-entry-title">Conditionnement classique &amp; renforcement</p><p class="cv-entry-detail">Clio Marshall</p><span class="cv-tag cv-tag-purple">Formation</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2025–2026</span><div class="cv-entry-body"><p class="cv-entry-title">Calming Signals &amp; Scent Work</p><p class="cv-entry-detail">Rachael Draaisma</p><span class="cv-tag cv-tag-purple">Formation continue</span></div></div>
  <div class="cv-entry"><span class="cv-entry-when">2025</span><div class="cv-entry-body"><p class="cv-entry-title">Holistic Horsemanship</p><p class="cv-entry-detail">Evan Delassalle</p><span class="cv-tag cv-tag-purple">Formation</span></div></div>
</div>

<div class="cv-bloc">
  <div class="cv-bloc-head"><div class="cv-bloc-icon">🐾</div><p class="cv-bloc-title">Vie avec les animaux — le terrain avant tout</p></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 1983</span><div class="cv-entry-body"><p class="cv-entry-title">Manipulation des chevaux &amp; équitation</p><p class="cv-entry-detail">Ferme, haras et centres équestres</p></div></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 1987</span><div class="cv-entry-body"><p class="cv-entry-title">Éducation canine avec l'agility</p></div></div>
  <div class="cv-entry"><span class="cv-entry-when">1989–1993</span><div class="cv-entry-body"><p class="cv-entry-title">Élevage canin</p></div></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 1997</span><div class="cv-entry-body"><p class="cv-entry-title">Management transverse &amp; direct</p></div></div>
  <div class="cv-entry"><span class="cv-entry-when">depuis 2018</span><div class="cv-entry-body"><p class="cv-entry-title">Élevage félin</p><p class="cv-entry-detail">Maine Coons — Maceo's Gône's</p></div></div>
</div>
`;

export default function AProposServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="apropos-hero" role="banner" aria-labelledby="apropos-h1">
        <div>
          <div className="badge-live">
            <span className="badge-dot"></span>
            {c.hero.badge}
          </div>
          <h1
            id="apropos-h1"
            style={{
              fontSize: "clamp(36px,4.5vw,54px)",
              fontWeight: 900,
              color: "white",
              marginBottom: "20px",
            }}
          >
            {c.hero.h1_line1}
            <br />
            je suis <em>{c.hero.h1_em}</em>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,.75)",
              maxWidth: "480px",
              lineHeight: 1.75,
              marginBottom: "32px",
              margin: "0 auto 32px",
            }}
          >
            {c.hero.sub}
          </p>
          <a href="/prendre-rendez-vous" className="btn-main">
            {c.hero.cta}
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="manue-portrait">
            <img src="/img/manue.jpg" alt="Manue, comportementaliste certifiée CANIFELINK" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 75%"}} />
          </div>
        </div>
      </header>

      {/* HISTOIRE */}
      <section
        className="histoire-section"
        aria-labelledby="histoire-title"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="histoire-grid">
            <div>
              <div className="label-tag">{c.histoire.label}</div>
              <h2 className="section-title" id="histoire-title">
                {c.histoire.title_line1}
                <br />
                {c.histoire.title_line2}
                <br />
                {c.histoire.title_line3}
              </h2>
              <p style={{ fontSize: "16px", color: "var(--ink-mid)", lineHeight: 1.8, marginBottom: "18px" }}>
                {c.histoire.p1}
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink-mid)", lineHeight: 1.8, marginBottom: "18px" }}>
                {c.histoire.p2}
              </p>
              <blockquote className="about-quote">{c.histoire.quote}</blockquote>
            </div>
            <div>
              <div className="label-tag">{c.histoire.parcours_label}</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "28px",
                }}
              >
                {c.histoire.parcours_subtitle}
              </h3>
              <div className="timeline">
                {c.histoire.timeline.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MON PARCOURS */}
      <section className="sp" style={{ background: "var(--teal-pale)" }} aria-labelledby="parcours-cv-title">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="label-tag">Diplômes · Certifications · Expériences</div>
          <h2 className="section-title" id="parcours-cv-title" style={{ marginBottom: "36px" }}>
            Mon parcours
            <br />
            <em>en détail</em>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: CV_BLOCS_HTML }} />
        </div>
      </section>

      {/* MÉTHODES & VALEURS */}
      <section
        className="sp"
        style={{ background: "var(--cream-warm)" }}
        aria-labelledby="valeurs-title"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.valeurs.label}</div>
          <h2 className="section-title" id="valeurs-title">
            {c.valeurs.title_line1}
            <br />
            {c.valeurs.title_line2}
          </h2>
          <div className="values-grid">
            {c.valeurs.items.map((item, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{item.icon}</span>
                <h3 className="value-title">{item.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIPLE EXPERTISE */}
      <section
        className="sp"
        style={{ background: "var(--teal-deep)" }}
        aria-labelledby="trois-title"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag" style={{ color: "rgba(255,255,255,.4)" }}>
            {c.tripleExpertise.label}
          </div>
          <h2 className="section-title" id="trois-title" style={{ color: "white" }}>
            {c.tripleExpertise.title_line1}
            <br />
            {c.tripleExpertise.title_line2}
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,.65)",
              maxWidth: "560px",
              lineHeight: 1.75,
              marginBottom: "52px",
            }}
          >
            {c.tripleExpertise.intro}
          </p>
          <div className="diff-grid">
            {c.tripleExpertise.species.map((s, i) => (
              <div key={i} className="diff-card">
                <span className="diff-icon">{s.icon}</span>
                <h3 className="diff-title">{s.title}</h3>
                <p className="diff-text">{s.text}</p>
                <a
                  href={s.href}
                  style={{
                    color: "var(--gold)",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "block",
                    marginTop: "14px",
                  }}
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar" role="complementary" aria-label="CANIFELINK en chiffres">
        <div className="stats-inner">
          {c.stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section
        className="sp"
        style={{ background: "var(--cream-warm)", textAlign: "center" }}
        aria-labelledby="cta-apropos-title"
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="label-tag" style={{ justifyContent: "center" }}>
            {c.cta.label}
          </div>
          <h2
            className="section-title"
            id="cta-apropos-title"
            style={{ textAlign: "center" }}
          >
            {c.cta.title_line1}
            <br />
            {c.cta.title_line2}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--ink-soft)",
              lineHeight: 1.75,
              marginBottom: "36px",
            }}
          >
            {c.cta.text}
          </p>
          <a href="/prendre-rendez-vous" className="btn-teal" style={{ marginRight: "14px" }}>
            {c.cta.btn_rdv}
          </a>
          <a
            href="mailto:contact@canifelink.fr"
            style={{ color: "var(--teal)", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
          >
            {c.cta.btn_email}
          </a>
        </div>
      </section>
    </>
  );
}
