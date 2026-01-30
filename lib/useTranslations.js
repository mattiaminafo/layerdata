"use client";
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { it } from './translations/it';
import { en } from './translations/en';

const translations = {
  it,
  en
};

export function useTranslations() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');
  
  useEffect(() => {
    // Extract language from pathname (/en/... or /it/...)
    // Always prioritize window.location for client-side to ensure correct language detection
    let segments = [];
    
    if (typeof window !== 'undefined' && window.location) {
      // Client-side: use window.location as primary source
      segments = window.location.pathname.split('/').filter(Boolean);
    } else if (pathname) {
      // Server-side or when window is not available: use pathname
      segments = pathname.split('/').filter(Boolean);
    }
    
    const lang = segments[0] === 'en' || segments[0] === 'it' ? segments[0] : 'en';
    if (lang !== currentLang) {
      setCurrentLang(lang);
    }
  }, [pathname, currentLang]);
  
  // Initial detection on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location) {
      const segments = window.location.pathname.split('/').filter(Boolean);
      const lang = segments[0] === 'en' || segments[0] === 'it' ? segments[0] : 'en';
      setCurrentLang(lang);
    }
  }, []);
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    if (!value) {
      // Fallback to 'en' if currentLang translations are not available
      value = translations['en'];
    }
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    // Return undefined if not found, so components can handle it properly
    return value !== undefined ? value : undefined;
  };

  return { t, currentLang };
}
