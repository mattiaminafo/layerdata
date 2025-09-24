"use client";
import { useParams, usePathname } from 'next/navigation';
import { it } from './translations/it';
import { en } from './translations/en';

const translations = {
  it,
  en
};

export function useTranslations() {
  const params = useParams();
  const pathname = usePathname();
  
  // Extract language from pathname (/en/... or /it/...)
  const segments = pathname.split('/').filter(Boolean);
  const currentLang = segments[0] === 'en' || segments[0] === 'it' ? segments[0] : 'en';
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, currentLang };
}
