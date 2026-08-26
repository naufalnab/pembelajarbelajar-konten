import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { HeroMicroProof } from "@/components/sections/hero/HeroMicroProof";
import { TransformationDemo } from "@/components/sections/hero/TransformationDemo";
import { getWhatsAppUrl } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        {/* Left Column: Headline, Lead, CTAs, Micro-Proof */}
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> AI Content Factory · Pembelajar Belajar
          </p>
          <h1 id="hero-title">
            Punya ide. <em>Kami ubah</em> jadi konten siap posting.
          </h1>
          <p className="hero-lead">
            Dari ide, script, storyboard, visual, sampai video final. AI Content Factory membantu brand menghasilkan short-form storytelling tanpa harus membangun tim produksi sendiri.
          </p>
          <div className="hero-actions">
            <CtaLink href={getWhatsAppUrl()} eventName="cta_hero_whatsapp">
              Kirim 1 Topik <ArrowUpRight size={17} aria-hidden="true" />
            </CtaLink>
            <CtaLink href="#contoh" variant="text">
              Lihat Contoh <ArrowDown size={16} aria-hidden="true" />
            </CtaLink>
          </div>
          <HeroMicroProof />
          <p className="hero-micro">
            Cocok untuk edukasi, sekolah, travel, produk digital, software, dan bisnis yang punya sesuatu untuk dijelaskan.
          </p>
        </div>

        {/* Right Column: Interactive Transformation Demo */}
        <div className="hero-visual">
          <TransformationDemo />
        </div>
      </div>
    </section>
  );
}
