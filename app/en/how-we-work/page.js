import Header from "../../../components/header";
import HowWeWork from "../../../components/howWeWork";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";

export default function HowWeWorkPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="pt-24 sm:pt-28 md:pt-32">
        <HowWeWork />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}


