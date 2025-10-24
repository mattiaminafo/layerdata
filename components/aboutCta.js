"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutCta() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-work-sans mb-6">
            ⚡ {about.cta.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 font-work-sans">
            {about.cta.description}
          </p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 font-work-sans">
            {about.cta.action}
          </p>
          
          <a 
            href="/"
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-400 text-white px-8 py-4 font-semibold rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-200 text-lg font-work-sans"
          >
            {about.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
