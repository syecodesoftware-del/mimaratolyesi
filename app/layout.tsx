import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import NavMenuOverlay from "@/components/layout/NavMenuOverlay";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mimar & Atölyesi — Tasarım Odaklı Özel Evler",
  description:
    "Tasarım ve inşaatı tek elden yönetiyoruz. Sitenize, yaşam tarzınıza ve bütçenize özel, uçtan uca teslim edilen evler.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <LenisProvider>
          <PageTransition />
          <Navbar />
          <NavMenuOverlay />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
