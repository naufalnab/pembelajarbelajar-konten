import { CheckCheck, Clapperboard, PanelsTopLeft, ScanLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { title: "Cerita yang siap dibawakan", description: "Anda tidak perlu menyusun angle, hook, dan alur dari nol.", Icon: Clapperboard },
  { title: "Visual mengikuti cerita", description: "Arah visual, karakter, dan gaya disusun agar pesannya tetap konsisten.", Icon: ScanLine },
  { title: "Arah disetujui lebih dulu", description: "Anda meninjau script dan visual sebelum masuk ke produksi yang lebih berat.", Icon: CheckCheck },
  { title: "Video dirapikan sampai siap posting", description: "Format vertikal, editing dasar, dan caption disiapkan untuk digunakan.", Icon: PanelsTopLeft },
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
