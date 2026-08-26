import { Check } from "lucide-react";

const proofItems = [
  "Script dulu",
  "Storyboard dulu",
  "Approve dulu",
  "Baru produksi",
] as const;

export function HeroMicroProof() {
  return (
    <div className="hero-micro-proof" aria-label="Jaminan alur produksi terkontrol">
      {proofItems.map((item) => (
        <span key={item} className="proof-item">
          <span className="proof-check" aria-hidden="true">
            <Check size={11} strokeWidth={3} />
          </span>
          <span className="proof-text">{item}</span>
        </span>
      ))}
    </div>
  );
}
