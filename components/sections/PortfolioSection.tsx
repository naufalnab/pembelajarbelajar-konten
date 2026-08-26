import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/config/portfolio";

export function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="contoh" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading id="portfolio-title" eyebrow="Demo, bukan klaim klien" title="Lihat satu topik berubah menjadi cerita." description="Tiga contoh berikut menunjukkan bagaimana pendekatan yang sama bisa digunakan untuk kebutuhan yang sangat berbeda." />
        <p className="honesty-note">Ketiganya adalah <strong>Demo Konsep</strong> untuk menunjukkan proses. Video final sedang disiapkan dan tidak merepresentasikan pekerjaan klien.</p>
        <div className="portfolio-list">{portfolioItems.map((item, index) => <PortfolioCard key={item.id} item={item} index={index} />)}</div>
      </div>
    </section>
  );
}
