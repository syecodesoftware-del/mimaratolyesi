"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-[0.75em]">
      <motion.div
        className="w-[1px] bg-[var(--cream)] opacity-60"
        initial={{ height: 0 }}
        animate={{ height: "4em" }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
      />
      <motion.svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="opacity-60"
        style={{ color: "var(--cream)" }}
      >
        <motion.path
          d="M1 1l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
