"use client";

import Link from "next/link";
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
          {areas.map((area, index) => {
            const isExternal = area.href?.startsWith("http");
            const buttonContent = area.cta && (
              <span className="inline-flex items-center justify-center bg-[var(--accent-teal)] text-black font-semibold px-5 py-2.5 rounded-full text-sm sm:text-base hover:brightness-110 transition-all duration-200">
                {area.cta}
              </span>
            );
            const secondaryButton = area.secondaryCta && (
              <span className="inline-flex items-center justify-center border border-[var(--border-strong)] text-white font-semibold px-5 py-2.5 rounded-full text-sm sm:text-base hover:bg-white/10 transition-all duration-200">
                {area.secondaryCta}
              </span>
            );

            return (
              <div key={index} className="card h-full flex flex-col gap-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs sm:text-sm font-mono tracking-[0.4rem] text-white/50">
                    {area.code}
                  </span>
                  <span className="text-xs uppercase tracking-[0.4rem] text-white/40 font-semibold">
                    MODULE
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white font-work-sans mb-3">
                    {area.name || area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-work-sans leading-relaxed">
                    {area.description}
                  </p>
                </div>
                {area.purpose && (
                  <div className="bg-white/5 border border-[var(--border-subtle)] rounded-xl p-4">
                    <p className="text-sm sm:text-base text-white/75 font-work-sans leading-relaxed">
                      {area.purpose}
                    </p>
                  </div>
                )}
                {Array.isArray(area.whatWeDo) && area.whatWeDo.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3rem] text-white/50 font-semibold mb-3">
                      What we do
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-white/70 font-work-sans leading-relaxed">
                      {area.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--accent-lime)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(area.whatYouGet) && area.whatYouGet.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3rem] text-white/50 font-semibold mb-3">
                      What you get
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-white/70 font-work-sans leading-relaxed">
                      {area.whatYouGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--accent-teal)]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {area.price && (
                  <p className="text-sm font-semibold text-[var(--accent-lime)] font-work-sans">
                    {area.price}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  {area.cta && (
                    isExternal ? (
                      <a href={area.href} target="_blank" rel="noopener noreferrer">
                        {buttonContent}
                      </a>
                    ) : (
                      <Link href={area.href || "#"}>{buttonContent}</Link>
                    )
                  )}
                  {secondaryButton && (
                    isExternal ? (
                      <a href={area.href} target="_blank" rel="noopener noreferrer">
                        {secondaryButton}
                      </a>
                    ) : (
                      <Link href={area.href || "#"}>{secondaryButton}</Link>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
