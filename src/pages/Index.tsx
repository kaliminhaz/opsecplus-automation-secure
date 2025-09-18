import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import ProductShowcase from "@/components/ui/product-showcase";
import PricingSection from "@/components/ui/pricing-section";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
