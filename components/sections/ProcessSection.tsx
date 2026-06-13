"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Keşif Toplantısı",
    body: "Arazinizi, bütçenizi ve yaşam tarzınızı anlıyoruz. Birlikte projenizin kapsamını ve olasılıklarını değerlendiriyoruz.",
    cta: "Toplantı ayarlayın",
    ctaHref: "/iletisim",
  },
  {
    number: "02",
    title: "Tasarım Süreci",
    body: "Mimar ve iç tasarımcılarımız, vizyonunuzu hayata geçiren konsept tasarımları geliştirir. Her detay sizinle birlikte şekillenir.",
    cta: "Tasarım yaklaşımımız",
    ctaHref: "/hizmetlerimiz",
  },
  {
    number: "03",
    title: "Onay ve Planlama",
    body: "Gerekli izinleri alıyor, proje planını hazırlıyoruz. İnşaat başlamadan önce her şeyi netleştiriyoruz.",
    cta: "Süreç hakkında",
    ctaHref: "/hizmetlerimiz",
  },
  {
    number: "04",
    title: "İnşaat ve Teslim",
    body: "Deneyimli ekibimiz, kararlaştırılan süre ve bütçede inşaatı tamamlar. Anahtarı teslim aldığınızda her şey hazır.",
    cta: "Projelerimizi görün",
    ctaHref: "/projeler",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-[7em] px-[2em]"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-[75em] mx-auto">
        <div className="mb-[4em]">
          <SectionLabel>Nasıl Çalışıyoruz</SectionLabel>
          <h2
            className="text-[2.4em] font-medium leading-tight max-w-[20em]"
            style={{ color: "var(--dark)" }}
          >
            Sizinle birlikte, <em>baştan sona.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.5em]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-[1.5em] p-[2em] rounded-[0.75em]"
              style={{ backgroundColor: "var(--cream-warm)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.165, 0.84, 0.44, 1],
              }}
            >
              <span
                className="text-[3.5em] font-medium leading-none"
                style={{ color: "var(--sage-300)" }}
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-[0.75em]">
                <h3
                  className="text-[1.3em] font-medium leading-tight"
                  style={{ color: "var(--dark)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[0.9em] leading-[1.75]"
                  style={{ color: "var(--text-body)" }}
                >
                  {step.body}
                </p>
              </div>
              <a
                href={step.ctaHref}
                className="inline-flex items-center gap-[0.4em] text-[0.8em] font-medium tracking-[1px] group"
                style={{ color: "var(--dark)" }}
              >
                {step.cta}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
