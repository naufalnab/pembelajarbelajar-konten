import { MessageCircleQuestion } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/config/faq";
import { buildWhatsAppUrl } from "@/config/site";

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <SectionHeading id="faq-title" eyebrow="Pertanyaan umum" title="Sebelum mengirim topik, mungkin ini yang ingin Anda tanyakan." align="left" />
          <div className="faq-help"><MessageCircleQuestion size={23} aria-hidden="true" /><p><strong>Belum menemukan jawabannya?</strong><span>Kirim pertanyaan singkat melalui WhatsApp.</span></p></div>
          <CtaLink href={buildWhatsAppUrl("Assalamu'alaikum, saya ingin bertanya tentang layanan AI Content Factory: ...")} variant="secondary" eventName="cta_faq_whatsapp">Tanya via WhatsApp <span aria-hidden="true">↗</span></CtaLink>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => <details key={item.id} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
