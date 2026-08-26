import type { PortfolioWork } from "@/config/portfolio";
import { ProductionWorkCard } from "./ProductionWorkCard";

/**
 * @deprecated Re-exported for backwards compatibility. Use ProductionWorkCard, SeriesCard, or FeaturedDemoCard.
 */
export function PortfolioCard({ item }: { item: PortfolioWork }) {
  return <ProductionWorkCard item={item} />;
}
