"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import TopStats from "@/components/dashboard/TopStats";
import { apiFetch } from "@/lib/api";

type User = { name: string; email: string };

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    apiFetch("/auth/me")
      .then((u) => {
        setUser(u);
        setChecked(true);
      })
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  if (!checked) {
    return (
      <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center font-mono text-sm text-[#8C8372]">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F7F4EC]">
      <Sidebar />
      <main className="flex-1 px-10 py-10">
        <div className="mb-2">
          <h1 className="font-display font-bold text-2xl text-[#18140F]">
            Welcome back, {user?.name.split(" ")[0]}
          </h1>
          <p className="text-sm text-[#6E6455] mt-1">Here's where you left off.</p>
        </div>

        <div className="flex gap-3 mb-8">
          <Link href="/pricing" className="text-sm font-medium text-[#2F5DE3] hover:underline">
            Upgrade plan
          </Link>
          <span className="text-[#D8D1BE]">·</span>
          <Link href="/" className="text-sm font-medium text-[#6E6455] hover:text-[#18140F]">
            Back to homepage
          </Link>
        </div>

        <TopStats />

        <div className="mt-8 bg-white rounded-2xl border border-[#E3DDCC] p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372]">
              Continue learning
            </span>
          </div>
          <div className="font-display font-bold text-xl text-[#18140F]">React Advanced</div>
          <div className="text-sm text-[#6E6455] mt-1">Next up: Server Components</div>
          <div className="mt-5 h-2 rounded-full bg-[#F0EDE2] overflow-hidden max-w-md">
            <div className="h-full w-[68%] rounded-full bg-[#2F5DE3]" />
          </div>
          <button className="mt-6 rounded-xl bg-[#18140F] text-white px-6 py-3 text-sm font-semibold">
            Continue lesson →
          </button>
        </div>
      </main>
    </div>
  );
}