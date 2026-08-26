import { CheckCheck, Clapperboard, PanelsTopLeft, ScanLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { title: "Story First", description: "AI mengikuti cerita, bukan cerita mengikuti hasil random AI.", Icon: Clapperboard },
  { title: "Visual Consistency", description: "Style, karakter, environment, dan brand direction dijaga antarkonten.", Icon: ScanLine },
  { title: "Approval Sebelum Produksi", description: "Script dan arah visual disetujui sebelum proses render yang lebih berat.", Icon: CheckCheck },
  { title: "Ready to Publish", description: "Output disiapkan dalam format short-form vertikal, lengkap dengan caption.", Icon: PanelsTopLeft },
];

export function DifferentiatorSection() {
  return (
    <section className="section differentiator-section" aria-labelledby="different-title">
      <div className="container">
        <div className="split-heading">
          <SectionHeading id="different-title" eyebrow="Proof of process" title="Bukan sekadar generate video." align="left" />
          <p>Tools AI bisa berubah. <strong>Workflow yang rapi tetap dibutuhkan.</strong></p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ title, description, Icon }, index) => (
            <article key={title}>
              <div className="benefit-top"><span>0{index + 1}</span><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
