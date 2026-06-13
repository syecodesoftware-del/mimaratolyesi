"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "./Tag";

interface PortfolioCardProps {
  slug: string;
  title: string;
  status: "completed" | "in-the-works";
  beds: number;
  baths: number;
  cars: number;
  coverImage: string;
}

const BedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M1 10V6a2 2 0 012-2h10a2 2 0 012 2v4M1 10h14M1 12v-2M15 12v-2"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <rect x="5" y="6" width="3" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
    <rect x="8" y="6" width="3" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

const BathIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10a1 1 0 011 1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9a1 1 0 011-1z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path d="M4 8V4a1 1 0 011-1h1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <circle cx="5.5" cy="3.5" r="0.5" fill="currentColor" />
  </svg>
);

const CarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 9l1.5-4h9L14 9M2 9v3h1v1h2v-1h6v1h2v-1h1V9M2 9h12"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="4.5" cy="9.5" r="0.8" fill="currentColor" />
    <circle cx="11.5" cy="9.5" r="0.8" fill="currentColor" />
  </svg>
);

const statusLabels: Record<string, string> = {
  completed: "Tamamlandı",
  "in-the-works": "Devam Ediyor",
};

export default function PortfolioCard({
  slug,
  title,
  status,
  beds,
  baths,
  cars,
  coverImage,
}: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group block">
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: "0.75em" }}>
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 991px) 50vw, 360px"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-[1.5em]"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="w-[2.5em] h-[2.5em] rounded-full bg-[var(--cream)] flex items-center justify-center ml-auto"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="var(--dark)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
        <div className="absolute top-[1em] left-[1em]">
          <Tag variant="dark">{statusLabels[status]}</Tag>
        </div>
      </div>

      <div className="mt-[1em] flex flex-col gap-[0.5em]">
        <div
          className="flex items-center gap-[1em] text-[0.75em]"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="flex items-center gap-[0.4em]">
            <BedIcon /> {beds}
          </span>
          <span className="flex items-center gap-[0.4em]">
            <BathIcon /> {baths}
          </span>
          <span className="flex items-center gap-[0.4em]">
            <CarIcon /> {cars}
          </span>
        </div>
        <h4
          className="text-[1.15em] font-medium leading-tight"
          style={{ color: "var(--dark)" }}
        >
          {title}
        </h4>
      </div>
    </Link>
  );
}
