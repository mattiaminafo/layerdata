"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutPricing() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about || !about.pricing) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-6">
            💰 {about.pricing.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-work-sans max-w-3xl mx-auto">
            {about.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-teal-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-work-sans">
                {about.pricing.plan.name}
              </h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-bold text-teal-600 font-work-sans">
                  {about.pricing.plan.price}
                </span>
                <span className="text-lg sm:text-xl text-gray-600 font-work-sans ml-2">
                  {about.pricing.plan.period}
                </span>
              </div>
              <p className="text-sm text-gray-500 font-work-sans">
                {about.pricing.plan.minimum}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-work-sans text-center">
              {about.pricing.plan.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {about.pricing.plan.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 font-work-sans">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <a 
                href="/"
                className="inline-block bg-gradient-to-r from-teal-500 to-teal-400 text-white px-8 py-4 font-semibold rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-200 text-lg font-work-sans"
              >
                {about.pricing.plan.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
