"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed: number;
  className?: string;
}

function ParallaxImage({ src, alt, speed, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ borderRadius: "0.75em" }}>
      <motion.div
        className="w-full h-full"
        style={{
          y,
          scale: 1.15,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full" style={{ aspectRatio: "inherit" }} />
      </motion.div>
    </div>
  );
}

export default function StickyIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[200svh]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Left: sticky text */}
      <div className="lg:sticky lg:top-0 lg:h-svh flex items-center px-[2em] py-[6em] lg:px-[4em]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
          className="max-w-[30em]"
        >
          <SectionLabel>Tasarım + İnşaat</SectionLabel>

          <h1 className="sr-only">
            Mimar & Atölyesi — Tasarım Odaklı Özel Evler
          </h1>

          <h2
            className="text-[3.2em] leading-[1.1] font-medium mb-[1.5em]"
            style={{ color: "var(--dark)" }}
          >
            Tasarım odaklı{" "}
            <em>özel evler</em>, sitenize, yaşam tarzınıza ve bütçenize özel —
            uçtan uca <em>güvenle</em> teslim.
          </h2>

          <p
            className="text-[1em] leading-[1.8] max-w-[28em]"
            style={{ color: "var(--text-body)" }}
          >
            Arazi analizinden tasarıma, inşaattan anahtarın teslimına — her
            adımı siz için yönetiyoruz. Tek muhatap, tam sorumluluk.
          </p>
        </motion.div>
      </div>

      {/* Right: 12-column parallax image grid */}
      <div className="relative grid grid-cols-12 gap-[1em] px-[1em] py-[8em] items-start">
        {/* Image 1: spans cols 1-6, tall */}
        <div className="col-span-6 col-start-1 row-start-1" style={{ height: "55vh" }}>
          <ParallaxImage
            src="/assets/images/sticky-1.jpg"
            alt="Proje görünümü 1"
            speed={0.08}
            className="h-full"
          />
        </div>

        {/* Image 2: spans cols 5-10, square, offset top */}
        <div
          className="col-span-6 col-start-5 row-start-1"
          style={{ height: "40vh", marginTop: "30vh" }}
        >
          <ParallaxImage
            src="/assets/images/sticky-2.jpg"
            alt="Proje görünümü 2"
            speed={0.05}
            className="h-full"
          />
        </div>

        {/* Image 3: spans cols 2-8, portrait, bottom */}
        <div
          className="col-span-7 col-start-2 row-start-2"
          style={{ height: "50vh", marginTop: "-10vh" }}
        >
          <ParallaxImage
            src="/assets/images/sticky-3.jpg"
            alt="Proje görünümü 3"
            speed={0.12}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
