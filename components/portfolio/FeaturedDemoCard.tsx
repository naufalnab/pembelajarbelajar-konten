"use client";

import { useState, useEffect } from "react";
import { Check, Film, Play, Sparkles, X } from "lucide-react";
import type { FeaturedDemoCase } from "@/config/portfolio";

export function FeaturedDemoCard({ item }: { item: FeaturedDemoCase }) {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDemoModal(false);
    };
    if (showDemoModal) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDemoModal]);

  const handlePlayClick = () => {
    if (item.videoSrc) {
      setIsPlaying(true);
    } else {
      setShowDemoModal(true);
    }
  };

  return (
    <>
      <article className="featured-case-card" aria-labelledby="featured-case-title">
        {/* Left Side: Case Study Story Breakdown */}
        <div className="featured-case-content">
          {/* Header & Badges */}
          <div className="featured-case-header">
            <span className="featured-badge-group">
              <span className="featured-category-badge">{item.categoryLabel}</span>
              <span className="featured-demo-pill">{item.badge}</span>
            </span>
          </div>

          <h3 id="featured-case-title" className="featured-case-title">
            {item.title}
          </h3>

          <div className="case-flow-labels" aria-label="Alur contoh: input, proses, output">
            <span>Input</span><i aria-hidden="true">→</i><span>Angle + script</span><i aria-hidden="true">→</i><span>Output</span>
          </div>

          {/* Topik & Angle Block */}
          <div className="featured-context-grid">
            <div className="context-item">
              <span className="context-label">Input · Topik awal</span>
              <p className="context-value">{item.topicInput}</p>
            </div>
            <div className="context-item">
              <span className="context-label">Kami olah · Angle</span>
              <p className="context-value">{item.angle}</p>
            </div>
          </div>

          {/* Hook Statement */}
          <blockquote className="featured-hook-quote">
            <small>Hook Emosional</small>
            <p>{item.hook}</p>
          </blockquote>

          {/* 4 Process Steps */}
          <div className="featured-process-box">
            <span className="process-box-title">Angle, script, dan arahan visual</span>
            <div className="featured-process-list">
              {item.processSteps.map((step) => (
                <div key={step.step} className="process-step-item">
                  <span className="step-num-pill">{step.step}</span>
                  <div className="step-info">
                    <strong>{step.title}</strong>
                    <small>{step.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: 9:16 Video Focus */}
        <div className="featured-case-media">
          <div className="featured-video-frame">
            <div className="frame-top-meta">
              <span className="ratio-tag">
                <Film size={11} aria-hidden="true" />
                <span>{item.ratio}</span>
              </span>
              <span className="duration-tag">{item.duration}</span>
            </div>

            {item.videoSrc && isPlaying ? (
              <video
                controls
                autoPlay
                playsInline
                className="featured-actual-video"
                poster={item.posterSrc}
                aria-label={`Video: ${item.title}`}
              >
                <source src={item.videoSrc} type="video/mp4" />
                <track kind="captions" />
                Browser Anda tidak mendukung video HTML5.
              </video>
            ) : (
              <div className="featured-poster-art">
                <div className="poster-art-backdrop" aria-hidden="true">
                  <div className="art-shape shape-1" />
                  <div className="art-shape shape-2" />
                  <div className="art-glow" />
                </div>

                <div className="poster-art-content">
                  <span className="poster-tag">
                    <Sparkles size={11} aria-hidden="true" />
                    <span>Storytelling Edukasi</span>
                  </span>
                  <h4 className="poster-heading">{item.placeholderTitle}</h4>
                  <p className="poster-subtext">{item.placeholderSubtitle}</p>

                  <button
                    type="button"
                    className="featured-play-btn"
                    onClick={handlePlayClick}
                    aria-label={`Putar preview ${item.title}`}
                  >
                    <span className="play-circle">
                      <Play size={22} fill="currentColor" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              </div>
            )}

            <div className="frame-bottom-meta">
              <div className="delivery-indicator">
                <Check size={13} className="delivery-check-icon" aria-hidden="true" />
                <span>Output · Final video 9:16</span>
              </div>
              <span className="demo-status-pill">{item.badge}</span>
            </div>
          </div>
        </div>
      </article>

      {/* Concept Demo Modal */}
      {showDemoModal && (
        <div
          className="demo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="featured-modal-title"
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
            <h4 id="featured-modal-title">Output Video 9:16 Siap Posting</h4>
            <p>
              Ini adalah representasi output video berdurasi ±0:28 detik yang melalui alur
              <strong> Topik → Angle → Hook → Script → Storyboard → Visual Direction</strong>.
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
