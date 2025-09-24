"use client";
import { useTranslations } from "../lib/useTranslations";
import LanguageSelector from "./languageSelector";

export default function Footer() {
  const { t } = useTranslations();
  
  return (
    <footer className="w-full border-t border-gray-200 py-8 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-base font-bold font-gotham">{t('header.logo')}</div>
        
        {/* Language Selector */}
        <div className="flex justify-center">
          <LanguageSelector />
        </div>
        
        <div className="text-sm text-gray-600 text-center sm:text-right">
          <div>{t('footer.pivaMattia')}</div>
          <div>{t('footer.pivaEnrico')}</div>
        </div>
      </div>
    </footer>
  );
}
