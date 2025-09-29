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
    <main className="min-h-screen w-full overflow-hidden relative flex flex-col justify-center items-center pt-16">
      {/* Piano.io style abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
        {/* Abstract geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Brand name */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-mulish tracking-tight">
            LayerData
          </h1>
        </div>
        
        {/* Main heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mulish mb-6 leading-tight">
          {t('hero.mission').toUpperCase()}
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-mulish mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
              document.getElementById('our-expertise').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all duration-200 text-lg w-full sm:w-auto"
          >
            {t('hero.discoverServices')}
          </button>
          
          <a 
            href="https://layerdata.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all duration-200 text-lg w-full sm:w-auto"
          >
            {t('hero.discoverCommunity')}
          </a>
        </div>
      </div>
      
      {/* Clients section at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <Clients />
      </div>
    </main>
  );
}