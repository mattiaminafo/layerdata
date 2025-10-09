"use client";
import { useTranslations } from "../lib/useTranslations";

export default function ServicesSections() {
  const { t } = useTranslations();
  
  const services = [
    t('services.implementation'),
    t('services.technicalAdvisory'),
    t('services.audienceRevenue'),
    t('services.campaignOptimization'),
    t('services.trainingEnablement')
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Testo */}
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-work-sans">
                  {service.title}
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4 font-work-sans">
                  {service.subtitle}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--primary-purple)] mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Elemento grafico */}
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <div className="bg-gray-100 p-6 sm:p-8 lg:p-12 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center relative overflow-hidden">
                  {/* Elemento grafico astratto */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary-beige)] to-[var(--primary-purple)] blur-sm"></div>
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/40"></div>
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[var(--primary-gray)]/30"></div>
                    <div className="absolute top-6 left-6 sm:top-9 sm:left-9 lg:top-12 lg:left-12 w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8 bg-white/60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
