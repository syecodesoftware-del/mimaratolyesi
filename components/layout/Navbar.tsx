"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavMenu } from "@/hooks/useNavMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { open, toggle } = useNavMenu();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hamburger + contact color: cream on dark hero (home, not scrolled), dark otherwise
  const lineColor = open
    ? "var(--cream)"
    : isHome && !scrolled
    ? "var(--cream)"
    : "var(--dark)";

  const contactColor = open
    ? "var(--cream)"
    : isHome && !scrolled
    ? "var(--cream)"
    : "var(--dark)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[54px] flex items-center px-[2em] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(252,250,245,0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(231,231,231,0.4)" : "none",
      }}
    >
      {/* Hamburger + Menu label */}
      <button
        onClick={toggle}
        aria-label="Menüyü aç"
        className="flex items-center gap-[0.6em] cursor-pointer"
      >
        <span className="flex flex-col gap-[5px]">
          <span className="block h-[1.5px] w-[22px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
          <span className="block h-[1.5px] w-[14px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
          <span className="block h-[1.5px] w-[22px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
        </span>
        <span
          className="text-[1.15em] tracking-[1px] transition-colors duration-300"
          style={{ color: lineColor, fontFamily: '"Jost", sans-serif', fontWeight: 400 }}
        >
          Menu
        </span>
      </button>

      {/* Center brand — hidden on homepage (HeroLogo handles it) */}
      {!isHome && (
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-medium text-[1.1em] tracking-[2px] uppercase transition-colors duration-300"
          style={{ color: open ? "var(--cream)" : "var(--dark)" }}
        >
          Mimar & Atölyesi
        </Link>
      )}

      {/* İletişim CTA */}
      <Link
        href="/iletisim"
        className="ml-auto flex items-center gap-[0.4em] text-[1.15em] tracking-[1px] transition-colors duration-300"
        style={{ color: contactColor, fontFamily: '"Jost", sans-serif', fontWeight: 400 }}
      >
        İletişim
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </header>
  );
}
