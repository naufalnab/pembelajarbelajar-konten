import { CheckCircle2, ShieldCheck } from "lucide-react";

const excluded = ["Social media account management", "Upload / posting harian", "Membalas komentar", "Advertising / media buying", "Live-action shooting, talent, atau influencer fee", "Unlimited revision", "Perubahan konsep total setelah approval", "Figur publik atau cloning suara tanpa izin", "Klaim performa / viral", "Project berdurasi panjang di luar scope"];
const safety = ["Tidak membuat impersonation menyesatkan.", "Tidak memakai wajah atau suara orang nyata tanpa hak yang sesuai.", "Informasi sensitif divalidasi oleh klien.", "Materi agama, kesehatan, atau finansial perlu approval fakta dari pihak klien."];

export function ScopeSafetySection() {
  return (
    <section className="section scope-safety-section" aria-label="Scope dan prinsip produksi">
      <div className="container scope-safety-grid">
        <details className="scope-details">
          <summary><span><small>Supaya workflow tetap cepat dan jelas</small><strong>Secara default tidak termasuk</strong></span><i aria-hidden="true">+</i></summary>
          <ul>{excluded.map((item) => <li key={item}><CheckCircle2 size={14} aria-hidden="true" />{item}</li>)}</ul>
        </details>
        <aside className="safety-card">
          <ShieldCheck size={26} aria-hidden="true" />
          <div><p className="section-eyebrow">Brand safety</p><h2>Produksi yang tetap punya batas.</h2><ul>{safety.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </aside>
      </div>
    </section>
  );
}
