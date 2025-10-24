"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutCorePhilosophy() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-work-sans mb-6">
            💡 {about.corePhilosophy.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-work-sans">
            {about.corePhilosophy.subtitle}
          </p>
          
          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {about.corePhilosophy.principles.map((principle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-base sm:text-lg text-white font-work-sans">
                  {principle}
                </p>
              </div>
            ))}
          </div>
          
          {/* Quote */}
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-l-4 border-teal-400 p-6 rounded-r-lg">
            <blockquote className="text-lg sm:text-xl font-semibold text-white font-work-sans italic">
              "{about.corePhilosophy.quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
