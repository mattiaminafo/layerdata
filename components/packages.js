"use client";
import { useState } from "react";
import Button from "./button";
import { InfoModal } from "./modals";
import { useTranslations } from "../lib/useTranslations";

export default function Packages() {
  const { t } = useTranslations();
  const packages = [
    t('packages.light'),
    t('packages.medium'),
    t('packages.heavy')
  ];
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="w-full py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-center leading-tight">
          {t('packages.title')}
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 md:mb-16 text-center">{t('packages.subtitle')}</h3>

        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 sm:gap-8 md:gap-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="bg-base-100 rounded-2xl shadow-xl flex flex-col items-center p-6 sm:p-8 md:p-10 w-full md:flex-1 md:min-w-[280px] max-w-md border border-base-200"
            >
              <div className="text-xl font-semibold mb-4 font-poppins px-6 py-3 rounded-lg text-black" style={{backgroundColor: '#41cadf'}}>{pkg.name}</div>
              <div className="text-4xl font-bold font-gotham mb-2">€{pkg.price}</div>
              <div className="text-base mb-6 text-gray-500">{pkg.period}</div>
              
              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full mb-8">
                <a 
                  href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-active btn-secondary text-xl font-poppins font-semibold"
                >
                  {t('packages.bookCall')}
                </a>
                <button 
                  onClick={() => setOpenModal(idx)}
                  className="btn btn-outline border-black text-black hover:bg-black hover:text-white text-base font-poppins font-semibold"
                >
                  {t('packages.discoverMore')}
                </button>
              </div>

              <div className="mt-8 w-full">
                <div className="text-base font-semibold mb-4">{t('packages.includes')}</div>
                <ul className="space-y-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-lg text-secondary font-bold">+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals for each package */}
      {openModal !== null && (
        <InfoModal 
          isOpen={openModal !== null}
          onClose={() => setOpenModal(null)}
          title={packages[openModal].name}
          content={packages[openModal].description}
          details={packages[openModal].details}
          size="sm"
        />
      )}
    </section>
  );
}