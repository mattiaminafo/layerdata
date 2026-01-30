"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ShopifyTrackingCta() {
  const { t } = useTranslations();
  const data = t("shopifyTracking.cta") || {};

  const handleClick = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding w-full bg-gradient-to-br from-[var(--primary-darker)] via-[var(--primary-dark)] to-black">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-6">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-work-sans leading-relaxed mb-10">
            {data.subtitle}
          </p>
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center bg-[var(--accent-lime)] text-black font-semibold text-base sm:text-lg px-10 py-4 rounded-full hover:brightness-110 transition-all duration-200"
          >
            {data.button}
          </button>
        </div>
      </div>
    </section>
  );
}


