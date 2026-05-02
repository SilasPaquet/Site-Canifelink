// Migration : ajoute les colonnes slug, image_url et content à blog_posts
// Usage : node --env-file=.env.local scripts/migrate-add-fields.js

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

await sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS slug VARCHAR(200) UNIQUE`;
await sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS image_url TEXT NOT NULL DEFAULT ''`;
await sql`ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS content TEXT NOT NULL DEFAULT ''`;

console.log("Migration terminée : colonnes slug, image_url, content ajoutées.");
