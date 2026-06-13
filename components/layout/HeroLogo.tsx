"use client";

import Link from "next/link";
import { useMotionValue, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SCROLL_END = 360;
const NAV_H = 54;
const ROOT_PX = 13.545;
const FONT_END = 1.5 * ROOT_PX;
const endLineH = FONT_END * 1.2;
const endY = NAV_H / 2 - endLineH / 2;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

export default function HeroLogo() {
  const startFontRef = useRef(10.5 * ROOT_PX);
  const startYRef = useRef(320);

  // Only y and scale are animated — no font-size change during scroll (avoids reflow)
  const yMV = useMotionValue(320);
  const scaleMV = useMotionValue(1);
  const colorMV = useMotionValue("rgb(252,250,245)");
  const fontSizeMV = useMotionValue(10.5 * ROOT_PX); // set once on mount, never again

  const rafRef = useRef<number>(0);
  const lastScrollRef = useRef(-1);

  const applyScroll = (scrollVal: number) => {
    if (scrollVal === lastScrollRef.current) return;
    lastScrollRef.current = scrollVal;

    const p = Math.min(1, Math.max(0, scrollVal / SCROLL_END));
    yMV.set(lerp(startYRef.current, endY, p));
    // scale instead of font-size — GPU compositor, no layout reflow
    scaleMV.set(lerp(1, FONT_END / startFontRef.current, p));
    const r = Math.round(lerp(252, 40, p));
    const g = Math.round(lerp(250, 40, p));
    const b = Math.round(lerp(245, 40, p));
    colorMV.set(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    const recalc = () => {
      const vw = window.innerWidth;
      const font =
        vw < 640 ? vw * 0.09 : vw < 1024 ? vw * 0.082 : 10.5 * ROOT_PX;
      startFontRef.current = font;
      startYRef.current = window.innerHeight * 0.58 - (font * 1.2) / 2;
      fontSizeMV.set(font); // set once — never touched during scroll
      applyScroll(window.scrollY);
    };

    recalc();
    window.addEventListener("resize", recalc);

    // rAF loop: fires every frame regardless of scroll event throttling (fixes iOS momentum)
    const tick = () => {
      applyScroll(window.scrollY);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", recalc);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        x: "-50%",
        y: yMV,
        scale: scaleMV,
        transformOrigin: "center top",
        zIndex: 55,
        pointerEvents: "none",
      }}
    >
      <Link href="/" style={{ pointerEvents: "auto", textDecoration: "none" }}>
        <motion.span
          style={{
            fontSize: fontSizeMV,
            color: colorMV,
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
