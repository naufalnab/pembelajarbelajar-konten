import { TopicCard } from "./TopicCard";
import { StoryCard } from "./StoryCard";
import { FinalVideoCard } from "./FinalVideoCard";
import { FlowConnector } from "./FlowConnector";
import { heroDemoData } from "@/config/heroDemo";

export function TransformationDemo() {
  return (
    <section className="transformation-panel" aria-label="Demo alur transformasi konten dari topik sampai video siap posting">
      {/* Header Panel */}
      <div className="transformation-header">
        <span className="transformation-eyebrow">
          <span className="live-dot" aria-hidden="true" />
          {heroDemoData.eyebrow}
        </span>
        <p className="transformation-descriptor">{heroDemoData.descriptor}</p>
      </div>

      {/* Main 3-Step Vertical Flow */}
      <div className="transformation-flow vertical-flow">
        {/* Step 1: Topik dari Klien */}
        <div className="flow-step flow-step-1">
          <TopicCard data={heroDemoData.topic} />
        </div>

        {/* Vertical Connector 1 */}
        <div className="flow-joint flow-joint-1">
          <FlowConnector label="Kami mulai mengolah" />
        </div>

        {/* Step 2: Kami Olah */}
        <div className="flow-step flow-step-2">
          <StoryCard data={heroDemoData.story} />
        </div>

        {/* Vertical Connector 2 */}
        <div className="flow-joint flow-joint-2">
          <FlowConnector label="Menjadi hasil akhir" />
        </div>

        {/* Step 3: Siap Posting */}
        <div className="flow-step flow-step-3">
          <FinalVideoCard data={heroDemoData.video} />
        </div>
      </div>

      {/* Bottom Microcopy */}
      <div className="transformation-footer">
        <div className="footer-message">
          <p className="footer-highlight">
            <strong>{heroDemoData.bottomNote}</strong>{" "}
            <span>Kami bantu mengolah sisanya sampai menjadi konten yang siap diproduksi.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

