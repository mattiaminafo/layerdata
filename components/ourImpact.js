export default function OurImpact() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 lg:py-[170px] relative overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 z-0" style={{backgroundColor: '#ffed05'}}></div>
      
      {/* SVG Background - Commented out
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/shiny.svg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      */}
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
          Creiamo vantaggio competitivo con dati, tecnologia e competenze
        </h2>
      </div>
    </section>
  );
}
