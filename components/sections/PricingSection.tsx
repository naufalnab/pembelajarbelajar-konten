import { ArrowUpRight, Check } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingDisclaimer, pricingPlans, sharedScopeSummary } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/config/site";

export function PricingSection() {
  return (
    <section className="section pricing-section" id="paket" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeading
          id="pricing-title"
          eyebrow="Paket produksi"
          title="Pilih cara mulai yang paling masuk akal."
          description="Mulai dari beberapa konten untuk mencoba workflow, lalu lanjut ke produksi rutin jika sudah cocok."
        />

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              data-plan={plan.id}
              className={`pricing-card ${plan.recommended ? "is-recommended" : ""}`}
            >
              {/* 1. Badge / Kategori */}
              <p className="price-badge">{plan.badge}</p>

              {/* 2. Nama Paket */}
              <h3>{plan.name}</h3>

              {/* 3. Harga & 4. Jumlah Video (Muncul sebelum daftar benefit) */}
              <div className="price-header-block">
                <p className="price">
                  <strong>{plan.price}</strong>
                  {plan.priceSuffix && <span>{plan.priceSuffix}</span>}
                </p>
                <p className="price-volume">
                  <span className="volume-tag">{plan.volume}</span>
                  {plan.cadence && <span className="cadence-tag">· {plan.cadence}</span>}
                </p>
              </div>

              {/* 5. Satu kalimat "cocok untuk siapa" */}
              <p className="price-target">{plan.targetAudience}</p>

              {/* 6. Maksimal empat benefit utama */}
              <ul className="price-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 7. CTA */}
              <CtaLink
                href={buildWhatsAppUrl(plan.ctaMessage)}
                eventName={plan.analyticsEvent}
                variant={plan.recommended ? "primary" : "secondary"}
              >
                {plan.ctaLabel}
                <span aria-hidden="true">↗</span>
              </CtaLink>
            </article>
          ))}
        </div>

        {/* Shared Scope Strip di bawah ketiga cards */}
        <div className="pricing-scope-strip" aria-label="Cakupan standar semua paket">
          {/* Desktop single line */}
          <div className="scope-strip-desktop">
            <div className="scope-strip-main">
              <span className="scope-strip-bullet" aria-hidden="true">✦</span>
              <p className="scope-strip-text">
                <strong>Semua paket mencakup:</strong> short-form ±20–60 detik · format 9:16 · produksi berbantuan AI · maksimal 2 putaran revisi minor
              </p>
            </div>
            <a href="#revisi" className="scope-strip-link">
              <span>{sharedScopeSummary.linkText}</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile compact block */}
          <div className="scope-strip-mobile">
            <div className="scope-mobile-header">
              <span className="scope-strip-bullet" aria-hidden="true">✦</span>
              <strong>Semua paket mencakup:</strong>
            </div>
            <ul className="scope-mobile-grid">
              <li>
                <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>±20–60 detik</span>
              </li>
              <li>
                <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>Format 9:16</span>
              </li>
              <li>
                <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>Produksi berbantuan AI</span>
              </li>
              <li>
                <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>Maks. 2 revisi minor</span>
              </li>
            </ul>
            <div className="scope-mobile-footer">
              <a href="#revisi" className="scope-strip-link">
                <span>{sharedScopeSummary.linkText}</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="pricing-disclaimer">{pricingDisclaimer}</p>
      </div>
    </section>
  );
}
