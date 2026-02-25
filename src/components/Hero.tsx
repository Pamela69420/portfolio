"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = hero.titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % hero.titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {hero.name}
        </h1>
        <div className="h-10 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-mono" style={{ color: "#00D4FF" }}>
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="#portfolio"
            className="px-6 py-3 font-semibold rounded transition-colors"
            style={{ backgroundColor: "#00D4FF", color: "#0A0E1A" }}
          >
            {hero.cta.projects}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-semibold rounded transition-colors"
            style={{ border: "1px solid #00D4FF", color: "#00D4FF" }}
          >
            {hero.cta.contact}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
