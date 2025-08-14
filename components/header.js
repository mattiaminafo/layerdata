"use client";
import { useEffect, useState } from "react";
import { InfoModal } from "./modals";

export default function Header() {
  const [isTrembling, setIsTrembling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTrembling(true);
      setTimeout(() => setIsTrembling(false), 1000); // Tremble for 1 second
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold font-gotham hover:text-gray-700 transition-colors">
          LayerData
        </a>

        {/* Desktop Navigation buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors"
          >
           Prenota una call
          </a>

          {/* Menu dropdown - Per le aziende che vogliono crescere */}
          <div className="relative group">
            <button className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors flex items-center">
              Crescita & Servizi
              <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a 
                href="/servizi"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors text-sm"
              >
                Servizi
              </a>
              <a 
                href="/trainings"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors border-t border-gray-100 text-sm"
              >
                Formazione
              </a>
            </div>
          </div>

          {/* Open Innovation - No dropdown */}
          <a 
            href="https://substack.com/@layerdata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors"
          >
            Community & Learn
          </a>

          {/* Info button - Non so cosa mi serve */}
          <button 
            className={`text-black hover:text-gray-700 font-medium text-sm py-2.5 px-4 transition-colors ${
              isTrembling ? 'animate-pulse' : ''
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            Non so cosa mi serve
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="flex flex-col space-y-3 p-3">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-sm font-poppins font-semibold w-full py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Prenota una call
          </a>

          {/* Per le aziende che vogliono crescere */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-600 px-2 py-1">
              Per le aziende che vogliono crescere
            </div>
            <a 
              href="/servizi"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servizi
            </a>
            <a 
              href="/trainings"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Formazione
            </a>
          </div>

          {/* Open Innovation */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-600 px-2 py-1">
              Per le aziende che vogliono innovare
            </div>
            <a 
              href="https://substack.com/@layerdata"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-sm font-poppins font-semibold w-full py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community & Learn
            </a>
          </div>

          {/* Black trembling button - Non so cosa mi serve */}
          <button 
            className={`btn bg-black text-white text-sm font-poppins font-semibold py-2 transition-all duration-200 ${
              isTrembling ? 'animate-pulse' : ''
            }`}
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
          >
            Non so cosa mi serve
          </button>
        </div>
      </div>

      {/* Modal - Non so cosa mi serve */}
      <InfoModal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Community annuale + Consulenza su misura"
  content={
    "Abbiamo un servizio Community: con un abbonamento annuale la tua azienda accede a masterclass, sessioni live e aggiornamenti continui su tracking, web analytics, marketing technology, AI e data governance.\n\n" +
    "Siamo qui per aiutarti a capire come possiamo supportare la tua azienda. Che tu abbia bisogno di tracciamento e-commerce, automazioni di marketing, dashboard personalizzate o formazione del team, il nostro approccio è sempre lo stesso: prima ascoltiamo, poi proponiamo una soluzione su misura per te."
  }
  details={[
    { label: "👥", value: "Community annuale: masterclass, live e aggiornamenti continui" },
    { label: "🎯", value: "Audit gratuito del tuo ecosistema digitale" },
    { label: "📊", value: "Analisi dei dati e identificazione delle opportunità" },
    { label: "🚀", value: "Proposta personalizzata per la tua azienda" }
  ]}
  size="sm"
/>


    </header>
  );
}
