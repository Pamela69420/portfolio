"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span style={{ color: "#00D4FF" }}>Portfolio</span>
        </h2>
        <div className="w-12 h-1 mb-10" style={{ backgroundColor: "#00D4FF" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-lg p-6 flex flex-col"
              style={{ backgroundColor: "#0F1629", border: "1px solid #141E35" }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{ color: "#00D4FF", border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  {project.type}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-400 px-2 py-1 rounded font-mono"
                    style={{ backgroundColor: "#141E35" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
