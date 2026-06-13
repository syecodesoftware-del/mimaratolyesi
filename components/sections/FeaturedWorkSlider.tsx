"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projects } from "@/lib/data/projects";

export default function FeaturedWorkSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-[5em] overflow-hidden"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="flex items-start gap-[2em] px-[2em]">
        {/* Vertical label */}
        <div className="hidden lg:flex items-center shrink-0 pt-[2em]">
          <span
            className="text-[0.65em] font-medium tracking-[3px] uppercase whitespace-nowrap"
            style={{
              color: "var(--text-muted)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Öne Çıkan Projeler
          </span>
        </div>

        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-[2.5em]">
            <h2
              className="text-[1.8em] sm:text-[2.5em] font-medium leading-tight"
              style={{ color: "var(--dark)" }}
            >
              Son <em>Projelerimiz</em>
            </h2>

            <div className="flex items-center gap-[0.75em]">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-[2.8em] h-[2.8em] rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30"
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
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-[2.8em] h-[2.8em] rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30"
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

          {/* Slider track */}
          <div
            ref={trackRef}
            onScroll={checkScroll}
            className="flex gap-[1.5em] overflow-x-auto pb-[1em]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                className="shrink-0 w-[80vw] sm:w-[320px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  duration: 0.6,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
              >
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
