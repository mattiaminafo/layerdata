export default function Clients() {
  return (
    <section className="w-full  flex flex-col items-center">
      <h2 className="text-center text-base md:text-lg mb-12 font-poppins font-medium">Alcune collaborazioni con...</h2>
      <div className="w-full flex flex-wrap justify-center gap-y-12 gap-x-12 md:gap-x-20 lg:gap-x-28">
        {/* Boolean */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/boolean-logo.png" 
            alt="Boolean" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Loop */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/loop-logo.png" 
            alt="Loop" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* L22 */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/l22-logo.png" 
            alt="L22" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Fler */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/fler-logo.png" 
            alt="Fler" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* OneDay */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/oneday-logo.webp" 
            alt="OneDay" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* UTRAVEL */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/utravel-logo.png" 
            alt="UTRAVEL" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Rougj */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/rougj-logo.png" 
            alt="Rougj" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Giusti */}
        <div className="flex flex-col items-center w-32">
          <img 
            src="/images/giusti - logo.webp" 
            alt="Giusti" 
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* 24 */}
        <div className="flex flex-col items-center w-48">
          <img 
            src="/images/24-logo.png" 
            alt="24" 
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
