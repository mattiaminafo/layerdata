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
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-center border-r-4 pr-2 max-w-full overflow-x-auto mb-8" style={{width: "fit-content"}}>
          {displayed}
          <span className="animate-blink">|</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-center max-w-4xl mb-12">
          Ti aiutiamo a creare il tuo ecosistema digitale: Centralizzato. Solido. Automatizzato.
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
        <div className="mb-16">
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-active btn-secondary text-xl font-poppins font-semibold"
          >
            Prenota ora il tuo audit
          </a>
        </div>
      </div>
      
      {/* Clients component appena sotto il bottone */}
      <div className="w-full">
        <Clients />
      </div>
    </main>
  );
}