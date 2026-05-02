"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EMPTY_FORM = {
  category: "chien",
  cat_label: "Chien",
  slug: "",
  image_url: "",
  title: "",
  excerpt: "",
  content: "",
  date: "",
  read_time: "",
  is_featured: false,
};

const CAT_PRESETS = {
  chien:  { cat_label: "Chien" },
  chat:   { cat_label: "Chat" },
  cheval: { cat_label: "Cheval" },
  guides: { cat_label: "Guide" },
};

function toSlug(str) {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminBlogClient({ initialPosts }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts ?? []);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState(null);

  function flash(text, isError = false) {
    setMsg({ text, isError });
    setTimeout(() => setMsg(null), 3500);
  }

  function handleCategoryChange(cat) {
    const preset = CAT_PRESETS[cat] ?? {};
    setForm((f) => ({ ...f, category: cat, ...preset }));
  }

  function handleTitleBlur(e) {
    // Auto-génère le slug si vide et pas en mode édition
    if (!editId && !form.slug) {
      setForm((f) => ({ ...f, slug: toSlug(e.target.value) }));
    }
  }

  function startEdit(post) {
    setEditId(post.id);
    setForm({
      category: post.category,
      cat_label: post.cat_label,
      slug: post.slug ?? "",
      image_url: post.image_url ?? "",
      title: post.title,
      excerpt: post.excerpt,
      content: post.content ?? "",
      date: post.date,
      read_time: post.read_time,
      is_featured: post.is_featured,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("image", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    if (res.ok) {
      const { url } = await res.json();
      setForm((f) => ({ ...f, image_url: url }));
    } else {
      const data = await res.json();
      flash(data.error ?? "Erreur lors de l'upload.", true);
    }
  }

  function cancelEdit() {
    setEditId(null);
    setForm(EMPTY_FORM);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const url = editId ? `/api/blog/${editId}` : "/api/blog";
    const method = editId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      flash(data.error ?? "Erreur.", true);
      return;
    }

    const saved = await res.json();

    if (editId) {
      setPosts((p) =>
        p.map((x) =>
          x.id === editId
            ? saved
            : form.is_featured
            ? { ...x, is_featured: false }
            : x
        )
      );
      flash("Article modifié.");
    } else {
      setPosts((p) =>
        form.is_featured
          ? [saved, ...p.map((x) => ({ ...x, is_featured: false }))]
          : [saved, ...p]
      );
      flash("Article créé.");
    }

    cancelEdit();
  }

  async function handleDelete(id) {
    if (!confirm("Supprimer cet article ?")) return;
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    setPosts((p) => p.filter((x) => x.id !== id));
    flash("Article supprimé.");
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <div style={s.page}>
      {/* HEADER */}
      <header style={s.header}>
        <span style={s.headerTitle}>Administration — Blog</span>
        <button onClick={handleLogout} style={s.logoutBtn}>
          Se déconnecter
        </button>
      </header>

      {msg && (
        <div style={{ ...s.flash, background: msg.isError ? "#fce4e4" : "#e4f7ea", color: msg.isError ? "#c62828" : "#2e7d32" }}>
          {msg.text}
        </div>
      )}

      {/* FORMULAIRE */}
      <section style={s.card}>
        <h2 style={s.sectionTitle}>{editId ? "Modifier l'article" : "Nouvel article"}</h2>
        <form onSubmit={handleSubmit} style={s.form}>

          {/* LIGNE 1 : catégorie + date + temps de lecture */}
          <div style={s.row}>
            <Field label="Catégorie">
              <select
                value={form.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                style={s.input}
              >
                {Object.keys(CAT_PRESETS).map((k) => (
                  <option key={k} value={k}>{CAT_PRESETS[k].cat_label}</option>
                ))}
              </select>
            </Field>
            <Field label="Date (ex : 12 mars 2025)">
              <input style={s.input} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </Field>
            <Field label="Temps de lecture">
              <input style={s.input} placeholder="5 min" value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} />
            </Field>
          </div>

          {/* TITRE */}
          <Field label="Titre *">
            <input
              required
              style={{ ...s.input, width: "100%" }}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              onBlur={handleTitleBlur}
            />
          </Field>

          {/* SLUG */}
          <Field label="Slug URL * (ex : border-collie-hyperactivite)">
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                required
                style={{ ...s.input, flex: 1 }}
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="généré automatiquement depuis le titre"
              />
              <button
                type="button"
                style={s.btnGhost}
                onClick={() => setForm((f) => ({ ...f, slug: toSlug(f.title) }))}
              >
                Générer
              </button>
            </div>
            {form.slug && (
              <span style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
                URL : /blog/{form.slug}
              </span>
            )}
          </Field>

          {/* IMAGE */}
          <Field label="Image">
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <label style={{ ...s.btnGhost, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", opacity: uploading ? 0.6 : 1 }}>
                {uploading ? "Envoi en cours…" : "Choisir un fichier"}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </label>
              <span style={{ fontSize: "12px", color: "#aaa" }}>ou</span>
              <input
                style={{ ...s.input, flex: 1, minWidth: "160px" }}
                placeholder="https://... ou /img/photo.jpg"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              />
              {form.image_url && (
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, image_url: "" }))}
                  style={{ ...s.btnDelete, padding: "6px 10px", flexShrink: 0 }}
                  title="Supprimer l'image"
                >
                  ✕
                </button>
              )}
            </div>
            {form.image_url && (
              <img
                src={form.image_url}
                alt="Aperçu"
                style={{ marginTop: "8px", width: "100%", maxHeight: "160px", objectFit: "cover", borderRadius: "6px", border: "1px solid #eee" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            )}
          </Field>

          {/* EXTRAIT */}
          <Field label="Extrait (sous-titre affiché sur la card)">
            <textarea
              rows={2}
              style={{ ...s.input, width: "100%", resize: "vertical" }}
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            />
          </Field>

          {/* CONTENU */}
          <Field label="Contenu de l'article">
            <textarea
              rows={12}
              style={{ ...s.input, width: "100%", resize: "vertical", fontFamily: "monospace", fontSize: "13px" }}
              placeholder="Rédigez le contenu de l'article ici. Laissez une ligne vide entre les paragraphes."
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </Field>

          {/* VEDETTE */}
          <label style={s.checkLabel}>
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
            />
            Article vedette (affiché en grand en haut du blog)
          </label>

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button type="submit" disabled={loading} style={s.btnPrimary}>
              {loading ? "Enregistrement…" : editId ? "Mettre à jour" : "Publier"}
            </button>
            {editId && (
              <button type="button" onClick={cancelEdit} style={s.btnGhost}>
                Annuler
              </button>
            )}
          </div>
        </form>
      </section>

      {/* LISTE DES ARTICLES */}
      <section style={s.card}>
        <h2 style={s.sectionTitle}>Articles ({posts.length})</h2>
        {posts.length === 0 && <p style={{ color: "#888" }}>Aucun article pour l'instant.</p>}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {posts.map((post) => (
            <div key={post.id} style={s.postRow}>
              {/* MINIATURE */}
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt=""
                  style={{ width: "72px", height: "56px", objectFit: "cover", borderRadius: "6px", flexShrink: 0 }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              ) : (
                <div style={{ width: "72px", height: "56px", background: "var(--teal-pale)", borderRadius: "6px", flexShrink: 0 }} />
              )}

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                  <span style={s.postCat}>{post.cat_label}</span>
                  {post.is_featured && <span style={s.featuredBadge}>Vedette</span>}
                </div>
                <p style={s.postTitle}>{post.title}</p>
                <p style={s.postMeta}>
                  {post.date}{post.read_time ? ` · ${post.read_time}` : ""}
                  {post.slug && <> · <a href={`/blog/${post.slug}`} target="_blank" rel="noopener" style={{ color: "var(--teal)" }}>/blog/{post.slug}</a></>}
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
                <button onClick={() => startEdit(post)} style={s.btnEdit}>Modifier</button>
                <button onClick={() => handleDelete(post.id)} style={s.btnDelete}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: "160px" }}>
      <label style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>{label}</label>
      {children}
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#f5f5f0", padding: "0 0 60px" },
  header: {
    background: "var(--teal)",
    color: "white",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { fontWeight: 700, fontSize: "16px" },
  logoutBtn: {
    background: "rgba(255,255,255,.15)",
    color: "white",
    border: "1px solid rgba(255,255,255,.3)",
    borderRadius: "6px",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "13px",
  },
  flash: {
    padding: "12px 32px",
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "28px 32px",
    margin: "24px auto",
    maxWidth: "860px",
    boxShadow: "0 2px 16px rgba(0,0,0,.06)",
  },
  sectionTitle: { fontSize: "18px", fontWeight: 800, marginBottom: "20px", color: "#222" },
  form: { display: "flex", flexDirection: "column", gap: "14px" },
  row: { display: "flex", gap: "14px", flexWrap: "wrap" },
  input: {
    padding: "9px 12px",
    borderRadius: "7px",
    border: "1px solid #ddd",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  },
  checkLabel: { fontSize: "14px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
  btnPrimary: {
    padding: "10px 24px",
    background: "var(--teal)",
    color: "white",
    border: "none",
    borderRadius: "7px",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
  },
  btnGhost: {
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid #ccc",
    borderRadius: "7px",
    fontSize: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  postRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    padding: "14px",
    border: "1px solid #eee",
    borderRadius: "8px",
  },
  postCat: { fontSize: "12px", fontWeight: 700, color: "var(--teal)", textTransform: "uppercase" },
  featuredBadge: {
    fontSize: "11px",
    background: "#FFF3CD",
    color: "#856404",
    padding: "2px 8px",
    borderRadius: "20px",
    fontWeight: 700,
  },
  postTitle: { fontSize: "14px", fontWeight: 600, margin: "4px 0 2px", color: "#222", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  postMeta: { fontSize: "12px", color: "#888", margin: 0 },
  btnEdit: {
    padding: "6px 14px",
    border: "1px solid var(--teal)",
    color: "var(--teal)",
    background: "transparent",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
  },
  btnDelete: {
    padding: "6px 14px",
    border: "1px solid #e53935",
    color: "#e53935",
    background: "transparent",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
  },
};
