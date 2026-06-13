"use client";

import Link from "next/link";
import { useScroll, useMotionValue, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SCROLL_END = 360;
const NAV_H = 54;
const ROOT_PX = 13.545;
const FONT_END = 1.5 * ROOT_PX;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

const endLineH = FONT_END * 1.2;
const endY = NAV_H / 2 - endLineH / 2;

export default function HeroLogo() {
  const { scrollY } = useScroll();

  // Refs for start values — no state, no re-render, no MotionValue recreation
  const startFontRef = useRef(10.5 * ROOT_PX);
  const startYRef = useRef(320);

  // Direct MotionValues — stable across renders
  const yMV = useMotionValue(320);
  const fontSizeMV = useMotionValue(10.5 * ROOT_PX);
  const colorMV = useMotionValue("rgb(252,250,245)");
  const spacingMV = useMotionValue("0px");

  const applyScroll = useRef((val: number) => {
    const p = Math.min(1, Math.max(0, val / SCROLL_END));
    yMV.set(lerp(startYRef.current, endY, p));
    fontSizeMV.set(lerp(startFontRef.current, FONT_END, p));
    const r = Math.round(lerp(252, 40, p));
    const g = Math.round(lerp(250, 40, p));
    const b = Math.round(lerp(245, 40, p));
    colorMV.set(`rgb(${r},${g},${b})`);
    spacingMV.set(`${lerp(0, 1, p).toFixed(2)}px`);
  });

  useEffect(() => {
    const recalc = () => {
      const vw = window.innerWidth;
      const font =
        vw < 640 ? vw * 0.09 : vw < 1024 ? vw * 0.082 : 10.5 * ROOT_PX;
      startFontRef.current = font;
      startYRef.current = window.innerHeight * 0.58 - font * 1.2 / 2;
      applyScroll.current(window.scrollY);
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (val) => applyScroll.current(val));
  }, [scrollY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        x: "-50%",
        y: yMV,
        zIndex: 55,
        pointerEvents: "none",
      }}
    >
      <Link href="/" style={{ pointerEvents: "auto", textDecoration: "none" }}>
        <motion.span
          style={{
            fontSize: fontSizeMV,
            color: colorMV,
            letterSpacing: spacingMV,
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
