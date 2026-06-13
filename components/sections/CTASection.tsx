"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  heading?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
  bg?: "cream" | "warm" | "dark";
}

export default function CTASection({
  heading = "Hayalinizdeki evi birlikte tasarlayalım.",
  body = "Arazinizi, yaşam tarzınızı ve bütçenizi anlayarak başlıyoruz. Ücretsiz keşif ve fiyatlandırma toplantısı için şimdi iletişime geçin.",
  ctaText = "Keşif Toplantısı Ayarlayın",
  ctaHref = "/iletisim",
  bg = "warm",
}: CTASectionProps) {
  const bgColor =
    bg === "warm"
      ? "var(--cream-warm)"
      : bg === "dark"
        ? "var(--dark)"
        : "var(--cream)";
  const textColor = bg === "dark" ? "var(--cream)" : "var(--dark)";
  const bodyColor = bg === "dark" ? "rgba(252,250,245,0.7)" : "var(--text-body)";

  return (
    <section className="py-[8em] px-[2em]" style={{ backgroundColor: bgColor }}>
      <motion.div
        className="max-w-[45em] mx-auto text-center flex flex-col items-center gap-[2em]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2
          className="text-[2.8em] font-medium leading-[1.15]"
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          className="text-[1.05em] leading-[1.8] max-w-[35em]"
          style={{ color: bodyColor }}
        >
          {body}
        </p>
        <Button
          variant={bg === "dark" ? "secondary" : "primary"}
          href={ctaHref}
          className={bg === "dark" ? "!border-[var(--cream)] !text-[var(--cream)] hover:!bg-[var(--cream)] hover:!text-[var(--dark)]" : ""}
        >
          {ctaText}
        </Button>
      </motion.div>
    </section>
  );
}
