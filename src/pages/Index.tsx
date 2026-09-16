import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/home/Hero";
import FeatureStickerBanner from "@/components/home/FeatureStickerBanner";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import LogoTicker from "@/components/home/LogoTicker";
import ServicesPreview from "@/components/home/ServicesPreview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import EcosystemShowcase from "@/components/home/EcosystemShowcase";
import Testimonials from "@/components/home/Testimonials";
import PricingPreview from "@/components/home/PricingPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  useScrollReveal();

  return (
    <div className="relative bg-[#f8fafd]">
      <div id="hero">
        <Hero />
      </div>
      <FeatureStickerBanner />
      <div id="features">
        <FeatureShowcase />
      </div>
      <div id="clients">
        <LogoTicker />
      </div>
      <div id="services">
        <ServicesPreview />
      </div>
      <div id="case-studies">
        <CaseStudiesPreview />
      </div>
      <div id="ecosystem">
        <EcosystemShowcase />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <PricingPreview />
      </div>
      <div id="blog">
        <BlogPreview />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <CTABanner />
      </div>
    </div>
  );
};

export default Index;
