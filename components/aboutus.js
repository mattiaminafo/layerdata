"use client";
import { useTranslations } from "../lib/useTranslations";

export default function AboutUs() {
  const { t } = useTranslations();
  const team = t('aboutUs.team');

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-gotham leading-tight">
        {t('aboutUs.title')}        </h2>
        
        {/* Immagine rettangolare dei founders */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <div className="w-full max-w-2xl">
            <img 
              src="/images/founders.jpg" 
              alt="I nostri founders" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-2xl border-2 sm:border-4 border-black"
            />
            <div className="text-center mt-4 sm:mt-6">
              <span className="bg-black text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
                {t('aboutUs.foundersLabel')}
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-12 md:mt-16">
          {team.map((member, index) => (
            <div key={member.name} className="bg-base-100 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold font-gotham">{member.name}</h3>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`LinkedIn di ${member.name}`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-lg text-black mb-6 font-poppins px-4 py-2 rounded-full" style={{backgroundColor: '#41cadf'}}>{member.role}</p>
              
              <p className="text-base leading-relaxed mb-8">
                {member.description}
              </p>
              
              {/* Skills tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black text-white text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
