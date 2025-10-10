"use client";

import Header from "../../../components/header";

export default function EnTrainingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Head Section */}
      <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Titolo centrale */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black font-work-sans leading-tight mb-6">
              Training & Education
            </h1>
            
            {/* Sottotitolo centrale */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We transfer skills and facilitate the adoption of data-driven processes and technologies for corporate teams
            </p>
          </div>
          
          {/* 2 Foto in 2 colonne centrali */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
            {/* Colonna 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-2xl shadow-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/oneday.jpeg" 
                  alt="Specialized Courses"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">📚</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-2">
                Specialized Courses
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Targeted training on specific technologies
              </p>
            </div>
            
            {/* Colonna 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-2xl shadow-xl mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/l22.jpeg" 
                  alt="Practical Workshops"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-green-400 to-green-600 items-center justify-center">
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">🎯</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center mb-2">
                Practical Workshops
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Hands-on sessions for real applications
              </p>
            </div>
            
            {/* Colonna 3 */}
            
          </div>
        </div>
      </section>
      
      {/* Contenuto aggiuntivo della pagina può essere aggiunto qui */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-work-sans mb-8">
            Ready to start your training journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Contact us to discover our personalized training programs for your company
          </p>
          <a 
            href="https://calendar.notion.so/meet/mattiaminaf/of3pa4oup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Book a consultation
          </a>
        </div>
      </section>
    </div>
  );
}
