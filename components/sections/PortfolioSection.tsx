"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  featuredDemoCase,
  realProductionWorks,
  type PortfolioCategory,
  type PortfolioWork,
} from "@/config/portfolio";
import { FeaturedDemoCard } from "@/components/portfolio/FeaturedDemoCard";
import { SeriesCard } from "@/components/portfolio/SeriesCard";
import { ProductionWorkCard } from "@/components/portfolio/ProductionWorkCard";
import { PortfolioCategoryFilter } from "@/components/portfolio/PortfolioCategoryFilter";
import { ContentRangeStrip } from "@/components/portfolio/ContentRangeStrip";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  // Available works (excluding hidden/archived demos)
  const activeWorks = realProductionWorks.filter((w) => !w.hidden);

  // 4 Strong Proof items (for default "all" view)
  const strongProofs = activeWorks.filter((w) => w.isStrongProof);

  // Supporting works (for "all" view progressive reveal)
  const supportingWorks = activeWorks.filter((w) => !w.isStrongProof);

  // When filtered by a specific category, show all works in that category
  const filteredCategoryWorks =
    activeCategory === "all"
      ? []
      : activeWorks.filter((w) => w.category === activeCategory);

  const renderWorkCard = (work: PortfolioWork, isCompact = false) => {
    if (work.format === "series" && work.episodes && work.episodes.length > 0) {
      return <SeriesCard key={work.id} item={work} />;
    }
    return (
      <ProductionWorkCard
        key={work.id}
        item={work}
        variant={isCompact ? "compact" : "default"}
      />
    );
  };

  return (
    <section
      className="section portfolio-section"
      id="contoh"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        {/* Section Main Heading */}
        <SectionHeading
          id="portfolio-title"
          eyebrow="Contoh hasil"
          title="Lihat bagaimana satu topik berubah menjadi cerita."
          description="Lihat input awal, cara kami mengolahnya, lalu output yang siap dipublikasikan—tanpa perlu membedah layar penuh teks kecil."
        />

        {/* Level 1: Featured Transformation Demo (Main Proof of Workflow) */}
        <div className="featured-demo-container">
          <FeaturedDemoCard item={featuredDemoCase} />
        </div>

        {/* Level 2: Curated Real Production Work */}
        <div className="real-works-container">
          <div className="real-works-header">
            <span className="real-works-eyebrow">KARYA PRODUKSI</span>
            <h3 className="real-works-title">Bukan hanya satu jenis cerita.</h3>
            <p className="real-works-lead">
              Workflow yang sama sudah digunakan untuk konten pendidikan, serial pembelajaran,
              umrah, long-form, short-form, dan produk.
            </p>
          </div>

          {/* Category Filter Navigation */}
          <PortfolioCategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              // Reset expand state when switching back to "all"
              if (cat === "all") setIsExpanded(false);
            }}
          />

          {/* View Mode: "All" -> Curated 4 Strong Proofs + Expandable Supporting Works */}
          {activeCategory === "all" ? (
            <div className="curated-portfolio-wrapper">
              {/* 4 Strong Proofs (2x2 Bento on Desktop, Clean 4-card stack on Mobile) */}
              <div
                className="strong-proof-grid"
                aria-label="4 Karya Produksi Utama"
              >
                {strongProofs.map((work) => renderWorkCard(work, false))}
              </div>

              {/* Supporting Works Expandable Disclosure */}
              <div className="supporting-works-disclosure">
                <button
                  type="button"
                  className={`portfolio-reveal-btn ${isExpanded ? "is-active" : ""}`}
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                  aria-controls="supporting-works-container"
                >
                  <span>
                    {isExpanded
                      ? "Sembunyikan karya tambahan"
                      : `Lihat karya lainnya (${supportingWorks.length} karya tambahan)`}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={16} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={16} aria-hidden="true" />
                  )}
                </button>

                {isExpanded && (
                  <div
                    id="supporting-works-container"
                    className="supporting-works-grid"
                    aria-label="Karya Produksi Tambahan"
                  >
                    {supportingWorks.map((work) => renderWorkCard(work, true))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* View Mode: Specific Category -> All works in category directly */
            <div
              className="category-works-grid"
              aria-label={`Karya kategori ${activeCategory}`}
            >
              {filteredCategoryWorks.map((work) => renderWorkCard(work, false))}
            </div>
          )}
        </div>

        {/* Level 3: Capability Scope Strip & Subtle CTA */}
        <ContentRangeStrip />
      </div>
    </section>
  );
}
