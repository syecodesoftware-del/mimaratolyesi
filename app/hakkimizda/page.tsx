import type { Metadata } from "next";
import TeamGrid from "@/components/sections/TeamGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Hakkımızda — Mimar & Atölyesi",
  description:
    "Tasarım ve inşaatı tek elden yöneten ekibimizle tanışın. 20 yılı aşkın deneyim, sayısız mutlu müşteri.",
};

const awards = [
  { year: "2025", competition: "HIA Konut Ödülleri", category: "Özel Konut Tasarımı", status: "Finalist", project: "Göl Evi" },
  { year: "2024", competition: "Master Builders NSW", category: "Özel Konut — ₺5M üzeri", status: "Kazanan", project: "Park Rezidans" },
  { year: "2024", competition: "HIA Konut Ödülleri", category: "Yeni Konut Tasarımı", status: "Kazanan", project: "Cadde Evi" },
  { year: "2023", competition: "BDAV Ödülleri", category: "İç Mimarlık Mükemmeliyeti", status: "Finalist", project: "Soho Evi" },
  { year: "2023", competition: "Master Builders NSW", category: "Özel Konut — ₺3M üzeri", status: "Finalist", project: "Jakaranda Evi" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-[10em] pb-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream-warm)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <SectionLabel>Hakkımızda</SectionLabel>
          <h1
            className="text-[3.2em] font-medium leading-[1.1] max-w-[18em]"
            style={{ color: "var(--dark)" }}
          >
            Tasarım ve inşaatı <em>tek elden</em> yönetiyoruz.
          </h1>
        </div>
      </section>

      {/* Mission statement */}
      <section
        className="py-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[75em] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4em]">
          <p
            className="text-[1.4em] leading-[1.6] font-medium"
            style={{ color: "var(--dark)" }}
          >
            Mimar & Atölyesi, mimariden inşaata her aşamayı tek çatı altında
            toplayan bir tasarım-inşaat firmasıdır.
          </p>
          <p className="text-[1em] leading-[1.8]" style={{ color: "var(--text-body)" }}>
            Her projeye özgün bir bakış açısıyla yaklaşıyor, arazinin
            potansiyelini ve ailenin yaşam tarzını harmanlayan evler
            tasarlıyoruz. Müşterilerimize tek muhatap, tam sorumluluk ve
            şeffaf iletişim vaat ediyoruz. Çünkü inanıyoruz ki mükemmel bir
            ev, mükemmel bir sürecin ürünüdür.
          </p>
        </div>
      </section>

      <TeamGrid />

      <TestimonialsSection />

      {/* Awards */}
      <section
        className="py-[7em] px-[2em]"
        style={{ backgroundColor: "var(--cream-warm)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <SectionLabel>Ödüller</SectionLabel>
          <h2
            className="text-[2.2em] font-medium mb-[3em]"
            style={{ color: "var(--dark)" }}
          >
            Sektörün takdirini kazandık.
          </h2>

          <div className="flex flex-col">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-[0.5em] sm:gap-[2em] py-[1.5em]"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="text-[0.8em] font-medium w-[3em] shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {award.year}
                </span>
                <span
                  className="flex-1 text-[0.95em] font-medium"
                  style={{ color: "var(--dark)" }}
                >
                  {award.competition}
                </span>
                <span
                  className="flex-1 text-[0.9em]"
                  style={{ color: "var(--text-body)" }}
                >
                  {award.category} — {award.project}
                </span>
                <span
                  className="text-[0.7em] font-medium tracking-[1.5px] uppercase px-[1em] py-[0.3em] rounded-full shrink-0"
                  style={{
                    backgroundColor:
                      award.status === "Kazanan"
                        ? "var(--dark)"
                        : "transparent",
                    color:
                      award.status === "Kazanan"
                        ? "var(--cream)"
                        : "var(--text-muted)",
                    border:
                      award.status !== "Kazanan"
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  {award.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
