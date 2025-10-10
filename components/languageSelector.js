"use client";
import { useTranslations } from '../lib/useTranslations';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSelector() {
  const { currentLang } = useTranslations();
  const pathname = usePathname();
  
  // Remove language prefix from pathname
  const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '') || '/';
  
  // Map paths between languages
  const pathTranslations = {
    '/services': '/servizi',
    '/servizi': '/services',
    '/products': '/prodotti',
    '/prodotti': '/products',
    '/trainings': '/trainings', // Same in both languages
  };
  
  // Get the translated path for the target language
  const getTranslatedPath = (targetLang) => {
    const translatedPath = pathTranslations[pathWithoutLang] || pathWithoutLang;
    return `/${targetLang}${translatedPath}`;
  };
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getTranslatedPath(lang.code)}
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
            currentLang === lang.code
              ? 'bg-yellow-200 text-black font-semibold'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
        </Link>
      ))}
    </div>
  );
}
