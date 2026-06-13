"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const SCROLL_END = 360;
const NAV_H = 54;
const ROOT_PX = 13.545;
const FONT_END = 1.5 * ROOT_PX;
const endY = NAV_H / 2 - (FONT_END * 1.2) / 2;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

export default function HeroLogo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const fontRef = useRef(10.5 * ROOT_PX);
  const y0Ref = useRef(320);

  useEffect(() => {
    const wrap = wrapRef.current;
    const span = spanRef.current;
    if (!wrap || !span) return;

    const recalc = () => {
      const vw = window.innerWidth;
      const font =
        vw < 640 ? vw * 0.09 : vw < 1024 ? vw * 0.082 : 10.5 * ROOT_PX;
      fontRef.current = font;
      y0Ref.current = window.innerHeight * 0.58 - (font * 1.2) / 2;
      span.style.fontSize = `${font}px`;
    };

    recalc();

    // Color follows scroll on both paths (CSS handles transform only)
    const updateColor = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_END));
      span.style.color = `rgb(${Math.round(lerp(252, 40, p))},${Math.round(lerp(250, 40, p))},${Math.round(lerp(245, 40, p))})`;
    };
    updateColor();

    // CSS scroll-driven animation: transform runs on compositor thread — zero lag
    // Supported on Android Chrome 115+ and iOS Safari 18+
    const cssSupported =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()");

    if (cssSupported) {
      wrap.style.setProperty("--hl-y0", `${y0Ref.current}px`);
      wrap.style.setProperty("--hl-y1", `${endY}px`);
      wrap.style.setProperty("--hl-s1", `${FONT_END / fontRef.current}`);
      wrap.classList.add("hl-driven");
      wrap.style.visibility = "visible";

      window.addEventListener("scroll", updateColor, { passive: true });

      const onResize = () => {
        recalc();
        wrap.style.setProperty("--hl-y0", `${y0Ref.current}px`);
        wrap.style.setProperty("--hl-s1", `${FONT_END / fontRef.current}`);
        updateColor();
      };
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("scroll", updateColor);
        window.removeEventListener("resize", onResize);
      };
    }

    // JS fallback for older browsers (transform + color via scroll events)
    const updateAll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_END));
      wrap.style.transform = `translateX(-50%) translateY(${lerp(y0Ref.current, endY, p)}px) scale(${lerp(1, FONT_END / fontRef.current, p)})`;
      updateColor();
    };
    updateAll();
    wrap.style.visibility = "visible";

    window.addEventListener("scroll", updateAll, { passive: true });
    const onResize = () => { recalc(); updateAll(); };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", updateAll);
      window.removeEventListener("resize", onResize);
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
        visibility: "hidden",
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
