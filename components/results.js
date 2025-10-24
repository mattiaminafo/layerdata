"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Results() {
  const { t } = useTranslations();
  const results = t('results');

  if (!results) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {results.title}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {results.benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                  ✅ {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-work-sans">
            💬 {results.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
