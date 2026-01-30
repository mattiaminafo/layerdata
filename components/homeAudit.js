"use client";
import { useTranslations } from "../lib/useTranslations";

export default function HomeAudit() {
  const { t } = useTranslations();

  return (
    <section id="home-audit" className="section-padding w-full bg-bg-primary">
      {/* Energy line */}
      <div className="container-max mb-16">
        <div className="energy-line-alt opacity-20"></div>
      </div>
      
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="heading-secondary font-work-sans mb-12 text-left">
            <span className="highlight-primary mx-1">Sempre</span> un primo audit per mappare l'azienda
          </h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-large font-work-sans text-left">
              Prima di iniziare qualsiasi progetto, facciamo sempre un audit completo per mappare la struttura aziendale, i processi esistenti e i dati attuali. Questo ci permette di capire esattamente dove intervenire e come ottimizzare.
            </p>
            
            <div className="card border-white/10 p-8 sm:p-10 mt-12">
              <h3 className="heading-tertiary font-work-sans mb-6">
                Cosa mappiamo nell'audit
              </h3>
              <ul className="space-y-4">
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
            </div>

            <div className="mt-12">
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
        </div>
      </div>
    </section>
  );
}

