"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "../lib/useTranslations";
import Logo from "./logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const { t, currentLang } = useTranslations();
  const pathname = usePathname();
  
  // Determina se siamo sulla homepage
  const isHomepage = pathname === `/${currentLang}` || pathname === '/';

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${
      isHomepage 
        ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo - Mobile First */}
        <Logo />

        {/* Desktop Navigation buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium text-sm py-2.5 px-4 transition-colors font-work-sans ${
              isHomepage 
                ? 'text-white hover:text-white/80' 
                : 'text-gray-900 hover:text-gray-700'
            }`}
          >
           {t('header.bookCall')}
          </a>

          {/* Menu dropdown - Per le aziende che vogliono crescere */}
          <div className="relative group">
            <button className={`font-medium text-xs py-2 px-3 transition-colors flex items-center font-work-sans ${
              isHomepage 
                ? 'text-white hover:text-white/80' 
                : 'text-gray-900 hover:text-gray-700'
            }`}>
              {t('header.growthServices')}
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a 
                href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-work-sans"
              >
                {t('header.services')}
              </a>
              <a 
                href={`/${currentLang}/${currentLang === 'en' ? 'products' : 'prodotti'}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-t border-gray-100 text-sm font-work-sans"
              >
                {t('header.products')}
              </a>
              <a 
                href={`/${currentLang}/trainings`}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-t border-gray-100 text-sm font-work-sans"
              >
                {t('header.training')}
              </a>
            </div>
          </div>

          {/* Open Innovation - No dropdown */}
          <a 
            href="https://layerdata.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium text-sm py-2.5 px-4 transition-colors font-work-sans ${
              isHomepage 
                ? 'text-white hover:text-white/80' 
                : 'text-gray-900 hover:text-gray-700'
            }`}
          >
            {t('header.communityLearn')}
          </a>

          {/* Events for companies button */}
          <button 
            className={`font-medium text-sm py-2.5 px-4 transition-colors font-work-sans ${
              isHomepage 
                ? 'text-white hover:text-white/80' 
                : 'text-gray-900 hover:text-gray-700'
            }`}
            onClick={() => setIsEventsModalOpen(true)}
          >
            {t('header.eventsForCompanies')}
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} ${
            isHomepage ? 'bg-white' : 'bg-gray-900'
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} ${
            isHomepage ? 'bg-white' : 'bg-gray-900'
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} ${
            isHomepage ? 'bg-white' : 'bg-gray-900'
          }`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu - Mobile First */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} ${
        isHomepage 
          ? 'bg-white/10 backdrop-blur-md border-t border-white/20' 
          : 'bg-white border-t border-gray-200'
      }`}>
        <div className="flex flex-col space-y-2 sm:space-y-3 p-3 sm:p-4">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-sm font-work-sans font-semibold w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.bookCall')}
          </a>

          {/* Per le aziende che vogliono crescere */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-work-sans">
              {t('header.growthServices')}
            </h3>
            <a 
              href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-work-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.services')}
            </a>
            <a 
              href={`/${currentLang}/${currentLang === 'en' ? 'products' : 'prodotti'}`}
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-work-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.products')}
            </a>
            <a 
              href={`/${currentLang}/trainings`}
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-work-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.training')}
            </a>
          </div>

          {/* Open Innovation */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-work-sans">
              {t('header.communityLearn')}
            </h3>
            <a 
              href="https://layerdata.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-work-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.communityLearn')}
            </a>
          </div>

          {/* Events for companies */}
          <button 
            className="text-left text-gray-700 hover:text-gray-900 transition-colors text-sm font-work-sans"
            onClick={() => {
              setIsEventsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            {t('header.eventsForCompanies')}
          </button>
        </div>
      </div>

      {/* Events Modal */}
      {isEventsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-24 sm:pt-20 md:items-center md:pt-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 font-work-sans">
                {t('eventsModal.title')}
              </h2>
              <button 
                onClick={() => setIsEventsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6 font-work-sans">
              {t('eventsModal.content')}
            </p>
            <button 
              onClick={() => {
                setIsEventsModalOpen(false);
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[var(--primary-purple)] text-white py-3 px-4 font-semibold hover:bg-[var(--purple-dark)] transition-colors font-work-sans"
            >
              {t('eventsModal.cta')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}