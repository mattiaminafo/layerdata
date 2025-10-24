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
          source: "Landing Page Launch"
        }),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", company: "" });
      } else {
        setSubmitMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
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
            🚀 Special Launch Offer
          </h1>
          <p className="text-xl md:text-2xl text-black font-work-sans mb-8">
            Transform your data into concrete growth
          </p>
          <p className="text-lg text-black font-work-sans max-w-2xl mx-auto">
            Take advantage of our exclusive offer to implement analytics and marketing technology solutions that make a difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Advanced Analytics
            </h3>
            <p className="text-black font-work-sans">
              Complete implementation of GA4, GTM and custom tracking tools
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Marketing Automation
            </h3>
            <p className="text-black font-work-sans">
              Complete setup of automation flows and integration with your tools
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-black mb-2 font-work-sans">
              Custom Dashboards
            </h3>
            <p className="text-black font-work-sans">
              Personalized reports and interactive dashboards for data-driven decisions
            </p>
          </div>
        </div>

        {/* CTA Section with Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-black mb-4 text-center font-work-sans">
            Request Your Free Consultation
          </h2>
          <p className="text-center text-black font-work-sans mb-8">
            Fill out the form and we&apos;ll contact you within 24 hours to discuss your personalized strategy
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-black font-bold mb-2 font-work-sans">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="John Doe"
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
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-black font-bold mb-2 font-work-sans">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="+1 555 123 4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-black font-bold mb-2 font-work-sans">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Company name"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-work-sans"
            >
              {isSubmitting ? "Sending..." : "🚀 Request Free Consultation"}
            </button>

            {submitMessage && (
              <div className={`text-center p-4 rounded-lg ${
                submitMessage.includes("Thank") 
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
            <span className="font-bold">✅ No commitment</span> • <span className="font-bold">✅ Free consultation</span> • <span className="font-bold">✅ 24h response</span>
          </p>
        </div>
      </div>
    </div>
  );
}


