"use client";
import { useState } from "react";
import Button from "./button";
import { useTranslations } from "../lib/useTranslations";

export default function Tripwires() {
  const { t } = useTranslations();
  const tripwires = t('tripwires.services');
  const categories = t('tripwires.categories');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredTripwires = selectedCategory === categories[0] 
    ? tripwires 
    : tripwires.filter(tripwire => tripwire.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTripwires.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTripwires.length) % filteredTripwires.length);
  };

  const getCardIndex = (offset) => {
    return (currentIndex + offset + filteredTripwires.length) % filteredTripwires.length;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent">
      <h2 className="text-5xl font-bold text-center mb-16 font-gotham">{t('tripwires.title')}</h2>
      
      {/* Filtri */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Desktop: Stack con frecce */}
      <div className="hidden md:block relative w-full max-w-7xl mx-auto px-4">
        {filteredTripwires.length > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              →
            </button>

            {/* Container carosello con 3 card */}
            <div className="overflow-hidden px-16">
              <div 
                className="flex space-x-8 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (320 + 32)}px)` }}
              >
                {filteredTripwires.map((tripwire, index) => (
                  <div
                    key={tripwire.title}
                    className="border-base-content card bg-base-100 border text-center p-8 rounded-xl shadow-lg w-80 flex-shrink-0"
                  >
                    <div className="card-body p-0">
                      <div className="text-sm font-medium text-gray-500 mb-2">{tripwire.category}</div>
                      <button className="text-xl font-semibold mb-2 font-poppins px-2 py-3 rounded-full text-black w-full" style={{backgroundColor: '#41cadf'}}>{tripwire.title}</button>
                      <div className="text-3xl font-bold font-gotham mb-2">{tripwire.price}</div>
                      <div className="text-base mb-4 text-gray-500">{tripwire.period}</div>
                      <div className="text-base text-center mb-6">{tripwire.description}</div>
                      <Button cta="Prenota" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicatori */}
            {/* Indicatori di posizione */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: Math.max(1, filteredTripwires.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mobile: Scroll orizzontale */}
      <div className="md:hidden w-full px-4">
        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
          {filteredTripwires.map((service, idx) => (
            <div
              key={service.title}
              className="bg-base-100 p-8 rounded-xl shadow-xl flex flex-col items-center min-w-[320px] flex-shrink-0 border border-base-200"
            >
              <div className="text-xs font-medium text-gray-500 mb-2">{service.category}</div>
              <button className="text-lg font-semibold mb-3 font-poppins px-2 py-3 rounded-full text-black w-full" style={{backgroundColor: '#41cadf'}}>{service.title}</button>
              <div className="text-2xl font-bold font-gotham mb-2">{service.price}</div>
              <div className="text-sm mb-4 text-gray-500">{service.period}</div>
              <div className="text-sm text-center mb-6">{service.description}</div>
              <Button cta="Prenota" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
