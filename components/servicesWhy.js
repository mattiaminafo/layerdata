"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ServicesWhy() {
  const { t } = useTranslations();
  const data = t("servicesPage.why") || {};
  const points = data.points || [];

  return (
    <section className="section-padding bg-[var(--surface-card)] border-y border-[var(--border-subtle)]">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-[var(--border-subtle)]">
              <span className="inline-flex h-3 w-3 rounded-full bg-[var(--accent-lime)] mt-2"></span>
              <p className="text-sm sm:text-base text-white/75 font-work-sans leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
