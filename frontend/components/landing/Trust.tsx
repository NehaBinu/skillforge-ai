"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100K+", label: "Learners" },
  { value: "2M+", label: "Lessons completed" },
  { value: "97%", label: "Completion rate" },
  { value: "4.9/5", label: "Satisfaction" },
];

export default function Trust() {
  return (
    <section className="bg-[#F7F4EC] border-y border-[#E3DDCC] py-14">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-bold text-3xl text-[#18140F]">{s.value}</div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-[#8C8372] mt-1.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}