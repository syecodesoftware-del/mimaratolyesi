export interface Testimonial {
  author: string;
  role?: string;
  quote: string;
  projectName?: string;
}

export const testimonials: Testimonial[] = [
  {
    author: "Mehmet & Ayşe Kaya",
    quote:
      "Mimar & Atölyesi ile çalışmak, hayalimizdeki evi inşa etmekten çok daha fazlasıydı. Her detayda bize olan saygılarını, işe olan tutkularını hissettik. Sonuç: sadece bir ev değil, yaşayan bir sanat eseri.",
    projectName: "Göl Evi",
  },
  {
    author: "Özlem Şahin",
    quote:
      "Tasarım sürecinden anahtarı teslim alana kadar her aşamada yanımızda oldular. Bütçemizi aşmadılar, zamanında teslim ettiler ve her seferinde beklentilerimizin üzerine çıktılar.",
    projectName: "Cadde Evi",
  },
  {
    author: "Can & Deniz Yılmaz",
    quote:
      "İlk toplantıdan son güne kadar iletişim mükemmeldi. Tasarımı severek kucakladılar ve inşaat sürecinde en küçük detaylara bile özen gösterdiler.",
    projectName: "Park Rezidans",
  },
  {
    author: "Hasan Erdoğan",
    quote:
      "Profesyonellik ve yaratıcılığı bu denli bir arada görmek gerçekten nadirdir. Mimar & Atölyesi ekibi, arazinin tüm potansiyelini ortaya çıkardı.",
    projectName: "Soho Evi",
  },
];
