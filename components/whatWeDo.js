"use client";
import { useTranslations } from "../lib/useTranslations";
import Link from "next/link";

export default function WhatWeDo() {
  const { t } = useTranslations();
  const whatWeDo = t('whatWeDo');

  if (!whatWeDo || !whatWeDo.services) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans mb-4 sm:mb-6">
            {whatWeDo.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-work-sans max-w-4xl mx-auto">
            {whatWeDo.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {whatWeDo.services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 font-work-sans">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 font-work-sans">
                  {service.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <Link 
                    href={service.href || "#"} 
                    className="inline-flex items-center text-sm sm:text-base font-semibold text-[var(--primary-purple)] hover:text-[var(--purple-dark)] transition-colors group-hover:translate-x-1 transform transition-transform"
                  >
                    {service.cta}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
