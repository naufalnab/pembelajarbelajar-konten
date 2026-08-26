import { Check } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { factoryPackageDisclaimer, factoryPackages, pricingDisclaimer, productionScope, services } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/config/site";

export function PricingSection() {
  return (
    <section className="section pricing-section" id="paket" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pilih sesuai kebutuhan"
          title="Pilih cara mulai yang paling sesuai."
          description="Mau membuat sendiri, sudah punya bahan, atau baru punya satu topik? Pilih seberapa jauh Anda ingin kami membantu."
        />

        <div className="pricing-grid">
          {services.map((plan) => (
            <article
              key={plan.id}
              data-plan={plan.id}
              className={`pricing-card ${plan.recommended ? "is-recommended" : ""}`}
            >
              <p className="price-badge">{plan.badge}</p>
              <h3>{plan.name}</h3>
              <div className="price-header-block">
                <p className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.priceSuffix}</span>
                </p>
              </div>
              <p className="price-target">{plan.targetAudience}</p>
              <ul className="price-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.microcopy && <p className="price-microcopy">{plan.microcopy}</p>}
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

        <div className="production-context">
          <div>
            <p className="production-context-label">Untuk AI Video Production</p>
            <p>Semakin lengkap bahan Anda, semakin sedikit tahap strategi yang perlu dikerjakan.</p>
          </div>
          <ul>{productionScope.map((item) => <li key={item}><Check size={12} aria-hidden="true" />{item}</li>)}</ul>
          <p className="revision-note-inline">Production dan Factory mencakup maksimal 2 putaran revisi minor sesuai workflow produksi.</p>
        </div>

        <section className="factory-packages" aria-labelledby="factory-package-title">
          <div className="factory-package-heading">
            <div><p className="section-eyebrow">Produksi rutin</p><h3 id="factory-package-title">Butuh konten rutin?</h3><p>Untuk produksi beberapa video sekaligus, tersedia harga paket yang lebih efisien.</p></div>
            <span className="routine-badge">Cocok untuk produksi rutin</span>
          </div>
          <div className="factory-package-grid">
            {factoryPackages.map((item) => <a key={item.videos} className={`factory-package-option ${item.recommended ? "is-package-recommended" : ""}`} href={buildWhatsAppUrl(`Assalamu'alaikum, saya tertarik paket AI Content Factory ${item.videos} video.`)}><span>{item.videos} video</span><strong>{item.price}</strong>{item.note && <small>{item.note}</small>}{item.recommended && <em>Produksi rutin</em>}</a>)}
          </div>
          <p className="factory-package-disclaimer">{factoryPackageDisclaimer}</p>
        </section>

        <div className="service-comparison" aria-label="Perbedaan layanan production dan factory">
          <p className="comparison-title">Apa bedanya Production dan Factory?</p>
          <div>
            <article><span>AI Video Production</span><strong>Anda sudah membawa bahan.</strong><p>Kami fokus mengubah bahan tersebut menjadi visual dan video.</p></article>
            <article><span>AI Content Factory</span><strong>Anda cukup membawa topik.</strong><p>Topik → Angle → Hook → Script → Storyboard → Visual → Video → Caption</p></article>
          </div>
          <p className="consultation-line">Ingin mengerjakan workflow-nya sendiri? Gunakan Consultation.</p>
        </div>

        <p className="pricing-disclaimer">{pricingDisclaimer}</p>
      </div>
    </section>
  );
}
