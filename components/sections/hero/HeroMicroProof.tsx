import { Check } from "lucide-react";

const desktopProofItems = [
  "Mulai Rp200 ribu",
  "Script & storyboard dulu",
  "Approve sebelum produksi",
] as const;

const mobileProofItems = [
  "Mulai Rp200 ribu",
  "Approve sebelum produksi",
] as const;

export function HeroMicroProof() {
  return (
    <div className="hero-micro-proof" aria-label="Jaminan alur produksi terkontrol">
      <div className="proof-list-desktop">
        {desktopProofItems.map((item) => (
          <span key={item} className="proof-item">
            <span className="proof-check" aria-hidden="true">
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="proof-text">{item}</span>
          </span>
        ))}
      </div>
      <div className="proof-list-mobile" aria-hidden="true">
        {mobileProofItems.map((item) => (
          <span key={item} className="proof-item">
            <span className="proof-check" aria-hidden="true">
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="proof-text">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
