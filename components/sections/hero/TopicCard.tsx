import { FileText, Sparkles } from "lucide-react";
import type { HeroDemoData } from "@/config/heroDemo";

export function TopicCard({ data }: { data: HeroDemoData["topic"] }) {
  return (
    <article className="transformation-step step-topic" aria-labelledby="step-topic-heading">
      <div className="step-header">
        <span className="step-tag" id="step-topic-heading">
          <span className="step-num">{data.step}</span>
          <span className="step-sep">·</span>
          <span className="step-title">TOPIK</span>
        </span>
        <span className="step-caption">{data.caption}</span>
      </div>

      <div className="topic-card-body">
        <div className="topic-note-pin" aria-hidden="true">
          <span className="pin-dot" />
          <span className="topic-badge">
            <FileText size={12} aria-hidden="true" />
            <span>1 Topik dari Klien</span>
          </span>
        </div>
        <blockquote className="topic-question">
          &ldquo;{data.question}&rdquo;
        </blockquote>
        <div className="topic-meta">
          <span className="meta-category">{data.category}</span>
          <span className="meta-hint">
            <Sparkles size={11} aria-hidden="true" />
            <span>Tanpa perlu script lengkap</span>
          </span>
        </div>
      </div>
    </article>
  );
}
