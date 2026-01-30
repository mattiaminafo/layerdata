"use client";
import { useState } from "react";
import { useTranslations } from "../lib/useTranslations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLang } = useTranslations();

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex justify-end items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <a 
            href={`/${currentLang}`}
            className="font-bold text-base py-2.5 px-4 transition-colors font-work-sans text-text-primary hover:text-highlight-primary"
          >
            {t('header.home')}
          </a>

          {/* About */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
            className="font-bold text-base py-2.5 px-4 transition-colors font-work-sans text-text-primary hover:text-highlight-primary"
          >
            {t('header.about')}
          </a>

          {/* How we work */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'how-we-work' : 'come-lavoriamo'}`}
            className="font-bold text-base py-2.5 px-4 transition-colors font-work-sans text-text-primary hover:text-highlight-primary"
          >
            {t('header.howWeWork')}
          </a>

          {/* Community & Learn */}
          <a 
            href="https://thedataclinic.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base py-2.5 px-4 transition-colors font-work-sans text-text-primary hover:text-highlight-primary"
          >
           {t('header.communityLearn')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} bg-highlight-primary`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''} bg-highlight-primary`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} bg-highlight-primary`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-bg-primary border-t border-highlight-primary/20`}>
        <div className="flex flex-col space-y-3 p-4">
          {/* Home */}
          <a 
            href={`/${currentLang}`}
            className="block text-text-primary hover:text-highlight-primary transition-colors text-base font-bold font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.home')}
          </a>

          {/* About */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
            className="block text-text-primary hover:text-highlight-primary transition-colors text-base font-bold font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.about')}
          </a>

          {/* How we work */}
          <a 
            href={`/${currentLang}/${currentLang === 'en' ? 'how-we-work' : 'come-lavoriamo'}`}
            className="block text-text-primary hover:text-highlight-primary transition-colors text-base font-bold font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.howWeWork')}
          </a>

          {/* Community & Learn */}
          <a 
            href="https://thedataclinic.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-text-primary hover:text-highlight-primary transition-colors text-base font-bold font-work-sans"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.communityLearn')}
          </a>
        </div>
      </div>
    </header>
  );
}