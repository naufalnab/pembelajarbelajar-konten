import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["01", "Punya topik", "Mulai dari ide, link, atau bahan yang sudah ada."],
  ["02", "Kirim bahan", "Ceritakan pesan, tujuan, dan referensi yang Anda punya."],
  ["03", "Kami olah", "Angle, script, storyboard, dan arah visual kami susun."],
  ["04", "Review", "Anda menyetujui arah penting sebelum produksi."],
  ["05", "Siap posting", "Video final dan caption disiapkan untuk digunakan."],
];

export function SolutionSection() {
  return (
    <section className="section section-deep" id="cara-kerja" aria-labelledby="solution-title">
      <div className="container">
        <SectionHeading
          id="solution-title"
          eyebrow="Alur yang sederhana"
          title="Dari satu topik sampai video siap posting."
          description="Satu alur yang jelas, dengan persetujuan pada tahap yang memang perlu Anda lihat."
        />
        <ol className="production-steps">
          {steps.map(([number, title, description], index) => (
            <li key={number}>
              <span className="production-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              {index < steps.length - 1 && <span className="production-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
