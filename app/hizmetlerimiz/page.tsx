import type { Metadata } from "next";
import SplitSection from "@/components/sections/SplitSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Hizmetlerimiz — Mimar & Atölyesi",
  description:
    "Mimarlık, iç tasarım, proje yönetimi ve inşaat — tek elden, uçtan uca.",
};

const services = [
  {
    title: "Mimarlık & Tasarım",
    body: "Arazinizi derinlemesine analiz ederek, güneş açısından güneş açısına, topoğrafyadan komşu yapılara kadar her faktörü değerlendiriyoruz. Yaşam tarzınıza özel, zaman içinde değer kazanan mimari tasarımlar üretiyoruz.",
    icon: "⬡",
  },
  {
    title: "İç Mimarlık",
    body: "Dış cephenin karizmasını iç mekana taşıyoruz. Malzeme seçiminden aydınlatmaya, mutfak tasarımından banyo detaylarına — her köşe özenle tasarlanıyor.",
    icon: "◇",
  },
  {
    title: "Proje Yönetimi",
    body: "Tek muhatap anlayışıyla, projenizin her aşamasını koordine ediyoruz. Bütçe takibi, takvim yönetimi, alt yüklenici koordinasyonu — hepsi bizde.",
    icon: "○",
  },
  {
    title: "İnşaat",
    body: "Deneyimli ustalarımız ve titiz kalite kontrolümüzle, tasarlanan her detayın eksiksiz hayata geçmesini sağlıyoruz. Malzeme kalitesinden işçiliğe ödün vermiyoruz.",
    icon: "△",
  },
  {
    title: "Havuz & Peyzaj",
    body: "Evinizin dış alanlarını da aynı özenle tasarlıyoruz. Havuz, bahçe ve peyzaj çalışmaları, projenizin bütünüyle uyumlu bir şekilde planlanıyor.",
    icon: "◻",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-[10em] pb-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream-warm)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <SectionLabel>Hizmetlerimiz</SectionLabel>
          <h1
            className="text-[3.2em] font-medium leading-[1.1] max-w-[18em]"
            style={{ color: "var(--dark)" }}
          >
            Tasarımdan inşaata — <em>tek elden.</em>
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section
        className="py-[6em] px-[2em]"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-[75em] mx-auto">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-[2em] py-[2.5em]"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="text-[2em] font-light w-[2em]"
                  style={{ color: "var(--sage-300)" }}
                >
                  {service.icon}
                </span>
                <div>
                  <h2
                    className="text-[1.5em] font-medium mb-[0.75em]"
                    style={{ color: "var(--dark)" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-[1em] leading-[1.8] max-w-[40em]"
                    style={{ color: "var(--text-body)" }}
                  >
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        label="Uzmanlık Alanımız"
        heading="Özel konut inşaatında <em>20 yıl.</em>"
        body="Standart konut projelerinden ayrışarak yalnızca özel, tasarım odaklı konutlara odaklanıyoruz. Bu seçim, her projede verilen dikkatin ve üretilen kalitenin garantisidir."
        ctaText="Projelerimize bakın"
        ctaHref="/projeler"
        imageSrc="/assets/images/split-1.jpg"
        imageAlt="Detay işçiliği"
        imagePosition="right"
        bg="warm"
      />

      <ProcessSection />

      <CTASection />
    </>
  );
}
