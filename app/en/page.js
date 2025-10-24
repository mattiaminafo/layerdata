import Header from "../../components/header";
import Hero from "../../components/hero";
import WhatIsLayerdata from "../../components/whatIsLayerdata";
import HowItWorks from "../../components/howItWorks";
import TargetAudience from "../../components/targetAudience";
import TechnicalArchitecture from "../../components/technicalArchitecture";
import BeforeAfter from "../../components/beforeAfter";
import Results from "../../components/results";
import Integration from "../../components/integration";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";

export default function EnPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* What Is Layerdata */}
      <WhatIsLayerdata />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Target Audience */}
      <TargetAudience />
      
      {/* Technical Architecture */}
      <TechnicalArchitecture />
      
      {/* Before After Comparison */}
      <BeforeAfter />
      
      {/* Results */}
      <Results />
      
      {/* Integration */}
      <Integration />
      
      {/* Contact Form */}
      <ContactForm />
      <Footer />
    </div>
  );
}
