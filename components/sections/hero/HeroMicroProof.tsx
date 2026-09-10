import { Check } from "lucide-react";

const desktopProofItems = [
  "Factory mulai Rp450 ribu",
  "Naskah & storyboard lebih dulu",
  "Setujui arah sebelum produksi",
] as const;

const mobileProofItems = [
  "Factory mulai Rp450 ribu",
  "Setujui arah sebelum produksi",
] as const;

export function HeroMicroProof() {
  return (
    <div className="hero-micro-proof" aria-label="Ringkasan alur produksi">
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
