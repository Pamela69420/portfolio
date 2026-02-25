"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "O mnie", href: "#about" },
  { label: "Umiejętności", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Doświadczenie", href: "#experience" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { backgroundColor: "rgba(10,14,26,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid #141E35" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono font-bold" style={{ color: "#00D4FF" }}>WR</span>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-mono"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
