"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutArchitecture() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            ⚙️ {about.architecture.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto">
            {about.architecture.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {about.architecture.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg font-work-sans">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 font-work-sans">
                    {step.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-work-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tagline */}
          <div className="text-center">
            <p className="text-lg sm:text-xl font-bold text-gray-900 font-work-sans">
              {about.architecture.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
