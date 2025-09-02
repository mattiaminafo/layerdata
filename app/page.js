import Header from "../components/header";
import Hero from "../components/hero";
import OurImpact from "../components/ourImpact";
import OurExpertise from "../components/ourExpertise";
import Footer from "../components/footer";
import OurCommunity from "../components/ourCommunity";
import Skills from "../components/skills";
import AboutUs from "../components/aboutus";
import ContactForm from "../components/contactForm";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OurImpact />
      
      <div className="py-8 sm:py-16 md:py-24">
        <OurExpertise />
      </div>

      <div className="py-8 sm:py-16 md:py-24">
        <OurCommunity />
      </div>

      <div className="py-8 sm:py-16 md:py-24">
        <Skills />
      </div>

      <div className="py-8 sm:py-16 md:py-24">
        <AboutUs />
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
}
