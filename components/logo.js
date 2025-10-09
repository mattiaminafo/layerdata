"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Logo({ className = "" }) {
  const { currentLang } = useTranslations();

  return (
    <a 
      href={`/${currentLang}`} 
      className={`transition-colors ${className}`}
    >
      {/* Logo Image Only */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
        <img 
          src="/images/logo_layerdata.png" 
          alt="LayerData Logo" 
          className="w-full h-full object-contain hover:opacity-80 transition-opacity"
        />
      </div>
    </a>
  );
}
