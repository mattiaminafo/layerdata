"use client";

import { useTranslations } from "../lib/useTranslations";

export default function HomeChallenges() {
  const { t } = useTranslations();
  const data = t("home.challenges") || {};
  const items = data.items || [];

  return (
    <section id="home-challenges" className="section-padding w-full bg-bg-primary">
      {/* Energy line */}
      <div className="container-max mb-16">
        <div className="energy-line-alt opacity-20"></div>
      </div>
      
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          {/* Title - Headline dominant */}
          <h2 className="heading-secondary font-work-sans mb-12 text-left">
            {data.title ? (
              <>
                {data.title.split(' ').slice(0, 2).map((word, index) => (
                  <span key={index} className="highlight-primary mx-1">
                    {word}
                  </span>
                ))}
                {data.title.split(' ').slice(2).join(' ')}
              </>
            ) : data.title}
          </h2>

          {/* Intro - Short, functional */}
          <p className="text-large font-work-sans mb-16 text-left">
            {data.intro}
          </p>

          {/* Problem statement */}
          <div className="mb-16">
            <p className="text-body font-work-sans mb-6">
              {data.problem}
            </p>
            <p className="text-body font-work-sans">
              {data.problemDetail}
            </p>
          </div>

          {/* Section title */}
          <h3 className="heading-tertiary font-work-sans mb-8 text-left">
            {data.sectionTitle}
          </h3>

          {/* Section intro */}
          <p className="text-body font-work-sans mb-12">
            {data.sectionIntro}
          </p>

          {/* Challenge items - Simple cards, no rounded corners */}
          <div className="space-y-8 mb-16">
            {items.map((item, index) => (
              <div
                key={index}
                className="card border-white/10 p-8 sm:p-10"
              >
                <h4 className="heading-tertiary font-work-sans mb-4">
                  {item.title}
                </h4>
                <p className="text-body font-work-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <p className="text-large font-work-sans">
            {data.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}



