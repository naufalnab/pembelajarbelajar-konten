import { FileText, Sparkles } from "lucide-react";
import type { HeroDemoData } from "@/config/heroDemo";

export function TopicCard({ data }: { data: HeroDemoData["topic"] }) {
  return (
    <article className="transformation-step step-topic" aria-labelledby="step-topic-heading">
      <div className="step-header">
        <span className="step-tag" id="step-topic-heading">
          <span className="step-num">{data.step}</span>
          <span className="step-sep">·</span>
          <span className="step-title">{data.label.replace(/^\d+\s*·\s*/, "")}</span>
        </span>
        <span className="step-caption">{data.caption}</span>
      </div>

      <div className="topic-card-body">
        <div className="topic-main-row">
          <div className="topic-badge" aria-hidden="true">
            <FileText size={13} className="topic-icon" />
            <span>Topik Awal</span>
          </div>
          <blockquote className="topic-question">
            &ldquo;{data.question}&rdquo;
          </blockquote>
        </div>

        <div className="topic-meta-row">
          <span className="meta-category">{data.category}</span>
          <span className="meta-divider" aria-hidden="true">·</span>
          <span className="meta-hint">
            <Sparkles size={12} aria-hidden="true" />
            <span>{data.hint || "Tanpa perlu script lengkap"}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

