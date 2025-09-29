import Header from "../../components/header";
import Hero from "../../components/hero";
import OurImpact from "../../components/ourImpact";
import OurExpertise from "../../components/ourExpertise";
import Footer from "../../components/footer";
import OurCommunity from "../../components/ourCommunity";
import Skills from "../../components/skills";
import AboutUs from "../../components/aboutus";
import ContactForm from "../../components/contactForm";

export default function EnPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <OurImpact />
      
      <div className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12">
        <OurExpertise />
      </div>

      <div className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12">
        <OurCommunity />
      </div>

      <div className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12">
        <Skills />
      </div>

      <div className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-12">
        <AboutUs />
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
}
