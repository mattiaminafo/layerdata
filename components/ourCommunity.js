"use client";
import Button from "./button";
import { useTranslations } from "../lib/useTranslations";

export default function OurCommunity() {
  const { t } = useTranslations();
  
  return (
    <section className="section-padding gradient-bg">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-mulish mb-4 sm:mb-6">
              {t('ourCommunity.title')}
            </h2>
          </div>

          <div className="card max-w-2xl mx-auto text-center">
            {/* Profile Pictures Row - Mobile First */}
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
                {/* Placeholder profile pictures */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-purple)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">M</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-gray)] to-[var(--primary-purple)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">E</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-beige)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">C</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-gray)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">L</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-gray)] to-[var(--primary-beige)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">D</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-gray)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">A</div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-purple)] border-2 sm:border-3 md:border-4 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">G</div>
              </div>
            </div>
            
            {/* Button - Mobile First */}
            <div className="flex justify-center">
              <a 
                href="https://layerdata.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                {t('hero.discoverCommunity')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
