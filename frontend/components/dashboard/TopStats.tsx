"use client";

import { Flame, Trophy, Brain } from "lucide-react";

const cards = [
  { icon: Brain, label: "Current course", value: "React Advanced", accent: "#2F5DE3" },
  { icon: Trophy, label: "Certificates", value: "12 earned", accent: "#18140F" },
  { icon: Flame, label: "Study streak", value: "16 days", accent: "#E39A2F" },
];

export default function TopStats() {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className="bg-white rounded-2xl border border-[#E3DDCC] p-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${c.accent}1A` }}
            >
              <Icon size={18} color={c.accent} />
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372]">{c.label}</div>
            <div className="font-display font-bold text-xl text-[#18140F] mt-1">{c.value}</div>
          </div>
        );
      })}
    </div>
  );
}