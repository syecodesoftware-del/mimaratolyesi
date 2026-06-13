"use client";

import { motion } from "framer-motion";

interface QuoteSectionProps {
  quote: string;
  author?: string;
  project?: string;
  light?: boolean;
}

export default function QuoteSection({
  quote,
  author,
  project,
  light = false,
}: QuoteSectionProps) {
  return (
    <section
      className="py-[8em] px-[2em]"
      style={{
        backgroundColor: light ? "var(--cream)" : "var(--cream-warm)",
      }}
    >
      <motion.div
        className="max-w-[55em] mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <blockquote
          className="text-[1.5em] sm:text-[2.2em] leading-[1.35] font-light mb-[1.5em]"
          style={{
            fontFamily: "var(--font-teodor, 'Playfair Display', serif)",
            fontStyle: "italic",
            color: "var(--dark)",
          }}
        >
          "{quote}"
        </blockquote>
        {(author || project) && (
          <footer
            className="flex flex-col items-center gap-[0.3em] text-[0.8em] font-medium tracking-[1.5px] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {author && <span>{author}</span>}
            {project && (
              <span style={{ color: "var(--sage-500)" }}>{project}</span>
            )}
          </footer>
        )}
      </motion.div>
    </section>
  );
}
