import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/home/StatsCounter";
import LogoTicker from "@/components/home/LogoTicker";
import ServicesPreview from "@/components/home/ServicesPreview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import EcosystemShowcase from "@/components/home/EcosystemShowcase";
import Testimonials from "@/components/home/Testimonials";
import PricingPreview from "@/components/home/PricingPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <SEOTags
        title="Brandex | Custom Software Development, Web & AI Solutions Company"
        description="Brandex is an end-to-end custom software development, high-performance web engineering, and AI automation company in Bangalore, India. We build, automate, and scale digital products."
        keywords="custom software development company, web development company bangalore, AI automation services, enterprise CRM development, travel CRM, software agency bangalore, brandex"
        image="https://www.brandex.co.in/og/home.png"
        canonicalUrl="https://www.brandex.co.in/"
        schema={{
          "@type": "LocalBusiness",
          "@id": "https://www.brandex.co.in/#localbusiness",
          "name": "Brandex",
          "image": "https://www.brandex.co.in/main_logo.webp",
          "url": "https://www.brandex.co.in/",
          "telephone": "+91-9480944727",
          "email": "team@brandex.co.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#121, 13th Main M.C. Layout, Vijaynagar",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560040",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9719,
            "longitude": 77.5300
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          },
          "priceRange": "$$",
          "parentOrganization": { "@id": "https://www.brandex.co.in/#organization" }
        }}
      />
      <div className="relative bg-[#f8fafd]">
        <div id="hero">
          <Hero />
        </div>
        <StatsCounter />
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
    </>
  );
};

export default Index;
