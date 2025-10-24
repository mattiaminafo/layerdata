"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutImpact() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            🚀 {about.impact.title}
          </h2>
        </div>

        {/* Audiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {about.impact.audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 font-work-sans">
                {audience.role}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-work-sans">
                {audience.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-work-sans">
            {about.impact.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
