'use client';

import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalModals() {
  const { isContactOpen, setIsContactOpen } = useLanguage();
  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
