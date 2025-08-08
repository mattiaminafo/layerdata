import Header from "../components/header";
import Hero from "../components/hero";
import Packages from "../components/packages";
import Tripwires from "../components/tripwires";
import CaseStudy from "../components/casestudy";
import AboutUs from "../components/aboutus";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <div className="py-32">
        <Packages />
      </div>
      
      <div className="py-24">
        <Tripwires />
      </div>
      
      <div className="py-32">
        <CaseStudy />
      </div>
      
      <div className="py-24">
        <AboutUs />
      </div>
    </div>
  );
}
