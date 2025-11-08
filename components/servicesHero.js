"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ServicesHero() {
  const { t } = useTranslations();
  const data = t("servicesPage.hero") || {};

  const handleClick = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-darker)] via-[var(--primary-dark)] to-black"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[60%] bg-[radial-gradient(circle_at_top,#1f2b3a_0%,transparent_60%)] opacity-70"></div>
      <div className="relative container-max text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-work-sans mb-6">
          {data.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 font-work-sans leading-relaxed mb-10">
          {data.subtitle}
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center bg-[var(--accent-lime)] text-black font-semibold text-base sm:text-lg px-10 py-4 rounded-full hover:brightness-110 transition-all duration-200"
        >
          {data.cta}
        </button>
      </div>
    </section>
  );
}
