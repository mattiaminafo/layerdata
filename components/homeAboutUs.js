"use client";
import { useTranslations } from "../lib/useTranslations";
import Image from "next/image";

export default function HomeAboutUs() {
  const { t } = useTranslations();

  return (
    <section id="home-about-us" className="section-padding w-full bg-bg-primary">
      {/* Energy line */}
      <div className="container-max mb-16">
        <div className="energy-line-alt opacity-20"></div>
      </div>
      
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="heading-secondary font-work-sans mb-6">
              <span className="highlight-primary mx-1">Chi</span> Siamo
            </h2>
            <p className="text-large font-work-sans max-w-3xl mx-auto">
              Due esperti che uniscono competenze tecniche e strategiche per trasformare i dati in valore per le aziende.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mattia */}
            <div className="card border-white/10 p-8 sm:p-10">
              <div className="mb-6 text-center">
                <Image
                  src="/images/mattia.png"
                  alt="Mattia"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border-2 border-highlight-primary mx-auto"
                />
              </div>
              <h3 className="heading-tertiary font-work-sans mb-2">
                <span className="highlight-primary mx-1">Mattia</span>
              </h3>
              <div className="mb-4">
                <a
                  href="https://www.linkedin.com/in/mattiaminafo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-highlight-primary text-highlight-primary hover:bg-highlight-primary hover:text-text-on-highlight font-bold text-sm font-work-sans transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
              <p className="text-body font-work-sans mb-4">
                Data Engineer ex Accenture, specializzato in database management e profilazione comportamentale degli utenti.
              </p>
              <p className="text-body font-work-sans">
                Esperto nella progettazione e gestione di architetture dati complesse, con focus su ottimizzazione delle performance e analisi comportamentale.
              </p>
            </div>

            {/* Enrico */}
            <div className="card border-white/10 p-8 sm:p-10">
              <div className="mb-6 text-center">
                <Image
                  src="/images/enrico.png"
                  alt="Enrico"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border-2 border-highlight-secondary mx-auto"
                />
              </div>
              <h3 className="heading-tertiary font-work-sans mb-2">
                <span className="highlight-secondary mx-1">Enrico</span>
              </h3>
              <div className="mb-4">
                <a
                  href="https://www.linkedin.com/in/enricochiolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-highlight-secondary text-highlight-secondary hover:bg-highlight-secondary hover:text-text-on-highlight font-bold text-sm font-work-sans transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
              <p className="text-body font-work-sans mb-4">
                Growth Engineer, esperto di web analytics e tracciamenti.
              </p>
              <p className="text-body font-work-sans">
                Specializzato nell'implementazione di sistemi di tracking avanzati, analisi dei dati di conversione e ottimizzazione dei funnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

