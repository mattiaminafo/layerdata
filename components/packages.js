import Button from "./button";

const packages = [
  {
    name: "Pacchetto Light",
    price: "1500",
    period: "euro/mese",
    features: [
      "Tracking avanzato GA4, GTM server-side, Meta API",
      "Dashboard centralizzate su KPI e vendite reali",
    ],
    extra: [],
  },
  {
    name: "Pacchetto Medium",
    price: "2500",
    period: "euro/mese",
    features: [
      "Tutto di Light",
      "Centralizzazione dei dati in un unico posto",
      "Automazioni",
      "Insights generation",
    ],
    extra: [],
  },
  {
    name: "Pacchetto Heavy",
    price: "4000",
    period: "euro/mese",
    features: [
      "Tutto di Medium",
      "Creazione Customer Data Platform con ETL e Reverse ETL",
      "Segmentazione comportamentale",
    ],
    extra: [],
  },
];

export default function Packages() {
  return (
    <section className="w-full py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center leading-tight">
          In 90 Giorni Creiamo La Tua Macchina per la Crescita
        </h2>
        <h3 className="text-xl md:text-2xl mb-16 text-center">Scegli il tuo pacchetto</h3>

        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="bg-base-100 rounded-2xl shadow-xl flex flex-col items-center p-10 flex-1 min-w-[280px] max-w-md border border-base-200"
            >
              <div className="text-xl font-semibold mb-4 font-poppins text-secondary">{pkg.name}</div>
              <div className="text-4xl font-bold font-gotham mb-2">€{pkg.price}</div>
              <div className="text-base mb-6 text-gray-500">{pkg.period}</div>
              <Button cta="Prenota call" />
              <div className="mt-8 w-full">
                <div className="text-base font-semibold mb-4">Comprende:</div>
                <ul className="space-y-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-lg text-secondary font-bold">+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
