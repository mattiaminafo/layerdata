"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutHero() {
  const { t } = useTranslations();
  const about = t('about');

  if (!about) return null;

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container-max text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-work-sans mb-6">
          {about.hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-work-sans mb-8 max-w-4xl mx-auto leading-relaxed">
          {about.hero.subtitle}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/80 font-work-sans mb-8 max-w-5xl mx-auto leading-relaxed">
          {about.hero.description}
        </p>
        <div className="inline-block bg-gradient-to-r from-teal-500 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold text-lg font-work-sans">
          {about.hero.tagline}
        </div>
      </div>
    </section>
  );
}
