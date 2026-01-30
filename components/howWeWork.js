"use client";
import { useTranslations } from "../lib/useTranslations";

export default function HowWeWork() {
  const { t } = useTranslations();
  const data = t("howWeWork");

  if (!data) return null;

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-primary font-work-sans mb-6">
              {data.title ? (
                <>
                  {data.title.split(' ').slice(0, 1).map((word, index) => (
                    <span key={index} className="highlight-primary mx-1">
                      {word}
                    </span>
                  ))}
                  {data.title.split(' ').slice(1).join(' ')}
                </>
              ) : data.title}
            </h1>
            <h2 className="heading-secondary font-work-sans mb-6">
              {data.subtitle}
            </h2>
            <p className="text-large font-work-sans mb-8">
              {data.description}
            </p>
            <p className="text-body font-work-sans max-w-3xl mx-auto">
              {data.body}
            </p>
          </div>

          {/* Audit Section */}
          <div className="mb-16">
            <div className="energy-line opacity-20 mb-12"></div>
            <div className="card border-white/10 p-8 sm:p-10">
              <h2 className="heading-secondary font-work-sans mb-8">
                <span className="highlight-primary mx-1">Sempre</span> un primo audit per mappare l'azienda
              </h2>
              <p className="text-large font-work-sans mb-8">
                Prima di iniziare qualsiasi progetto, facciamo sempre un audit completo per mappare la struttura aziendale, i processi esistenti e i dati attuali. Questo ci permette di capire esattamente dove intervenire e come ottimizzare.
              </p>
              
              <h3 className="heading-tertiary font-work-sans mb-6">
                Cosa mappiamo nell'audit
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-body font-work-sans">
                  <span className="inline-block w-2 h-2 bg-highlight-primary mt-2 flex-shrink-0"></span>
                  <span>Struttura organizzativa e flussi di lavoro</span>
                </li>
                <li className="flex items-start gap-3 text-body font-work-sans">
                  <span className="inline-block w-2 h-2 bg-highlight-primary mt-2 flex-shrink-0"></span>
                  <span>Sistemi e strumenti già in uso</span>
                </li>
                <li className="flex items-start gap-3 text-body font-work-sans">
                  <span className="inline-block w-2 h-2 bg-highlight-primary mt-2 flex-shrink-0"></span>
                  <span>Fonti dati e loro integrazione</span>
                </li>
                <li className="flex items-start gap-3 text-body font-work-sans">
                  <span className="inline-block w-2 h-2 bg-highlight-primary mt-2 flex-shrink-0"></span>
                  <span>Punti critici e aree di miglioramento</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Prenota una discovery call
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="card border-white/10 p-6 sm:p-8"
              >
                <h3 className="heading-tertiary font-work-sans mb-4">
                  {benefit.title}
                </h3>
                <p className="text-body font-work-sans">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


