"use client";

import { useTranslations } from "../lib/useTranslations";

export default function ServicesBuild() {
  const { t } = useTranslations();
  const data = t("servicesPage.build") || {};
  const areas = data.areas || [];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <div key={index} className="card h-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-white font-work-sans mb-4">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 font-work-sans leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[var(--accent-teal)] font-semibold">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-teal)]"></span>
                <span>{area.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
