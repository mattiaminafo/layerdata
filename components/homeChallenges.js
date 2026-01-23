"use client";

import { useTranslations } from "../lib/useTranslations";

export default function HomeChallenges() {
  const { t } = useTranslations();
  const data = t("home.challenges") || {};
  const items = data.items || [];

  return (
    <section id="home-challenges" className="section-padding w-full">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-work-sans mb-8 text-center">
            {data.title}
          </h2>

          {/* Intro */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-work-sans mb-8 text-center">
            {data.intro}
          </p>

          {/* Problem statement */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-work-sans mb-4">
              {data.problem}
            </p>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-work-sans">
              {data.problemDetail}
            </p>
          </div>

          {/* Section title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-work-sans mb-6">
            {data.sectionTitle}
          </h3>

          {/* Section intro */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-work-sans mb-10">
            {data.sectionIntro}
          </p>

          {/* Challenge items */}
          <div className="space-y-6 mb-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white font-work-sans mb-3">
                  {item.title}
                </h4>
                <p className="text-base text-white/70 font-work-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-work-sans">
            {data.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}


