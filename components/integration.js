"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Integration() {
  const { t } = useTranslations();
  const integration = t('integration');

  if (!integration || !integration.categories) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {integration.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto">
            {integration.subtitle}
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {integration.categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 font-work-sans">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[var(--accent-lime)] to-[var(--accent-teal)] rounded-full"></div>
                    <span className="text-base text-gray-700 font-work-sans">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No CTA required */}
      </div>
    </section>
  );
}
