"use client";

import Link from "next/link";
import { useTranslations } from "../lib/useTranslations";

export default function HomeLayerHub() {
  const { t } = useTranslations();
  const data = t("home.layerhub") || {};
  const highlights = data.highlights || [];
  const ctaHref = data.ctaHref || "#";
  const isExternal = ctaHref.startsWith("http");

  const ctaElement = (
    <span className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-black bg-[var(--accent-lime)] px-6 py-3 rounded-full hover:brightness-110 transition-all duration-200">
      {data.cta}
    </span>
  );

  return (
    <section id="home-layerhub" className="section-padding w-full">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-4">
              {data.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-work-sans leading-relaxed mb-6">
              {data.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-teal)]"></span>
                  <p className="text-base text-white/70 font-work-sans leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {isExternal ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaElement}
              </a>
            ) : (
              <Link href={ctaHref}>{ctaElement}</Link>
            )}

            {data.microcopy && (
              <p className="text-sm text-white/60 font-work-sans mt-4">
                {data.microcopy}
              </p>
            )}
          </div>

          <div className="relative w-full h-full">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="col-span-2 bg-black/40 border border-white/10 rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3rem] text-white/60 font-semibold mb-2">LayerHub</p>
                  <p className="text-sm text-white/80 font-mono">Live Events Stream</p>
                </div>
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                  <p className="text-xs text-white/50 uppercase font-semibold mb-1">KPI</p>
                  <p className="text-lg text-white font-semibold">Conversion Rate</p>
                  <p className="text-sm text-[var(--accent-teal)] font-mono mt-2">+12.4%</p>
                </div>
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                  <p className="text-xs text-white/50 uppercase font-semibold mb-1">Audience</p>
                  <p className="text-lg text-white font-semibold">High intent</p>
                  <p className="text-sm text-white/70 font-work-sans mt-2">Synced with Meta + GA4</p>
                </div>
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4 col-span-2">
                  <p className="text-xs text-white/50 uppercase font-semibold mb-1">Signals</p>
                  <ul className="text-sm text-white/70 font-mono space-y-1">
                    <li>• Purchase event validated (API + Pixel)</li>
                    <li>• CRM match rate 92%</li>
                    <li>• Spend alert triggered</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
