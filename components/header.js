"use client";
import { useState } from "react";
import { useTranslations } from "../lib/useTranslations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const { t, currentLang } = useTranslations();

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo - Mobile First */}
        <a href={`/${currentLang}`} className="text-xl sm:text-2xl font-bold font-gotham hover:text-gray-700 transition-colors">
          {t('header.logo')}
        </a>

        {/* Desktop Navigation buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors"
          >
           {t('header.bookCall')}
          </a>

          {/* Menu dropdown - Per le aziende che vogliono crescere */}
          <div className="relative group">
            <button className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors flex items-center">
              {t('header.growthServices')}
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a 
                href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm"
              >
                {t('header.services')}
              </a>
              <a 
                href={`/${currentLang}/trainings`}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors border-t border-gray-100 text-sm"
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
            className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors"
          >
            {t('header.communityLearn')}
          </a>

          {/* Events for companies button */}
          <button 
            className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors"
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
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu - Mobile First */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="flex flex-col space-y-2 sm:space-y-3 p-3 sm:p-4">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-sm font-poppins font-semibold w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('header.bookCall')}
          </a>

          {/* Per le aziende che vogliono crescere */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-600 px-2 py-1">
              {t('header.companiesWantGrow')}
            </div>
            <a 
              href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.services')}
            </a>
            <a 
              href={`/${currentLang}/trainings`}
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.training')}
            </a>
          </div>

          {/* Open Innovation */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-600 px-2 py-1">
              {t('header.companiesWantInnovate')}
            </div>
            <a 
              href="https://layerdata.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.communityLearn')}
            </a>
          </div>

          {/* Events for companies button */}
          <button 
            className="btn bg-black text-white text-sm font-poppins font-semibold py-2 transition-all duration-200"
            onClick={() => {
              setIsEventsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            {t('header.eventsForCompanies')}
          </button>
        </div>
      </div>

      {/* Events Modal - Mobile First */}
      {isEventsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-gotham">
                {t('eventsModal.title')}
              </h3>
              <button 
                className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl font-bold transition-colors" 
                onClick={() => setIsEventsModalOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                {t('eventsModal.content')}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200">
              <button
                className="btn-primary w-full text-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                onClick={() => {
                  setIsEventsModalOpen(false);
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {t('eventsModal.cta')}
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
