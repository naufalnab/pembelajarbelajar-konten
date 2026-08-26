"use client";

import { useRef } from "react";
import { getWhatsAppUrl, navigation } from "@/config/site";

export function MobileNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details className="mobile-menu" ref={detailsRef}>
      <summary aria-label="Buka navigasi">
        <span className="menu-bars" aria-hidden="true" />
      </summary>
      <nav aria-label="Navigasi mobile">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          className="cta-link cta-primary"
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          data-cta-event="cta_mobile_menu"
          onClick={closeMenu}
        >
          Kirim 1 Topik <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </details>
  );
}
