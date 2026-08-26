import { ArrowUpRight } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl } from "@/config/site";

export function FinalCtaSection() {
  return (
    <section className="section final-cta-section" id="contact" aria-labelledby="final-cta-title">
      <div className="container final-cta-card">
        <div className="final-kicker"><span>Tidak harus langsung ambil paket.</span><i aria-hidden="true" /></div>
        <h2 id="final-cta-title">Punya satu topik?<br />Kirim saja dulu.</h2>
        <p>Ceritakan materi, produk, atau ide yang ingin Anda jadikan konten. Kita bisa mulai dengan melihat angle yang paling menarik untuk divisualisasikan.</p>
        <div><CtaLink href={getWhatsAppUrl()} eventName="cta_final_whatsapp">Kirim 1 Topik via WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></CtaLink><CtaLink href="#paket" variant="text">Lihat Paket <span aria-hidden="true">↑</span></CtaLink></div>
        <small>Tidak perlu brief yang sempurna. Satu topik sudah cukup untuk memulai percakapan.</small>
      </div>
    </section>
  );
}
