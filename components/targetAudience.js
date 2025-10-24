"use client";
import { useTranslations } from "../lib/useTranslations";

export default function TargetAudience() {
  const { t } = useTranslations();
  const targetAudience = t('targetAudience');

  if (!targetAudience) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-work-sans mb-4 sm:mb-6">
            {targetAudience.title}
          </h2>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12">
          {targetAudience.audiences.map((audience, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-work-sans">
                  {audience.target}
                </h3>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-work-sans">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline and CTA */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-8 font-work-sans">
            {targetAudience.tagline}
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-teal-400 text-white px-8 py-4 font-semibold rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-200 text-lg font-work-sans">
            {targetAudience.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
