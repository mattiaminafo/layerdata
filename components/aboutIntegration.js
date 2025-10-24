"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutIntegration() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            🔌 {about.integration.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto mb-8">
            {about.integration.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-work-sans max-w-5xl mx-auto">
            {about.integration.description}
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {about.integration.categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 font-work-sans">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                    <span className="text-base text-gray-700 font-work-sans">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
          <blockquote className="text-lg sm:text-xl font-semibold text-gray-800 font-work-sans italic">
            "{about.integration.quote}"
          </blockquote>
        </div>

        {/* Example */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <p className="text-base sm:text-lg leading-relaxed font-work-sans">
            {about.integration.example}
          </p>
        </div>
      </div>
    </section>
  );
}
