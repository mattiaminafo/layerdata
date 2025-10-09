"use client";

import Header from "../../components/header";

export default function TrainingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Head Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Titolo centrale */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black font-work-sans leading-tight mb-6">
              Formazione & Training
            </h1>
            
            {/* Sottotitolo centrale */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Trasferiamo competenze e facilitiamo l&apos;adozione di processi e tecnologie data-driven per team aziendali
            </p>
          </div>
          
          {/* 2 Foto in 2 colonne centrali */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
            {/* Colonna 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-2xl shadow-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/oneday.jpeg" 
                  alt="Corsi Specializzati"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">📚</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-2">
                Corsi Specializzati
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Formazione mirata su tecnologie specifiche
              </p>
            </div>
            
            {/* Colonna 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-2xl shadow-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/l22.jpeg" 
                  alt="Workshop Pratici"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-green-400 to-green-600 items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">🎯</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-2">
                Workshop Pratici
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Sessioni hands-on per applicazioni reali
              </p>
            </div>
            
            {/* Colonna 3 */}
            
          </div>
        </div>
      </section>
      
      {/* Contenuto aggiuntivo della pagina può essere aggiunto qui */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-work-sans mb-8">
            Pronto a iniziare il tuo percorso formativo?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Contattaci per scoprire i nostri programmi di formazione personalizzati per la tua azienda
          </p>
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Prenota una consulenza
          </a>
        </div>
      </section>
    </div>
  );
}
