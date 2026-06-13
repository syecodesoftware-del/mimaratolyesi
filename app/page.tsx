import HeroLogo from "@/components/layout/HeroLogo";
import HeroSection from "@/components/sections/HeroSection";
import StickyIntroSection from "@/components/sections/StickyIntroSection";
import FeaturedWorkSlider from "@/components/sections/FeaturedWorkSlider";
import QuoteSection from "@/components/sections/QuoteSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SplitSection from "@/components/sections/SplitSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroLogo />
      <HeroSection />

      <StickyIntroSection />

      <FeaturedWorkSlider />

      <QuoteSection
        quote="Bir evi inşa etmek, bir hayatı inşa etmektir. Her detay, her seçim — sizin için."
        author="Ahmet Çaşkurlu"
        project="Kurucu"
      />

      <TestimonialsSection />

      <SplitSection
        label="Ne Yapıyoruz"
        heading="Tasarımdan inşaata — tek elden, tam <em>sorumluluk.</em>"
        body="Mimarlık, iç tasarım, proje yönetimi ve inşaatı tek çatı altında topluyoruz. Böylece siz yalnızca hayalinizi paylaşıyorsunuz; gerisini biz hallediyoruz."
        ctaText="Hizmetlerimizi inceleyin"
        ctaHref="/hizmetlerimiz"
        imageSrc="/assets/images/split-1.jpg"
        imageAlt="Tasarım çalışması"
        imagePosition="left"
      />

      <SplitSection
        label="Farkımız"
        heading="Her arazi, her aile için <em>özgün</em> bir çözüm."
        body="Standart planlar değil, size özel tasarımlar üretiyoruz. Eğimli araziler, dar parseller, güneş açıları — hepsini avantaja dönüştürüyoruz."
        ctaText="Projelerimizi görün"
        ctaHref="/projeler"
        imageSrc="/assets/images/split-2.jpg"
        imageAlt="Özgün tasarım örneği"
        imagePosition="right"
        bg="warm"
      />

      <CTASection
        heading="Hayalinizdeki evi <em>birlikte</em> tasarlayalım."
        body="Arazinizi ve yaşam tarzınızı anlayarak başlıyoruz. Ücretsiz keşif ve fiyatlandırma toplantısı için şimdi iletişime geçin."
        ctaText="Keşif Toplantısı Ayarlayın"
        ctaHref="/iletisim"
      />
    </>
  );
}
