"use client";

import { useState, type ComponentType } from "react";
import { ArrowRight, Check, FileText, GraduationCap, Lightbulb, Package } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/config/site";

type ContentSource = { id: string; label: string; note: string; Icon: ComponentType<{ size?: number; strokeWidth?: number }>; input: string; hook: string; output: string };

const contentSources: readonly ContentSource[] = [
  { id: "article", label: "Artikel", note: "Materi lama", Icon: FileText, input: "Artikel tentang kebiasaan belajar", hook: "Bukan kurang waktu. Kadang kita hanya belum menemukan cara belajar yang tepat.", output: "Article Story · 9:16" },
  { id: "school", label: "Materi sekolah", note: "Modul / lesson", Icon: GraduationCap, input: "Materi: keberanian menjawab di kelas", hook: "Kadang anak bukan tidak bisa. Ia hanya takut jawabannya salah.", output: "Storytelling Edukasi · 9:16" },
  { id: "product", label: "Produk", note: "Fitur & manfaat", Icon: Package, input: "Teh hijau dengan karakter rasa tertentu", hook: "Tidak semua teh hijau menghasilkan pengalaman rasa yang sama.", output: "Product Storytelling · 9:16" },
  { id: "founder", label: "Ide / catatan", note: "Sudut pandang", Icon: Lightbulb, input: "Pengalaman membangun layanan dari nol", hook: "Yang terlihat mudah hari ini sering lahir dari banyak percobaan yang tidak terlihat.", output: "Founder Story · 9:16" },
];
const processSteps = ["Cari angle", "Susun hook", "Bangun cerita", "Arahkan visual"] as const;

export function ProblemSection() {
  const [activeId, setActiveId] = useState("school");
  const active = contentSources.find((source) => source.id === activeId) ?? contentSources[1];

  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeading
          id="problem-title"
          eyebrow="Bahan Anda sudah ada"
          title={<>Bahan Anda sudah cukup untuk mulai. <em>Kami bantu mengubahnya jadi konten.</em></>}
          description="Tidak perlu datang dengan script lengkap. Kirim materi yang sudah Anda punya—kami bantu menemukan angle dan ceritanya."
        />
        <div className="content-workflow">
          <section className="workflow-stage source-stage" aria-labelledby="source-title"><p className="workflow-number">01 — KIRIM BAHAN</p><h3 id="source-title">Mulai dari yang sudah ada.</h3><div className="material-grid" aria-label="Pilih contoh bahan konten">{contentSources.map(({ id, label, note, Icon }) => <button key={id} type="button" className={`material-card ${activeId === id ? "is-active" : ""}`} onClick={() => setActiveId(id)} aria-pressed={activeId === id}><Icon size={16} strokeWidth={1.8} /><span><strong>{label}</strong><small>{note}</small></span></button>)}</div><p className="material-more">+ FAQ, presentasi, pertanyaan pelanggan, dan lainnya.</p><p className="selected-material"><Check size={13} aria-hidden="true" /> Contoh terpilih: <strong>{active.label}</strong></p></section>
          <div className="workflow-connector" aria-hidden="true"><i /><span><ArrowRight size={17} /></span></div>
          <section className="workflow-stage process-stage" aria-labelledby="process-title"><p className="workflow-number">02 — KAMI OLAH</p><h3 id="process-title">Kami cari ceritanya.</h3><p className="stage-description">Kami menemukan sudut yang membuat bahan Anda layak ditonton.</p><ol className="process-stack">{processSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></section>
          <div className="workflow-connector" aria-hidden="true"><i /><span><ArrowRight size={17} /></span></div>
          <section className="workflow-stage outcome-stage" aria-labelledby="outcome-title"><p className="workflow-number">03 — HASIL</p><h3 id="outcome-title">Siap jadi konten.</h3><div className="outcome-card" key={active.id}><div className="outcome-copy"><span className="outcome-label">Bahan masuk</span><p>{active.input}</p><span className="outcome-label">Hook</span><blockquote>“{active.hook}”</blockquote><div className="story-mini"><span>Story</span><i /><i /><i /><small>Storyboard + arahan visual</small></div></div><div className="outcome-video" aria-label={`Contoh output ${active.output}`}><span>{active.output}</span><strong>SIAP<br />POSTING</strong><i /><small>9:16</small></div></div></section>
        </div>
        <div className="workflow-payoff"><p>Anda tidak perlu memikirkan format kontennya terlebih dahulu. <strong>Mulai saja dari bahan yang sudah Anda punya.</strong></p><CtaLink href={getWhatsAppUrl()} eventName="cta_material_workflow" variant="text">Kirim bahan Anda <ArrowRight size={15} aria-hidden="true" /></CtaLink></div>
      </div>
    </section>
  );
}
