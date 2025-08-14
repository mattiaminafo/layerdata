export default function OurExpertise() {
  return (
    <section id="our-expertise" className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bottone con effetto speciale */}
        <div className="text-center mb-16">
          <button className="relative group px-8 py-4 bg-black text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Cosa Facciamo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
          </button>
        </div>
        
        <div className="space-y-0">
          {/* Servizi per Marketing Technology */}
          <div className="py-8 border-b border-black/20">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Scopri i servizi per le aziende
                </h3>
                <p className="text-lg text-black/80 leading-relaxed max-w-4xl">
                  Soluzioni modulari per monitorare, centralizzare e valorizzare i dati di marketing.
                </p>
              </div>
              <a 
                href="/servizi"
                className="ml-6 text-2xl text-black font-bold hover:text-black/70 transition-colors cursor-pointer"
              >
                →
              </a>
            </div>
          </div>

          {/* MarTech Innovation */}
          <div className="py-8 border-b border-black/20">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Innoviamo Insieme
                </h3>
                <p className="text-lg text-black/80 leading-relaxed max-w-4xl">
                  Dall&apos;idea alla realizzazione, sviluppiamo soluzioni tecnologiche su misura integrando marketing technology e sistemi avanzati per creare vantaggi competitivi concreti.
                </p>
              </div>
              <a 
                href="https://substack.com/@layerdata"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 text-2xl text-black font-bold hover:text-black/70 transition-colors cursor-pointer"
              >
                →
              </a>
            </div>
          </div>

          {/* Training & Workshops */}
          <div className="py-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Training & Workshops
                </h3>
                <p className="text-lg text-black/80 leading-relaxed max-w-4xl">
                  Percorsi formativi e sessioni pratiche per team aziendali, pensati per trasferire competenze e facilitare l&apos;adozione di processi e tecnologie data-driven.
                </p>
              </div>
              <a 
                href="/trainings"
                className="ml-6 text-2xl text-black font-bold hover:text-black/70 transition-colors cursor-pointer"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
