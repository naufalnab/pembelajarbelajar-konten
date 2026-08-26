import { ArrowUpRight, Sparkles } from "lucide-react";
import { contentRangeStrip } from "@/config/portfolio";
import { buildWhatsAppUrl, ctaMessages } from "@/config/site";

export function ContentRangeStrip() {
  return (
    <div className="portfolio-bottom-strip">
      {/* Capability Scope Pill Strip */}
      <div className="range-pills-bar" aria-label="Ragam format dan topik produksi">
        <span className="range-intro">
          <Sparkles size={12} aria-hidden="true" />
          <strong>Ragam Format:</strong>
        </span>
        <div className="range-pills-list">
          {contentRangeStrip.items.map((item) => (
            <span key={item} className="range-pill-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Mini Action Note */}
      <div className="range-cta-box">
        <div className="range-cta-text">
          <strong>{contentRangeStrip.ctaPrompt}</strong>
          <p>{contentRangeStrip.ctaDescription}</p>
        </div>
        <a
          href={buildWhatsAppUrl(ctaMessages.generic)}
          className="range-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{contentRangeStrip.ctaButtonText}</span>
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
