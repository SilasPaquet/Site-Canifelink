// Script à exécuter une seule fois pour créer la table blog_posts dans Neon
// Usage : node scripts/setup-db.js

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

await sql`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id         SERIAL PRIMARY KEY,
    category   VARCHAR(20)  NOT NULL,
    cat_label  VARCHAR(50)  NOT NULL,
    emoji      VARCHAR(10)  NOT NULL DEFAULT '',
    bg_gradient TEXT        NOT NULL DEFAULT '',
    title      TEXT         NOT NULL,
    excerpt    TEXT         NOT NULL DEFAULT '',
    date       VARCHAR(30)  NOT NULL DEFAULT '',
    read_time  VARCHAR(20)  NOT NULL DEFAULT '',
    is_featured BOOLEAN     NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
  )
`;

console.log("Table blog_posts créée (ou déjà existante).");
