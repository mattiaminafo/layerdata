"use client";

import { useEffect, useState } from "react";
import Button from "./button";

export default function ServiceHeader() {
  const fullText = "I Nostri Servizi";
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
    <section className="w-full py-16 sm:py-32 md:py-60 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-black">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-gotham mb-4 sm:mb-6 text-black border-r-4 pr-2 mx-auto" style={{width: "fit-content"}}>
          {displayed}
          <span className="animate-blink">|</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/90 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          Trasformiamo la tua azienda attraverso soluzioni innovative di Marketing Technology, 
          automazioni avanzate e formazione specializzata
        </p>
        
        {/* Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => {
              document.getElementById('packages-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="btn btn-active btn-secondary text-base sm:text-lg md:text-xl font-poppins font-semibold px-4 py-3 sm:px-6 sm:py-4"
          >
            Scopri i Servizi
          </button>
        </div>
        
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
