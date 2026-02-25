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

  const inputClass = "w-full rounded px-4 py-3 text-white focus:outline-none transition-colors";
  const inputStyle = { backgroundColor: "#0F1629", border: "1px solid #141E35" };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">Imię</label>
            <input name="name" required className={inputClass} style={inputStyle} />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">E-mail</label>
            <input name="email" type="email" required className={inputClass} style={inputStyle} />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1 font-mono">Wiadomość</label>
            <textarea
              name="message"
              rows={5}
              required
              className={`${inputClass} resize-none`}
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 font-semibold rounded transition-colors disabled:opacity-50"
            style={{ backgroundColor: "#00D4FF", color: "#0A0E1A" }}
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
          {status === "sent" && (
            <p className="text-center font-mono text-sm" style={{ color: "#00D4FF" }}>Wiadomość wysłana!</p>
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
            className="text-slate-400 hover:text-white transition-colors font-mono text-sm flex items-center gap-2"
          >
            ↗ LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
