"use client";
import Clients from "./clients";
import { useTranslations } from "../lib/useTranslations";

export default function Hero() {
  const { t } = useTranslations();
  const hero = t('home.hero') || {};
  const microProof = hero?.microProof || [];

  return (
    <section className="relative overflow-hidden pt-32 pb-32 sm:pt-40 sm:pb-36 lg:pt-48 lg:pb-44">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-darker)] via-[var(--primary-dark)] to-black"></div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-[radial-gradient(circle_at_top,#1f2b3a_0%,transparent_55%)] opacity-70"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[45%] bg-[radial-gradient(circle_at_bottom,#11202f_0%,transparent_65%)] opacity-60"></div>

      <div className="relative z-10 container-max flex flex-col items-center text-center gap-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-work-sans leading-tight">
            {(hero?.title || '').toUpperCase()}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 font-work-sans leading-relaxed max-w-3xl">
            {hero?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                document.getElementById('home-paths')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[var(--accent-lime)] text-black px-10 py-4 font-semibold rounded-full hover:brightness-110 transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
            >
              {hero?.primaryCta}
            </button>

            <button
              onClick={() => {
                document.getElementById('home-layerhub')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/5 backdrop-blur sm border border-[var(--border-strong)] text-white px-10 py-4 font-semibold rounded-full hover:bg-white/10 transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
            >
              {hero?.secondaryCta}
            </button>
          </div>

          {microProof.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-white/70 font-work-sans">
              {microProof.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-lime)]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-12 sm:px-8 sm:py-14">
          <Clients />
        </div>
      </div>
    </section>
  );
}