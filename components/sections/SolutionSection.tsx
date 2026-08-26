import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["01", "Ide", "Kami membantu menentukan angle dan hook."],
  ["02", "Script", "Ide disusun menjadi cerita singkat yang jelas."],
  ["03", "Storyboard", "Setiap scene direncanakan sebelum produksi."],
  ["04", "Visual", "Kami membangun visual direction yang konsisten."],
  ["05", "Production", "Storyboard diubah menjadi short-form video."],
  ["06", "Final", "Video, caption, dan materi siap digunakan."],
];

export function SolutionSection() {
  return (
    <section className="section section-deep" id="cara-kerja" aria-labelledby="solution-title">
      <div className="container">
        <SectionHeading
          id="solution-title"
          eyebrow="Satu alur, dari awal sampai final"
          title="Serahkan bahan mentahnya. Kami kerjakan alurnya."
          description="Setiap tahap punya tujuan yang jelas agar produksi tidak bergantung pada hasil AI yang acak."
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
