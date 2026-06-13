import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

const resourceLinks = [
  { href: "/kaynaklar/yikim-yeniden-yapim", label: "Yıkım ve Yeniden Yapım" },
  { href: "/kaynaklar/tadilat-ya-da-yeniden-yapim", label: "Tadilat mı, Yeniden Yapım mı?" },
  { href: "/kaynaklar/ozel-ev-insaat-rehberi", label: "Özel Ev İnşaat Rehberi" },
  { href: "/kaynaklar/tasarim-koleksiyonu", label: "Tasarım Koleksiyonu" },
  { href: "/kaynaklar/egimli-arsalar", label: "Eğimli Arsa Tasarımları" },
];

export default function Footer() {
  return (
    <footer
      className="pt-[5em] pb-[3em] px-[2em]"
      style={{ backgroundColor: "var(--dark)", color: "var(--cream)" }}
    >
      <div className="max-w-[75em] mx-auto">
        <div className="mb-[3em]">
          <span className="text-[1.5em] font-medium tracking-[3px] uppercase">
            Mimar & Atölyesi
          </span>
        </div>

        <div className="grid grid-cols-1 gap-[3em] sm:grid-cols-3 mb-[4em]">
          <div>
            <h4
              className="text-[0.7em] font-medium tracking-[2px] uppercase mb-[1.5em]"
              style={{ color: "var(--sage-400)" }}
            >
              Hızlı Bağlantılar
            </h4>
            <ul className="flex flex-col gap-[0.75em]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95em] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.7em] font-medium tracking-[2px] uppercase mb-[1.5em]"
              style={{ color: "var(--sage-400)" }}
            >
              Kaynaklar
            </h4>
            <ul className="flex flex-col gap-[0.75em]">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95em] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[0.7em] font-medium tracking-[2px] uppercase mb-[1.5em]"
              style={{ color: "var(--sage-400)" }}
            >
              İletişim
            </h4>
            <ul className="flex flex-col gap-[0.75em]">
              <li>
                <a
                  href="tel:+902161234567"
                  className="text-[0.95em] opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  0216 123 45 67
                </a>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-[0.95em] opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  Bize mesaj gönderin
                </Link>
              </li>
              <li className="text-[0.95em] opacity-60 leading-relaxed mt-[0.5em]">
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-[2em] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[1em]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p className="text-[0.75em] opacity-40">
            © {new Date().getFullYear()} Mimar & Atölyesi. Tüm hakları saklıdır.
          </p>
          <Link
            href="/gizlilik"
            className="text-[0.75em] opacity-40 hover:opacity-70 transition-opacity duration-300"
          >
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
}
