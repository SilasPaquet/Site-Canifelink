"use client";

import { useState } from "react";

const CATEGORIES = [
  { key: "all", label: "Tous" },
  { key: "chien", label: "🐕 Chien" },
  { key: "chat", label: "🐈 Chat" },
  { key: "cheval", label: "🐴 Cheval" },
  { key: "guides", label: "📄 Guides" },
];

export default function BlogFilterPosts({ featured, articles }) {
  const [active, setActive] = useState("all");

  const showFeatured = active === "all" || active === featured.category;
  const visibleArticles = articles.filter(
    (a) => active === "all" || a.category === active
  );

  return (
    <>
      {/* FILTRES */}
      <div
        style={{
          background: "white",
          padding: "32px 52px",
          borderBottom: "1px solid var(--teal-light)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`blog-filter${active === cat.key ? " active" : ""}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <section
        style={{ background: "var(--cream)", padding: "64px 52px" }}
        aria-label="Articles du blog"
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* ARTICLE VEDETTE */}
          {showFeatured && (
            <div className="blog-guide-featured" style={{ marginBottom: "40px" }}>
              <article
                className="blog-card big"
                style={{ width: "100%", margin: "0" }}
              >
                <div
                  className="blog-top bg-dog"
                  style={{ height: "240px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px" }}
                >
                  {featured.emoji}
                </div>
                <div className="blog-body">
                  <span className={`blog-cat cat-${featured.category}`}>
                    {featured.catLabel}
                  </span>
                  <h2 className="blog-h" style={{ fontSize: "24px" }}>
                    {featured.title}
                  </h2>
                  <p className="blog-excerpt">{featured.excerpt}</p>
                  <div className="blog-foot">
                    <span className="blog-date">{featured.date}</span>
                    <a
                      href="/prendre-rendez-vous"
                      style={{
                        color: "var(--teal)",
                        fontWeight: "700",
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      Lire l&apos;article → (bientôt disponible)
                    </a>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* GRILLE D'ARTICLES */}
          <div className="blog-list">
            {visibleArticles.map((article, i) => (
              <article key={i} className="blog-list-card">
                <div
                  style={{
                    height: "140px",
                    background: article.bgGradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "64px",
                  }}
                >
                  {article.emoji}
                </div>
                <div style={{ padding: "18px" }}>
                  <span className={`blog-cat cat-${article.category}`}>
                    {article.catLabel}
                  </span>
                  <h3 className="blog-h">{article.title}</h3>
                  {article.excerpt && (
                    <p className="blog-excerpt">{article.excerpt}</p>
                  )}
                  <div className="blog-foot">
                    <span className="blog-date">{article.date}</span>
                    <span className="blog-read">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
