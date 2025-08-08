"use client";
import { useState } from "react";
import Button from "./button";
import { InfoModal } from "./modals";

const packages = [
  {
    name: "Pacchetto Light",
    price: "1500",
    period: "euro/mese",
    features: [
      "Tracking avanzato GA4, GTM server-side, Meta API",
      "Dashboard centralizzate su KPI e vendite reali",
    ],
    extra: [],
    detailedDescription: "Il Pacchetto Light è perfetto per aziende che vogliono iniziare a tracciare correttamente i propri dati digitali. Implementiamo un sistema di tracking completo che ti permette di vedere esattamente cosa succede nel tuo ecosistema digitale.",
    details: [
      { label: "Durata", value: "3 mesi" },
      { label: "Focus", value: "Tracking e Dashboard" },
      { label: "Risultato", value: "Visibilità completa sui dati" },
      { label: "Ideale per", value: "Aziende che iniziano il percorso data-driven" }
    ]
  },
  {
    name: "Pacchetto Medium",
    price: "2500",
    period: "euro/mese",
    features: [
      "Tutto di Light",
      "Centralizzazione dei dati in un unico posto",
      "Automazioni",
      "Insights generation",
    ],
    extra: [],
    detailedDescription: "Il Pacchetto Medium aggiunge automazioni e centralizzazione dei dati. Non solo vedi i dati, ma li usi per automatizzare processi e generare insight strategici che guidano le tue decisioni.",
    details: [
      { label: "Durata", value: "4 mesi" },
      { label: "Focus", value: "Automazioni e Centralizzazione" },
      { label: "Risultato", value: "Processi automatizzati e insight strategici" },
      { label: "Ideale per", value: "Aziende che vogliono scalare con i dati" }
    ]
  },
  {
    name: "Pacchetto Heavy",
    price: "4000",
    period: "euro/mese",
    features: [
      "Tutto di Medium",
      "Creazione Customer Data Platform con ETL e Reverse ETL",
      "Segmentazione comportamentale",
    ],
    extra: [],
    detailedDescription: "Il Pacchetto Heavy è la soluzione completa per aziende che vogliono diventare leader nel proprio settore. Creiamo una Customer Data Platform personalizzata che ti permette di conoscere ogni singolo cliente e personalizzare ogni interazione.",
    details: [
      { label: "Durata", value: "5 mesi" },
      { label: "Focus", value: "Customer Data Platform e Personalizzazione" },
      { label: "Risultato", value: "Conoscenza completa del cliente e personalizzazione avanzata" },
      { label: "Ideale per", value: "Aziende che vogliono dominare il mercato" }
    ]
  },
];

export default function Packages() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="w-full py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center leading-tight">
          Dai 3 ai 5 mesi Creiamo La Tua Macchina per la Crescita
        </h2>
        <h3 className="text-xl md:text-2xl mb-16 text-center">Scegli il tuo pacchetto</h3>

        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="bg-base-100 rounded-2xl shadow-xl flex flex-col items-center p-10 flex-1 min-w-[280px] max-w-md border border-base-200"
            >
              <div className="text-xl font-semibold mb-4 font-poppins text-secondary">{pkg.name}</div>
              <div className="text-4xl font-bold font-gotham mb-2">€{pkg.price}</div>
              <div className="text-base mb-6 text-gray-500">{pkg.period}</div>
              
              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full mb-8">
                <a 
                  href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-active btn-secondary text-xl font-poppins font-semibold"
                >
                  Prenota call
                </a>
                <button 
                  onClick={() => setOpenModal(idx)}
                  className="btn btn-outline border-black text-black hover:bg-black hover:text-white text-base font-poppins font-semibold"
                >
                  Scopri di più
                </button>
              </div>

              <div className="mt-8 w-full">
                <div className="text-base font-semibold mb-4">Comprende:</div>
                <ul className="space-y-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-lg text-secondary font-bold">+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals for each package */}
      {openModal !== null && (
        <InfoModal 
          isOpen={openModal !== null}
          onClose={() => setOpenModal(null)}
          title={packages[openModal].name}
          content={packages[openModal].detailedDescription}
          details={packages[openModal].details}
          size="sm"
        />
      )}
    </section>
  );
}
