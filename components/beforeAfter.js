"use client";
import { useTranslations } from "../lib/useTranslations";

export default function BeforeAfter() {
  const { t } = useTranslations();
  const beforeAfter = t('beforeAfter');

  if (!beforeAfter) return null;

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {beforeAfter.title}
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
          {/* Before */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 font-work-sans">
                {beforeAfter.before.title}
              </h3>
            </div>
            <div className="space-y-4">
              {beforeAfter.before.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-white border-2 border-green-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-600 font-work-sans">
                {beforeAfter.after.title}
              </h3>
            </div>
            <div className="space-y-4">
              {beforeAfter.after.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-work-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-work-sans">
            📊 {beforeAfter.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
