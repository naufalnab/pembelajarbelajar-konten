import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { DifferentiatorSection } from "@/components/sections/DifferentiatorSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OnboardingSection } from "@/components/sections/OnboardingSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevisionSection } from "@/components/sections/RevisionSection";
import { ScopeSafetySection } from "@/components/sections/ScopeSafetySection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { siteConfig } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.brandName,
      url: "https://pembelajarbelajar.com",
      logo: `${siteConfig.url}/apple-touch-icon.png`,
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.serviceName,
      serviceType: "Produksi short-form storytelling",
      description: siteConfig.description,
      url: siteConfig.url,
      areaServed: { "@type": "Country", name: "Indonesia" },
      provider: { "@id": `${siteConfig.url}/#organization` },
      audience: { "@type": "Audience", audienceType: "Sekolah, edukasi, travel, software, dan bisnis" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DifferentiatorSection />
        <PortfolioSection />
        <BeforeAfterSection />
        <PricingSection />
        <ScopeSafetySection />
        <RevisionSection />
        <OnboardingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
