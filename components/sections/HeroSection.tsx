"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/images/hero-poster.jpg"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[3em] left-[2em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
