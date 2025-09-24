"use client";
import { useEffect, useState } from "react";
import { InfoModal } from "./modals";
import { useTranslations } from "../lib/useTranslations";

export default function Header() {
  const [isTrembling, setIsTrembling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, currentLang } = useTranslations();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTrembling(true);
      setTimeout(() => setIsTrembling(false), 1000); // Tremble for 1 second
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href={`/${currentLang}`} className="text-2xl font-bold font-gotham hover:text-gray-700 transition-colors">
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
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

          {/* Info button - Non so cosa mi serve */}
          <button 
            className={`text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors ${
              isTrembling ? 'animate-pulse' : ''
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            {t('header.dontKnowWhatNeed')}
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

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="flex flex-col space-y-3 p-3">
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

          {/* Black trembling button - Non so cosa mi serve */}
          <button 
            className={`btn bg-black text-white text-sm font-poppins font-semibold py-2 transition-all duration-200 ${
              isTrembling ? 'animate-pulse' : ''
            }`}
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            {t('header.dontKnowWhatNeed')}
          </button>
        </div>
      </div>

      {/* Modal - Non so cosa mi serve */}
      <InfoModal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title={t('modal.title')}
  content={t('modal.content')}
  details={[
    { label: "👥", value: t('modal.details.community') },
    { label: "🎯", value: t('modal.details.audit') },
    { label: "📊", value: t('modal.details.analysis') },
    { label: "🚀", value: t('modal.details.proposal') }
  ]}
  size="sm"
/>


    </header>
  );
}
