import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, CheckCircle2, Clapperboard, Cpu, PenTool, Share2, Volume2, Wrench } from "lucide-react";
import { SupportMethods } from "@/components/support/SupportMethods";
import { supportConfig, supportMethods } from "@/config/support";

const pageUrl = "https://pembelajarbelajar.com/dukung";
const title = "Dukung Produksi Asmaul Husna Series | Pembelajar Belajar";
const description = "Dukung keberlanjutan produksi Asmaul Husna Series agar tetap dapat dinikmati gratis. Dukungan bersifat sukarela dan membantu proses produksi episode berikutnya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "website", images: [{ url: "/og-dukung.png", width: 1536, height: 1024, alt: "Dukung Produksi Asmaul Husna Series" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-dukung.png"] },
};

const supportUses = [
  { icon: Clapperboard, title: "Produksi Visual", text: "Membantu proses pembuatan image, scene, dan visual setiap episode." },
  { icon: Cpu, title: "AI Generation", text: "Membantu biaya tools dan proses generation selama produksi." },
  { icon: PenTool, title: "Editing", text: "Membantu proses penyusunan scene hingga menjadi video final." },
  { icon: Volume2, title: "Voice & Audio Production", text: "Membantu kebutuhan produksi suara dan audio yang digunakan dalam serial." },
  { icon: Wrench, title: "Tools & Infrastruktur", text: "Membantu biaya tools, penyimpanan, dan kebutuhan teknis produksi." },
];

const faqs = [
  ["Apakah Asmaul Husna Series akan tetap gratis?", "Ya. Dukungan bersifat sukarela dan tidak mengubah akses terhadap serial."],
  ["Dukungan digunakan untuk apa?", "Untuk membantu proses produksi seperti visual, generation, editing, audio, dan tools/infrastruktur produksi."],
  ["Apakah ada nominal minimum?", "Tidak. Nominal bebas."],
];

