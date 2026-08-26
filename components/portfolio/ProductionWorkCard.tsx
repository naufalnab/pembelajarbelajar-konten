import { ArrowUpRight } from "lucide-react";
import type { PortfolioWork } from "@/config/portfolio";
import { ClickToLoadVideo } from "./ClickToLoadVideo";

function InstagramIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ProductionWorkCard({ item }: { item: PortfolioWork }) {
  const isWide = item.aspectRatio === "16:9" || item.format === "long-form";
  const isInstagram = Boolean(item.instagramUrl);

  return (
    <article
      className={`work-item-card ${isWide ? "is-wide-card" : "is-portrait-card"} ${
        item.isFeatured ? "is-featured-work" : ""
      }`}
      data-category={item.category}
    >
      {/* Media / Video Preview */}
      <div className="work-card-media">
        {isInstagram ? (
          <div className="instagram-series-banner">
            <div className="insta-backdrop" aria-hidden="true">
              <div className="insta-gradient-circle" />
            </div>
            <div className="insta-content">
              <InstagramIcon size={36} />
              <strong>{item.title}</strong>
              <small>Serial Konten Edukasi Islam</small>
            </div>
          </div>
        ) : (
          <ClickToLoadVideo
            youtubeId={item.youtubeId}
            videoSrc={item.videoSrc}
            posterSrc={item.posterSrc}
            title={item.title}
            aspectRatio={isWide ? "16:9" : "9:16"}
          />
        )}
      </div>

      {/* Content & Metadata */}
      <div className="work-card-body">
        <div className="work-card-topbar">
          <span className="work-category-pill">{item.categoryLabel}</span>
          {item.badge ? (
            <span className="work-badge-pill">{item.badge}</span>
          ) : (
            <span className="work-format-pill">{item.formatLabel}</span>
          )}
        </div>

        <h3 className="work-card-title">{item.title}</h3>

        <p className="work-card-description">{item.description}</p>

        <div className="work-card-footer">
          {item.instagramUrl ? (
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work-direct-link work-insta-link"
              aria-label={`Buka ${item.title} di Instagram (tab baru)`}
            >
              <span>{item.ctaLabel || "Lihat Series di Instagram"}</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ) : item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-direct-link"
              aria-label={`Buka ${item.title} di YouTube (tab baru)`}
            >
              <span>Buka di YouTube</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
