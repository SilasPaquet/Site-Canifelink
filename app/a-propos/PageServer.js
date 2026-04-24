import content from "@/content/a-propos.json";

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
            <span style={{ fontSize: "100px" }}>👩‍🦰</span>
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
