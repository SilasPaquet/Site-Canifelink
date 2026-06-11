import sql from "@/lib/db";

const SITE_URL = "https://www.canifelink-comportementaliste.com";

const STATIC_ROUTES = [
  "/",
  "/a-propos",
  "/blog",
  "/comportement",
  "/comportementaliste-chat-rhone",
  "/comportementaliste-cheval-rhone",
  "/comportementaliste-chien-rhone",
  "/formations",
  "/formations/particuliers",
  "/formations/professionnels",
  "/prendre-rendez-vous",
  "/tarifs",
];

export default async function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  try {
    const posts = await sql`SELECT slug, created_at FROM blog_posts ORDER BY created_at DESC`;

    const blogEntries = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.created_at ? new Date(post.created_at) : new Date(),
    }));

    return [...staticEntries, ...blogEntries];
  } catch {
    return staticEntries;
  }
}