"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span style={{ color: "#00D4FF" }}>Kontakt</span>
        </h2>
        <div className="w-12 h-1 mb-10" style={{ backgroundColor: "#00D4FF" }} />

        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors font-mono text-sm"
          >
            <span style={{ color: "#00D4FF" }}>✉</span>
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors font-mono text-sm"
          >
            <span style={{ color: "#00D4FF" }}>↗</span>
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
