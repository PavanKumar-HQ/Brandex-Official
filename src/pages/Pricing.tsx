import PricingPreview from "@/components/home/PricingPreview";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";
import SEOTags from "@/components/SEOTags";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PricingPage() {
  useScrollReveal();

  return (
    <>
      <SEOTags
        title="Pricing & Investment Plans | Transparent Engineering | Brandex"
        description="Transparent software engineering and digital transformation pricing by Brandex in Bangalore. Starter, Growth, and Custom Enterprise sprint packages."
        keywords="software development pricing, web app cost bangalore, brandex pricing, IT sprint packages, custom engineering estimate"
        canonicalUrl="https://www.brandex.co.in/pricing"
      />

      <div className="bg-[#f8fafd] min-h-screen">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6">
          <Breadcrumb
            items={[{ label: "Pricing & Plans" }]}
            className="mb-4"
          />
        </div>

        <PricingPreview />
        <FAQ />
        <CTABanner />
      </div>
    </>
  );
}
