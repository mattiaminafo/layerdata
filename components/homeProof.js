"use client";

import { useTranslations } from "../lib/useTranslations";

export default function HomeProof() {
  const { t } = useTranslations();
  const data = t("home.proof") || {};
  const stats = data.stats || [];
  const quote = data.quote || {};

  return (
    <section id="home-proof" className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white font-work-sans mb-3">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-white/70 font-work-sans uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {quote.text && (
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-xl sm:text-2xl text-white font-semibold font-work-sans italic mb-4">
              “{quote.text}”
            </p>
            {quote.author && (
              <p className="text-sm sm:text-base text-white/60 font-work-sans uppercase tracking-widest">
                {quote.author}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
