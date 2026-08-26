import { FileText, GraduationCap, HelpCircle, Lightbulb, MonitorCog, Package, Presentation, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const materials = [
  { label: "Artikel", Icon: FileText },
  { label: "FAQ", Icon: HelpCircle },
  { label: "Materi sekolah", Icon: GraduationCap },
  { label: "Produk", Icon: Package },
  { label: "Presentasi", Icon: Presentation },
  { label: "Ide founder", Icon: Lightbulb },
  { label: "Fitur software", Icon: MonitorCog },
  { label: "Pertanyaan pelanggan", Icon: Users },
];

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeading
          id="problem-title"
          eyebrow="Bahan Anda sudah ada"
          title="Banyak brand sebenarnya tidak kekurangan bahan konten."
          description="Yang sulit adalah mengubah bahan itu menjadi sesuatu yang layak ditonton secara konsisten."
        />
        <div className="material-flow">
          <ul className="material-grid" aria-label="Contoh bahan konten">
            {materials.map(({ label, Icon }) => (
              <li key={label}><Icon size={17} strokeWidth={1.8} aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ul>
          <div className="flow-connector" aria-hidden="true"><span /><b>→</b></div>
          <div className="factory-box">
            <span className="factory-signal" aria-hidden="true"><i /><i /><i /></span>
            <small>Masuk ke workflow</small>
            <strong>AI Content<br />Factory</strong>
            <p>Diolah menjadi cerita yang jelas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
