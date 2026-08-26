import { ArrowRight, Check, MessageSquareText, WandSparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const work = ["Angle", "Hook", "Script", "Storyboard", "Visual", "Production"];
const outputs = ["Video 9:16", "Caption", "Hook", "Final export"];

export function BeforeAfterSection() {
  return (
    <section className="section before-after-section" aria-labelledby="before-after-title">
      <div className="container">
        <SectionHeading
          id="before-after-title"
          eyebrow="Nilai workflow"
          title="Dari satu kalimat sampai video final."
          description="Contoh sederhana ini menunjukkan apa yang terjadi di antara brief dan hasil akhir."
        />
        <div className="before-after-grid">
          <article className="input-panel">
            <span className="panel-icon"><MessageSquareText size={20} aria-hidden="true" /></span>
            <p className="panel-label">Yang diberikan klien</p>
            <blockquote>“Kami ingin menjelaskan bahwa anak tidak perlu takut salah saat belajar.”</blockquote>
          </article>
          <ArrowRight className="between-arrow" aria-hidden="true" />
          <article className="work-panel">
            <span className="panel-icon"><WandSparkles size={20} aria-hidden="true" /></span>
            <p className="panel-label">Yang kami kerjakan</p>
            <ol>{work.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </article>
          <ArrowRight className="between-arrow" aria-hidden="true" />
          <article className="output-panel">
            <div className="output-ratio"><span>9:16</span><strong>Siap<br />posting.</strong><i /></div>
            <div><p className="panel-label">Yang diterima</p><ul>{outputs.map((item) => <li key={item}><Check size={14} aria-hidden="true" />{item}</li>)}</ul></div>
          </article>
        </div>
      </div>
    </section>
  );
}
