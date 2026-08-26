import { ctaMessages, type CtaMessageKey } from "./site";

export type ServiceId = "consultation" | "production" | "factory";

export interface ServicePlan {
  id: ServiceId;
  badge: string;
  name: string;
  price: string;
  priceSuffix: string;
  targetAudience: string;
  features: readonly string[];
  microcopy?: string;
  ctaLabel: string;
  ctaMessageKey: CtaMessageKey;
  ctaMessage: string;
  analyticsEvent: string;
  recommended: boolean;
}

export const services: readonly ServicePlan[] = [
  { id: "consultation", badge: "Mau bikin sendiri", name: "AI Content Consultation", price: "Rp200 ribu", priceSuffix: "/ 60 menit", targetAudience: "Untuk Anda yang ingin mengerjakan kontennya sendiri, tetapi butuh arahan untuk menyelesaikan workflow atau masalah tertentu.", features: ["Review ide & workflow", "Bedah prompt / storyboard", "Troubleshooting visual & consistency", "Tanya jawab produksi AI"], microcopy: "Fokus konsultasi disepakati sebelum sesi agar 60 menit dapat digunakan secara efektif.", ctaLabel: "Jadwalkan Konsultasi", ctaMessageKey: "consultation", ctaMessage: ctaMessages.consultation, analyticsEvent: "cta_pricing_consultation", recommended: false },
  { id: "production", badge: "Sudah punya bahan", name: "AI Video Production", price: "Mulai Rp200 ribu", priceSuffix: "/ video", targetAudience: "Untuk Anda yang sudah memiliki script, voice-over, materi, atau arah konten yang jelas dan membutuhkan bantuan di tahap produksi.", features: ["Visual production", "AI video generation", "Editing dasar", "Final format siap digunakan"], ctaLabel: "Minta Estimasi Produksi", ctaMessageKey: "production", ctaMessage: ctaMessages.production, analyticsEvent: "cta_pricing_production", recommended: false },
  { id: "factory", badge: "Full service", name: "AI Content Factory", price: "Mulai Rp450 ribu", priceSuffix: "/ video", targetAudience: "Untuk brand yang baru punya topik atau materi mentah dan ingin kami mengerjakan alurnya sampai video siap posting.", features: ["Ide & angle", "Hook + script", "Storyboard", "Visual direction + produksi", "Editing + caption"], microcopy: "Anda cukup mulai dari topiknya.", ctaLabel: "Kirim 1 Topik", ctaMessageKey: "factory", ctaMessage: ctaMessages.factory, analyticsEvent: "cta_pricing_factory", recommended: true },
];

export const factoryPackages = [
  { videos: 1, price: "Rp450 ribu", note: "", recommended: false },
  { videos: 4, price: "Rp1,7 juta", note: "≈ Rp425 ribu/video", recommended: false },
  { videos: 8, price: "Rp3,2 juta", note: "≈ Rp400 ribu/video", recommended: true },
  { videos: 12, price: "Rp4,5 juta", note: "≈ Rp375 ribu/video", recommended: false },
] as const;

export const productionScope = ["Script final", "Voice-over / materi", "CTA", "Referensi visual bila ada"] as const;

export const pricingDisclaimer = "Harga mulai berlaku untuk short-form sederhana dengan kompleksitas produksi normal. Durasi, jumlah scene, karakter, style visual, dan kompleksitas produksi dapat memengaruhi estimasi.";

export const factoryPackageDisclaimer = "Paket di atas menggunakan scope short-form dengan tingkat kompleksitas produksi normal. Kebutuhan khusus akan dibicarakan sebelum produksi dimulai.";

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
