import { Metadata } from "next";
import AdminLoginClient from "./AdminLoginClient";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminLoginClient />;
}
