import Header from "../../components/header";
import Packages from "../../components/packages";
import Tripwires from "../../components/tripwires";
import CaseStudy from "../../components/casestudy";
import Footer from "../../components/footer";
import ServiceHeader from "../../components/serviceHeader";
import Clients from "../../components/clients";
import Process from "../../components/process";

export default function ServiziPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section per Servizi */}
      <ServiceHeader /> 
      <Clients />
    

      <div className="py-8 sm:py-16 md:py-32">
        <Process />
      </div>

      <div className="py-8 sm:py-16 md:py-32" id="packages-section">
        <Packages />
      </div>
      
      <div className="py-8 sm:py-16 md:py-24">
        <Tripwires />
      </div>
      
      <div className="py-8 sm:py-16 md:py-32">
        <CaseStudy />
      </div>
      
      <Footer />
    </div>
  );
} 