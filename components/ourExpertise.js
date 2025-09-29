"use client";
import { useTranslations } from "../lib/useTranslations";

export default function OurExpertise() {
  const { t, currentLang } = useTranslations();
  
  return (
    <section id="our-expertise" className="section-padding bg-white">
      <div className="container-max">
        {/* Bottone con effetto speciale - Ultra Mobile First */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <button className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4">
            {t('ourExpertise.button')}
          </button>
        </div>
        
        {/* 3 Quadranti con stile Piano.io - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Services */}
          <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden group hover:bg-gray-700 transition-all duration-300">
            {/* Elemento grafico astratto */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-purple)] blur-sm"></div>
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/30"></div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[var(--primary-beige)]/50"></div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 font-gotham">
                {t('ourExpertise.servicesTitle')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                {t('ourExpertise.servicesDescription')}
              </p>
              <a 
                href={`/${currentLang}/${currentLang === 'en' ? 'services' : 'servizi'}`}
                className="inline-flex items-center text-white font-semibold hover:text-[var(--primary-beige)] transition-colors text-sm sm:text-base lg:text-lg"
              >
                Scopri di più →
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden group hover:bg-gray-700 transition-all duration-300">
            {/* Elemento grafico astratto */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-gray)] rotate-45 blur-sm"></div>
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rotate-45"></div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-[var(--primary-purple)]/40 rotate-45"></div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 font-gotham">
                {t('ourExpertise.innovationTitle')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                {t('ourExpertise.innovationDescription')}
              </p>
              <a 
                href="https://layerdata.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-semibold hover:text-[var(--primary-purple)] transition-colors text-sm sm:text-base lg:text-lg"
              >
                Unisciti →
              </a>
            </div>
          </div>

          {/* Workshops */}
          <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden group hover:bg-gray-700 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            {/* Elemento grafico astratto */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary-gray)] to-[var(--primary-beige)] blur-sm"></div>
              <div className="absolute top-1 left-1 sm:top-1 sm:left-1 w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-white/25"></div>
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-[var(--primary-gray)]/50"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-white/60"></div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 font-gotham">
                {t('ourExpertise.trainingTitle')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                {t('ourExpertise.trainingDescription')}
              </p>
              <a 
                href={`/${currentLang}/trainings`}
                className="inline-flex items-center text-white font-semibold hover:text-[var(--primary-gray)] transition-colors text-sm sm:text-base lg:text-lg"
              >
                Scopri di più →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
