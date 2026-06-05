'use client';

import ContactModal from "@/components/ContactModal";
import JDAnimation from "@/components/JohnDeereAnimation";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalModals() {
  const { isContactOpen, setIsContactOpen, isJDOpen, setIsJDOpen } = useLanguage();
  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <JDAnimation isOpen={isJDOpen} onClose={() => setIsJDOpen(false)} />
    </>
  );
}
