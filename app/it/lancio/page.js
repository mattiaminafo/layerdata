"use client";
import { useState } from "react";

export default function LancioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Landing Page Lancio"
        }),
      });

      if (response.ok) {
        setSubmitMessage("Grazie! Ti contatteremo presto.");
        setFormData({ name: "", email: "", phone: "", company: "" });
      } else {
        setSubmitMessage("Si è verificato un errore. Riprova più tardi.");
      }
    } catch (error) {
      setSubmitMessage("Si è verificato un errore. Riprova più tardi.");
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-work-sans">
            🚀 Offerta Speciale di Lancio
          </h1>
          <p className="text-xl md:text-2xl text-black font-work-sans mb-8">
            Trasforma i tuoi dati in crescita concreta
          </p>
          <p className="text-lg text-black font-work-sans max-w-2xl mx-auto">
            Approfitta della nostra offerta esclusiva per implementare soluzioni di analytics e marketing technology che fanno la differenza.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Analytics Avanzate
            </h3>
            <p className="text-black font-work-sans">
              Implementazione completa di GA4, GTM e strumenti di tracking personalizzati
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Automazione Marketing
            </h3>
            <p className="text-black font-work-sans">
              Setup completo di automation flows e integrazione con i tuoi tool
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Dashboard Custom
            </h3>
            <p className="text-black font-work-sans">
              Report personalizzati e dashboard interattive per decisioni data-driven
            </p>
          </div>
        </div>

        {/* CTA Section with Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-black mb-4 text-center font-work-sans">
            Richiedi la Tua Consulenza Gratuita
          </h2>
          <p className="text-center text-black font-work-sans mb-8">
            Compila il form e ti contatteremo entro 24 ore per discutere la tua strategia personalizzata
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-black font-bold mb-2 font-work-sans">
                Nome e Cognome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Mario Rossi"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black font-bold mb-2 font-work-sans">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="mario@azienda.it"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-black font-bold mb-2 font-work-sans">
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="+39 333 123 4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-black font-bold mb-2 font-work-sans">
                Azienda
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Nome dell'azienda"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-work-sans"
            >
              {isSubmitting ? "Invio in corso..." : "🚀 Richiedi Consulenza Gratuita"}
            </button>

            {submitMessage && (
              <div className={`text-center p-4 rounded-lg ${
                submitMessage.includes("Grazie") 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-black font-work-sans mb-4">
            <span className="font-bold">✅ Nessun impegno</span> • <span className="font-bold">✅ Consulenza gratuita</span> • <span className="font-bold">✅ Risposta in 24h</span>
          </p>
        </div>
      </div>
    </div>
  );
}


