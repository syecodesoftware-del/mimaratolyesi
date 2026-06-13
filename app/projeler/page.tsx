import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Projelerimiz — Mimar & Atölyesi",
  description:
    "Tamamlanan ve devam eden projelerimizi inceleyin. Her biri özgün bir tasarım hikayesi.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-[10em] pb-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream-warm)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <SectionLabel>Projelerimiz</SectionLabel>
          <h1
            className="text-[3.2em] font-medium leading-[1.1] max-w-[18em]"
            style={{ color: "var(--dark)" }}
          >
            Her arazi, <em>özgün</em> bir hikaye.
          </h1>
        </div>
      </section>

      {/* Portfolio grid */}
      <section
        className="py-[5em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
