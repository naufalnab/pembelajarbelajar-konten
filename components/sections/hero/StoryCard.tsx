import { Quote, FileText, Film, Palette } from "lucide-react";
import { StoryboardMiniFrame } from "./StoryboardMiniFrame";
import type { HeroDemoData } from "@/config/heroDemo";

export function StoryCard({ data }: { data: HeroDemoData["story"] }) {
  return (
    <article className="transformation-step step-story" aria-labelledby="step-story-heading">
      <div className="step-header">
        <span className="step-tag" id="step-story-heading">
          <span className="step-num">{data.step}</span>
          <span className="step-sep">·</span>
          <span className="step-title">{data.label.replace(/^\d+\s*·\s*/, "")}</span>
        </span>
        <span className="step-caption">{data.caption}</span>
      </div>

      <div className="story-process-grid">
        {/* Card 1: Hook */}
        <div className="process-card process-hook">
          <div className="process-card-header">
            <span className="process-card-icon">
              <Quote size={13} aria-hidden="true" />
            </span>
            <strong className="process-card-title">Hook</strong>
          </div>
          <blockquote className="hook-text">
            &ldquo;{data.hook}&rdquo;
          </blockquote>
          <span className="process-card-note">3 detik pertama pemikat audiens</span>
        </div>

        {/* Card 2: Script */}
        <div className="process-card process-script">
          <div className="process-card-header">
            <span className="process-card-icon">
              <FileText size={13} aria-hidden="true" />
            </span>
            <strong className="process-card-title">Script & Alur</strong>
          </div>
          <div className="script-beats">
            {data.script.points.map((point) => (
              <div key={point.time} className="script-beat-item">
                <span className="beat-time">{point.time}</span>
                <span className="beat-text">{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Storyboard */}
        <div className="process-card process-storyboard">
          <div className="process-card-header">
            <span className="process-card-icon">
              <Film size={13} aria-hidden="true" />
            </span>
            <strong className="process-card-title">Storyboard</strong>
          </div>
          <div className="storyboard-preview-grid" aria-label="3 Scene Storyboard Mini Preview">
            {data.scenes.map((scene) => (
              <StoryboardMiniFrame key={scene.id} scene={scene} />
            ))}
          </div>
        </div>

        {/* Card 4: Visual Direction */}
        <div className="process-card process-visual">
          <div className="process-card-header">
            <span className="process-card-icon">
              <Palette size={13} aria-hidden="true" />
            </span>
            <strong className="process-card-title">Visual Direction</strong>
          </div>
          <div className="visual-direction-content">
            <div className="palette-swatches" aria-label="Palet warna">
              {data.visualDirection.palette.map((color) => (
                <span
                  key={color}
                  className="palette-swatch"
                  style={{ backgroundColor: color }}
                  title={color}
                  aria-label={`Warna ${color}`}
                />
              ))}
            </div>
            <div className="visual-tags">
              <span className="visual-tag-pill">{data.visualDirection.style}</span>
              <span className="visual-tag-pill">{data.visualDirection.tone}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

