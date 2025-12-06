"use client";
import { useTranslations } from "../lib/useTranslations";

export default function HowWeWork() {
  const { t } = useTranslations();
  const data = t("howWeWork");

  if (!data) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
              {data.title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-3 sm:mb-4">
              {data.subtitle}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-semibold font-work-sans mb-6 sm:mb-8">
              {data.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-work-sans max-w-3xl mx-auto">
              {data.body}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-work-sans">
                  {benefit.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-work-sans">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


