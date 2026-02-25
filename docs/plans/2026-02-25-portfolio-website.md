# Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dark-mode personal portfolio website for Wojtek Rosłonek, deployed to Vercel via GitHub.

**Architecture:** Static Next.js site (App Router, static export) with Tailwind CSS for styling and Framer Motion for animations. All content lives in a single `src/data/content.ts` file for easy editing. Contact form via Formspree (no backend needed).

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Formspree

---

## Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.js`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Step 1: Initialize project**

```bash
cd D:/Useme
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
```
When prompted: accept all defaults, do NOT install ESLint.

**Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

**Step 3: Verify dev server starts**

```bash
npm run dev
```
Expected: server starts on http://localhost:3000, default Next.js page visible.

**Step 4: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js project with Tailwind and Framer Motion"
```

---

## Task 2: Configure theme and global styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Update `tailwind.config.ts`**

Replace the contents with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#00D4FF",
          500: "#00B8D9",
        },
        dark: {
          900: "#0A0E1A",
          800: "#0F1629",
          700: "#141E35",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 2: Update `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0A0E1A;
  color: #e2e8f0;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0A0E1A;
}
::-webkit-scrollbar-thumb {
  background: #00D4FF;
  border-radius: 3px;
}
```

**Step 3: Update `src/app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wojtek Rosłonek | E-commerce Specialist",
  description: "Portfolio — E-commerce Operations Specialist, automatyzacje, integracje systemów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-dark-900 text-slate-200 antialiased">{children}</body>
    </html>
  );
}
```

**Step 4: Verify**

```bash
npm run dev
```
Expected: dark background visible on http://localhost:3000.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: configure dark theme and global styles"
```

---

## Task 3: Create content data file

**Files:**
- Create: `src/data/content.ts`

**Step 1: Create `src/data/content.ts`**

```typescript
export const hero = {
  name: "Wojtek Rosłonek",
  titles: ["E-commerce Specialist", "Automatyzacje", "Boty Discord", "Integracje systemów"],
  cta: { projects: "Zobacz projekty", contact: "Kontakt" },
};

export const about = {
  paragraphs: [
    "Specjalizuję się w operacjach e-commerce, integracjach systemów i automatyzacjach. Od zarządzania własnym biznesem gastronomicznym po budowanie narzędzi automatyzujących procesy sprzedażowe.",
    "Łączę szeroką wiedzę operacyjną z umiejętnościami technicznymi — tworzę własne narzędzia, które realnie przyspieszają pracę i eliminują błędy ludzkie.",
  ],
};

export const skills = [
  {
    category: "E-commerce",
    items: ["WooCommerce", "BaseLinker", "Subiekt GT", "Sublinker", "Allegro", "Kaufland", "Empik"],
  },
  {
    category: "Automatyzacje",
    items: ["n8n", "Automatyzacja procesów zakupowych", "Automatyzacja obsługi maili", "Integracje API"],
  },
  {
    category: "Development",
    items: ["Python", "JavaScript", "Discord bots", "Claude Code / AI", "Git"],
  },
];

export const portfolio = [
  {
    title: "Discorder",
    description:
      "Program wypełniający luki między Sublinker, Subiekt GT a BaseLinker przez interfejs Discord. Zawiera boty z narzędziami usprawniającymi codzienną pracę operacyjną.",
    tech: ["Python", "Discord API", "BaseLinker API"],
    type: "Własny projekt",
  },
  {
    title: "Invoicer",
    description:
      "Integracja z KSeF (Krajowy System e-Faktur). Automatycznie pobiera faktury i przesyła je na Discord lub do dowolnego serwisu przez n8n — e-mail, Slack, cloud storage.",
    tech: ["Python", "KSeF API", "n8n", "Discord API"],
    type: "Własny projekt",
  },
  {
    title: "AI Mass Upload",
    description:
      "Masowe generowanie opisów produktów z pliku Excel przy użyciu AI i Claude Code, a następnie automatyczny upload produktów i zdjęć do BaseLinker oraz WooCommerce.",
    tech: ["Claude Code", "Python", "BaseLinker API", "WooCommerce API", "Excel"],
    type: "Własny projekt",
  },
];

export const experience = [
  {
    period: "wrz 2024 – obecnie",
    role: "E-commerce Specialist",
    company: "Firma z branży e-commerce",
    anonymous: true,
  },
  {
    period: "wrz 2025 – obecnie",
    role: "E-commerce Specialist",
    company: "Firma z branży żeglarskiej",
    anonymous: true,
  },
  {
    period: "paź 2023 – sie 2024",
    role: "Przerwa w karierze",
    company: "",
    anonymous: false,
  },
  {
    period: "sty 2019 – wrz 2023",
    role: "Właściciel Bistro",
    company: "La Luz Bistro Mexicano",
    anonymous: false,
  },
  {
    period: "maj 2017 – wrz 2019",
    role: "Właściciel FoodTrucka",
    company: "O Jemy! FoodTruck",
    anonymous: false,
  },
  {
    period: "sty 2014 – maj 2018",
    role: "Koordynator zamówień",
    company: "Lubczyk",
    anonymous: false,
  },
];

export const contact = {
  formspreeId: "YOUR_FORMSPREE_ID", // Replace after creating Formspree form at formspree.io
  linkedin: "https://www.linkedin.com/in/wojciech-ros%C5%82onek-809641231/",
};
```

