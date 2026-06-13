"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      className="py-[7em] px-[2em]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-[75em] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-[4em] gap-[1.5em]">
          <div>
            <SectionLabel>Müşteri Görüşleri</SectionLabel>
            <h2
              className="text-[1.8em] sm:text-[2.4em] font-medium leading-tight"
              style={{ color: "var(--dark)" }}
            >
              Müşterilerimiz <em>ne diyor?</em>
            </h2>
          </div>

          <div className="flex gap-[0.75em]">
            <button
              onClick={prev}
              className="w-[2.8em] h-[2.8em] rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--dark)] hover:text-[var(--cream)] hover:border-[var(--dark)]"
              style={{ borderColor: "var(--border)", color: "var(--dark)" }}
              aria-label="Önceki"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M10 7H4M6 3L2 7l4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-[2.8em] h-[2.8em] rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--dark)] hover:text-[var(--cream)] hover:border-[var(--dark)]"
              style={{ borderColor: "var(--border)", color: "var(--dark)" }}
              aria-label="Sonraki"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M4 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
            className="max-w-[50em]"
          >
            <blockquote
              className="text-[1.3em] sm:text-[1.8em] leading-[1.4] font-light mb-[1.5em]"
              style={{
                fontFamily: "var(--font-teodor, 'Playfair Display', serif)",
                fontStyle: "italic",
                color: "var(--dark)",
              }}
            >
              "{t.quote}"
            </blockquote>
            <footer className="flex flex-col gap-[0.2em]">
              <span
                className="text-[0.85em] font-medium"
                style={{ color: "var(--dark)" }}
              >
                {t.author}
              </span>
              {t.projectName && (
                <span
                  className="text-[0.75em] tracking-[1px]"
                  style={{ color: "var(--sage-500)" }}
                >
                  {t.projectName}
                </span>
              )}
            </footer>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-[0.5em] mt-[3em]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-[1.5em] h-[1.5px] transition-all duration-300"
              style={{
                backgroundColor:
                  i === current ? "var(--dark)" : "var(--border)",
              }}
              aria-label={`${i + 1}. yorum`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
