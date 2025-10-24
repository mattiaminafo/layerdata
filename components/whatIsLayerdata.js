"use client";
import { useTranslations } from "../lib/useTranslations";

export default function WhatIsLayerdata() {
  const { t } = useTranslations();
  const whatIsLayerdata = t('whatIsLayerdata');

  if (!whatIsLayerdata) return null;

  return (
    <section id="what-is-layerdata" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {whatIsLayerdata.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-4 sm:mb-6 font-work-sans">
            {whatIsLayerdata.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto mb-8">
            {whatIsLayerdata.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {whatIsLayerdata.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-work-sans">
            📈 {whatIsLayerdata.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
