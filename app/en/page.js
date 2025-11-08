import Header from "../../components/header";
import Hero from "../../components/hero";
import HomePaths from "../../components/homePaths";
import HomeSystem from "../../components/homeSystem";
import HomeLayerHub from "../../components/homeLayerHub";
import HomeProof from "../../components/homeProof";
import HomeFinalCta from "../../components/homeFinalCta";
import Integration from "../../components/integration";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";

export default function EnPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      
      <HomePaths />
      <HomeSystem />
      <HomeLayerHub />
      <HomeProof />
      <HomeFinalCta />
      <Integration />
      
      {/* Contact Form */}
      <ContactForm />
      <Footer />
    </div>
  );
}
