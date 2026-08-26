"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  featuredDemoCase,
  realProductionWorks,
  type PortfolioCategory,
} from "@/config/portfolio";
import { FeaturedDemoCard } from "@/components/portfolio/FeaturedDemoCard";
import { SeriesCard } from "@/components/portfolio/SeriesCard";
import { ProductionWorkCard } from "@/components/portfolio/ProductionWorkCard";
import { PortfolioCategoryFilter } from "@/components/portfolio/PortfolioCategoryFilter";
import { ContentRangeStrip } from "@/components/portfolio/ContentRangeStrip";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");

  const visibleWorks = realProductionWorks.filter((work) => {
    if (work.hidden) return false;
    if (activeCategory === "all") return true;
    return work.category === activeCategory;
  });

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
          eyebrow="Workflow & Hasil Produksi"
          title="Lihat bagaimana satu topik berubah menjadi cerita."
          description="Mulai dari demo alur transformasi hingga karya nyata yang sudah kami produksi untuk berbagai format dan topik."
        />

        {/* Level 1: Featured Transformation Demo */}
        <div className="featured-demo-container">
          <FeaturedDemoCard item={featuredDemoCase} />
        </div>

        {/* Level 2: Real Production Work */}
        <div className="real-works-container">
          <div className="real-works-header">
            <span className="real-works-eyebrow">KARYA PRODUKSI</span>
            <h3 className="real-works-title">Bukan hanya satu jenis cerita.</h3>
            <p className="real-works-lead">
              Workflow yang sama sudah digunakan untuk konten pendidikan, serial pembelajaran,
              umrah, long-form, short-form, dan produk.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <PortfolioCategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Real Works Bento / Grid */}
          <div className="real-works-grid" aria-label="Koleksi karya produksi">
            {visibleWorks.map((work) => {
              if (work.format === "series" && work.episodes && work.episodes.length > 0) {
                return <SeriesCard key={work.id} item={work} />;
              }
              return <ProductionWorkCard key={work.id} item={work} />;
            })}
          </div>
        </div>

        {/* Level 3: Capability Scope Strip & Subtle CTA */}
        <ContentRangeStrip />
      </div>
    </section>
  );
}
