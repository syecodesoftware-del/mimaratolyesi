"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const budgetOptions = [
  "₺2.5M – ₺3.5M",
  "₺3.5M – ₺5M",
  "₺5M – ₺7.5M",
  "₺7.5M – ₺10M",
  "₺10M+",
];

const enquiryOptions = ["Yeni Ev Talebi", "Tadilat / Yenileme", "Ticari Proje", "Diğer"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        className="py-[8em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[40em] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[2em] font-medium mb-[1em]"
              style={{ color: "var(--dark)" }}
            >
              Mesajınız için teşekkürler.
            </h2>
            <p style={{ color: "var(--text-body)" }}>
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-[8em] px-[2em]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-[75em] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[5em]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <SectionLabel>İletişim</SectionLabel>
          <h2
            className="text-[1.8em] sm:text-[2.4em] font-medium leading-tight mb-[1em]"
            style={{ color: "var(--dark)" }}
          >
            Projenizi <em>konuşalım.</em>
          </h2>
          <p
            className="text-[1em] leading-[1.8] mb-[2.5em]"
            style={{ color: "var(--text-body)" }}
          >
            Hayalinizdeki evi anlatın. Arazinizi, bütçenizi ve zamanlamanızı
            değerlendirerek size özel bir yol haritası oluşturalım.
          </p>

          <div className="flex flex-col gap-[1.5em]">
            <div>
              <span
                className="block text-[0.75em] font-medium tracking-[1.5px] uppercase mb-[0.5em]"
                style={{ color: "var(--text-muted)" }}
              >
                Ofis
              </span>
              <p style={{ color: "var(--dark)" }}>İstanbul, Türkiye</p>
            </div>
            <div>
              <span
                className="block text-[0.75em] font-medium tracking-[1.5px] uppercase mb-[0.5em]"
                style={{ color: "var(--text-muted)" }}
              >
                Telefon
              </span>
              <a
                href="tel:+902161234567"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "var(--dark)" }}
              >
                0216 123 45 67
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[2em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2em]">
            <div className="flex flex-col gap-[0.5em]">
              <label
                className="text-[0.75em] font-medium tracking-[1px] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Ad *
              </label>
              <input
                type="text"
                required
                className="field-underline"
                placeholder="Adınız"
              />
            </div>
            <div className="flex flex-col gap-[0.5em]">
              <label
                className="text-[0.75em] font-medium tracking-[1px] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Soyad *
              </label>
              <input
                type="text"
                required
                className="field-underline"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <label
              className="text-[0.75em] font-medium tracking-[1px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              E-posta *
            </label>
            <input
              type="email"
              required
              className="field-underline"
              placeholder="ornek@email.com"
            />
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <label
              className="text-[0.75em] font-medium tracking-[1px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Telefon *
            </label>
            <input
              type="tel"
              required
              className="field-underline"
              placeholder="0212 000 00 00"
            />
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <label
              className="text-[0.75em] font-medium tracking-[1px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Talep Türü
            </label>
            <select className="field-underline">
              {enquiryOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <label
              className="text-[0.75em] font-medium tracking-[1px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Bütçe
            </label>
            <select className="field-underline">
              <option value="">Seçiniz</option>
              {budgetOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <label
              className="text-[0.75em] font-medium tracking-[1px] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Mesaj
            </label>
            <textarea
              rows={4}
              className="field-underline resize-none"
              placeholder="Projeniz hakkında bize bilgi verin..."
            />
          </div>

          <div className="pt-[1em]">
            <Button type="submit" variant="primary">
              Gönder
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
