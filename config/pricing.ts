import { ctaMessages, type CtaMessageKey } from "./site";

export type PricingPlanId = "trial" | "factory" | "growth";

export interface PricingPlan {
  id: PricingPlanId;
  badge: string;
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: readonly string[];
  duration?: string;
  cadence?: string;
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
    description:
      "Untuk brand yang ingin mencoba workflow sebelum masuk produksi bulanan.",
    features: [
      "3 short-form video",
      "Ide & angle",
      "Script",
      "Storyboard sederhana",
      "AI-assisted visual production",
      "Editing",
      "Caption",
      "Format final 9:16",
      "Maksimal 2 putaran revisi minor",
    ],
    duration:
      "±20–60 detik/video, tergantung kebutuhan cerita dan kompleksitas.",
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
    description:
      "Untuk brand yang ingin membangun ritme konten rutin dengan workflow yang rapi.",
    features: [
      "8 short-form video / bulan",
      "Content direction bulanan",
      "Ide & hook",
      "Script",
      "Storyboard",
      "Visual direction",
      "AI-assisted production",
      "Editing",
      "Caption",
      "Consistency antarvideo",
      "Maksimal 2 putaran revisi minor per batch/video sesuai workflow",
      "Delivery siap posting",
    ],
    cadence: "Rata-rata ±2 video per minggu.",
    ctaLabel: "Mulai Produksi Bulanan",
    ctaMessageKey: "factory",
    ctaMessage: ctaMessages.factory,
    analyticsEvent: "cta_pricing_factory",
    recommended: true,
  },
  {
    id: "growth",
    badge: "Untuk Produksi Lebih Aktif",
    name: "AI Content Growth",
    price: "Rp5,5 juta",
    priceSuffix: "/ bulan",
    description:
      "Untuk brand yang membutuhkan volume produksi lebih aktif dan variasi angle lebih banyak.",
    features: [
      "12 short-form video / bulan",
      "Monthly content planning",
      "Variasi angle lebih banyak",
      "Script & storyboard",
      "Visual direction",
      "AI-assisted production",
      "Editing",
      "Caption",
      "Consistency antarvideo",
      "Prioritas produksi dibanding paket reguler",
      "Opsi variasi hook untuk konten tertentu",
      "Maksimal 2 putaran revisi minor",
    ],
    ctaLabel: "Diskusikan Paket Growth",
    ctaMessageKey: "growth",
    ctaMessage: ctaMessages.growth,
    analyticsEvent: "cta_pricing_growth",
    recommended: false,
  },
];

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
