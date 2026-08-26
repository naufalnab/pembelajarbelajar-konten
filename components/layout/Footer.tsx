import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contactEmail, ecosystemLinks, getWhatsAppUrl, navigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#main-content" aria-label="Kembali ke atas">
            <span className="brand-logo"><Image src="/brand/logo.webp" alt="" width={42} height={42} /></span>
            <span className="brand-name"><strong>Pembelajar Belajar</strong><small>/ Konten</small></span>
          </a>
          <p>Belajar, membuat, dan membagikan workflow yang bisa dipraktikkan.</p>
        </div>
        <nav className="footer-column" aria-label="Ekosistem Pembelajar Belajar">
          <h2>Ekosistem</h2>
          {ecosystemLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
        </nav>
        <nav className="footer-column" aria-label="Navigasi layanan">
          <h2>Layanan</h2>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-column">
          <h2>Kontak</h2>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} aria-hidden="true" />WhatsApp</a>
          {contactEmail && <a href={`mailto:${contactEmail}`}><Mail size={14} aria-hidden="true" />{contactEmail}</a>}
        </div>
      </div>
      <div className="container footer-bottom"><p>{siteConfig.copyright}</p><p>AI Content Factory · Pembelajar Belajar</p></div>
    </footer>
  );
}
