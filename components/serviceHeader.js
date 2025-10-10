"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import { useTranslations } from "../lib/useTranslations";

export default function ServiceHeader() {
  const { t } = useTranslations();
  const fullText = t('serviceHeader.title');
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed(""); // Reset displayed text
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="section-padding bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Piano.io style hero - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-work-sans mb-6 sm:mb-8 gradient-text">
            {displayed}
            <span className="animate-blink">|</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-work-sans mb-8 sm:mb-10 md:mb-12">
            {t('serviceHeader.subtitle')}
          </p>

          {/* Piano.io style CTA button - Mobile First */}
          <div className="flex justify-center">
            <button 
              onClick={() => {
                document.getElementById('packages-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              {t('serviceHeader.button')}
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