**Step 2: Commit**

```bash
git add .
git commit -m "feat: add content data file"
```

---

## Task 4: Build Hero section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create `src/components/Hero.tsx`**

```typescript
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
    let timeout: NodeJS.Timeout;

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
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {hero.name}
        </h1>
        <div className="h-10 flex items-center justify-center">
          <span className="text-xl md:text-2xl text-cyan-400 font-mono">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-cyan-400 text-dark-900 font-semibold rounded hover:bg-cyan-500 transition-colors"
          >
            {hero.cta.projects}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded hover:bg-cyan-400 hover:text-dark-900 transition-colors"
          >
            {hero.cta.contact}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Update `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

**Step 3: Verify**

```bash
npm run dev
```
Expected: dark page with name, typewriter animation, two buttons visible.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Hero section with typewriter animation"
```

---

## Task 5: Build Navbar

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create `src/components/Navbar.tsx`**

```typescript
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-900/90 backdrop-blur border-b border-dark-700" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-cyan-400 font-bold">WR</span>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono"
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
```

**Step 2: Update `src/app/layout.tsx`** — add Navbar import:

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Wojtek Rosłonek | E-commerce Specialist",
  description: "Portfolio — E-commerce Operations Specialist, automatyzacje, integracje systemów.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-dark-900 text-slate-200 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Verify**

Expected: navbar with "WR" logo and links visible at top, becomes solid on scroll.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add sticky Navbar"
```

---

## Task 6: Build About section

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create `src/components/About.tsx`**

```typescript
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
          O <span className="text-cyan-400">mnie</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mb-8" />
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
```

**Step 2: Add to `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add About section"
```

---

## Task 7: Build Skills section

**Files:**
- Create: `src/components/Skills.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create `src/components/Skills.tsx`**

```typescript
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="text-cyan-400">Umiejętności</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <h3 className="text-cyan-400 font-mono font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-slate-300 flex items-center gap-2 text-sm">
                    <span className="text-cyan-400">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Add to `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Skills section"
```

---

## Task 8: Build Portfolio section

**Files:**
- Create: `src/components/Portfolio.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create `src/components/Portfolio.tsx`**

```typescript
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
          <span className="text-cyan-400">Portfolio</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-800 border border-dark-700 rounded-lg p-6 flex flex-col hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <span className="text-xs text-cyan-400 font-mono border border-cyan-400/30 px-2 py-1 rounded">
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
                    className="text-xs bg-dark-700 text-slate-400 px-2 py-1 rounded font-mono"
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
```

**Step 2: Add to `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </main>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Portfolio section"
```

---

## Task 9: Build Experience timeline section

**Files:**
- Create: `src/components/Experience.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create `src/components/Experience.tsx`**

