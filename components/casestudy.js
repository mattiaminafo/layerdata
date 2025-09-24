"use client";
import { useState } from "react";
import { useTranslations } from "../lib/useTranslations";

export default function CaseStudy() {
  const { t } = useTranslations();
  const caseStudies = t('caseStudy.studies');
  const [open, setOpen] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const getCardIndex = (offset) => {
    return (currentIndex + offset + caseStudies.length) % caseStudies.length;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 md:mb-16 font-gotham">{t('caseStudy.title')}</h2>
      
      {/* Desktop Carousel */}
      <div className="hidden md:block relative w-full max-w-7xl mx-auto px-4">
        {/* Controlli di navigazione */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
        >
          →
        </button>

        {/* Carosello con 3 card visibili */}
        <div className="flex justify-center items-center gap-6">
          {/* Card precedente */}
          <div className="w-1/4 bg-base-100 p-6 sm:p-8 rounded-xl shadow-lg opacity-60 scale-75 transform transition-all duration-300 min-h-[50vh] flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">{caseStudies[getCardIndex(-1)].title}</h3>
            <p className="text-sm sm:text-base leading-relaxed flex-grow">{caseStudies[getCardIndex(-1)].short}</p>
          </div>

          {/* Card centrale (attiva) */}
          <div className="w-1/2 bg-base-100 p-8 sm:p-10 md:p-12 rounded-xl shadow-xl flex flex-col min-h-[60vh]">
            <h3 className="font-bold text-2xl sm:text-3xl mb-4 sm:mb-6">{caseStudies[currentIndex].title}</h3>
            <p className="mb-6 sm:mb-8 flex-grow text-lg sm:text-xl leading-relaxed">{caseStudies[currentIndex].short}</p>
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold bg-black text-white hover:bg-gray-900 transition-colors w-full text-base sm:text-lg"
              onClick={() => setOpen(currentIndex)}
            >
              {t('caseStudy.discoverMore')}
            </button>
          </div>

          {/* Card successiva */}
          <div className="w-1/4 bg-base-100 p-6 sm:p-8 rounded-xl shadow-lg opacity-60 scale-75 transform transition-all duration-300 min-h-[50vh] flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">{caseStudies[getCardIndex(1)].title}</h3>
            <p className="text-sm sm:text-base leading-relaxed flex-grow">{caseStudies[getCardIndex(1)].short}</p>
          </div>
        </div>

        {/* Indicatori */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden w-full px-4">
        <div className="flex flex-col gap-4 sm:gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col">
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">{study.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed flex-grow mb-3 sm:mb-4">{study.short}</p>
              <button
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold bg-black text-white hover:bg-gray-900 transition-colors w-full text-sm sm:text-base"
                onClick={() => setOpen(index)}
              >
                {t('caseStudy.discoverMore')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {open !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-base-100 p-4 rounded-xl w-[90%] max-w-sm relative max-h-[70vh] overflow-hidden flex flex-col">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold transition-colors z-10" onClick={() => setOpen(null)}>✕</button>
            <h3 className="font-bold text-base mb-3 pr-8">{caseStudies[open].title}</h3>
            <div className="flex-1 overflow-y-auto space-y-2">
              <p className="text-xs leading-relaxed">{caseStudies[open].long}</p>
              <div className="space-y-1 pt-2 border-t border-gray-200">
                <p className="text-xs"><strong>Cliente:</strong> {caseStudies[open].client}</p>
                <p className="text-xs"><strong>Durata:</strong> {caseStudies[open].duration}</p>
                <p className="text-xs"><strong>Risultati:</strong> {caseStudies[open].results}</p>
                <p className="text-xs"><strong>Tecnologie:</strong> {caseStudies[open].technologies.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
