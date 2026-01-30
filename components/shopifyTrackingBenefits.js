"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ShopifyTrackingBenefits() {
  const { t } = useTranslations();
  const data = t("shopifyTracking.benefits") || {};
  const items = data.items || [];

  return (
    <section className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-12 text-center">
            {data.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-work-sans mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-white/70 font-work-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


