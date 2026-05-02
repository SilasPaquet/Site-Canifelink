import sql from "@/lib/db";

// GET /api/blog — tous les articles
export async function GET() {
  const posts = await sql`
    SELECT * FROM blog_posts ORDER BY created_at DESC
  `;
  return Response.json(posts);
}

// POST /api/blog — créer un article (admin only, protégé par middleware)
export async function POST(req) {
  const body = await req.json();
  const { category, cat_label, slug, image_url, title, excerpt, content, date, read_time, is_featured } = body;

  if (!category || !cat_label || !title || !slug) {
    return Response.json({ error: "Champs obligatoires manquants (catégorie, titre, slug)." }, { status: 400 });
  }

  // Si le nouvel article est featured, on retire le flag des autres
  if (is_featured) {
    await sql`UPDATE blog_posts SET is_featured = FALSE`;
  }

  const [post] = await sql`
    INSERT INTO blog_posts (category, cat_label, slug, image_url, title, excerpt, content, date, read_time, is_featured)
    VALUES (${category}, ${cat_label}, ${slug}, ${image_url ?? ""}, ${title}, ${excerpt ?? ""}, ${content ?? ""}, ${date ?? ""}, ${read_time ?? ""}, ${is_featured ?? false})
    RETURNING *
  `;
  return Response.json(post, { status: 201 });
}
