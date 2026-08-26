"use client";

import { useEffect, useState } from "react";
import { Check, Film, Play, Sparkles, Volume2, X } from "lucide-react";
import type { HeroDemoData } from "@/config/heroDemo";

export function FinalVideoCard({ data }: { data: HeroDemoData["video"] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowDemoModal(false);
      }
    };
    if (showDemoModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDemoModal]);

  const handlePlayClick = () => {
    if (data.videoSrc || data.youtubeId) {
      setIsPlaying(true);
    } else {
      setShowDemoModal(true);
    }
  };

  return (
    <>
      <article className="transformation-step step-video" aria-labelledby="step-video-heading">
        <div className="step-header">
          <span className="step-tag step-tag-accent" id="step-video-heading">
            <span className="step-num">{data.step}</span>
            <span className="step-sep">·</span>
            <span className="step-title">SIAP POSTING</span>
          </span>
          <span className="step-caption output-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>{data.status}</span>
          </span>
        </div>

        <div className="video-card-body">
          <div className="portrait-video-frame">
            {/* Top metadata overlay */}
            <div className="frame-topbar">
              <span className="ratio-pill">
                <Film size={11} aria-hidden="true" />
                <span>{data.ratio}</span>
              </span>
              <span className="duration-pill">{data.duration}</span>
            </div>

            {/* Video content / Poster */}
            {data.youtubeId && isPlaying ? (
              <iframe
                className="actual-video video-embed-iframe"
                src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?autoplay=1&playsinline=1&rel=0`}
                title={`Video demo: ${data.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : data.videoSrc && isPlaying ? (
              <video
                controls
                autoPlay
                playsInline
                muted
                preload="none"
                className="actual-video"
                poster={data.posterSrc}
                aria-label="Video demo sekolah: Berani Mencoba"
              >
                <source src={data.videoSrc} type="video/mp4" />
                <track kind="captions" />
                Browser Anda tidak mendukung video HTML5.
              </video>
            ) : (
                <div className="video-poster-art">
                {data.youtubeId && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="hero-video-thumbnail" src={`https://i.ytimg.com/vi/${data.youtubeId}/hqdefault.jpg`} alt="Thumbnail video Berani Mencoba" />
                )}
                {/* Stylized storytelling poster */}
                <div className="poster-backdrop" aria-hidden="true">
                  <div className="art-circle art-circle-1" />
                  <div className="art-circle art-circle-2" />
                  <div className="art-glow" />
                </div>

                <div className="poster-content">
                  <span className="poster-tagline">
                    <Sparkles size={11} aria-hidden="true" />
                    <span>{data.youtubeId ? "Tonton contoh video" : "Storytelling Edukasi"}</span>
                  </span>

                  <div className="poster-title-group">
                    <h3 className="poster-main-title">{data.title}</h3>
                    <p className="poster-sub-title">{data.subtitle}</p>
                  </div>

                  <button
                    type="button"
                    className="video-play-btn"
                    onClick={handlePlayClick}
                    aria-label={`Putar preview ${data.title}`}
                  >
                    <span className="play-btn-circle">
                      <Play size={20} fill="currentColor" aria-hidden="true" />
                    </span>
                    <span className="play-btn-pulse" aria-hidden="true" />
                  </button>

                  <div className="poster-sound-hint" aria-hidden="true">
                    <Volume2 size={11} />
                    <span>{data.youtubeId ? "Klik untuk memutar di sini" : "Audio + Voiceover Siap"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom bar overlay */}
            <div className="frame-bottombar">
              <div className="delivery-badge">
                <Check size={12} className="delivery-check" aria-hidden="true" />
                <div className="delivery-text">
                  <strong>{data.outputLabel}</strong>
                  <small>Format vertikal 9:16</small>
                </div>
              </div>
              <span className="demo-concept-pill">{data.badge}</span>
            </div>
          </div>
        </div>
      </article>

      {/* Concept demo modal / explanation if clicked when video asset is placeholder */}
      {showDemoModal && (
        <div
          className="demo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <button
            type="button"
            className="demo-modal-backdrop-btn"
            onClick={() => setShowDemoModal(false)}
            aria-label="Tutup popup latar belakang"
          />
          <div className="demo-modal-card">
            <div className="demo-modal-header">
              <span className="demo-modal-eyebrow">Demo Konsep</span>
              <button
                type="button"
                className="demo-modal-close"
                onClick={() => setShowDemoModal(false)}
                aria-label="Tutup popup"
              >
                <X size={18} />
              </button>
            </div>
            <h4 id="demo-modal-title">Output Video 9:16 Siap Posting</h4>
            <p>
              Ini adalah representasi output video berdurasi ±0:28 detik yang telah melalui tahap
              <strong> Topik → Hook → Script → Storyboard → Visual Direction</strong> sebelum diproduksi.
            </p>
            <div className="demo-modal-specs">
              <div className="spec-item">
                <small>Format</small>
                <strong>Portrait 9:16</strong>
              </div>
              <div className="spec-item">
                <small>Durasi</small>
                <strong>±0:28 Detik</strong>
              </div>
              <div className="spec-item">
                <small>Status</small>
                <strong>Siap Posting</strong>
              </div>
            </div>
            <button
              type="button"
              className="cta-link cta-primary demo-modal-btn"
              onClick={() => setShowDemoModal(false)}
            >
              Tutup Preview
            </button>
          </div>
        </div>
      )}
    </>
  );
}
