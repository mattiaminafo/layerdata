"use client";
import { useTranslations } from "../lib/useTranslations";

export default function ServicesIntro() {
  const { t } = useTranslations();
  const intro = t('services.intro');

  if (!intro) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-work-sans">
            {intro.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-work-sans">
            {intro.description}
          </p>
        </div>
      </div>
    </section>
  );
}

