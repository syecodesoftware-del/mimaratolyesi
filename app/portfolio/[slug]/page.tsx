import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import CTASection from "@/components/sections/CTASection";
import Tag from "@/components/ui/Tag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mimar & Atölyesi`,
    description: `${project.title} projesi — ${project.beds} yatak odası, ${project.baths} banyo, ${project.cars} araçlık garaj.`,
  };
}

const statusLabels: Record<string, string> = {
  completed: "Tamamlandı",
  "in-the-works": "Devam Ediyor",
};

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      {/* Hero image */}
      <section className="relative w-full" style={{ height: "70svh" }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }}
        />
        <div className="absolute bottom-[3em] left-[2em] right-[2em]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between max-w-[75em] mx-auto gap-[1em]">
            <div>
              <Tag variant="dark" className="mb-[1em]">
                {statusLabels[project.status]}
              </Tag>
              <h1
                className="text-[2em] sm:text-[3em] font-medium leading-tight"
                style={{ color: "var(--cream)" }}
              >
                {project.title}
              </h1>
            </div>
            <div
              className="flex items-center gap-[1.5em] text-[0.85em] sm:text-[0.9em] font-medium"
              style={{ color: "var(--cream)" }}
            >
              <span>{project.beds} Yatak</span>
              <span>{project.baths} Banyo</span>
              <span>{project.cars} Araç</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section
        className="py-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[75em] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4em]">
          <div>
            <p
              className="text-[1.1em] leading-[1.8]"
              style={{ color: "var(--text-body)" }}
            >
              Bu proje, arazi özelliklerini ve ailenin yaşam tarzını merkeze
              alarak tasarlandı. Her detay, doğal ışık kullanımından açık plan
              yaşam alanlarına kadar özenle planlandı.
            </p>
          </div>
          <div className="flex flex-col gap-[1.5em]">
            <div>
              <span
                className="block text-[0.7em] font-medium tracking-[1.5px] uppercase mb-[0.4em]"
                style={{ color: "var(--text-muted)" }}
              >
                Durum
              </span>
              <span style={{ color: "var(--dark)" }}>
                {statusLabels[project.status]}
              </span>
            </div>
            <div>
              <span
                className="block text-[0.7em] font-medium tracking-[1.5px] uppercase mb-[0.4em]"
                style={{ color: "var(--text-muted)" }}
              >
                Program
              </span>
              <span style={{ color: "var(--dark)" }}>
                {project.beds} Yatak · {project.baths} Banyo · {project.cars} Araçlık Garaj
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section
        className="pb-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[75em] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[1em]">
          {(project.images ?? [project.coverImage, project.coverImage, project.coverImage, project.coverImage]).map((img, n) => (
            <div
              key={n}
              className="relative overflow-hidden"
              style={{ aspectRatio: n === 0 ? "16/9" : "3/4", borderRadius: "0.75em" }}
            >
              <Image
                src={img}
                alt={`${project.title} görsel ${n + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="px-[2em] pb-[4em]" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-[75em] mx-auto">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-[0.5em] text-[0.85em] font-medium group"
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M10 7H4M6 3L2 7l4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tüm projeler
          </Link>
        </div>
      </div>

      <CTASection />
    </>
  );
}