```typescript
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
          <span className="text-cyan-400">Doświadczenie</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-700" />
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
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-dark-900" />
                <p className="text-xs text-cyan-400 font-mono mb-1">{item.period}</p>
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
```

**Step 2: Add to `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
    </main>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Experience timeline section"
```

---

## Task 10: Build Contact section

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Go to https://formspree.io, create free account, create new form, copy the form ID (looks like `xpwzabcd`)**

**Step 2: Update `src/data/content.ts`** — replace `YOUR_FORMSPREE_ID` with real ID.

**Step 3: Create `src/components/Contact.tsx`**

```typescript
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="text-cyan-400">Kontakt</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">Imię</label>
            <input
              name="name"
              required
              className="w-full bg-dark-800 border border-dark-700 rounded px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">E-mail</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-dark-800 border border-dark-700 rounded px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">Wiadomość</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-dark-800 border border-dark-700 rounded px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-cyan-400 text-dark-900 font-semibold rounded hover:bg-cyan-500 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
          {status === "sent" && (
            <p className="text-cyan-400 text-center font-mono text-sm">Wiadomość wysłana!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-mono text-sm">Błąd. Spróbuj ponownie.</p>
          )}
        </form>

        <div className="mt-8 flex justify-center">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm flex items-center gap-2"
          >
            ↗ LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
```

**Step 4: Add to `src/app/page.tsx`**

```typescript
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </main>
  );
}
```

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add Contact section with Formspree"
```

---

## Task 11: Add Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create `src/components/Footer.tsx`**

```typescript
export default function Footer() {
  return (
    <footer className="border-t border-dark-700 py-6 px-6 text-center">
      <p className="text-slate-600 font-mono text-xs">
        © {new Date().getFullYear()} Wojtek Rosłonek
      </p>
    </footer>
  );
}
```

**Step 2: Add Footer to `src/app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wojtek Rosłonek | E-commerce Specialist",
  description: "Portfolio — E-commerce Operations Specialist, automatyzacje, integracje systemów.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-dark-900 text-slate-200 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add Footer"
```

---

## Task 12: Add security headers and static export config

**Files:**
- Create: `vercel.json`
- Modify: `next.config.ts`

**Step 1: Create `vercel.json`**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://formspree.io; font-src 'self';"
        }
      ]
    }
  ]
}
```

**Step 2: Update `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
```

**Step 3: Test build**

```bash
npm run build
```
Expected: build succeeds, `out/` folder created with static HTML files.

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add security headers and static export config"
```

---

## Task 13: Deploy to Vercel

**Step 1: Create GitHub repository**

Go to https://github.com/new, create a new public repo named `portfolio` (or `wojtek-portfolio`).

**Step 2: Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Step 3: Deploy to Vercel**

1. Go to https://vercel.com
2. Sign up / log in with GitHub
3. Click "Add New Project"
4. Import your `portfolio` repository
5. Framework Preset: Next.js (auto-detected)
6. Click "Deploy"

**Step 4: Verify**

Expected: site live at `https://portfolio-xxx.vercel.app` within ~2 minutes. All sections visible, security headers active.

**Step 5: (Optional) Custom domain**

In Vercel dashboard → Settings → Domains → add `wojtekroslonek.pl` if you have a domain.

---

## Notes

- Content is in `src/data/content.ts` — easy to update without touching component code
- Formspree free plan: 50 submissions/month, sufficient for portfolio
- To add full CV later: add new section component + data entry in `content.ts`
- Dark color values: `#0A0E1A` (bg), `#0F1629` (card), `#141E35` (border/hover), `#00D4FF` (accent cyan)
