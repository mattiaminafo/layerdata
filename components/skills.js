"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Skills() {
  const { t } = useTranslations();
  const skills = t('skills.skillsList');

  // Nuova palette colori coerente con il sito
  const colors = [
    "bg-[var(--primary-beige)]",      // Beige
    "bg-[var(--primary-gray)]",       // Gray
    "bg-[var(--primary-purple)]",     // Purple
    "bg-[var(--beige-light)]",        // Light Beige
    "bg-[var(--gray-light)]",         // Light Gray
    "bg-[var(--purple-light)]",       // Light Purple
    "bg-[var(--beige-dark)]",         // Dark Beige
    "bg-[var(--gray-dark)]",          // Dark Gray
    "bg-[var(--purple-dark)]",        // Dark Purple
    "bg-[var(--primary-beige)]",      // Beige
    "bg-[var(--primary-gray)]",       // Gray
    "bg-[var(--primary-purple)]",     // Purple
    "bg-[var(--beige-light)]",        // Light Beige
    "bg-[var(--gray-light)]",         // Light Gray
    "bg-[var(--purple-light)]"        // Light Purple
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Top Button - Mobile First */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {t('skills.button')}
          </button>
        </div>

        {/* Skills Grid - First Row - Mobile First */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {skills.slice(0, 8).map((skill, index) => (
            <div 
              key={index}
              className={`px-4 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[180px] text-center ${colors[index]} hover:scale-105`}
            >
              <span className="text-white font-semibold text-xs sm:text-sm leading-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid - Second Row - Mobile First */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.slice(8).map((skill, index) => (
            <div 
              key={index + 8}
              className={`px-4 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[180px] text-center ${colors[index + 8]} hover:scale-105`}
            >
              <span className="text-white font-semibold text-xs sm:text-sm leading-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
