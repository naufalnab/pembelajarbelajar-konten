import { ArrowDown, ArrowUpRight, Check, FileText, PanelsTopLeft } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl } from "@/config/site";

const pipeline = [
  { number: "01", label: "Ide", detail: "Materi tentang rasa takut salah" },
  { number: "02", label: "Story", detail: "Kenapa anak takut mencoba?" },
  { number: "03", label: "Visual", detail: "Arah scene yang konsisten" },
  { number: "04", label: "Final", detail: "Video vertikal siap posting" },
];

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI Content Factory · Pembelajar Belajar</p>
          <h1 id="hero-title">Punya ide. <em>Kami ubah</em> jadi konten siap posting.</h1>
          <p className="hero-lead">Dari ide, script, storyboard, visual, sampai video final. AI Content Factory membantu brand menghasilkan short-form storytelling tanpa harus membangun tim produksi sendiri.</p>
          <div className="hero-actions">
            <CtaLink href={getWhatsAppUrl()} eventName="cta_hero_whatsapp">Kirim 1 Topik <ArrowUpRight size={17} aria-hidden="true" /></CtaLink>
            <CtaLink href="#contoh" variant="text">Lihat Contoh <ArrowDown size={16} aria-hidden="true" /></CtaLink>
          </div>
          <p className="hero-micro">Cocok untuk edukasi, sekolah, travel, produk digital, software, dan bisnis yang punya sesuatu untuk dijelaskan.</p>
        </div>

        <div className="pipeline-card" aria-label="Contoh alur produksi konten">
          <div className="pipeline-topbar"><span>Content production pipeline</span><span className="status"><i /> Ready</span></div>
          <div className="raw-idea"><span className="raw-label"><FileText size={12} aria-hidden="true" /> Bahan masuk</span><p>“Kami ingin menjelaskan bahwa anak tidak perlu takut salah saat belajar.”</p></div>
          <ol className="pipeline-list">
            {pipeline.map((item, index) => (
              <li key={item.number} className={index === pipeline.length - 1 ? "is-final" : ""}>
                <span className="step-number">{item.number}</span>
                <span className="step-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
                {index < pipeline.length - 1 && <span className="step-line" aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <div className="video-preview" aria-hidden="true">
            <div className="phone-frame"><div className="phone-scene"><span>9:16</span><b>Berani<br />mencoba.</b><i /></div></div>
            <div className="delivery-note"><PanelsTopLeft size={14} /><span>Output</span><strong>Video + caption</strong><small><Check size={10} /> Siap posting</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
