"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Process() {
  const { t } = useTranslations();
  const steps = t('process.steps');

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-gotham mb-4 sm:mb-6">
            {t('process.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-mulish max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Piano.io style process steps - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-purple)] flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-white font-bold text-lg sm:text-xl">{index + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                {step.split('–')[0].trim()}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {step.split('–')[1]?.trim() || ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
