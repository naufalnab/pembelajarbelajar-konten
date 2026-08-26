"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface ClickToLoadVideoProps {
  youtubeId?: string;
  videoSrc?: string;
  posterSrc?: string;
  title: string;
  aspectRatio?: "9:16" | "16:9";
  className?: string;
}

export function ClickToLoadVideo({
  youtubeId,
  videoSrc,
  posterSrc,
  title,
  aspectRatio = "9:16",
  className = "",
}: ClickToLoadVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackPoster =
    posterSrc || (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const isWide = aspectRatio === "16:9";

  return (
    <div
      className={`click-to-load-container ${isWide ? "is-wide" : "is-portrait"} ${className}`}
      data-aspect={aspectRatio}
    >
      {isPlaying ? (
        youtubeId ? (
          <iframe
            className="video-embed-iframe"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0`}
            title={`Video: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoSrc ? (
          <video
            controls
            autoPlay
            playsInline
            className="video-embed-video"
            poster={posterSrc}
            aria-label={`Video: ${title}`}
          >
            <source src={videoSrc} type="video/mp4" />
            <track kind="captions" />
            Browser Anda tidak mendukung pemutaran video HTML5.
          </video>
        ) : null
      ) : (
        <button
          type="button"
          className="video-poster-trigger"
          onClick={handlePlay}
          aria-label={`Putar video ${title}`}
        >
          {fallbackPoster && !imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={fallbackPoster}
              alt={`Poster video ${title}`}
              loading="lazy"
              className="video-poster-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="video-poster-fallback" aria-hidden="true">
              <div className="fallback-art" />
            </div>
          )}

          <div className="video-poster-overlay" aria-hidden="true">
            <span className="video-play-badge">
              <span className="play-badge-circle">
                <Play size={20} fill="currentColor" />
              </span>
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
