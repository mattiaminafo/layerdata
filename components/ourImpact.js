"use client";
import { useTranslations } from "../lib/useTranslations";

export default function OurImpact() {
  const { t } = useTranslations();
  
  return (
    <section className="py-2 sm:py-3 md:py-4 lg:py-6 bg-gray-50">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-gotham mb-2 sm:mb-3 md:mb-4">
            {t('ourImpact.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-mulish">
            {t('ourImpact.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
