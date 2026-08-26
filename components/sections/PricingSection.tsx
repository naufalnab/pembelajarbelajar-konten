import { Check, Sparkles } from "lucide-react";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingDisclaimer, pricingPlans } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/config/site";

export function PricingSection() {
  return (
    <section className="section pricing-section" id="paket" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeading id="pricing-title" eyebrow="Paket produksi" title="Pilih cara mulai yang paling masuk akal." description="Mulai dari beberapa konten untuk mencoba workflow, lalu lanjut ke produksi rutin jika sudah cocok." />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article key={plan.id} className={`pricing-card ${plan.recommended ? "is-recommended" : ""}`}>
              {plan.recommended && <span className="recommended-corner"><Sparkles size={13} aria-hidden="true" /> Recommended</span>}
              <p className="price-badge">{plan.badge}</p><h3>{plan.name}</h3><p className="price-description">{plan.description}</p>
              <p className="price"><strong>{plan.price}</strong>{plan.priceSuffix && <span>{plan.priceSuffix}</span>}</p>
              {plan.cadence && <p className="cadence">{plan.cadence}</p>}
              <ul>{plan.features.map((feature) => <li key={feature}><Check size={14} strokeWidth={2.5} aria-hidden="true" />{feature}</li>)}</ul>
              {plan.duration && <p className="duration">Durasi: <strong>{plan.duration}</strong></p>}
              <CtaLink href={buildWhatsAppUrl(plan.ctaMessage)} eventName={plan.analyticsEvent} variant={plan.recommended ? "primary" : "secondary"}>{plan.ctaLabel}<span aria-hidden="true">↗</span></CtaLink>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer">{pricingDisclaimer}</p>
      </div>
    </section>
  );
}
