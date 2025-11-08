"use client";

import Link from "next/link";
import { useTranslations } from "../lib/useTranslations";

export default function HomePaths() {
  const { t } = useTranslations();
  const data = t("home.paths") || {};
  const items = data.items || [];

  const handleCtaScroll = () => {
    document.getElementById("home-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home-paths" className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-6">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-work-sans">
            {data.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => {
            const isExternal = item.href?.startsWith("http");
            const cardContent = (
              <div className="flex flex-col h-full justify-between bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <span className="text-sm uppercase tracking-widest text-[var(--accent-teal)] font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold text-white font-work-sans mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/70 font-work-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.cta && (
                  <span className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-semibold mt-8 text-base">
                    {item.cta}
                  </span>
                )}
              </div>
            );

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link key={index} href={item.href || "#"}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {data.cta && (
          <div className="text-center mt-12">
            <button
              onClick={handleCtaScroll}
              className="inline-flex items-center justify-center bg-[var(--accent-lime)] text-black font-semibold text-base sm:text-lg px-8 py-4 rounded-full hover:brightness-110 transition-all duration-200"
            >
              {data.cta}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
