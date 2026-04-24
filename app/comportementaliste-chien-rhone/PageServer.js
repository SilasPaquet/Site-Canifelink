import content from "@/content/chien.json";
import FaqAccordion from "@/app/components/FaqAccordion";

export default function ChienServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="service-hero dog-hero" role="banner" aria-labelledby="chien-h1">
        <div className="service-hero-left">
          <div className="badge-live">
            <span className="badge-dot"></span>
            {c.hero.badge}
          </div>
          <h1 id="chien-h1">
            {c.hero.h1_line1}
            <br />
            <em>{c.hero.h1_em}</em>
            <br />
            {c.hero.h1_line3}
          </h1>
          <p className="sub">{c.hero.sub}</p>
          <div className="hero-proof" style={{ marginBottom: "32px" }}>
            <span className="proof-stars">★★★★★</span>
            <span className="proof-text">{c.hero.proof}</span>
          </div>
          <div className="hero-actions">
            <a href="/prendre-rendez-vous" className="btn-main">
              {c.hero.cta_rdv}
            </a>
            <a href="#problematiques" className="btn-ghost">
              {c.hero.cta_problems}
            </a>
          </div>
        </div>
        <div className="service-hero-right" aria-hidden="true">
          🐕
        </div>
      </header>

      {/* PROBLÉMATIQUES */}
      <section id="problematiques" className="prob-section" aria-labelledby="prob-title">
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 52px" }}>
          <div className="label-tag">{c.problems.label}</div>
          <h2 className="section-title" id="prob-title">
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

      {/* DÉROULEMENT */}
      <section className="how-section" aria-labelledby="how-dog-title">
        <div className="how-header">
          <div className="label-tag" style={{ justifyContent: "center" }}>
            {c.howSteps.label}
          </div>
          <h2 className="section-title" id="how-dog-title" style={{ textAlign: "center" }}>
            {c.howSteps.title_line1}
            <br />
            {c.howSteps.title_line2}
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto" }}>
            {c.howSteps.intro}
          </p>
        </div>
        <div className="steps-grid">
          {c.howSteps.items.map((step, i) => (
            <div key={i} className="step">
              <div className="step-num" aria-label={`Étape ${step.num}`}>
                {step.num}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-reassurance">
          {c.howSteps.reassurance.map((item, i) => (
            <div key={i} className="reassure-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section style={{ background: "white", padding: "88px 52px" }} aria-labelledby="zone-title">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.zone.label}</div>
          <h2 className="section-title" id="zone-title">
            {c.zone.title_line1}
            <br />
            {c.zone.title_line2}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "40px" }}>
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
              <p style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "10px" }}>
                {c.zone.presentiel.sub}
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
              <p style={{ fontSize: "13px", color: "var(--ink-soft)", marginTop: "10px" }}>
                {c.zone.distanciel.sub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="tarifs-section" aria-labelledby="tarifs-title">
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 52px" }}>
          <div className="label-tag">{c.tarifs.label}</div>
          <h2 className="section-title" id="tarifs-title">
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
          <p style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "var(--ink-soft)" }}>
            {c.tarifs.note}
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testi-section" aria-labelledby="testi-dog-title">
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 52px" }}>
          <div className="testi-header">
            <div>
              <div className="label-tag">{c.testimonials.label}</div>
              <h2 className="section-title" id="testi-dog-title">
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
                <span className="sp-pill pill-dog">Chien</span>
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
                  <div
                    className="testi-stars"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <span itemProp="ratingValue" content="5">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-labelledby="faq-dog-title">
        <div className="faq-inner" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 52px" }}>
          <div>
            <div className="label-tag">{c.faq.label}</div>
            <h2 className="section-title" id="faq-dog-title">
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
              href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20chien"
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
      <section className="cta-final" aria-labelledby="cta-chien-title">
        <div className="cta-final-inner">
          <h2 id="cta-chien-title">
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
