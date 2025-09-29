"use client";
import { useTranslations } from "../lib/useTranslations";

export default function ServicesFinalCta() {
  const { t } = useTranslations();
  const cta = t('services.finalCta');
  
  return (
    <section className="section-padding gradient-bg">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-white">
            {cta.title}
          </h2>
          <p className="text-large text-white/90 mb-12">
            {cta.description}
          </p>
          <button className="btn-primary text-lg px-8 py-4 bg-white text-[var(--primary-purple)] hover:bg-gray-100">
            {cta.button}
          </button>
        </div>
      </div>
    </section>
  );
}
