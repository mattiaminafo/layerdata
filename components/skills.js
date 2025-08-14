export default function Skills() {
  const skills = [
    // First row
   "Data Scientist",
"Web Analytics Specialist",
"Machine Learning Engineer",
"Data Engineer",
"AI Engineer",
"Marketing Technology Specialist",
"Data Governance Consultant",
"Business Intelligence Analyst",

// Second row
"Database Administrator",
"Data Visualization Engineer",
"Generative AI Engineer",
"Customer Data Platform (CDP) Architect",
"Marketing Data Analyst",
"Data Governance Engineer",
"Cloud Data Solutions Architect"
  ];

  const colors = [
    "bg-yellow-400",      // Yellow/Orange
    "bg-green-300",       // Light Green
    "bg-red-300",         // Light Red/Pink
    "bg-cyan-400",        // Teal/Cyan
    "bg-blue-300",        // Light Blue
    "bg-yellow-400",      // Yellow/Orange
    "bg-green-300",       // Light Green
    "bg-red-300",         // Light Red/Pink
    "bg-cyan-400",        // Teal/Cyan
    "bg-blue-300",        // Light Blue
    "bg-yellow-400",      // Yellow/Orange
    "bg-green-300",       // Light Green
    "bg-red-300",         // Light Red/Pink
    "bg-cyan-400",        // Teal/Cyan
    "bg-blue-300"         // Light Blue
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Top Button */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <button className="bg-black text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-black-800 transition-colors">
            Le nostre specialità
          </button>
        </div>

        {/* Skills Grid - First Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {skills.slice(0, 8).map((skill, index) => (
            <div 
              key={index}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-center"
              style={{backgroundColor: '#fff789'}}
            >
              <span className="text-black font-semibold text-xs sm:text-sm leading-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid - Second Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.slice(8).map((skill, index) => (
            <div 
              key={index + 8}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-center"
              style={{backgroundColor: '#fff789'}}
            >
              <span className="text-black font-semibold text-xs sm:text-sm leading-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
