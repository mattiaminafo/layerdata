"use client";

import Link from "next/link";
import { useTranslations } from "../lib/useTranslations";

export default function HomeSystem() {
  const { t } = useTranslations();
  const data = t("home.system") || {};
  const modules = data.modules || [];

  return (
    <section id="home-system" className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-6">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed font-work-sans">
            {data.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {modules.map((module, index) => {
            const isExternal = module.href?.startsWith("http");
            const card = (
              <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white font-work-sans">
                      {module.name}
                    </h3>
                    <span className="text-sm text-white/60 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-base text-white/70 font-work-sans leading-relaxed">
                    {module.description}
                  </p>
                </div>
                {module.cta && (
                  <span className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-semibold mt-8 text-base">
                    {module.cta}
                  </span>
                )}
              </div>
            );

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={module.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link key={index} href={module.href || "#"}>
                {card}
              </Link>
            );
          })}
        </div>

        {data.microclaim && (
          <p className="text-center text-sm sm:text-base text-white/60 font-work-sans mt-10">
            {data.microclaim}
          </p>
        )}
      </div>
    </section>
  );
}
