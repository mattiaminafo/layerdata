"use client";
import { useEffect, useState } from "react";
import Button from "./button";
import Clients from "./clients";
import { useTranslations } from "../lib/useTranslations";

export default function Hero() {
  const fullText = "LayerData";
  const [displayed, setDisplayed] = useState("");
  const { t } = useTranslations();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Piano.io style hero - Ultra Mobile First */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight font-gotham mb-2 sm:mb-3 md:mb-4 lg:mb-6 gradient-text">
            {t('hero.mission')}
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed font-mulish mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            {t('hero.description')}
          </p>
          
          {/* Piano.io style CTA buttons - Ultra Mobile First */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <button 
              onClick={() => {
                document.getElementById('our-expertise').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="bg-[var(--primary-purple)] text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-semibold hover:bg-[var(--purple-dark)] transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
            >
              {t('hero.discoverServices')}
            </button>
            
            <a 
              href="https://layerdata.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--primary-gray)] text-[var(--primary-gray)] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-semibold hover:bg-[var(--primary-gray)] hover:text-white transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto"
            >
              {t('hero.discoverCommunity')}
            </a>
          </div>
        </div>
        
        {/* Piano.io style clients section - Ultra Mobile First */}
        <div className="border-t border-gray-200">
          <Clients />
        </div>
      </div>
    </main>
  );
}