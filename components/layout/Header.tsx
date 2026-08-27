import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl, navigation } from "@/config/site";

export function Header() {
  return (
    <header className="site-header" aria-label="Header situs">
      <div className="header-inner">
        <a className="brand" href="#main-content" aria-label="Pembelajar Belajar / Konten">
          <span className="brand-logo"><Image src="/brand/logo.webp" alt="" width={42} height={42} priority /></span>
          <span className="brand-name"><strong>Pembelajar Belajar</strong><small>/ Konten</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <CtaLink href={getWhatsAppUrl()} eventName="cta_header_whatsapp" className="header-cta">
          Kirim satu topik <ArrowUpRight size={15} aria-hidden="true" />
        </CtaLink>
        <MobileNav />
      </div>
    </header>
  );
}
