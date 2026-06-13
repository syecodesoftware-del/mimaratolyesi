import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — Mimar & Atölyesi",
  description:
    "Projeniz için bizimle iletişime geçin. Ücretsiz keşif toplantısı ayarlayın.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}
