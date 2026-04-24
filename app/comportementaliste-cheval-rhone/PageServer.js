import content from "@/content/cheval.json";
import FaqAccordion from "@/app/components/FaqAccordion";

export default function ChevalServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="service-hero horse-hero" role="banner" aria-labelledby="cheval-h1">
        <div className="service-hero-left">
          <div
            className="badge-live"
            style={{
              background: "rgba(255,255,255,.15)",
              borderColor: "rgba(255,255,255,.25)",
            }}
          >
            <span className="badge-dot"></span>
            {c.hero.badge}
          </div>
          <h1 id="cheval-h1">
            {c.hero.h1_line1}
            <br />
            <em>{c.hero.h1_em}</em>
            <br />
            {c.hero.h1_line3}
          </h1>
          <p className="sub">{c.hero.sub}</p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.25)",
              borderRadius: "50px",
              padding: "8px 16px",
              marginBottom: "32px",
            }}
          >
            <span style={{ color: "#D4A843", fontSize: "13px" }}>⭐</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,.85)", fontWeight: 500 }}>
              {c.hero.rareBadge}
            </span>
          </div>
          <div className="hero-actions">
            <a href="/prendre-rendez-vous" className="btn-main">
              {c.hero.cta_rdv}
            </a>
            <a href="#approche-equine" className="btn-ghost">
              {c.hero.cta_approche}
            </a>
          </div>
        </div>
        <div className="service-hero-right" aria-hidden="true">
          🐴
        </div>
      </header>

      {/* BADGE NICHE */}
      <div style={{ background: "var(--gold)", padding: "20px 52px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "16px",
            color: "white",
            fontWeight: 700,
          }}
        >
          {c.nicheBanner}
        </p>
      </div>

      {/* PROBLÉMATIQUES */}
      <section className="prob-section" aria-labelledby="prob-horse-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.problems.label}</div>
          <h2 className="section-title" id="prob-horse-title">
            {c.problems.title_line1}
            <br />
            {c.problems.title_line2}
          </h2>
          <p className="section-sub">{c.problems.intro}</p>
          <div className="prob-grid">
            {c.problems.items.map((item, i) => (
              <div key={i} className="prob-card">
                <span className="prob-card-icon">{item.icon}</span>
                <h3 className="prob-card-title">{item.title}</h3>
                <p className="prob-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE ÉTHOLOGIQUE */}
      <section
        id="approche-equine"
        className="sp"
        style={{ background: "var(--cream-warm)" }}
        aria-labelledby="ethologie-title"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.approche.label}</div>
          <h2 className="section-title" id="ethologie-title">
            {c.approche.title_line1}
            <br />
            {c.approche.title_line2}
          </h2>
          <div className="col2-grid-lg">
            <div>
              <p style={{ fontSize: "16px", color: "var(--ink-mid)", lineHeight: 1.8, marginBottom: "20px" }}>
                {c.approche.p1}
              </p>
              <blockquote className="about-quote">{c.approche.quote}</blockquote>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
                {c.approche.pilliers.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      background: "white",
                      padding: "14px 18px",
                      borderRadius: "12px",
                    }}
                  >
                    <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>
                      {p.icon}
                    </span>
                    <div>
                      <strong style={{ display: "block", fontSize: "14px" }}>{p.title}</strong>
                      <span style={{ fontSize: "13px", color: "var(--ink-soft)" }}>{p.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--teal)", borderRadius: "20px", padding: "36px", color: "white" }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  marginBottom: "20px",
                }}
              >
                {c.approche.public_title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {c.approche.public.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px" }}>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="sp" style={{ background: "white" }} aria-labelledby="zone-horse-title">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.zone.label}</div>
          <h2 className="section-title" id="zone-horse-title">
            {c.zone.title_line1}
            <br />
            {c.zone.title_line2}
          </h2>
          <div className="col2-grid">
            <div style={{ background: "var(--cream)", borderRadius: "16px", padding: "28px", borderLeft: "4px solid var(--teal)" }}>
              <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>
                {c.zone.presentiel.icon}
              </span>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
                {c.zone.presentiel.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.7 }}>
                {c.zone.presentiel.text}
              </p>
            </div>
            <div style={{ background: "var(--cream)", borderRadius: "16px", padding: "28px", borderLeft: "4px solid var(--gold)" }}>
              <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>
                {c.zone.distanciel.icon}
              </span>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
                {c.zone.distanciel.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.7 }}>
                {c.zone.distanciel.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="tarifs-section" aria-labelledby="tarifs-horse-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.tarifs.label}</div>
          <h2 className="section-title" id="tarifs-horse-title">
            {c.tarifs.title}
          </h2>
          <p className="section-sub">{c.tarifs.intro}</p>
          <div className="tarifs-grid">
            {c.tarifs.items.map((tarif, i) => (
              <div key={i} className={`tarif-card${tarif.featured ? " featured" : ""}`}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "20px", fontWeight: 700 }}>
                  {tarif.title}
                </h3>
                <div className="tarif-price-big">{tarif.price}</div>
                <p className="tarif-duration">{tarif.duration}</p>
                <ul className="tarif-includes">
                  {tarif.includes.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testi-section" aria-labelledby="testi-horse-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="testi-header">
            <div>
              <div className="label-tag">{c.testimonials.label}</div>
              <h2 className="section-title" id="testi-horse-title">
                {c.testimonials.title_line1}
                <br />
                {c.testimonials.title_line2}
              </h2>
            </div>
          </div>
          <div className="testi-grid">
            {c.testimonials.items.map((t, i) => (
              <div
                key={i}
                className={`testi-card${t.featured ? " star" : ""}`}
                itemScope
                itemType="https://schema.org/Review"
              >
                <span className="sp-pill pill-horse">Cheval</span>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <p className="testi-text" itemProp="reviewBody">
                  {t.text}
                </p>
                <div className="testi-bot">
                  <div>
                    <div className="testi-name" itemProp="author">
                      {t.author}
                    </div>
                    <div className="testi-loc">{t.loc}</div>
                  </div>
                  <div className="testi-stars">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-labelledby="faq-horse-title">
          <div className="faq-inner inner-pad" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div>
            <div className="label-tag">{c.faq.label}</div>
            <h2 className="section-title" id="faq-horse-title">
              {c.faq.title_line1}
              <br />
              {c.faq.title_line2}
            </h2>
            <FaqAccordion items={c.faq.items} />
          </div>

          <div className="faq-cta-box">
            <h3>{c.faq.ctaTitle}</h3>
            <p>{c.faq.ctaText}</p>
            <ul>
              {c.faq.ctaList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="/prendre-rendez-vous" className="btn-white">
              {c.faq.ctaBtn}
            </a>
            <a
              href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20cheval"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {c.faq.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" aria-labelledby="cta-horse-title">
        <div className="cta-final-inner">
          <h2 id="cta-horse-title">
            {c.ctaFinal.title_line1}
            <br />
            {c.ctaFinal.title_line2}
          </h2>
          <p>{c.ctaFinal.text}</p>
          <div className="cta-final-btns">
            <a href="/prendre-rendez-vous" className="btn-cta-white">
              {c.ctaFinal.btn_rdv}
            </a>
            <a href="/a-propos" className="btn-cta-ghost">
              {c.ctaFinal.btn_about}
            </a>
          </div>
          <p className="cta-guarantee">{c.ctaFinal.guarantee}</p>
        </div>
      </section>
    </>
  );
}
