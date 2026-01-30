"use client";
import Clients from "./clients";
import { useTranslations } from "../lib/useTranslations";

export default function Hero() {
  const { t } = useTranslations();
  const hero = t('home.hero') || {};
  const microProof = hero?.microProof || [];

  return (
    <section className="relative overflow-hidden pt-32 pb-32 sm:pt-40 sm:pb-36 lg:pt-48 lg:pb-44 bg-bg-primary">
      {/* Energy line decorative element */}
      <div className="absolute top-20 left-0 right-0 energy-line opacity-30"></div>
      
      <div className="relative z-10 container-max flex flex-col items-center text-center gap-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          {/* Headline - The design itself */}
          <h1 className="heading-primary font-work-sans">
            {hero?.title ? (
              <>
                {hero.title.split(' ').map((word, index, array) => {
                  // Highlight 1-2 key words
                  if (index === 0 || (index === Math.floor(array.length / 2) && array.length > 3)) {
                    return (
                      <span key={index} className="highlight-primary mx-1">
                        {word}
                      </span>
                    );
                  }
                  return <span key={index}> {word} </span>;
                })}
              </>
            ) : ''}
          </h1>

          {/* Subtitle - Short, functional */}
          <p className="text-large font-work-sans max-w-3xl">
            {hero?.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <button
              onClick={() => {
                document.getElementById('home-paths')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary w-full sm:w-auto"
            >
              {hero?.primaryCta}
            </button>

            <button
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline w-full sm:w-auto"
            >
              Prenota una discovery call
            </button>
          </div>

          {/* Micro proof - Minimal */}
          {microProof.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-8 text-body font-work-sans mt-8">
              {microProof.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-highlight-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Clients section - Simple border, no rounded corners */}
        <div className="w-full border border-white/10 bg-bg-primary px-6 py-12 sm:px-8 sm:py-14 mt-8">
          <Clients />
        </div>
      </div>
    </section>
  );
}