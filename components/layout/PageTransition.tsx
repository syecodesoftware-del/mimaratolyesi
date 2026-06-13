"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "var(--cream)" }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.625, 0.05, 0, 1] },
          }}
        >
          <div className="flex items-baseline overflow-hidden">
            {["M", "i", "m", "a", "r", " ", "&", " ", "A", "t", "ö", "l", "y", "e", "s", "i"].map((letter, i) => (
              <motion.span
                key={i}
                className="text-[2em]"
                style={{
                  color: "var(--dark)",
                  fontFamily: '"Jost", sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.035,
                  duration: 0.5,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
