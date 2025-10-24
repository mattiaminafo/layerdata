import Header from "../../../components/header";
import AboutUs from "../../../components/aboutus";
import Footer from "../../../components/footer";
import AboutHero from "../../../components/aboutHero";
import AboutPhilosophy from "../../../components/aboutPhilosophy";
import AboutArchitecture from "../../../components/aboutArchitecture";
import AboutIntegration from "../../../components/aboutIntegration";
import AboutImpact from "../../../components/aboutImpact";
import AboutWhyItWorks from "../../../components/aboutWhyItWorks";
import AboutCorePhilosophy from "../../../components/aboutCorePhilosophy";
import AboutSecurity from "../../../components/aboutSecurity";
import AboutResults from "../../../components/aboutResults";
import AboutCta from "../../../components/aboutCta";
import AboutPricing from "../../../components/aboutPricing";

export default function EnAboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      
      {/* About Hero */}
      <AboutHero />
      
      {/* Philosophy */}
      <AboutPhilosophy />
      
      {/* Architecture */}
      <AboutArchitecture />
      
      {/* Integration */}
      <AboutIntegration />
      
      {/* Impact */}
      <AboutImpact />
      
      {/* Why It Works */}
      <AboutWhyItWorks />
      
      {/* Core Philosophy */}
      <AboutCorePhilosophy />
      
      {/* Security */}
      <AboutSecurity />
      
      {/* Results */}
      <AboutResults />
      
      {/* Pricing */}
      <AboutPricing />
      
      {/* CTA */}
      <AboutCta />
      
      {/* About Us - Team */}
      <AboutUs />
      
      <Footer />
    </div>
  );
}
