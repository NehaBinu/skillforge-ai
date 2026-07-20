"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is there a free plan?", a: "Yes — the Free plan gives you 3 active skill paths and daily AI tutor access, no card required." },
  { q: "Can I cancel anytime?", a: "Yes, cancel from your dashboard any time — no lock-in, no cancellation fees." },
  { q: "Do certificates expire?", a: "No, once you earn a certificate it stays on your profile permanently." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F7F4EC] py-24">
      <div className="max-w-3xl mx-auto px-8">
        <div className="font-mono text-[12px] uppercase tracking-wider text-[#8C8372] text-center">FAQ</div>
        <h2 className="font-display font-bold text-3xl text-[#18140F] text-center mt-3 mb-12">
          Questions, answered.
        </h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="bg-white border border-[#E3DDCC] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-[#18140F]">{f.q}</span>
                <Plus size={18} className={`text-[#8C8372] transition ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-[#6E6455] leading-6">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}