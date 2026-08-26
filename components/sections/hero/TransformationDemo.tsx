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
        <div className="header-left">
          <span className="transformation-eyebrow">
            <span className="live-dot" aria-hidden="true" />
            {heroDemoData.eyebrow}
          </span>
          <p className="transformation-descriptor">{heroDemoData.descriptor}</p>
        </div>
        <div className="header-right">
          <span className="client-badge">Input Klien → Output Final</span>
        </div>
      </div>

      {/* Main 3-Step Flow */}
      <div className="transformation-flow">
        {/* Step 1: Topik */}
        <div className="flow-step flow-step-1">
          <TopicCard data={heroDemoData.topic} />
        </div>

        {/* Connector 1 */}
        <div className="flow-joint flow-joint-1">
          <FlowConnector />
        </div>

        {/* Step 2: Story */}
        <div className="flow-step flow-step-2">
          <StoryCard data={heroDemoData.story} />
        </div>

        {/* Connector 2 */}
        <div className="flow-joint flow-joint-2">
          <FlowConnector />
        </div>

        {/* Step 3: Final Video */}
        <div className="flow-step flow-step-3">
          <FinalVideoCard data={heroDemoData.video} />
        </div>
      </div>

      {/* Bottom Microcopy */}
      <div className="transformation-footer">
        <div className="footer-message">
          <p className="footer-highlight">
            <strong>{heroDemoData.bottomNote}</strong>{" "}
            <span>Kami bantu mengolah sisanya menjadi cerita yang siap diproduksi.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
