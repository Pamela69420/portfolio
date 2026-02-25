"use client";

import Image from "next/image";
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
        <div className="w-12 h-1 mb-10" style={{ backgroundColor: "#00D4FF" }} />
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="Wojtek Rosłonek"
              width={200}
              height={200}
              className="rounded-full object-cover"
              style={{ border: "3px solid #00D4FF" }}
            />
          </div>
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-300 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
