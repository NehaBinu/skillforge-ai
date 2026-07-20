"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { apiFetch } from "@/lib/api";

type Plan = {
  _id: string;
  name: string;
  price: number;
  priceId: string | null;
  features: string[];
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loadingId, setLoadingId] = useState("");

  useEffect(() => {
    apiFetch("/org/plans").then(setPlans).catch(console.error);
  }, []);

  async function handleUpgrade(planId: string) {
    setLoadingId(planId);
    try {
      const orgId = localStorage.getItem("currentOrgId");
      const { url } = await apiFetch("/stripe/checkout", {
        method: "POST",
        body: JSON.stringify({ orgId, planId }),
      });
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setLoadingId("");
    }
  }

  return (
    <main className="bg-[#F7F4EC] min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden">
        {/* thin flowing lines, Mintlify-style */}
        <svg
          className="absolute top-0 left-0 w-full h-[420px] opacity-[0.35] pointer-events-none"
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
        >
          {[...Array(9)].map((_, i) => (
            <path
              key={i}
              d={`M -50 ${380 - i * 14} C 300 ${380 - i * 14}, 500 ${40 + i * 8}, 1250 ${20 + i * 6}`}
              stroke="#2F5DE3"
              strokeWidth="1"
              fill="none"
              opacity={0.5 - i * 0.04}
            />
          ))}
        </svg>

        <div className="max-w-5xl mx-auto px-8 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#6E6455] border border-[#E3DDCC] rounded-full px-4 py-1.5 bg-[#F7F4EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F5DE3]" />
            Pricing
          </div>

          <h1 className="font-display font-bold text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-[#18140F] mt-6">
            Simple pricing.
            <br />
            Start free, upgrade when ready.
          </h1>

          <p className="mt-5 max-w-lg mx-auto text-lg text-[#4A4438]">
            No hidden fees, cancel anytime. Every plan includes our core AI
            tutor.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 pb-28">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isPro = plan.name === "Pro";
            return (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  isPro
                    ? "border-[#2F5DE3] bg-white shadow-[0_20px_50px_-15px_rgba(47,93,227,0.25)]"
                    : "border-[#E3DDCC] bg-white/60"
                }`}
              >
                {isPro && (
                  <span className="absolute -top-3 left-8 bg-[#2F5DE3] text-white text-[11px] font-mono uppercase tracking-wide px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}

                <div className="font-mono text-[12px] uppercase tracking-wide text-[#8C8372]">
                  {plan.name}
                </div>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl text-[#18140F]">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-[#8C8372]">/month</span>
                </div>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#4A4438]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2F5DE3] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => plan.priceId && handleUpgrade(plan._id)}
                  disabled={!plan.priceId || loadingId === plan._id}
                  className={`mt-8 w-full rounded-xl py-3.5 font-semibold transition disabled:opacity-50 ${
                    isPro
                      ? "btn-elevated bg-[#2F5DE3] text-white hover:bg-[#1F3FA0]"
                      : "btn-elevated-dark bg-[#18140F] text-white hover:bg-black"
                  }`}
                >
                  {!plan.priceId
                    ? "Current plan"
                    : loadingId === plan._id
                    ? "Redirecting..."
                    : "Upgrade"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}