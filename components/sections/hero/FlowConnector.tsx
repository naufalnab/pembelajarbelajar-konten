import { ArrowDown } from "lucide-react";

export function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="flow-connector-vertical" aria-hidden="true">
      <div className="connector-stem">
        <span className="stem-line" />
        <span className="stem-node" />
      </div>
      <div className="connector-badge">
        <span className="connector-arrow">
          <ArrowDown size={12} strokeWidth={2.4} />
        </span>
        {label && <span className="connector-label-text">{label}</span>}
      </div>
    </div>
  );
}

