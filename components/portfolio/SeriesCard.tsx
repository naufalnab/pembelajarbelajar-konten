"use client";

import { useState, useEffect } from "react";
import { Layers, Play, X, ChevronRight } from "lucide-react";
import type { PortfolioWork } from "@/config/portfolio";
import { ClickToLoadVideo } from "./ClickToLoadVideo";

export function SeriesCard({ item }: { item: PortfolioWork }) {
  const [showEpisodesModal, setShowEpisodesModal] = useState(false);
  const [activeEpisodeId, setActiveEpisodeId] = useState<string | null>(null);

  const episodes = item.episodes || [];
  const previewEpisodes = episodes.slice(0, 3);
  const remainingCount = Math.max(0, episodes.length - 3);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowEpisodesModal(false);
      }
    };
    if (showEpisodesModal) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showEpisodesModal]);

  const activeEpisode = episodes.find((ep) => ep.id === activeEpisodeId) || episodes[0];

  return (
    <>
      <article className="series-case-card" aria-labelledby={`series-${item.id}-title`}>
        {/* Card Content Top/Left */}
        <div className="series-card-info">
          <div className="series-header-badge">
            <span className="series-category-tag">{item.categoryLabel}</span>
            {item.badge && <span className="series-badge-pill">{item.badge}</span>}
          </div>

          <h3 id={`series-${item.id}-title`} className="series-card-title">
            {item.title}
          </h3>

          <p className="series-card-desc">{item.description}</p>

          <button
            type="button"
            className="series-action-btn"
            onClick={() => {
              setActiveEpisodeId(episodes[0]?.id || null);
              setShowEpisodesModal(true);
            }}
            aria-label={`Buka daftar 6 episode ${item.title}`}
          >
            <span>Lihat 6 Episode Serial</span>
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>

        {/* Visual: 3 Portrait Thumbnails Stack + Remaining Indicator */}
        <div
          className="series-visual-stack"
          onClick={() => {
            setActiveEpisodeId(episodes[0]?.id || null);
            setShowEpisodesModal(true);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveEpisodeId(episodes[0]?.id || null);
              setShowEpisodesModal(true);
            }
          }}
          aria-label={`Buka pratinjau 6 episode ${item.title}`}
        >
          <div className="stack-frames-container">
            {previewEpisodes.map((ep, idx) => (
              <div key={ep.id} className={`stack-frame stack-frame-${idx + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                  alt={`Preview ${ep.title}`}
                  loading="lazy"
                  className="stack-frame-img"
                />
                <span className="stack-ep-label">Ep {ep.number}</span>
              </div>
            ))}
          </div>

          <div className="stack-badge-footer">
            <span className="stack-count-tag">
              <Layers size={12} aria-hidden="true" />
              <span>+{remainingCount} video lainnya</span>
            </span>
            <span className="stack-play-hint">
              <Play size={10} fill="currentColor" aria-hidden="true" />
              <span>Putar Episode</span>
            </span>
          </div>
        </div>
      </article>

      {/* Interactive Episode Viewer Modal */}
      {showEpisodesModal && (
        <div
          className="demo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="series-modal-title"
        >
          <button
            type="button"
            className="demo-modal-backdrop-btn"
            onClick={() => setShowEpisodesModal(false)}
            aria-label="Tutup popup"
          />
          <div className="series-modal-card">
            <div className="demo-modal-header">
              <div className="series-modal-title-group">
                <span className="demo-modal-eyebrow">{item.badge || "Serial Konten"}</span>
                <h4 id="series-modal-title">{item.title} (6 Episode)</h4>
              </div>
              <button
                type="button"
                className="demo-modal-close"
                onClick={() => setShowEpisodesModal(false)}
                aria-label="Tutup popup"
              >
                <X size={20} />
              </button>
            </div>

            <p className="series-modal-desc">
              Semua episode mempertahankan konsistensi karakter, pacing, dan visual direction:
            </p>

            {/* Active Episode Player */}
            {activeEpisode && (
              <div className="series-active-player">
                <div className="player-wrapper">
                  <ClickToLoadVideo
                    youtubeId={activeEpisode.youtubeId}
                    title={`${item.title} - ${activeEpisode.title}`}
                    aspectRatio="9:16"
                  />
                </div>
                <div className="active-ep-info">
                  <strong>{activeEpisode.title}</strong>
                  <a
                    href={activeEpisode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yt-direct-link"
                  >
                    Buka di YouTube ↗
                  </a>
                </div>
              </div>
            )}

            {/* Episode Selector Pills */}
            <div className="series-episodes-grid" role="tablist" aria-label="Pilih episode">
              {episodes.map((ep) => {
                const isActive = ep.id === activeEpisode?.id;
                return (
                  <button
                    key={ep.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`ep-select-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveEpisodeId(ep.id)}
                  >
                    <span className="ep-num">#{ep.number}</span>
                    <span className="ep-name">{ep.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
