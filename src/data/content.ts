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
  email: "ecomautomatyzacja@gmail.com",
  linkedin: "https://www.linkedin.com/in/wojciech-ros%C5%82onek-809641231/",
};
