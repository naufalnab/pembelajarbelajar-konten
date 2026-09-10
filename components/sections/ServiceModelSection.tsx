import { ArrowRight, Clapperboard, MessagesSquare, WandSparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paths = [
  { label: "Mau mengerjakan sendiri", title: "Konsultasi", copy: "Bawa workflow atau masalah tertentu. Kami bantu membedah arah dan langkah produksinya.", Icon: MessagesSquare, href: "#paket" },
  { label: "Sudah punya bahan", title: "Video Production", copy: "Bawa script, voice-over, atau materi yang matang. Kami bantu tahap visual dan produksi.", Icon: Clapperboard, href: "#paket" },
  { label: "Baru punya satu topik", title: "Content Factory", copy: "Kami kerjakan sudut cerita, naskah, storyboard, visual, video, hingga caption.", Icon: WandSparkles, href: "#paket" },
] as const;

export function ServiceModelSection() {
  return (
    <section className="service-model-section" aria-labelledby="service-model-title">
      <div className="container service-model-layout">
        <SectionHeading id="service-model-title" eyebrow="Layanan, bukan aplikasi mandiri" title="Pilih sejauh apa kami membantu." align="left" />
        <div className="service-paths">
          {paths.map(({ label, title, copy, Icon, href }, index) => (
            <a href={href} key={title} className={index === 2 ? "service-path is-factory" : "service-path"}>
              <span className="service-path-icon"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
              <small>{label}</small><strong>{title}</strong><p>{copy}</p>
              <span className="service-path-link">Lihat pilihan <ArrowRight size={14} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
