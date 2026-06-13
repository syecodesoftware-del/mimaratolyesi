"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projects } from "@/lib/data/projects";

type Filter = "all" | "completed" | "in-the-works";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "completed", label: "Tamamlandı" },
  { value: "in-the-works", label: "Devam Ediyor" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.status === active
  );

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-[0.5em] flex-wrap mb-[3em]">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className="px-[1.25em] py-[0.5em] rounded-full text-[0.8em] font-medium tracking-[1px] uppercase transition-all duration-300"
            style={{
              backgroundColor:
                active === f.value ? "var(--dark)" : "transparent",
              color:
                active === f.value ? "var(--cream)" : "var(--text-muted)",
              border: "1px solid",
              borderColor:
                active === f.value ? "var(--dark)" : "var(--border)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2em]"
      >
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1],
              }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
