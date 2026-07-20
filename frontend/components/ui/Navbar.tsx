"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { theme } from "@/constants/theme";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(250,248,244,.75)",
        borderColor: theme.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-4xl font-black tracking-tight"
        >
          <span style={{ color: theme.colors.text }}>
            SkillForge
          </span>

          <span
            className="ml-2"
            style={{ color: theme.colors.brick }}
          >
            AI
          </span>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex gap-10 text-[15px] font-medium">

          {[
            "Home",
            "Features",
            "Pricing",
            "FAQ",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="relative group"
            >
              <span
                style={{ color: theme.colors.text }}
              >
                {item}
              </span>

              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{
                  background: theme.colors.brick,
                }}
              />
            </Link>
          ))}
        </div>

        {/* Right */}

        <div className="flex gap-5 items-center">

          <Link
            href="/login"
            className="font-medium"
            style={{
              color: theme.colors.text,
            }}
          >
            Log in
          </Link>

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: .96,
            }}
          >
            <Link
              href="/signup"
              className="px-7 py-3 rounded-2xl text-white font-semibold"
              style={{
                background: theme.colors.brick,
              }}
            >
              Get Started
            </Link>
          </motion.div>

        </div>

      </div>
    </motion.nav>
  );
}