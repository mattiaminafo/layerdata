"use client";
import { useEffect, useState } from "react";
import Button from "./button";
import Clients from "./clients";

export default function Hero() {
  const fullText = "LayerData";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-4 sm:py-8 md:py-20">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-center border-r-4 pr-2 max-w-full overflow-x-auto mb-2 sm:mb-4 md:mb-8" style={{width: "fit-content"}}>
          {displayed}
          <span className="animate-blink">|</span>
        </h1>
        <p className="mt-2 sm:mt-4 md:mt-8 text-lg sm:text-xl md:text-2xl text-center max-w-7xl mb-4 sm:mb-6 md:mb-12 font-bold">
        La nostra missione: elevare le imprese attraverso la Marketing Technology.
        </p>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-7xl mb-4 sm:mb-6 md:mb-12">
          Accompagniamo le aziende nel passaggio verso un modello di business più efficiente, competitivo e orientato ai dati. 
          L&apos;innovazione in vantaggi misurabili: processi ottimizzati, decisioni più rapide, crescita sostenibile.
        </p>
        
        <div className="mb-4 sm:mb-8 md:mb-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-base sm:text-lg md:text-xl font-poppins font-semibold px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-auto text-center rounded-full flex items-center justify-center leading-none"
            style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            I servizi per le aziende che vogliono crescere
          </a>
          
          <button className="btn btn-outline border-black bg-black text-white hover:bg-black hover:text-white text-base sm:text-lg md:text-xl font-poppins font-semibold px-4 py-3 sm:px-6 sm:py-4 w-full sm:w-auto text-center rounded-full flex items-center justify-center leading-none"
            style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Opportunità per le aziende che vogliono innovare
          </button>
        </div>
        
      </div>
      
      {/* Clients component appena sotto il bottone */}
      <div className="w-full">
        <Clients />
      </div>
    </main>
  );
}