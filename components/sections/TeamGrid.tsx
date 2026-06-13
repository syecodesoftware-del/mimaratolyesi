"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { team } from "@/lib/data/team";

export default function TeamGrid() {
  return (
    <section
      className="py-[7em] px-[2em]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-[75em] mx-auto">
        <div className="mb-[4em]">
          <SectionLabel>Ekibimiz</SectionLabel>
          <h2
            className="text-[2.4em] font-medium leading-tight"
            style={{ color: "var(--dark)" }}
          >
            Projenizi hayata geçiren <em>isimler.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2em] lg:gap-[3em]">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="flex flex-col sm:flex-row gap-[1.5em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.165, 0.84, 0.44, 1],
              }}
            >
              <div
                className="relative shrink-0"
                style={{ width: "120px", height: "150px", borderRadius: "0.5em", overflow: "hidden" }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="flex flex-col gap-[0.5em] justify-center">
                <h3
                  className="text-[1.2em] font-medium"
                  style={{ color: "var(--dark)" }}
                >
                  {member.name}
                </h3>
                <span
                  className="text-[0.75em] font-medium tracking-[1.5px] uppercase"
                  style={{ color: "var(--sage-500)" }}
                >
                  {member.role}
                </span>
                <p
                  className="text-[0.9em] leading-[1.7]"
                  style={{ color: "var(--text-body)" }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
