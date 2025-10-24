"use client";
import Clients from "./clients";
import { useTranslations } from "../lib/useTranslations";

export default function Hero() {
  const { t } = useTranslations();

  return (
    <main className="min-h-screen w-full overflow-hidden relative flex flex-col justify-center items-center pt-16">
      {/* Dark elegant background with turquoise accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Modern geometric shapes with turquoise accents */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-teal-300 to-purple-300 rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-work-sans mb-6 leading-tight">
          {t('hero.mission').toUpperCase()}
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-work-sans mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <button 
            onClick={() => {
              document.getElementById('contact-form').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-gradient-to-r from-teal-500 to-teal-400 text-white px-8 py-4 font-semibold hover:from-teal-600 hover:to-teal-500 transition-all duration-200 text-lg w-full sm:w-auto rounded-lg"
          >
            {t('hero.discoverServices')}
          </button>
          
          <button 
            onClick={() => {
              document.getElementById('what-is-layerdata').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all duration-200 text-lg w-full sm:w-auto rounded-lg"
          >
            {t('hero.discoverCommunity')}
          </button>
        </div>
      </div>
      
      {/* Clients section at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <Clients />
      </div>
    </main>
  );
}