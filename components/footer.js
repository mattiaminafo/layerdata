"use client";
import { useTranslations } from "../lib/useTranslations";
import LanguageSelector from "./languageSelector";

export default function Footer() {
  const { t } = useTranslations();
  
  return (
    <footer className="w-full border-t border-white/10 py-12 px-4 bg-bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-base font-black font-work-sans text-text-primary">{t('header.logo')}</div>
        
        {/* Language Selector */}
        <div className="flex justify-center">
          <LanguageSelector />
        </div>
        
        <div className="text-sm text-text-secondary text-center sm:text-right font-bold font-work-sans">
          <div>{t('footer.pivaMattia')}</div>
          <div>{t('footer.pivaEnrico')}</div>
        </div>
      </div>
    </footer>
  );
}
