"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutWhyItWorks() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            🔍 {about.whyItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-work-sans">
            {about.whyItWorks.description}
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-work-sans">
            {about.whyItWorks.explanation}
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <p className="text-lg sm:text-xl font-semibold text-gray-800 font-work-sans">
              {about.whyItWorks.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
