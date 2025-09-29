import Header from "../../../components/header";
import AboutUs from "../../../components/aboutus";
import Packages from "../../../components/packages";
import CaseStudy from "../../../components/casestudy";
import Footer from "../../../components/footer";
import ServiceHeader from "../../../components/serviceHeader";
import Clients from "../../../components/clients";
import Process from "../../../components/process";
import ServicesSections from "../../../components/servicesSections";
import ServicesFinalCta from "../../../components/servicesFinalCta";

export default function EnServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section per Servizi */}
      <ServiceHeader /> 
      <Clients />
    
      {/* Nuove sezioni servizi */}
      <ServicesSections />
      
      {/* CTA finale */}
      <ServicesFinalCta />

      <div className="py-8 sm:py-16 md:py-32">
        <Process />
      </div>

      <div className="py-8 sm:py-16 md:py-32" id="packages-section">
        <Packages />
      </div>
      
      <div className="py-8 sm:py-16 md:py-32">
        <CaseStudy />
      </div>
      
      <Footer />
    </div>
  );
}
