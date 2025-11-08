import Header from "../../../components/header";
import ServicesHero from "../../../components/servicesHero";
import ServicesModes from "../../../components/servicesModes";
import ServicesBuild from "../../../components/servicesBuild";
import ServicesWhy from "../../../components/servicesWhy";
import ServicesFinalCta from "../../../components/servicesFinalCta";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";

export default function EnServicesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesModes />
      <ServicesBuild />
      <ServicesWhy />
      <ServicesFinalCta />
      <ContactForm />
      
      <Footer />
    </div>
  );
}
