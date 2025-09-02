'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    ruolo: '',
    richiesta: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Debug: log the form data being sent
    console.log('Sending form data:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          azienda: '',
          ruolo: '',
          richiesta: ''
        });
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-yellow-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Contattaci
          </h2>
          <p className="text-lg text-black font-normal">
            Hai un progetto in mente? Raccontaci la tua idea e scopriamo insieme come possiamo aiutarti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-black mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                placeholder="la.tua@email.com"
              />
            </div>

            <div>
              <label htmlFor="azienda" className="block text-sm font-bold text-black mb-2">
                Azienda
              </label>
              <input
                type="text"
                id="azienda"
                name="azienda"
                value={formData.azienda}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                placeholder="Nome della tua azienda"
              />
            </div>

            <div>
              <label htmlFor="ruolo" className="block text-sm font-bold text-black mb-2">
                Ruolo
              </label>
              <input
                type="text"
                id="ruolo"
                name="ruolo"
                value={formData.ruolo}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                placeholder="Il tuo ruolo in azienda"
              />
            </div>
          </div>

          <div>
            <label htmlFor="richiesta" className="block text-sm font-bold text-black mb-2">
              Descrivi la tua richiesta *
            </label>
            <textarea
              id="richiesta"
              name="richiesta"
              value={formData.richiesta}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-vertical"
              placeholder="Raccontaci il tuo progetto, le tue esigenze o qualsiasi domanda tu abbia..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-bold">Messaggio inviato con successo!</p>
              <p className="text-sm">Ti risponderemo al più presto.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-bold">Errore nell&apos;invio del messaggio</p>
              <p className="text-sm">Riprova più tardi o contattaci direttamente.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
