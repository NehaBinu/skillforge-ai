"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EC]/90 backdrop-blur-sm border-b border-[#E3DDCC]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-3">
          {/* custom ascending-dots mark, not a generic icon */}
          <Logo />
          <span className="font-display font-bold text-lg tracking-tight text-[#18140F]">
            SkillForge
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide text-[#6E6455]">
            <Link href="/" className="hover:text-[#18140F]">Home</Link>
            <Link href="#features" className="hover:text-[#18140F]">Features</Link>
            <Link href="/pricing" className="hover:text-[#18140F]">Pricing</Link>
            <Link href="#faq" className="hover:text-[#18140F]">FAQ</Link>
        </div>
        

        <div className="flex items-center gap-4">
          <Link href="/login" className="font-mono text-[13px] uppercase tracking-wide text-[#6E6455] hover:text-[#18140F]">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#2F5DE3] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1F3FA0] transition"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}