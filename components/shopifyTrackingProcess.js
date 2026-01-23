"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ShopifyTrackingProcess() {
  const { t } = useTranslations();
  const data = t("shopifyTracking.process") || {};
  const sections = data.sections || [];

  return (
    <section className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-6 text-center">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-work-sans leading-relaxed mb-12 text-center">
            {data.description}
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-[var(--accent-teal)] text-black rounded-full flex items-center justify-center font-bold text-lg font-work-sans">
                    {index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-work-sans">
                    {section.title}
                  </h3>
                </div>
                <p className="text-base text-white/70 font-work-sans leading-relaxed ml-14">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

