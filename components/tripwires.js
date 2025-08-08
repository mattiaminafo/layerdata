"use client";
import { useState } from "react";
import Button from "./button";

const tripwires = [
  {
    title: "Shopify Tracking | CustomPixel",
    price: "€3000",
    period: "one shot",
    description: " Creiamo il tracciamento Shopify che funziona!",
    category: "Ecommerce Tracking"
  },
  {
    title: "Tracking Jumpstart",
    price: "€2000",
    period: "one shot",
    description: "Audit + tracciamento base GA4/Meta API + dashboard base",
    category: "Ecommerce Tracking"
  },
  {
    title: "CDP Pack",
    price: "€1500",
    period: "/mese",
    description: "Customer Data Platform completa",
    category: "Database"
  },
  {
    title: "Insight Pack",
    price: "€750",
    period: "/mese",
    description: "Report strategico e dashboard avanzata",
    category: "Ecommerce Tracking"
  },
  {
    title: "Training Pack",
    price: "€900",
    period: "/mese",
    description: "Formazione team + manuali operativi",
    category: "Formazione"
  },
  {
    title: "Automation Pack",
    price: "€900",
    period: "/mese",
    description: "Journey multicanale avanzato",
    category: "Automazioni"
  },
];

const categories = ["Tutti", "Ecommerce Tracking", "Automazioni", "Database", "Formazione"];

export default function Tripwires() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const filteredTripwires = selectedCategory === "Tutti" 
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
      <h2 className="text-3xl font-bold text-center mb-16 font-gotham">Il pacchetto non è ciò che fa per te? Ecco una serie di servizi singoli:</h2>
      
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

            <div className="flex justify-center">
              <div className="stack w-96">
                {/* Card corrente (in cima) */}
                <div
                  key={filteredTripwires[currentIndex].title}
                  className="border-base-content card bg-base-100 border text-center p-10 rounded-xl shadow-lg"
                >
                  <div className="card-body p-0">
                    <div className="text-sm font-medium text-gray-500 mb-2">{filteredTripwires[currentIndex].category}</div>
                    <div className="text-2xl font-semibold mb-3 font-poppins text-secondary">{filteredTripwires[currentIndex].title}</div>
                    <div className="text-4xl font-bold font-gotham mb-2">{filteredTripwires[currentIndex].price}</div>
                    <div className="text-base mb-4 text-gray-500">{filteredTripwires[currentIndex].period}</div>
                    <div className="text-base text-center mb-6">{filteredTripwires[currentIndex].description}</div>
                    <Button cta="Prenota" />
                  </div>
                </div>
                
                {/* Card successiva (sotto) */}
                {filteredTripwires.length > 1 && (
                  <div
                    key={filteredTripwires[getCardIndex(1)].title}
                    className="border-base-content card bg-base-100 border text-center p-10 rounded-xl shadow-lg opacity-60"
                  >
                    <div className="card-body p-0">
                      <div className="text-sm font-medium text-gray-500 mb-2">{filteredTripwires[getCardIndex(1)].category}</div>
                      <div className="text-2xl font-semibold mb-3 font-poppins text-secondary">{filteredTripwires[getCardIndex(1)].title}</div>
                      <div className="text-4xl font-bold font-gotham mb-2">{filteredTripwires[getCardIndex(1)].price}</div>
                      <div className="text-base mb-4 text-gray-500">{filteredTripwires[getCardIndex(1)].period}</div>
                      <div className="text-base text-center mb-6">{filteredTripwires[getCardIndex(1)].description}</div>
                      <Button cta="Prenota" />
                    </div>
                  </div>
                )}
                
                {/* Card successiva alla successiva (sotto) */}
                {filteredTripwires.length > 2 && (
                  <div
                    key={filteredTripwires[getCardIndex(2)].title}
                    className="border-base-content card bg-base-100 border text-center p-10 rounded-xl shadow-lg opacity-40"
                  >
                    <div className="card-body p-0">
                      <div className="text-sm font-medium text-gray-500 mb-2">{filteredTripwires[getCardIndex(2)].category}</div>
                      <div className="text-2xl font-semibold mb-3 font-poppins text-secondary">{filteredTripwires[getCardIndex(2)].title}</div>
                      <div className="text-4xl font-bold font-gotham mb-2">{filteredTripwires[getCardIndex(2)].price}</div>
                      <div className="text-base mb-4 text-gray-500">{filteredTripwires[getCardIndex(2)].period}</div>
                      <div className="text-base text-center mb-6">{filteredTripwires[getCardIndex(2)].description}</div>
                      <Button cta="Prenota" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Indicatori */}
            <div className="flex justify-center mt-12 space-x-3">
              {filteredTripwires.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
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
              <div className="text-lg font-semibold mb-3 font-poppins text-secondary text-center">{service.title}</div>
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
