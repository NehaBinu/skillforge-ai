"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#F7F4EC] overflow-hidden">
      {/* dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#D8D1BE 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* big soft radial glow, gives the whole hero depth */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2F5DE3]/[0.08] rounded-full blur-[100px] -z-0" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#FFE477]/20 rounded-full blur-[100px] -z-0" />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-24 pb-32 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#6E6455] border border-[#E3DDCC] bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F5DE3] animate-pulse" />
              AI-powered learning platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-[54px] lg:text-[66px] leading-[1.02] tracking-tight text-[#18140F] mt-7"
            >
              Learn{" "}
              <span className="relative inline-block">
                <span className="relative z-10">smarter.</span>
                <span className="absolute left-0 right-0 bottom-1 h-4 bg-[#FFE477] -rotate-1 z-0" />
              </span>
              <br />
              Grow faster.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 max-w-md text-lg leading-7 text-[#4A4438]"
            >
              Personalized AI learning paths, real progress tracking, and
              career-focused roadmaps built around how you actually learn.
            </motion.p>

            {/* 3D-style buttons: real elevation + press states */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex items-center gap-4"
            >
              <Link
                href="/signup"
                className="group relative rounded-full bg-[#2F5DE3] text-white px-8 py-4 font-semibold
                  shadow-[0_6px_0_0_#1F3FA0,0_10px_20px_-5px_rgba(47,93,227,0.5)]
                  hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#1F3FA0,0_8px_16px_-5px_rgba(47,93,227,0.5)]
                  active:translate-y-[6px] active:shadow-none
                  transition-all duration-150"
              >
                Start Learning
              </Link>
              <Link
                href="#features"
                className="rounded-full border border-[#D8D1BE] bg-white px-8 py-4 font-semibold text-[#18140F]
                  shadow-[0_6px_0_0_#D8D1BE]
                  hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#D8D1BE]
                  active:translate-y-[6px] active:shadow-none
                  transition-all duration-150"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex items-center gap-2 text-sm text-[#4A4438]"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="7" stroke="#2F5DE3" strokeWidth="1.3" />
                <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#2F5DE3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Free to start</span>
              <span className="text-[#8C8372]">— no credit card required</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-10 font-mono"
            >
              <div>
                <div className="text-2xl font-medium text-[#18140F]">94%</div>
                <div className="text-[12px] text-[#8C8372] uppercase tracking-wide mt-1">30-day retention</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-[#18140F]">2.4M</div>
                <div className="text-[12px] text-[#8C8372] uppercase tracking-wide mt-1">Skills learned</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-[#18140F]">18 min</div>
                <div className="text-[12px] text-[#8C8372] uppercase tracking-wide mt-1">Avg. daily session</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — real 3D perspective card stack */}
          <div
            className="hidden lg:block relative h-[440px]"
            style={{ perspective: "1400px" }}
          >
            {/* back card — angled away, deepest layer */}
            <motion.div
              initial={{ opacity: 0, rotateY: -20, rotateX: 8, x: 40 }}
              animate={{ opacity: 1, rotateY: -14, rotateX: 6, x: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute top-4 right-0 w-72 bg-white rounded-2xl border border-[#E3DDCC] shadow-[10px_20px_40px_-10px_rgba(24,20,15,0.2)] p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-wide text-[#8C8372]">Skill radar</div>
              <div className="mt-3 flex items-end gap-1.5 h-16">
                {[40, 65, 50, 80, 60, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-[#2F5DE3]/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>

            {/* main floating card — continuous gentle float */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 8, rotateX: -4 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
                rotateY: 8,
                rotateX: -4,
              }}
              transition={{
                opacity: { delay: 0.3, duration: 0.5 },
                y: { delay: 0.8, duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute top-16 left-0 w-full max-w-sm bg-white rounded-2xl border border-[#E3DDCC] shadow-[0_30px_60px_-15px_rgba(24,20,15,0.25)] p-6 z-10"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372]">Your Learning Path</span>
                <span className="w-2 h-2 rounded-full bg-[#2F5DE3]" />
              </div>

              <div className="font-display font-bold text-lg text-[#18140F]">React Advanced</div>
              <div className="text-sm text-[#6E6455] mt-1">Recommended next: Server Components</div>

              <div className="mt-5 h-2 rounded-full bg-[#F0EDE2] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-full rounded-full bg-[#2F5DE3]"
                />
              </div>
              <div className="flex justify-between mt-2 font-mono text-[11px] text-[#8C8372]">
                <span>68% complete</span>
                <span>16-day streak</span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#18140F] text-white py-3 text-sm font-semibold
                shadow-[0_4px_0_0_#000000] hover:translate-y-[1px] hover:shadow-[0_3px_0_0_#000000]
                active:translate-y-[4px] active:shadow-none transition-all duration-150">
                Continue lesson →
              </button>
            </motion.div>

            {/* front badge card — floats independently, sits highest z */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateZ: -6 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
                rotateZ: -6,
              }}
              transition={{
                opacity: { delay: 0.6, duration: 0.5 },
                y: { delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-2 -left-6 z-20 bg-[#FFE477] rounded-2xl p-4 w-48 shadow-[0_20px_35px_-10px_rgba(90,78,16,0.35)]"
            >
              <div className="font-mono text-[10px] uppercase text-[#5A4E10]">Certificate earned</div>
              <div className="font-display font-bold text-[#18140F] mt-1">JavaScript Core</div>
            </motion.div>

            {/* small floating stat chip, top right, independent motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { delay: 0.9 },
                y: { delay: 1.5, duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-2 -right-2 z-20 bg-white rounded-xl border border-[#E3DDCC] shadow-[0_15px_30px_-10px_rgba(24,20,15,0.2)] px-4 py-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#2F5DE3]/10 flex items-center justify-center">
                <span className="text-[#2F5DE3] text-sm font-bold">+</span>
              </div>
              <div>
                <div className="font-display font-bold text-sm text-[#18140F]">240 XP</div>
                <div className="font-mono text-[9px] text-[#8C8372] uppercase">This week</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}