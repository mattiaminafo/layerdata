"use client";
import { useTranslations } from "../lib/useTranslations";

export default function ProductsHeader() {
  const { t } = useTranslations();

  return (
    <section className="section-padding bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <div className="container-max text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-work-sans mb-6 sm:mb-8">
          {t('products.title')}
        </h1>
        
        {/* Subtitle / CTA */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto mb-8 sm:mb-12">
          {t('products.subtitle')}
        </p>

        {/* Contact Email CTA */}
        <div className="flex justify-center">
          <a
            href="mailto:hello@layerdata.eu"
            className="inline-flex items-center bg-[var(--primary-purple)] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-[var(--purple-dark)] transition-colors duration-200 text-base sm:text-lg font-work-sans"
          >
            {t('products.ctaButton')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

