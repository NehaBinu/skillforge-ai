"use client";

import { Sparkles, GitBranch, Award, LineChart, Target, Compass } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI tutor, always available", desc: "Ask a question mid-lesson and get an answer pitched at exactly your level — not a canned response.", size: "lg" },
  { icon: GitBranch, title: "Adaptive roadmaps", desc: "Miss a concept twice and the path reroutes around it automatically.", size: "sm" },
  { icon: Award, title: "Verified certificates", desc: "Shareable proof, not a participation badge.", size: "sm" },
  { icon: LineChart, title: "Progress analytics", desc: "A skill radar and real completion trends — not a single progress bar pretending to mean something.", size: "lg" },
  { icon: Target, title: "Skill gap analysis", desc: "See precisely what's weak before it costs you in an interview.", size: "sm" },
  { icon: Compass, title: "Career-focused paths", desc: "Every roadmap points at a real job outcome, not a vague topic list.", size: "sm" },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="max-w-lg mb-14">
          <div className="font-mono text-[12px] uppercase tracking-wider text-[#8C8372]">Features</div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#18140F] mt-3">
            Built to fix how online courses waste your time.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`border border-[#E3DDCC] rounded-2xl p-7 hover:border-[#2F5DE3] hover:shadow-[0_10px_30px_-10px_rgba(47,93,227,0.15)] transition ${
                  f.size === "lg" ? "md:col-span-2" : ""
                }`}
              >
                <Icon size={22} className="text-[#2F5DE3] mb-5" strokeWidth={1.8} />
                <h3 className="font-display font-bold text-lg text-[#18140F]">{f.title}</h3>
                <p className="text-sm text-[#6E6455] mt-2 leading-6 max-w-md">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}