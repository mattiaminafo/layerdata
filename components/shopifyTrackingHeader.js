"use client";

import { useTranslations } from "../lib/useTranslations";
import Link from "next/link";

export default function ShopifyTrackingHeader() {
  const { t, currentLang } = useTranslations();

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-start items-center">
        <Link
          href={`/${currentLang}`}
          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-work-sans group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-base font-medium">
            {currentLang === 'en' ? 'Go to the main site' : 'Vai al sito principale'}
          </span>
        </Link>
      </div>
    </header>
  );
}

