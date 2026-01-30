import Header from "../../../components/header";
import AboutUs from "../../../components/aboutUs";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";

export default function AboutUsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24 sm:pt-28 md:pt-32">
        <AboutUs />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

