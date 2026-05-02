import sql from "@/lib/db";

// PUT /api/blog/[id] — modifier un article (admin only)
export async function PUT(req, { params }) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const body = await req.json();
  const { category, cat_label, slug, image_url, title, excerpt, content, date, read_time, is_featured } = body;

  if (!category || !cat_label || !title || !slug) {
    return Response.json({ error: "Champs obligatoires manquants (catégorie, titre, slug)." }, { status: 400 });
  }

  if (is_featured) {
    await sql`UPDATE blog_posts SET is_featured = FALSE WHERE id != ${id}`;
  }

  const [post] = await sql`
    UPDATE blog_posts
    SET category    = ${category},
        cat_label   = ${cat_label},
        slug        = ${slug},
        image_url   = ${image_url ?? ""},
        title       = ${title},
        excerpt     = ${excerpt ?? ""},
        content     = ${content ?? ""},
        date        = ${date ?? ""},
        read_time   = ${read_time ?? ""},
        is_featured = ${is_featured ?? false}
    WHERE id = ${id}
    RETURNING *
  `;

  if (!post) return Response.json({ error: "Article introuvable." }, { status: 404 });
  return Response.json(post);
}

// DELETE /api/blog/[id] — supprimer un article (admin only)
export async function DELETE(_req, { params }) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  await sql`DELETE FROM blog_posts WHERE id = ${id}`;
  return Response.json({ ok: true });
}
