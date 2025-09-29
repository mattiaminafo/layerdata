"use client";
import { useState } from "react";
import Button from "./button";
import { InfoModal } from "./modals";
import { useTranslations } from "../lib/useTranslations";

export default function Packages() {
  const { t } = useTranslations();
  const packageData = t('packages.singlePackage');
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-gotham mb-4 sm:mb-6">
            {t('packages.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-mulish">
            {t('packages.subtitle')}
          </p>
        </div>

        {/* Single Package Card - Piano.io Style Mobile First */}
        <div className="max-w-4xl mx-auto">
          <div className="card text-center">
            {/* Package Header */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-gotham">
                {packageData.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-purple)] font-gotham">
                  €{packageData.price}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-gray-600">
                  {packageData.period}
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
              {packageData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-2 h-2 bg-[var(--primary-purple)] mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                {t('packages.bookCall')}
              </a>
              <button 
                onClick={() => setOpenModal(true)}
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                {t('packages.discoverMore')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <InfoModal 
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={packageData.name}
          content={packageData.description}
          details={packageData.details}
          size="sm"
        />
      )}
    </section>
  );
}