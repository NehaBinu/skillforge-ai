"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { apiFetch } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      // fetch their orgs and use the first one
      const memberships = await apiFetch("/org/mine");
      if (memberships[0]?.orgId?._id) {
        localStorage.setItem("currentOrgId", memberships[0].orgId._id);
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F4EC] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl border border-[#E3DDCC] shadow-[0_20px_50px_-15px_rgba(24,20,15,0.1)] p-9"
      >
        <Link href="/" className="flex items-center gap-3 mb-8">
          <Logo size={22} /> 
          <span className="font-display font-bold text-lg text-[#18140F]">SkillForge</span>
        </Link>

        <h1 className="font-display font-bold text-2xl text-[#18140F]">Welcome back</h1>
        <p className="text-sm text-[#6E6455] mt-1.5">Log in to continue learning.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372]">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#E3DDCC] px-4 py-3 text-sm focus:outline-none focus:border-[#2F5DE3]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372]">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#E3DDCC] px-4 py-3 text-sm focus:outline-none focus:border-[#2F5DE3]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2F5DE3] text-white py-3.5 font-semibold hover:bg-[#1F3FA0] transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="text-sm text-[#6E6455] text-center mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#2F5DE3] font-semibold">Sign up</Link>
        </p>
      </motion.div>
    </main>
  );
}