"use client";

import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SCROLL_END = 360;
const NAV_H = 54;
const ROOT_PX = 13.545;
const FONT_END = 1.5 * ROOT_PX; // ~20.3px

export default function HeroLogo() {
  const { scrollY } = useScroll();
  const [startFont, setStartFont] = useState(10.5 * ROOT_PX);
  const [startY, setStartY] = useState(320);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      // Scale font so text spans ~85% of viewport width on any screen
      const font =
        vw < 640 ? vw * 0.09 : vw < 1024 ? vw * 0.082 : 10.5 * ROOT_PX;
      setStartFont(font);
      const lineH = font * 1.2;
      setStartY(window.innerHeight * 0.58 - lineH / 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const endLineH = FONT_END * 1.2;
  const endY = NAV_H / 2 - endLineH / 2;

  const y = useTransform(scrollY, [0, SCROLL_END], [startY, endY]);
  const fontSize = useTransform(scrollY, [0, SCROLL_END], [startFont, FONT_END]);
  const color = useTransform(scrollY, [0, SCROLL_END], ["rgb(252,250,245)", "rgb(40,40,40)"]);
  const spacing = useTransform(scrollY, [0, SCROLL_END], ["0px", "1px"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        x: "-50%",
        y,
        zIndex: 55,
        pointerEvents: "none",
      }}
    >
      <Link href="/" style={{ pointerEvents: "auto", textDecoration: "none" }}>
        <motion.span
          style={{
            fontSize,
            color,
            letterSpacing: spacing,
            fontWeight: 400,
            whiteSpace: "nowrap",
            fontFamily: '"Jost", sans-serif',
            display: "block",
            lineHeight: 1.2,
          }}
        >
          Mimar & Atölyesi
        </motion.span>
      </Link>
    </motion.div>
  );
}
