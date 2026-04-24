import content from "@/content/chat.json";
import FaqAccordion from "@/app/components/FaqAccordion";

export default function ChatServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="service-hero cat-hero" role="banner" aria-labelledby="chat-h1">
        <div className="service-hero-left">
          <div className="badge-live">
            <span className="badge-dot"></span>
            {c.hero.badge}
          </div>
          <h1 id="chat-h1">
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
            <a href="#avantages-distanciel" className="btn-ghost">
              {c.hero.cta_dist}
            </a>
          </div>
        </div>
        <div className="service-hero-right" aria-hidden="true">
          🐈
        </div>
      </header>

      {/* PROBLÉMATIQUES */}
      <section className="prob-section" aria-labelledby="prob-chat-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.problems.label}</div>
          <h2 className="section-title" id="prob-chat-title">
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

      {/* AVANTAGES VISIO CHAT */}
      <section
        id="avantages-distanciel"
        className="sp"
        style={{ background: "var(--cream-warm)" }}
        aria-labelledby="dist-cat-title"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.distanciel.label}</div>
          <h2 className="section-title" id="dist-cat-title">
            {c.distanciel.title_line1}
            <br />
            {c.distanciel.title_line2}
            <br />
            {c.distanciel.title_line3}
          </h2>
          <p className="section-sub">{c.distanciel.intro}</p>
          <div className="col2-grid">
            {c.distanciel.items.map((item, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "28px" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>
                  {item.icon}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="how-section" aria-labelledby="how-cat-title">
        <div className="how-header">
          <div className="label-tag" style={{ justifyContent: "center" }}>
            {c.howSteps.label}
          </div>
          <h2 className="section-title" id="how-cat-title" style={{ textAlign: "center" }}>
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
              <div className="step-num">{step.num}</div>
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

      {/* TARIFS */}
      <section className="tarifs-section" aria-labelledby="tarifs-chat-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag">{c.tarifs.label}</div>
          <h2 className="section-title" id="tarifs-chat-title">
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
      <section className="testi-section" aria-labelledby="testi-cat-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="testi-header">
            <div>
              <div className="label-tag">{c.testimonials.label}</div>
              <h2 className="section-title" id="testi-cat-title">
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
                <span className="sp-pill pill-cat">Chat</span>
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
      <section className="faq-section" aria-labelledby="faq-cat-title">
          <div className="faq-inner inner-pad" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div>
            <div className="label-tag">{c.faq.label}</div>
            <h2 className="section-title" id="faq-cat-title">
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
              href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20souhaite%20une%20consultation%20pour%20mon%20chat"
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
      <section className="cta-final" aria-labelledby="cta-chat-title">
        <div className="cta-final-inner">
          <h2 id="cta-chat-title">
            {c.ctaFinal.title_line1}
            <br />
            {c.ctaFinal.title_line2}
          </h2>
          <p>{c.ctaFinal.text}</p>
          <div className="cta-final-btns">
            <a href="/prendre-rendez-vous" className="btn-cta-white">
              {c.ctaFinal.btn_rdv}
            </a>
            <a href="/comportementaliste-chien-rhone" className="btn-cta-ghost">
              {c.ctaFinal.btn_other}
            </a>
          </div>
          <p className="cta-guarantee">{c.ctaFinal.guarantee}</p>
        </div>
      </section>
    </>
  );
}
