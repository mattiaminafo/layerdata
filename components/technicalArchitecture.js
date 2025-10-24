"use client";
import { useTranslations } from "../lib/useTranslations";

export default function TechnicalArchitecture() {
  const { t } = useTranslations();
  const technicalArchitecture = t('technicalArchitecture');

  if (!technicalArchitecture) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {technicalArchitecture.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto">
            {technicalArchitecture.subtitle}
          </p>
        </div>

        {/* Components List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {technicalArchitecture.components.map((component, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                  {component}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {technicalArchitecture.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <p className="text-base sm:text-lg font-semibold text-gray-800 font-work-sans">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
