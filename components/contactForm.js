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
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding gradient-bg">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-gotham mb-4 sm:mb-6">
              {t('contactForm.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-mulish">
              {t('contactForm.subtitle')}
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('contactForm.name')}
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors"
                    placeholder={t('contactForm.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('contactForm.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors"
                    placeholder={t('contactForm.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="azienda" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('contactForm.company')}
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors"
                    placeholder={t('contactForm.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="ruolo" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('contactForm.role')}
                  </label>
                  <input
                    type="text"
                    id="ruolo"
                    name="ruolo"
                    value={formData.ruolo}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors"
                    placeholder={t('contactForm.rolePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="richiesta" className="block text-sm font-semibold text-gray-900 mb-2">
                  {t('contactForm.request')}
                </label>
                <textarea
                  id="richiesta"
                  name="richiesta"
                  value={formData.richiesta}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors resize-vertical"
                  placeholder={t('contactForm.requestPlaceholder')}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  {isSubmitting ? t('contactForm.submitting') : t('contactForm.submit')}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-50 border border-green-200 text-green-800">
                  <p className="font-semibold">{t('contactForm.success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-50 border border-red-200 text-red-800">
                  <p className="font-semibold">{t('contactForm.error')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
