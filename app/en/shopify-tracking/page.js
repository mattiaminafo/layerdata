import ShopifyTrackingHeader from "../../../components/shopifyTrackingHeader";
import ShopifyTrackingHero from "../../../components/shopifyTrackingHero";
import ShopifyTrackingVideo from "../../../components/shopifyTrackingVideo";
import ShopifyTrackingProcess from "../../../components/shopifyTrackingProcess";
import ShopifyTrackingImages from "../../../components/shopifyTrackingImages";
import ShopifyTrackingBenefits from "../../../components/shopifyTrackingBenefits";
import ShopifyTrackingCta from "../../../components/shopifyTrackingCta";
import ContactForm from "../../../components/contactForm";
import Footer from "../../../components/footer";

export default function ShopifyTrackingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <ShopifyTrackingHeader />
      <ShopifyTrackingHero />
      <ShopifyTrackingVideo />
      <ShopifyTrackingProcess />
      <ShopifyTrackingBenefits />
      <ShopifyTrackingImages />
      <ShopifyTrackingCta />
      <ContactForm />
      <Footer />
    </div>
  );
}

