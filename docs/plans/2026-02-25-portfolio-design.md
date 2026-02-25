# Portfolio Website Design — Wojtek Rosłonek
**Date:** 2026-02-25
**Status:** Approved

---

## Overview

Personal portfolio website for Wojtek Rosłonek, E-commerce Operations Specialist. Designed to be added to the Use Me portal. Showcases own projects (Discorder, Invoicer, AI mass-upload), skills, and career history.

---

## Stack & Hosting

- **Framework:** Next.js (static export)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (auto-deploy from GitHub)
- **Style:** Dark mode, cyan accent (#00D4FF), monospace for tech elements

---

## Security

- HTTPS via Vercel (automatic)
- Security headers in `vercel.json` (CSP, X-Frame-Options, XSS protection)
- No secrets in repository
- Contact form via Formspree (no backend required)

---

## Sections

### 1. Hero
- Name: Wojtek Rosłonek
- Typewriter animation: `E-commerce Specialist / Automatyzacje / Boty`
- CTA buttons: `Zobacz projekty` and `Kontakt`

### 2. O mnie
- Short paragraph emphasizing versatility
- Narrative: from running own businesses (gastronomy) to e-commerce operations and automation
- No company names for current employer
- Example: *"Specjalizuję się w operacjach e-commerce, integracjach systemów i automatyzacjach. Od zarządzania własnym biznesem gastronomicznym po budowanie narzędzi automatyzujących procesy sprzedażowe."*

### 3. Umiejętności
Grouped cards:
- **E-commerce:** WooCommerce, BaseLinker, Subiekt GT, Sublinker, Allegro, Kaufland, Empik
- **Automatyzacje:** n8n, automatyzacja procesów zakupowych, automatyzacja obsługi maili, integracje API
- **Dev:** Python/JS, Discord bots, Claude Code, Git

### 4. Portfolio (own projects only)
Three project cards with description, tech stack badge, and optional GitHub link:

| Project | Description |
|---------|-------------|
| **Discorder** | Custom program bridging gaps between Sublinker, Subiekt GT, and BaseLinker via Discord. Includes utility bots. |
| **Invoicer** | Connects to KSeF (Polish e-invoice system), sends invoices to Discord or any service via n8n integration. |
| **AI mass-upload** | Mass product description generation from Excel using AI + Claude Code, bulk upload to BaseLinker and WooCommerce including images. |

### 5. Doświadczenie (Timeline)

| Period | Role | Company |
|--------|------|---------|
| wrz 2024 – obecnie | E-commerce Specialist | *(anonimowo — branża e-commerce)* |
| wrz 2025 – obecnie | E-commerce Specialist | *(anonimowo — branża żeglarska)* |
| paź 2023 – sie 2024 | Przerwa w karierze | — |
| sty 2019 – wrz 2023 | Właściciel Bistro | La Luz Bistro Mexicano |
| maj 2017 – wrz 2019 | Właściciel FoodTrucka | O Jemy! FoodTruck |
| sty 2014 – maj 2018 | Koordynator zamówień | Lubczyk |

> Full CV to be added later.

### 6. Kontakt
- Formspree contact form
- LinkedIn: https://www.linkedin.com/in/wojciech-ros%C5%82onek-809641231/

---

## Privacy Rules
- Current employer names (WAVE, WAVE SK, WAVE SEA, MARBA): **never mention**
- Number of companies: **do not specify**
- Work automations (purchase process, mail handling): **skills only, not portfolio**
- Own projects (Discorder, Invoicer, AI mass-upload): **show in portfolio**
