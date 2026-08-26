import { Check, ClipboardCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["1", "Ceritakan Brand", "Website atau social media, target audience, produk, tujuan, dan referensi."],
  ["2", "Tentukan Arah", "Kami menyusun angle, content plan, tone, dan visual direction."],
  ["3", "Approve Script", "Anda memastikan pesan, wording, fakta, dan CTA sudah benar."],
  ["4", "Approve Visual", "Storyboard atau reference disepakati sebelum produksi."],
  ["5", "Produksi", "Rendering, penyusunan scene, voice-over, dan editing dilakukan."],
  ["6", "Delivery", "Final video dan caption diserahkan dalam format siap posting."],
];
const checklist = ["Nama brand", "Website / social media", "Target audience", "Produk / jasa", "Tujuan konten", "Logo & brand colors", "Tone", "Contoh yang disukai", "Contoh yang tidak disukai", "CTA", "Larangan / brand guideline", "Fakta yang wajib benar"];

export function OnboardingSection() {
  return (
    <section className="section onboarding-section" id="onboarding" aria-labelledby="onboarding-title">
      <div className="container">
        <SectionHeading
          id="onboarding-title"
          eyebrow="Cara mulai"
          title="Dari “Saya punya topik” sampai video siap posting."
          description="Anda tetap memegang keputusan penting. Kami menjaga prosesnya tetap terstruktur."
        />
        <ol className="onboarding-steps">
          {steps.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
        </ol>
        <div className="approval-note"><ClipboardCheck size={20} aria-hidden="true" /><p><strong>Approval sebelum produksi</strong> membantu mengurangi revisi besar di tahap akhir.</p></div>
        <details className="onboarding-details">
          <summary>Apa yang kami butuhkan dari Anda?<span aria-hidden="true">+</span></summary>
          <div><p>Brief tidak harus sempurna. Informasi berikut membantu kami memahami batas dan arah brand.</p><ul>{checklist.map((item) => <li key={item}><Check size={14} aria-hidden="true" />{item}</li>)}</ul></div>
        </details>
      </div>
    </section>
  );
}
