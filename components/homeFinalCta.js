"use client";

import Link from "next/link";
import { useTranslations } from "../lib/useTranslations";

export default function HomeFinalCta() {
  const { t } = useTranslations();
  const data = t("home.finalCta") || {};
  const options = data.options || [];

  return (
    <section id="home-final" className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-4">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/75 font-work-sans leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => {
            const isExternal = option.href?.startsWith("http");
            const card = (
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-sm uppercase tracking-[0.4rem] text-white/40 font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold text-white font-work-sans mt-4 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-base text-white/70 font-work-sans leading-relaxed">
                    {option.description}
                  </p>
                </div>
                {option.cta && (
                  <span className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-semibold mt-8 text-base">
                    {option.cta}
                  </span>
                )}
              </div>
            );

            if (isExternal) {
              return (
                <a key={index} href={option.href} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              );
            }

            return (
              <Link key={index} href={option.href || "#"}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
