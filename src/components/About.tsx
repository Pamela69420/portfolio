"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          O <span style={{ color: "#00D4FF" }}>mnie</span>
        </h2>
        <div className="w-12 h-1 mb-8" style={{ backgroundColor: "#00D4FF" }} />
        <div className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-300 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
