import { ArrowRight, Film, Play } from "lucide-react";
import type { PortfolioItem } from "@/config/portfolio";

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <article className="portfolio-card" data-category={item.id}>
      <div className="portfolio-copy">
        <div className="portfolio-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{item.label}</p></div>
        <h3>{item.title}</h3>
        <p className="portfolio-input">{item.input}</p>
        {item.hook && <blockquote><small>Hook</small>“{item.hook}”</blockquote>}
        <p className="portfolio-description">{item.description}</p>
        <div className="storyboard-mini" aria-label="Preview storyboard">
          {item.storyboard.slice(0, 4).map((frame, frameIndex) => (
            <div key={frame.title}><span>{frameIndex + 1}</span><strong>{frame.title}</strong>{frameIndex < Math.min(item.storyboard.length, 4) - 1 && <ArrowRight size={13} aria-hidden="true" />}</div>
          ))}
        </div>
      </div>
      <div className="portfolio-media">
        {item.videoSrc ? (
          <video controls playsInline muted preload="none" poster={item.posterSrc} aria-label={`Demo video: ${item.title}`}>
            <source src={item.videoSrc} type="video/mp4" />Browser Anda tidak mendukung video HTML5.
          </video>
        ) : (
          <div className="video-placeholder" role="img" aria-label={`${item.placeholderText}: ${item.title}`}>
            <div className="placeholder-top"><span>9:16</span><Film size={16} aria-hidden="true" /></div>
            <div className="placeholder-art" aria-hidden="true"><i /><i /><i /></div>
            <div className="placeholder-bottom"><span className="play-icon"><Play size={17} fill="currentColor" /></span><p><small>Demo Konsep</small><strong>{item.placeholderText}</strong></p></div>
          </div>
        )}
        {item.isDemo && <span className="demo-stamp">Demo Konsep · Bukan proyek klien</span>}
      </div>
    </article>
  );
}
