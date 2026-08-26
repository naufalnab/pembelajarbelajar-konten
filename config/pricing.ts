import { ctaMessages, type CtaMessageKey } from "./site";

export type PricingPlanId = "trial" | "factory" | "growth";

export interface PricingPlan {
  id: PricingPlanId;
  badge: string;
  name: string;
  price: string;
  priceSuffix?: string;
  volume: string;
  cadence?: string;
  targetAudience: string;
  features: readonly string[];
  ctaLabel: string;
  ctaMessageKey: CtaMessageKey;
  ctaMessage: string;
  analyticsEvent: string;
  recommended: boolean;
}

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "trial",
    badge: "Coba Dulu",
    name: "AI Content Trial",
    price: "Rp1,25 juta",
    volume: "3 video",
    targetAudience: "Untuk mencoba workflow sebelum produksi rutin.",
    features: [
      "Ide + hook",
      "Script + storyboard",
      "Visual + editing",
      "Caption siap posting",
    ],
    ctaLabel: "Coba 3 Video",
    ctaMessageKey: "trial",
    ctaMessage: ctaMessages.trial,
    analyticsEvent: "cta_pricing_trial",
    recommended: false,
  },
  {
    id: "factory",
    badge: "Paling Cocok untuk Mulai Rutin",
    name: "AI Content Factory",
    price: "Rp3,5 juta",
    priceSuffix: "/ bulan",
    volume: "8 video / bulan",
    cadence: "±2 video per minggu",
    targetAudience: "Untuk brand yang ingin konsisten sekitar 2 video per minggu.",
    features: [
      "Content direction bulanan",
      "Script + storyboard",
      "Visual direction konsisten",
      "Editing + caption",
    ],
    ctaLabel: "Mulai Produksi Bulanan",
    ctaMessageKey: "factory",
    ctaMessage: ctaMessages.factory,
    analyticsEvent: "cta_pricing_factory",
    recommended: true,
  },
  {
    id: "growth",
    badge: "Produksi Lebih Aktif",
    name: "AI Content Growth",
    price: "Rp5,5 juta",
    priceSuffix: "/ bulan",
    volume: "12 video / bulan",
    targetAudience: "Untuk brand dengan ritme produksi lebih aktif.",
    features: [
      "Semua layanan Factory",
      "Lebih banyak variasi angle",
      "Prioritas produksi",
      "Opsi variasi hook",
    ],
    ctaLabel: "Diskusikan Growth",
    ctaMessageKey: "growth",
    ctaMessage: ctaMessages.growth,
    analyticsEvent: "cta_pricing_growth",
    recommended: false,
  },
];

export const sharedScopeSummary = {
  text: "Semua paket mencakup: short-form ±20–60 detik · format 9:16 · produksi berbantuan AI · maksimal 2 putaran revisi minor",
  linkText: "Lihat detail cakupan & revisi",
} as const;

export const pricingDisclaimer =
  "Paket dirancang untuk short-form storytelling dengan tingkat kompleksitas produksi normal. Kebutuhan khusus seperti durasi panjang, banyak karakter, rendering kompleks, versi bahasa tambahan, atau produksi dengan scope berbeda akan dibicarakan terlebih dahulu.";

export const packageExclusions = {
  intro:
    "Supaya workflow tetap cepat dan jelas, beberapa pekerjaan berada di luar paket dasar.",
  items: [
    "Social media account management",
    "Upload/posting harian",
    "Membalas komentar",
    "Advertising/media buying",
    "Live-action shooting",
    "Talent",
    "Influencer fee",
    "Unlimited revision",
    "Perubahan konsep total setelah approval",
    "Penggunaan figur publik tanpa izin",
    "Cloning suara tanpa hak/izin",
    "Klaim performa/viral",
    "Project berdurasi panjang di luar scope",
  ],
} as const;

export const revisionPolicy = {
  heading: "Revisi dibuat jelas sejak awal.",
  minor: {
    title: "Termasuk Revisi Minor",
    items: [
      "Typo",
      "Wording",
      "CTA",
      "Timing kecil",
      "Koreksi kecil visual",
      "Volume",
      "Adjustment ringan",
    ],
  },
  major: {
    title: "Revisi Mayor",
    items: [
      "Mengganti konsep yang sudah disetujui",
      "Mengganti keseluruhan script",
      "Mengganti visual style",
      "Mengganti karakter utama",
      "Membuat ulang storyboard",
      "Mengubah arah video secara menyeluruh",
    ],
  },
  note:
    "Perubahan mayor setelah tahap approval dapat memerlukan penyesuaian biaya atau scope karena sebagian proses produksi harus dibuat ulang.",
} as const;
