import { Check, RotateCcw, TriangleAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const minor = ["Typo dan wording", "CTA", "Timing kecil", "Koreksi visual ringan", "Volume", "Adjustment ringan"];
const major = ["Mengganti konsep yang disetujui", "Mengganti keseluruhan script", "Mengganti visual style", "Mengganti karakter utama", "Membuat ulang storyboard", "Mengubah arah video menyeluruh"];

export function RevisionSection() {
  return (
    <section className="section revision-section" aria-labelledby="revision-title">
      <div className="container compact-container">
        <SectionHeading id="revision-title" eyebrow="Revisi yang jelas" title="Belum cocok? Revisi minor sudah termasuk." description="Untuk Production dan Factory, maksimal dua putaran revisi minor mengikuti workflow produksi. Approval per tahap membantu perubahan tetap ringan." />
        <div className="revision-grid">
          <article className="minor-card">
            <span className="revision-icon"><RotateCcw size={20} aria-hidden="true" /></span><h3>Termasuk Revisi Minor</h3>
            <ul>{minor.map((item) => <li key={item}><Check size={14} aria-hidden="true" />{item}</li>)}</ul>
          </article>
          <article className="major-card">
            <span className="revision-icon"><TriangleAlert size={20} aria-hidden="true" /></span><h3>Revisi Mayor</h3>
            <ul>{major.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
        <p className="revision-note">Perubahan mayor setelah tahap approval dapat memerlukan penyesuaian biaya atau scope karena sebagian proses produksi harus dibuat ulang.</p>
      </div>
    </section>
  );
}
