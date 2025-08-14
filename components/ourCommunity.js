import Button from "./button";

export default function OurCommunity() {
  return (
    <section className="w-full py-[100px] relative overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/animated.svg" 
          alt="Animated background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black-900 mb-6 font-gotham leading-tight">
            Non siamo solo consulenti ma anche divulgatori, unisciti e contribuisci alla Community!
          </h2>
          
          {/* Profile Pictures Row */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex -space-x-4">
              {/* Placeholder profile pictures - you can replace with actual images */}
              <div className="w-16 h-16 rounded-full bg-blue-200 border-4 border-white flex items-center justify-center text-blue-600 font-bold text-sm">M</div>
              <div className="w-16 h-16 rounded-full bg-blue-300 border-4 border-white flex items-center justify-center text-blue-700 font-bold text-sm">E</div>
              <div className="w-16 h-16 rounded-full bg-blue-400 border-4 border-white flex items-center justify-center text-blue-800 font-bold text-sm">C</div>
              <div className="w-16 h-16 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-white font-bold text-sm">L</div>
              <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white font-bold text-sm">D</div>
              <div className="w-16 h-16 rounded-full bg-blue-700 border-4 border-white flex items-center justify-center text-white font-bold text-sm">A</div>
              <div className="w-16 h-16 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center text-white font-bold text-sm">G</div>
            </div>
          </div>
          
          {/* Button */}
          <Button cta="Scopri la community" />
        </div>
      </div>
    </section>
  );
}
