"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function useParallax(
  speed: number = 0.15
): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<string> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = speed * 100;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${range}%`, `${range}%`]
  );

  return { ref, y };
}
