import content from "@/content/blog.json";
import BlogFilterPosts from "@/app/components/BlogFilterPosts";

export default function BlogServer() {
  const c = content;

  return (
    <>
      {/* HERO */}
      <header className="blog-hero" role="banner" aria-labelledby="blog-h1">
        <div className="blog-hero-inner">
          <div className="label-tag">{c.hero.label}</div>
          <h1 id="blog-h1">
            {c.hero.h1_line1}
            <br />
            <em>{c.hero.h1_line2}</em>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,.78)", maxWidth: "580px", lineHeight: 1.8, marginTop: "12px" }}>
            {c.hero.intro}
          </p>
        </div>
      </header>

      {/* BLOG FILTRES + ARTICLES (client) */}
      <BlogFilterPosts featured={c.featured} articles={c.articles} />

      {/* GUIDE GRATUIT */}
      <section
        style={{ background: "var(--cream-warm)", padding: "64px 52px" }}
        aria-labelledby="guide-title"
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "var(--teal)",
            borderRadius: "20px",
            padding: "48px",
            textAlign: "center",
            color: "white",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.25)",
              borderRadius: "50px",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {c.guide.label}
          </div>
          <h2
            id="guide-title"
            style={{ fontFamily: "'Playfair Display',serif", fontSize: "28px", fontWeight: 900, marginBottom: "16px" }}
          >
            {c.guide.title_line1}
            <br />
            {c.guide.title_line2}
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, opacity: 0.85, marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            {c.guide.text}
          </p>
          <a href="/contact" className="btn-white" style={{ display: "inline-block" }}>
            {c.guide.cta}
          </a>
          <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "12px" }}>{c.guide.meta}</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" aria-labelledby="cta-blog-title">
        <div className="cta-final-inner">
          <h2 id="cta-blog-title">
            {c.ctaFinal.title_line1}
            <br />
            {c.ctaFinal.title_line2}
          </h2>
          <p>{c.ctaFinal.text}</p>
          <div className="cta-final-btns">
            <a href="/prendre-rendez-vous" className="btn-cta-white">
              {c.ctaFinal.btn_rdv}
            </a>
            <a href="/" className="btn-cta-ghost">
              {c.ctaFinal.btn_services}
            </a>
          </div>
          <p className="cta-guarantee">{c.ctaFinal.guarantee}</p>
        </div>
      </section>
    </>
  );
}
