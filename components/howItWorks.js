"use client";
import { useTranslations } from "../lib/useTranslations";

export default function HowItWorks() {
  const { t } = useTranslations();
  const howItWorks = t('howItWorks');

  if (!howItWorks) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {howItWorks.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Modules Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg mb-12">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="font-semibold text-gray-900 font-work-sans">Modulo</div>
              <div className="font-semibold text-gray-900 font-work-sans">Funzione</div>
              <div className="font-semibold text-gray-900 font-work-sans">Output</div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {howItWorks.modules.map((module, index) => (
              <div key={index} className="px-6 py-6 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  {/* Module Name with Icon */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{module.icon}</span>
                    <span className="font-semibold text-gray-900 font-work-sans">{module.name}</span>
                  </div>

                  {/* Function */}
                  <div className="text-gray-700 font-work-sans">
                    {module.function}
                  </div>

                  {/* Output */}
                  <div className="text-gray-600 font-work-sans">
                    {module.output}
                  </div>

                  {/* Visual Indicator */}
                  <div className="hidden md:flex justify-end">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-work-sans">
            💡 {howItWorks.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
