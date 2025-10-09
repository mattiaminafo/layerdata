"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Specialties() {
  const { t } = useTranslations();
  const specialties = t('specialties');

  if (!specialties || !specialties.skills) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-work-sans">
            {specialties.title}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {specialties.skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-lg hover:border-gray-300 transition-all duration-200">
                <span className="text-xs sm:text-sm font-medium text-gray-700 font-work-sans leading-tight">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
