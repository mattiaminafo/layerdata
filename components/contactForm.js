'use client';

import { useState } from 'react';
import { useTranslations } from '../lib/useTranslations';

export default function ContactForm() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    ruolo: '',
    richiesta: '',
    messaggio: ''
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
          richiesta: '',
          messaggio: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-bg-primary">
      {/* Energy line */}
      <div className="container-max mb-16">
        <div className="energy-line opacity-20"></div>
      </div>
      
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary font-work-sans mb-6">
              {t('contactForm.title') ? (
                <>
                  {t('contactForm.title').split(' ').slice(0, 1).map((word, index) => (
                    <span key={index} className="highlight-primary mx-1">
                      {word}
                    </span>
                  ))}
                  {t('contactForm.title').split(' ').slice(1).join(' ')}
                </>
              ) : t('contactForm.title')}
            </h2>
            <p className="text-large font-work-sans">
              {t('contactForm.subtitle')}
            </p>
          </div>

          <div className="card max-w-2xl mx-auto border-white/10 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                    {t('contactForm.name')}
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors font-work-sans"
                    placeholder={t('contactForm.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                    {t('contactForm.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors font-work-sans"
                    placeholder={t('contactForm.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="azienda" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                    {t('contactForm.company')}
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors font-work-sans"
                    placeholder={t('contactForm.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="ruolo" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                    {t('contactForm.role')}
                  </label>
                  <input
                    type="text"
                    id="ruolo"
                    name="ruolo"
                    value={formData.ruolo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors font-work-sans"
                    placeholder={t('contactForm.rolePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="richiesta" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                  {t('contactForm.request')}
                </label>
                <textarea
                  id="richiesta"
                  name="richiesta"
                  value={formData.richiesta}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors resize-vertical font-work-sans"
                  placeholder={t('contactForm.requestPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-bold text-text-primary mb-3 font-work-sans">
                  {t('contactForm.message')}
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-white/20 bg-bg-primary text-text-primary placeholder:text-text-secondary focus:border-highlight-primary focus:outline-none transition-colors resize-vertical font-work-sans"
                  placeholder={t('contactForm.messagePlaceholder')}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-base sm:text-lg w-full sm:w-auto"
                >
                  {isSubmitting ? t('contactForm.submitting') : t('contactForm.submit')}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center p-6 bg-highlight-primary/20 border-2 border-highlight-primary text-text-primary">
                  <p className="font-bold font-work-sans">{t('contactForm.success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-6 bg-highlight-secondary/20 border-2 border-highlight-secondary text-text-primary">
                  <p className="font-bold font-work-sans">{t('contactForm.error')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
