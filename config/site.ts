const DEFAULT_SITE_URL = "https://konten.pembelajarbelajar.com";
const DEFAULT_WHATSAPP_NUMBER = "6282328591004";

function withoutTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function normalizeWhatsAppNumber(value: string): string {
  const digits = value.replace(/\D/g, "");

  return digits || DEFAULT_WHATSAPP_NUMBER;
}

export const siteUrl = withoutTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
);

export const whatsappNumber = normalizeWhatsAppNumber(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP_NUMBER,
);

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";

export interface SiteConfig {
  brandName: string;
  serviceName: string;
  displayName: string;
  domain: string;
  url: string;
  locale: string;
  title: string;
  description: string;
  contact: {
    whatsappNumber: string;
    email: string;
  };
  copyright: string;
}

export const siteConfig = {
  brandName: "Pembelajar Belajar",
  serviceName: "AI Content Factory",
  displayName: "Pembelajar Belajar / Konten",
  domain: "konten.pembelajarbelajar.com",
  url: siteUrl,
  locale: "id_ID",
  title: "AI Content Factory — Ubah Ide Jadi Konten | Pembelajar Belajar",
  description:
    "Jasa produksi short-form storytelling dari ide, script, storyboard, visual, hingga video siap posting untuk sekolah, edukasi, travel, software, dan bisnis.",
  contact: {
    whatsappNumber,
    email: contactEmail,
  },
  copyright: `© ${new Date().getFullYear()} Pembelajar Belajar.`,
} as const satisfies SiteConfig;

export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export const navigation: readonly NavigationItem[] = [
  { label: "Contoh", href: "#contoh" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
];

export const ctaMessages = {
  generic:
    "Assalamu'alaikum, saya punya satu topik yang ingin dijadikan konten: ...",
  trial:
    "Assalamu'alaikum, saya tertarik mencoba AI Content Trial 3 video.",
  factory:
    "Assalamu'alaikum, saya tertarik dengan AI Content Factory 8 video per bulan.",
  growth:
    "Assalamu'alaikum, saya ingin diskusi tentang AI Content Growth 12 video per bulan.",
} as const;

export type CtaMessageKey = keyof typeof ctaMessages;

/** Build a wa.me URL with a normalized phone number and correctly encoded message. */
export function buildWhatsAppUrl(message: string = ctaMessages.generic): string {
  const query = new URLSearchParams({ text: message });

  return `https://wa.me/${whatsappNumber}?${query.toString()}`;
}

export const createWhatsAppUrl = buildWhatsAppUrl;

export function getWhatsAppUrl(
  messageKey: CtaMessageKey = "generic",
): string {
  return buildWhatsAppUrl(ctaMessages[messageKey]);
}

export const whatsappLinks = {
  generic: getWhatsAppUrl("generic"),
  trial: getWhatsAppUrl("trial"),
  factory: getWhatsAppUrl("factory"),
  growth: getWhatsAppUrl("growth"),
} as const;

export type EcosystemLink = {
  label: string;
  href: string;
  description: string;
};

export const ecosystemLinks: readonly EcosystemLink[] = [
  {
    label: "Pembelajar Belajar",
    href: "https://pembelajarbelajar.com",
    description: "Belajar, membuat, dan membagikan workflow yang bisa dipraktikkan.",
  },
  {
    label: "Tutorial Video AI",
    href: "https://video.pembelajarbelajar.com",
    description: "Tutorial dan workflow produksi video berbantuan AI.",
  },
  {
    label: "Komik Pembelajar Belajar",
    href: "https://komik.pembelajarbelajar.com",
    description: "Cerita dan ide belajar dalam format komik.",
  },
];
