import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import AdminBlogClient from "./AdminBlogClient";
import sql from "@/lib/db";

const SECRET = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET);

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  // Vérification serveur (double sécurité en plus du middleware)
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) redirect("/admin");
  try {
    await jwtVerify(token, SECRET);
  } catch {
    redirect("/admin");
  }

  const posts = await sql`SELECT * FROM blog_posts ORDER BY created_at DESC`;

  return <AdminBlogClient initialPosts={posts} />;
}
