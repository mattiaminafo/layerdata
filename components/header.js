"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isTrembling, setIsTrembling] = useState(false);

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

        {/* Navigation buttons */}
        <div className="flex items-center gap-4">
          {/* Blue button - Prenota una call */}
          <button className="btn btn-active btn-secondary text-lg font-poppins font-semibold px-6 py-3">
            Prenota una call
          </button>

          {/* Black trembling button - Non so cosa mi serve */}
          <button 
            className={`btn bg-black text-white text-lg font-poppins font-semibold px-6 py-3 transition-all duration-200 ${
              isTrembling ? 'animate-pulse' : ''
            }`}
          >
            Non so cosa mi serve
          </button>
        </div>
      </div>
    </header>
  );
}
