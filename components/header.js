"use client";
import { useState } from "react";
import { useTranslations } from "../lib/useTranslations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLang } = useTranslations();

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-end items-center">
        {/* Desktop Navigation - Solo voci di menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Home */}
          <a 
            href={`/${currentLang}`}
            className="font-medium text-base py-2.5 px-4 transition-colors font-work-sans text-white hover:text-white/80"
          >
            {t('header.home')}
          </a>

          {/* Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-base py-2.5 px-4 transition-colors font-work-sans text-white hover:text-white/80"
          >
           {t('header.bookCall')}
          </a>

          {/* About */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
            className="font-medium text-base py-2.5 px-4 transition-colors font-work-sans text-white hover:text-white/80"
          >
            {t('header.about')}
          </a>

          {/* Community & Learn */}
          <a 
            href="https://thedataclinic.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-base py-2.5 px-4 transition-colors font-work-sans text-white hover:text-white/80"
          >
           {t('header.communityLearn')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} bg-white`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} bg-white`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} bg-white`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/80 backdrop-blur-sm`}>
        <div className="flex flex-col space-y-2 sm:space-y-3 p-3 sm:p-4">
          {/* Home */}
          <a 
            href={`/${currentLang}`}
            className="block text-white hover:text-white/80 transition-colors text-sm font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.home')}
          </a>

          {/* Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-sm font-work-sans font-semibold w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.bookCall')}
          </a>

          {/* About */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
            className="block text-white hover:text-white/80 transition-colors text-sm font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.about')}
          </a>

          {/* Community & Learn */}
          <a 
            href="https://thedataclinic.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-white/80 transition-colors text-sm font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.communityLearn')}
          </a>
        </div>
      </div>
    </header>
  );
}