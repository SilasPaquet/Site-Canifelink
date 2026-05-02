"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginClient() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin/blog");
    } else {
      const data = await res.json();
      setError(data.error ?? "Erreur de connexion.");
    }
  }

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Administration</h1>
        <p style={styles.subtitle}>Accès réservé</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="password">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            style={styles.input}
            placeholder="••••••••"
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--cream)",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "48px 40px",
    boxShadow: "0 4px 32px rgba(0,0,0,.08)",
    width: "100%",
    maxWidth: "360px",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "28px",
    fontWeight: 900,
    color: "var(--teal)",
    marginBottom: "4px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "13px",
    color: "#888",
    textAlign: "center",
    marginBottom: "32px",
  },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  label: { fontSize: "14px", fontWeight: 600, color: "#444" },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
    transition: "border-color .2s",
  },
  error: {
    fontSize: "13px",
    color: "#e53935",
    margin: "0",
  },
  btn: {
    marginTop: "8px",
    padding: "12px",
    background: "var(--teal)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
  },
};
