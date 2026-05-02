import { notFound } from "next/navigation";
import sql from "@/lib/db";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [post] = await sql`SELECT title, excerpt FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const [post] = await sql`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
  if (!post) notFound();

  const CAT_COLORS = {
    chien:  { bg: "#E8F6EF", color: "#2a7a4f" },
    chat:   { bg: "#FBF2DC", color: "#8a6400" },
    cheval: { bg: "#E0F0F4", color: "#1a6a7a" },
    guides: { bg: "#F0F0F0", color: "#555" },
  };
  const catStyle = CAT_COLORS[post.category] ?? { bg: "#eee", color: "#555" };

  return (
    <main>
      {/* IMAGE HERO */}
      {post.image_url ? (
        <div style={{ width: "100%", maxHeight: "460px", overflow: "hidden", background: "#ddd" }}>
          <img
            src={post.image_url}
            alt={post.title}
            style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
          />
        </div>
      ) : (
        <div style={{ width: "100%", height: "240px", background: "var(--teal-pale)" }} />
      )}

      {/* CONTENU */}
      <article style={{ maxWidth: "740px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* RETOUR */}
        <a
          href="/blog"
          style={{ fontSize: "13px", color: "var(--teal)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "28px" }}
        >
          ← Retour au blog
        </a>

        {/* CATÉGORIE */}
        <div style={{ marginBottom: "16px" }}>
          <span
            style={{
              background: catStyle.bg,
              color: catStyle.color,
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: ".05em",
            }}
          >
            {post.cat_label}
          </span>
        </div>

        {/* TITRE */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 900,
            lineHeight: 1.25,
            color: "#1a1a1a",
            marginBottom: "16px",
          }}
        >
          {post.title}
        </h1>

        {/* META */}
        <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#888", marginBottom: "24px", flexWrap: "wrap" }}>
          {post.date && <span>{post.date}</span>}
          {post.read_time && <span>· {post.read_time} de lecture</span>}
        </div>

        {/* EXTRAIT / CHAPEAU */}
        {post.excerpt && (
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#444",
              borderLeft: "3px solid var(--teal)",
              paddingLeft: "20px",
              marginBottom: "36px",
              fontStyle: "italic",
            }}
          >
            {post.excerpt}
          </p>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #eee", marginBottom: "36px" }} />

        {/* CORPS DE L'ARTICLE */}
        {post.content ? (
          <div
            style={{
              fontSize: "17px",
              lineHeight: 1.85,
              color: "#333",
              whiteSpace: "pre-wrap",
            }}
          >
            {post.content}
          </div>
        ) : (
          <p style={{ color: "#aaa", fontStyle: "italic" }}>Contenu à venir…</p>
        )}
      </article>

      {/* CTA */}
      <section
        style={{
          background: "var(--teal)",
          padding: "64px 24px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 900,
            marginBottom: "12px",
          }}
        >
          Cet article vous inspire une question ?
        </h2>
        <p style={{ fontSize: "16px", opacity: 0.85, marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
          Passez à la pratique avec une consultation comportementaliste personnalisée.
        </p>
        <a
          href="/prendre-rendez-vous"
          style={{
            background: "white",
            color: "var(--teal)",
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "15px",
            display: "inline-block",
          }}
        >
          📅 Prendre rendez-vous
        </a>
      </section>
    </main>
  );
}
