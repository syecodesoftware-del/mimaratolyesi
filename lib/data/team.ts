export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Ahmet Çaşkurlu",
    role: "Kurucu & Baş Mimar",
    photo: "/assets/images/team-1.jpg",
    bio: "20 yılı aşkın deneyimiyle Ahmet, her projeye mimari bütünlük ve işlevsellik anlayışı getirir. Tasarım ile inşaatı tek elden yönetme vizyonuyla Mimar & Atölyesi'ni kurdu.",
  },
  {
    name: "Selin Çaşkurlu",
    role: "İç Mimarlık Direktörü",
    photo: "/assets/images/team-2.jpg",
    bio: "Selin'in iç mekan tasarımındaki incelikli yaklaşımı, projelere güçlü bir estetik kimlik kazandırıyor. Her alanı yaşayan ve nefes alan mekanlara dönüştürüyor.",
  },
  {
    name: "Murat Demir",
    role: "Proje Yöneticisi",
    photo: "/assets/images/team-3.jpg",
    bio: "Murat, inşaat süreçlerindeki derin bilgisiyle projelerin zamanında ve bütçe dahilinde teslim edilmesini sağlar. Müşteri memnuniyeti her zaman önceliğidir.",
  },
  {
    name: "Zeynep Aksoy",
    role: "Tasarım Ekibi",
    photo: "/assets/images/team-4.jpg",
    bio: "Zeynep, yaratıcı konsept geliştirme süreçlerinde projelere özgün bir bakış açısı katar. Detaylara olan tutkusu tasarım kalitesini bir üst seviyeye taşır.",
  },
];
