import { ArrowRight, ArrowDown } from "lucide-react";

export function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="flow-connector-wrapper" aria-hidden="true">
      <div className="connector-track">
        <span className="connector-line" />
        <span className="connector-pulse" />
      </div>
      <div className="connector-icon-box">
        <ArrowRight size={14} className="connector-arrow-desktop" />
        <ArrowDown size={14} className="connector-arrow-mobile" />
      </div>
      {label && <span className="connector-label">{label}</span>}
    </div>
  );
}
