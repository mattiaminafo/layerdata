export default function AboutUs() {
  const team = [
    {
      name: "Mattia Minafò",
      role: "Founder & Technical Lead",
      description: "Esperto in data engineering e automazioni. Specializzato nella creazione di infrastrutture tecnicamente solide per e-commerce e SaaS. Appassionato di crescita aziendale guidata dai dati.",
      skills: ["Data Engineering", "Automazioni", "GA4", "GTM", "Python", "SQL"],
    },
    {
      name: "Enrico Chiolo",
      role: "Founder & Growth Strategist",
      description: "Stratega di crescita con focus su ottimizzazione conversioni e customer journey. Esperto in segmentazione comportamentale e personalizzazione avanzata.",
      skills: ["Growth Strategy", "Conversion Optimization", "Customer Journey", "A/B Testing", "Analytics", "Marketing Automation"],
    },
  ];

  return (
    <section className="py-24 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-gotham leading-tight">
        All’inizio ci sembrava superfluo aggiungere un altro punto di vista. Poi abbiamo visto che mancava proprio la struttura tecnica.        </h2>
        
        {/* Immagine rettangolare dei founders */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-2xl">
            <img 
              src="/images/founders.jpg" 
              alt="I nostri founders" 
              className="w-full h-64 object-cover rounded-xl shadow-2xl border-4 border-black"
            />
            <div className="text-center mt-6">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                I Founders
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {team.map((member, index) => (
            <div key={member.name} className="bg-base-100 p-10 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 font-gotham">{member.name}</h3>
              <p className="text-lg text-white mb-6 font-poppins px-4 py-2 rounded-full" style={{backgroundColor: '#41cadf'}}>{member.role}</p>
              
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
