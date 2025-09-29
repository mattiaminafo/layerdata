"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Clients() {
  const { t } = useTranslations();
  
  return (
    <section className="w-full flex flex-col items-center py-4 sm:py-6 md:py-8 lg:py-10">
      <h2 className="text-center text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 font-mulish font-medium text-white/80">{t('clients.title')}</h2>
      
      {/* Scrolling logos container */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
          {/* First set of logos */}
          <div className="flex space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20 flex-shrink-0">
            {/* Boolean */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/boolean-logo.png" 
                alt="Boolean" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            
            {/* L22 */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/l22-logo.png" 
                alt="L22" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Fler */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/fler-logo.png" 
                alt="Fler" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* OneDay */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/oneday-logo.webp" 
                alt="OneDay" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* UTRAVEL */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/utravel-logo.png" 
                alt="UTRAVEL" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Rougj */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/rougj-logo.png" 
                alt="Rougj" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Giusti */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/giusti - logo.webp" 
                alt="Giusti" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* 24 */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64">
              <img 
                src="/images/24-logo.png" 
                alt="24" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20 flex-shrink-0">
            {/* Boolean */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/boolean-logo.png" 
                alt="Boolean" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* L22 */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/l22-logo.png" 
                alt="L22" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Fler */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/fler-logo.png" 
                alt="Fler" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* OneDay */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/oneday-logo.webp" 
                alt="OneDay" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* UTRAVEL */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/utravel-logo.png" 
                alt="UTRAVEL" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Rougj */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/rougj-logo.png" 
                alt="Rougj" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* Giusti */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48">
              <img 
                src="/images/giusti - logo.webp" 
                alt="Giusti" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
            {/* 24 */}
            <div className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64">
              <img 
                src="/images/24-logo.png" 
                alt="24" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        @media (min-width: 640px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
        
        @media (min-width: 1024px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
