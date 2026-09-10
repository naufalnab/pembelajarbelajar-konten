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
  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const buttons = [...event.currentTarget.parentElement!.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const current = buttons.indexOf(event.currentTarget);
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[nextIndex].focus();
    buttons[nextIndex].click();
  }

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
              id={`portfolio-tab-${cat.id}`}
              aria-controls="portfolio-results"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              className={`category-chip ${isSelected ? "is-selected" : ""}`}
              onClick={() => onSelectCategory(cat.id as PortfolioCategory)}
              onKeyDown={handleKeyDown}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
