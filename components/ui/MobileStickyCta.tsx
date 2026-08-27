"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/config/site";

export function MobileStickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.getElementById("site-footer");
    if (!hero) return;
    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0.08 });
    const footerObserver = footer ? new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0 }) : null;
    heroObserver.observe(hero);
    if (footer && footerObserver) footerObserver.observe(footer);
    return () => { heroObserver.disconnect(); footerObserver?.disconnect(); };
  }, []);

  if (!pastHero || footerVisible) return null;

  return (
    <div className="mobile-sticky-cta is-visible">
      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" data-analytics-event="cta_mobile_sticky">Kirim satu topik <span aria-hidden="true">↗</span></a>
    </div>
  );
}
