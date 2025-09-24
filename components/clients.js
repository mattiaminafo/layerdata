"use client";
import { useTranslations } from "../lib/useTranslations";

export default function Clients() {
  const { t } = useTranslations();
  
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-center text-base md:text-lg mb-12 font-poppins font-medium">{t('clients.title')}</h2>
      
      {/* Scrolling logos container */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
          {/* First set of logos */}
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 flex-shrink-0">
            {/* Boolean */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/boolean-logo.png" 
                alt="Boolean" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Loop */}
            {/* <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/loop-logo.png" 
                alt="Loop" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div> */}
            
            {/* L22 */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/l22-logo.png" 
                alt="L22" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Fler */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/fler-logo.png" 
                alt="Fler" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* OneDay */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/oneday-logo.webp" 
                alt="OneDay" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* UTRAVEL */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/utravel-logo.png" 
                alt="UTRAVEL" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Rougj */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/rougj-logo.png" 
                alt="Rougj" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Giusti */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/giusti - logo.webp" 
                alt="Giusti" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* 24 */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-64">
              <img 
                src="/images/24-logo.png" 
                alt="24" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 flex-shrink-0">
            {/* Boolean */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/boolean-logo.png" 
                alt="Boolean" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Loop */}
            {/* <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/loop-logo.png" 
                alt="Loop" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div> */}
            {/* L22 */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/l22-logo.png" 
                alt="L22" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Fler */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/fler-logo.png" 
                alt="Fler" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* OneDay */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/oneday-logo.webp" 
                alt="OneDay" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* UTRAVEL */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/utravel-logo.png" 
                alt="UTRAVEL" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Rougj */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/rougj-logo.png" 
                alt="Rougj" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* Giusti */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
              <img 
                src="/images/giusti - logo.webp" 
                alt="Giusti" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </div>
            {/* 24 */}
            <div className="flex flex-col items-center w-32 sm:w-40 md:w-64">
              <img 
                src="/images/24-logo.png" 
                alt="24" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
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
          animation: scroll 12s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 4s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
