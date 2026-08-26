"use client";

import { portfolioCategories, type PortfolioCategory } from "@/config/portfolio";

interface PortfolioCategoryFilterProps {
  activeCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
}

export function PortfolioCategoryFilter({
  activeCategory,
  onSelectCategory,
}: PortfolioCategoryFilterProps) {
  return (
    <nav
      className="portfolio-category-nav"
      aria-label="Filter kategori karya produksi"
    >
      <div className="category-chips-wrapper" role="tablist">
        {portfolioCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`category-chip ${isSelected ? "is-selected" : ""}`}
              onClick={() => onSelectCategory(cat.id as PortfolioCategory)}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
