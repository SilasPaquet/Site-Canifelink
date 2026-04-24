import content from "@/content/formations.json";
import FaqAccordion from "@/app/components/FaqAccordion";

export default function FormationsServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="formation-hero" role="banner" aria-labelledby="formation-h1">
        <div>
          <div className="badge-live">
            <span className="badge-dot"></span>
            {c.hero.badge}
          </div>
          <h1 id="formation-h1">
            {c.hero.h1_line1}
            <br /><em>{c.hero.h1_em}</em>
            <br />{c.hero.h1_line3}
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,.75)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "32px" }}>
            {c.hero.sub}
          </p>
          <div className="hero-actions">
            <a href="#catalogue" className="btn-main">{c.hero.cta_catalogue}</a>
            <a href="#professionnels" className="btn-ghost" style={{ borderColor: "rgba(255,255,255,.35)" }}>{c.hero.cta_pro}</a>
          </div>
        </div>
        <div style={{ fontSize: "110px", textAlign: "center", opacity: 0.9, filter: "drop-shadow(0 20px 40px rgba(0,0,0,.3))" }}>🎓</div>
      </header>

      {/* 2 CIBLES */}
      <div style={{ background: "var(--teal-deep)", padding: 0 }}>
        <div className="cibles-grid">
          <a id="particuliers" href="#catalogue" style={{ padding: "48px 52px", textDecoration: "none", borderRight: "1px solid rgba(255,255,255,.08)", scrollMarginTop: "80px", display: "block" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{c.cibles[0].icon}</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", fontWeight: 900, color: "white", marginBottom: "10px" }}>{c.cibles[0].title}</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,.6)", lineHeight: 1.7 }}>{c.cibles[0].text}</p>
          </a>
          <a id="professionnels" href="#pro-catalog" style={{ padding: "48px 52px", textDecoration: "none", scrollMarginTop: "80px", display: "block" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{c.cibles[1].icon}</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", fontWeight: 900, color: "white", marginBottom: "10px" }}>{c.cibles[1].title}</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,.6)", lineHeight: 1.7 }}>{c.cibles[1].text}</p>
          </a>
        </div>
      </div>

      {/* CATALOGUE PARTICULIERS */}
      <section id="catalogue" className="sp formation-catalog" aria-labelledby="cat-part-title" style={{ scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="label-tag">{c.particuliers.label}</div>
          <h2 className="section-title" id="cat-part-title">
            {c.particuliers.title_line1}
            <br />{c.particuliers.title_line2}
          </h2>
          <p className="section-sub">{c.particuliers.intro}</p>
          <div className="formation-cat-grid">
            {c.particuliers.items.map((item, i) => (
              <div key={i} className="formation-item">
                <span className={`formation-badge ${item.badgeClass}`}>{item.badge}</span>
                <div>
                  <h3 className="formation-item-title">{item.title}</h3>
                  <p className="formation-item-meta">{item.meta}</p>
                </div>
                <p style={{ fontSize: "13px", color: "var(--ink-soft)", lineHeight: 1.65 }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="formation-item-price">{item.price}</div>
                  <a href="/prendre-rendez-vous" className="btn-teal" style={{ marginTop: 0, padding: "10px 20px", fontSize: "13px" }}>{item.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE PRO */}
      <section id="pro-catalog" className="sp" style={{ background: "var(--cream-warm)", scrollMarginTop: "80px" }} aria-labelledby="cat-pro-title">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="label-tag">{c.professionnels.label}</div>
          <h2 className="section-title" id="cat-pro-title">
            {c.professionnels.title_line1}
            <br />{c.professionnels.title_line2}
          </h2>
          <p className="section-sub">{c.professionnels.intro}</p>
          <div className="formation-cat-grid">
            {c.professionnels.items.map((item, i) => (
              <div key={i} className="formation-item" style={{ background: "var(--gold-light)", borderColor: "var(--gold)" }}>
                <span className={`formation-badge ${item.badgeClass}`}>{item.badge}</span>
                <div>
                  <h3 className="formation-item-title">{item.title}</h3>
                  <p className="formation-item-meta">{item.meta}</p>
                </div>
                <p style={{ fontSize: "13px", color: "var(--ink-soft)", lineHeight: 1.65 }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="formation-item-price" style={{ color: "var(--gold)" }}>{item.price}</div>
                  <a href="/prendre-rendez-vous" className="btn-teal" style={{ marginTop: 0, padding: "10px 20px", fontSize: "13px" }}>{item.cta}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="pro-box-grid">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>{c.professionnels.proBox.title}</h3>
              <p style={{ fontSize: "14px", color: "var(--ink-mid)", lineHeight: 1.7 }}>{c.professionnels.proBox.text}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="/prendre-rendez-vous" className="btn-teal">{c.professionnels.proBox.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testi-section" aria-labelledby="testi-form-title">
        <div className="inner-pad" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="testi-header">
            <div>
              <div className="label-tag">{c.testimonials.label}</div>
              <h2 className="section-title" id="testi-form-title">
                {c.testimonials.title_line1}
                <br />{c.testimonials.title_line2}
              </h2>
            </div>
          </div>
          <div className="testi-grid">
            {c.testimonials.items.map((t, i) => (
              <div key={i} className={`testi-card${t.featured ? " star" : ""}`}>
                <span className={`sp-pill ${t.pillClass}`}>{t.pill}</span>
                <span className="quote-mark">&ldquo;</span>
                <p className="testi-text">{t.text}</p>
                <div className="testi-bot">
                  <div>
                    <div className="testi-name">{t.author}</div>
                    <div className="testi-loc">{t.loc}</div>
                  </div>
                  <div className="testi-stars">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="sp" style={{ background: "var(--teal-deep)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div className="label-tag" style={{ color: "rgba(255,255,255,.4)", justifyContent: "center" }}>
            <span style={{ background: "rgba(255,255,255,.3)" }}></span>
            {c.garanties.label}
          </div>
          <h2 className="section-title" style={{ color: "white", textAlign: "center" }}>
            {c.garanties.title_line1}
            <br />{c.garanties.title_line2}
          </h2>
          <div className="diff-grid" style={{ marginTop: "48px" }}>
            {c.garanties.items.map((g, i) => (
              <div key={i} className="diff-card">
                <span className="diff-icon">{g.icon}</span>
                <h3 className="diff-title">{g.title}</h3>
                <p className="diff-text">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSCRIPTION — 3 ÉTAPES */}
      <section className="sp" style={{ background: "var(--cream-warm)" }} aria-labelledby="inscription-title">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="label-tag" style={{ justifyContent: "center" }}>{c.inscription.label}</div>
          <h2 className="section-title" id="inscription-title" style={{ textAlign: "center" }}>
            {c.inscription.title_line1}
            <br />{c.inscription.title_line2}
          </h2>
          <div className="inscription-steps">
            {c.inscription.items.map((step, i) => (
              <div key={i} className="inscription-step">
                <div className="inscription-step-num">{step.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--ink-soft)", lineHeight: 1.65 }}>{step.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/prendre-rendez-vous" className="btn-teal">{c.inscription.cta}</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" aria-labelledby="faq-form-title">
          <div className="faq-inner inner-pad" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div>
            <div className="label-tag">{c.faq.label}</div>
            <h2 className="section-title" id="faq-form-title">
              {c.faq.title_line1}
              <br />{c.faq.title_line2}
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
            <a href="/prendre-rendez-vous" className="btn-white">{c.faq.ctaBtn}</a>
            <a
              href="https://wa.me/33600000000?text=Bonjour%20CANIFELINK%2C%20je%20voudrais%20des%20informations%20sur%20les%20formations"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {c.faq.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
