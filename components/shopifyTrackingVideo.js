"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ShopifyTrackingVideo() {
  const { t } = useTranslations();
  const data = t("shopifyTracking.video") || {};

  return (
    <section className="section-padding w-full bg-white/5">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-8 text-center">
            {data.title}
          </h2>
          <div className="relative aspect-video bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-white/40"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <p className="text-white/60 font-work-sans text-sm sm:text-base">
                  {data.placeholder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

