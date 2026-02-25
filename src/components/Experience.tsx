"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span style={{ color: "#00D4FF" }}>Doświadczenie</span>
        </h2>
        <div className="w-12 h-1 mb-10" style={{ backgroundColor: "#00D4FF" }} />
        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{ backgroundColor: "#141E35" }}
          />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-12 relative"
              >
                <div
                  className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#00D4FF", border: "2px solid #0A0E1A" }}
                />
                <p className="text-xs font-mono mb-1" style={{ color: "#00D4FF" }}>
                  {item.period}
                </p>
                <p className="text-white font-semibold">{item.role}</p>
                {item.company && (
                  <p className="text-slate-400 text-sm">
                    {item.anonymous ? (
                      <span className="italic">{item.company}</span>
                    ) : (
                      item.company
                    )}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
