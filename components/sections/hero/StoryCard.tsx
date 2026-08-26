import { StoryboardMiniFrame } from "./StoryboardMiniFrame";
import type { HeroDemoData } from "@/config/heroDemo";

export function StoryCard({ data }: { data: HeroDemoData["story"] }) {
  return (
    <article className="transformation-step step-story" aria-labelledby="step-story-heading">
      <div className="step-header">
        <span className="step-tag" id="step-story-heading">
          <span className="step-num">{data.step}</span>
          <span className="step-sep">·</span>
          <span className="step-title">STORY</span>
        </span>
        <span className="step-caption">{data.caption}</span>
      </div>

      <div className="story-card-body">
        <div className="story-hook-box">
          <span className="hook-label">Hook</span>
          <p className="hook-text">&ldquo;{data.hook}&rdquo;</p>
        </div>

        <div className="storyboard-preview-grid" aria-label="3 Scene Storyboard Mini Preview">
          {data.scenes.map((scene) => (
            <StoryboardMiniFrame key={scene.id} scene={scene} />
          ))}
        </div>

        <div className="story-process-tags" aria-label="Proses pengerjaan cerita">
          <span className="process-pill">Script</span>
          <span className="process-sep" aria-hidden="true">·</span>
          <span className="process-pill">Storyboard</span>
          <span className="process-sep" aria-hidden="true">·</span>
          <span className="process-pill">Visual Direction</span>
        </div>
      </div>
    </article>
  );
}
