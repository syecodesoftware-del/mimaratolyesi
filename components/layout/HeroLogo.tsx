"use client";

import Link from "next/link";
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const startFontRef = useRef(10.5 * ROOT_PX);
  const startYRef = useRef(320);

  useEffect(() => {
    const wrap = wrapRef.current;
    const span = spanRef.current;
    if (!wrap || !span) return;

    const recalc = () => {
      const vw = window.innerWidth;
      const font =
        vw < 640 ? vw * 0.09 : vw < 1024 ? vw * 0.082 : 10.5 * ROOT_PX;
      startFontRef.current = font;
      startYRef.current = window.innerHeight * 0.58 - (font * 1.2) / 2;
      span.style.fontSize = `${font}px`;
    };

    const apply = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_END));
      const y = lerp(startYRef.current, endY, p);
      const sc = lerp(1, FONT_END / startFontRef.current, p);
      const r = Math.round(lerp(252, 40, p));
      const g = Math.round(lerp(250, 40, p));
      const b = Math.round(lerp(245, 40, p));
      wrap.style.transform = `translateX(-50%) translateY(${y}px) scale(${sc})`;
      span.style.color = `rgb(${r},${g},${b})`;
    };

    recalc();
    apply();

    // scroll event fires when scrollY actually changes — correct on iOS/Android
    // passive: true lets the browser handle momentum scroll on compositor thread
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", () => { recalc(); apply(); });

    return () => {
      window.removeEventListener("scroll", apply);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        zIndex: 55,
        pointerEvents: "none",
        transformOrigin: "center top",
        willChange: "transform",
      }}
    >
      <Link href="/" style={{ pointerEvents: "auto", textDecoration: "none" }}>
        <span
          ref={spanRef}
          style={{
            fontSize: `${10.5 * ROOT_PX}px`,
            color: "rgb(252,250,245)",
            fontWeight: 400,
            whiteSpace: "nowrap",
            fontFamily: '"Jost", sans-serif',
            display: "block",
            lineHeight: 1.2,
          }}
        >
          Mimar & Atölyesi
        </span>
      </Link>
    </div>
  );
}
