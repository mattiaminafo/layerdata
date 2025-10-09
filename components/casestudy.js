"use client";
import { useState } from "react";
import { useTranslations } from "../lib/useTranslations";

export default function CaseStudy() {
  const { t } = useTranslations();
  const caseStudies = t('caseStudy.studies');
  const [open, setOpen] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {t('caseStudy.title')}
          </h2>
        </div>

        {/* Piano.io Style Grid Layout - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              {/* Case Study Header - Mobile First */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-work-sans">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {study.short}
                </p>
              </div>

              {/* Case Study Details - Mobile First */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">{t('caseStudy.labels.client')}</span>
                  <span className="text-xs sm:text-sm text-gray-900">{study.client}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">{t('caseStudy.labels.duration')}</span>
                  <span className="text-xs sm:text-sm text-gray-900">{study.duration}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">{t('caseStudy.labels.results')}</span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--primary-purple)]">{study.results}</span>
                </div>
              </div>

              {/* Technologies Tags - Mobile First */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button - Mobile First */}
              <button
                className="btn-primary w-full text-center text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                onClick={() => setOpen(index)}
              >
                {t('caseStudy.discoverMore')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Piano.io Style */}
      {open !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 font-work-sans">
                {caseStudies[open].title}
              </h3>
              <button 
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors" 
                onClick={() => setOpen(null)}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudies[open].long}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-500">{t('caseStudy.labels.client')}</span>
                      <p className="text-gray-900">{caseStudies[open].client}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500">{t('caseStudy.labels.duration')}</span>
                      <p className="text-gray-900">{caseStudies[open].duration}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-500">{t('caseStudy.labels.results')}</span>
                      <p className="text-[var(--primary-purple)] font-semibold">{caseStudies[open].results}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-500">{t('caseStudy.labels.technologies')}</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {caseStudies[open].technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200">
              <button
                className="btn-outline w-full"
                onClick={() => setOpen(null)}
              >
                {t('caseStudy.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
