"use client";
import Clients from "./clients";
import { useTranslations } from "../lib/useTranslations";

export default function Hero() {
  const { t } = useTranslations();
  const hero = t('home.hero') || {};
  const microProof = hero?.microProof || [];

  return (
    <main className="min-h-screen w-full overflow-hidden relative flex flex-col justify-between items-center pt-16 pb-32 md:pb-40 lg:pb-48">
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
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-work-sans mb-6 leading-tight">
          {(hero?.title || '').toUpperCase()}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-work-sans mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero?.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16">
          <button 
            onClick={() => {
              document.getElementById('home-paths')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-[var(--accent-lime)] text-black px-8 py-4 font-semibold rounded-full hover:brightness-110 transition-all duration-200 text-lg w-full sm:w-auto"
          >
            {hero?.primaryCta}
          </button>
           
          <button 
            onClick={() => {
              document.getElementById('home-layerhub')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-white/5 backdrop-blur-sm border border-[var(--border-strong)] text-white px-8 py-4 font-semibold rounded-full hover:bg-white/10 transition-all duration-200 text-lg w-full sm:w-auto"
          >
            {hero?.secondaryCta}
          </button>
        </div>

        {microProof.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-white/70 font-work-sans">
            {microProof.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-lime)]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Clients section */}
      <div className="relative z-10 w-full bg-black/20 backdrop-blur-sm">
        <Clients />
      </div>
    </main>
  );
}