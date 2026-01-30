import Header from "../../components/header";
import Hero from "../../components/hero";
import HomeChallenges from "../../components/homeChallenges";
import HomePaths from "../../components/homePaths";
import HomeSystem from "../../components/homeSystem";
import HomeProof from "../../components/homeProof";
import HomeAudit from "../../components/homeAudit";
import HomeAboutUs from "../../components/homeAboutUs";
import HomeFinalCta from "../../components/homeFinalCta";
import Integration from "../../components/integration";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";

export default function EnPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <HomeChallenges />
      <HomePaths />
      <HomeSystem />
      <HomeProof />
      <HomeAudit />
      <HomeAboutUs />
      <HomeFinalCta />
      <Integration />
      
      {/* Contact Form */}
      <ContactForm />
      <Footer />
    </div>
  );
}