export default function SupportPage() {
  const { currentEpisode, totalEpisodes, title: seriesTitle } = supportConfig.series;
  const completedEpisodes = Math.min(Math.max(currentEpisode, 0), totalEpisodes);
  const remainingEpisodes = Math.max(totalEpisodes - completedEpisodes, 0);
  const progress = totalEpisodes > 0 ? Math.min((completedEpisodes / totalEpisodes) * 100, 100) : 0;
  const enabledMethods = supportMethods.filter((method) => method.enabled && (method.type === "qris" ? Boolean(method.imageSrc) : Boolean(method.accountNumber && method.accountName)));

  return (
    <div className="support-page">
      <a className="skip-link" href="#dukung-main">Lewati ke konten utama</a>
      <header className="support-header">
        <Link className="support-brand" href="/" aria-label="Kembali ke beranda Pembelajar Belajar">
          <Image src="/brand/logo.webp" alt="" width={42} height={42} priority />
          <span>Pembelajar Belajar</span>
        </Link>
        <Link className="support-back" href="/"><ArrowLeft size={16} aria-hidden="true" /> Kembali <span>ke Beranda</span></Link>
      </header>

      <main id="dukung-main">
        <section className="support-hero">
          <div className="support-container support-hero-inner">
            <p className="support-eyebrow">ASMAUL HUSNA SERIES</p>
            <h1>Bantu Seri Ini<br />Tetap Gratis.</h1>
            <p className="support-lead">Asmaul Husna Series dibuat dan dibagikan gratis untuk ditonton. Jika konten ini bermanfaat dan Anda ingin ikut membantu keberlanjutan produksinya, dukungan Anda sangat berarti.</p>
            <p className="support-voluntary"><CheckCircle2 size={17} aria-hidden="true" /> Dukungan bersifat sukarela. Tidak ada kewajiban untuk ikut mendukung.</p>
            <a className="support-cta" href="#metode-dukungan">Dukung Produksi <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="support-section support-progress-section" aria-labelledby="progress-heading">
          <div className="support-container support-narrow">
            <div className="support-progress-card">
              <p className="support-eyebrow">PERJALANAN SERIAL</p>
              <h2 id="progress-heading">Perjalanan Menuju {totalEpisodes} Episode</h2>
              <div className="support-episode-count"><strong>{completedEpisodes}</strong><span>/ {totalEpisodes}</span></div>
              <p>Satu episode baru kami usahakan hadir setiap hari.</p>
              <div className="support-progress-track" aria-label={`${completedEpisodes} dari ${totalEpisodes} episode selesai`}><span style={{ width: `${progress}%` }} /></div>
              <p className="support-progress-note">{remainingEpisodes === 0 ? `Alhamdulillah, ${totalEpisodes} episode telah selesai.` : `${remainingEpisodes} episode lagi menuju seri lengkap.`}</p>
            </div>
          </div>
        </section>

        <section className="support-section" aria-labelledby="uses-heading">
          <div className="support-container">
            <div className="support-section-intro"><p className="support-eyebrow">DI BALIK SETIAP EPISODE</p><h2 id="uses-heading">Dukungan Membantu Apa?</h2></div>
            <div className="support-uses-grid">{supportUses.map(({ icon: Icon, title: useTitle, text }) => <article key={useTitle}><span><Icon size={21} aria-hidden="true" /></span><h3>{useTitle}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="support-section support-transparency"><div className="support-container support-narrow"><p>Dukungan digunakan untuk membantu keberlanjutan proses produksi konten Pembelajar Belajar. Besar dukungan bebas dan tidak memengaruhi akses terhadap konten—{seriesTitle} tetap dapat ditonton gratis.</p></div></section>

        <section className="support-section support-methods-section" id="metode-dukungan" aria-labelledby="methods-heading">
          <div className="support-container support-narrow">
            <div className="support-section-intro support-section-intro-centered"><p className="support-eyebrow">DUKUNG PRODUKSI</p><h2 id="methods-heading">Pilih Cara Mendukung</h2><p>Gunakan metode yang paling nyaman. Nominal dukungan bebas.</p></div>
            <div className="support-method-copy"><h3>Dukung Produksi</h3><p>Jika {seriesTitle} bermanfaat dan Anda ingin ikut membantu produksi episode berikutnya, silakan gunakan salah satu metode di bawah.</p><p>Nominal bebas. Dukungan tidak memengaruhi akses—seri ini tetap gratis untuk ditonton.</p></div>
            <SupportMethods methods={enabledMethods} />
            <p className="support-no-proof">Tidak perlu mengirim bukti transfer. Jazakumullahu khairan atas setiap dukungan dan doa baiknya.</p>
          </div>
        </section>

        <section className="support-section support-thanks"><div className="support-container support-narrow"><p className="support-eyebrow">TERIMA KASIH</p><h2>Jazakumullahu khairan.</h2><p>Terima kasih sudah menonton, membagikan, mendoakan, atau ikut membantu produksi. Semua bentuk dukungan sangat berarti bagi perjalanan menyelesaikan {totalEpisodes} episode {seriesTitle}.</p><p>Bahkan jika tidak memberikan dukungan finansial, membagikan konten kepada orang yang membutuhkan juga sangat membantu.</p><a className="support-share" href={supportConfig.instagramUrl} target="_blank" rel="noreferrer"><Share2 size={16} aria-hidden="true" /> Bagikan Asmaul Husna Series <ArrowUpRight size={15} aria-hidden="true" /></a></div></section>

        <section className="support-section support-faq-section" aria-labelledby="faq-heading"><div className="support-container support-narrow"><div className="support-section-intro"><p className="support-eyebrow">PERTANYAAN SINGKAT</p><h2 id="faq-heading">Yang Perlu Diketahui</h2></div><div className="support-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      </main>

      <footer className="support-footer"><div className="support-container"><strong>Pembelajar Belajar</strong><nav aria-label="Footer"><Link href="/">Beranda</Link><a href={supportConfig.instagramUrl} target="_blank" rel="noreferrer">Asmaul Husna Series</a></nav><small>© {new Date().getFullYear()} Pembelajar Belajar.</small></div></footer>
    </div>
  );
}
