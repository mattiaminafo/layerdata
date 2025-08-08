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
        <div className="text-2xl font-bold font-gotham">
          LayerData
        </div>

        {/* Desktop Navigation buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-lg font-poppins font-semibold px-6 py-3"
          >
            Prenota una call
          </a>

          {/* Community button */}
          <a 
            href="https://substack.com/@nullfactory"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-lg font-poppins font-semibold px-6 py-3"
          >
            Scopri la nostra community
          </a>

          {/* Black trembling button - Non so cosa mi serve */}
          <button 
            className={`btn bg-black text-white text-lg font-poppins font-semibold px-6 py-3 transition-all duration-200 ${
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
        <div className="flex flex-col space-y-4 p-4">
          {/* Blue button - Prenota una call */}
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-base font-poppins font-semibold w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Prenota una call
          </a>

          {/* Community button */}
          <a 
            href="https://substack.com/@nullfactory"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black text-base font-poppins font-semibold w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Scopri la nostra community
          </a>

          {/* Black trembling button - Non so cosa mi serve */}
          <button 
            className={`btn bg-black text-white text-base font-poppins font-semibold w-full transition-all duration-200 ${
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

      {/* Modal */}
      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Non sai cosa ti serve? Nessun problema!"
        content="Siamo qui per aiutarti a capire come possiamo supportare la tua azienda. Che tu abbia bisogno di tracciamento e-commerce, automazioni di marketing, dashboard personalizzate o formazione del team, il nostro approccio è sempre lo stesso: prima ascoltiamo, poi proponiamo una soluzione su misura per te."
        details={[
          { label: "🎯", value: "Audit gratuito del tuo ecosistema digitale" },
          { label: "📊", value: "Analisi dei dati e identificazione delle opportunità" },
          { label: "🚀", value: "Proposta personalizzata per la tua azienda" },
          { label: "💡", value: "Consulenza strategica senza impegno" }
        ]}
        size="sm"
      />
    </header>
  );
}
