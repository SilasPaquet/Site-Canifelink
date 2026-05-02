import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const SECRET = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Laisser passer la page de login et les API publiques
  if (pathname === "/admin" || pathname.startsWith("/api/admin/login")) {
    return NextResponse.next();
  }

  // Protéger toutes les routes /admin/* et les API admin (sauf login)
  if (pathname.startsWith("/admin/") || pathname.startsWith("/api/admin/")) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Protéger les API blog en écriture (POST, PUT, DELETE)
  if (
    pathname.startsWith("/api/blog") &&
    ["POST", "PUT", "DELETE"].includes(request.method)
  ) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return Response.json({ error: "Non autorisé." }, { status: 401 });
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      return Response.json({ error: "Session expirée." }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/api/blog/:path*", "/api/blog"],
};
