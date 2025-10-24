"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutPhilosophy() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            🧠 {about.philosophy.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-6 font-work-sans">
            {about.philosophy.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-work-sans">
            {about.philosophy.description}
          </p>
          
          {/* Quote */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
            <blockquote className="text-lg sm:text-xl font-semibold text-gray-800 font-work-sans italic">
              "{about.philosophy.quote}"
            </blockquote>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.philosophy.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
