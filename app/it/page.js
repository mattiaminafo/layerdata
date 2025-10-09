import Header from "../../components/header";
import Hero from "../../components/hero";
import WhatWeDo from "../../components/whatWeDo";
import Process from "../../components/process";
import Specialties from "../../components/specialties";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";

export default function ItPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* What We Do */}
      <WhatWeDo />
      
      {/* How We Work */}
      <div className="py-8 sm:py-16 md:py-32">
        <Process />
      </div>

      {/* Specialties */}
      <Specialties />
      
      {/* Contact Form */}
      <ContactForm />
      <Footer />
    </div>
  );
}
