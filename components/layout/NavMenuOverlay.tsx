"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useNavMenu } from "@/hooks/useNavMenu";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NavMenuOverlay() {
  const { open, close } = useNavMenu();
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed inset-0 z-40 flex flex-col"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
        >
          <div className="flex flex-col h-full px-[2em] pt-[7em] pb-[3em]">
            <nav className="flex flex-col gap-[0.6em] flex-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.5,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="block text-[2.5em] font-medium leading-tight"
                    style={{ color: "var(--cream)" }}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-[0.5em]"
            >
              <a
                href="tel:+902161234567"
                className="text-[1em] font-medium tracking-wider"
                style={{ color: "var(--sage-400)" }}
              >
                0216 123 45 67
              </a>
              <Link
                href="/iletisim"
                className="flex items-center gap-[0.5em] text-[0.9em]"
                style={{ color: "var(--cream)" }}
                onClick={close}
              >
                Bize mesaj gönderin
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
