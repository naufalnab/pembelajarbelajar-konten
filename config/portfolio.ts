export type PortfolioCategory =
  | "all"
  | "education"
  | "umrah"
  | "commercial"
  | "original";

export type PortfolioFormat = "short-form" | "long-form" | "series";

export interface PortfolioEpisode {
  id: string;
  number: number;
  title: string;
  youtubeId: string;
  url: string;
  duration?: string;
}

export interface PortfolioWork {
  id: string;
  title: string;
  category: "education" | "umrah" | "commercial" | "original";
  categoryLabel: string;
  format: PortfolioFormat;
  formatLabel: string;
  badge?: string;
  description: string;
  youtubeId?: string;
  url?: string;
  duration?: string;
  thumbnailSrc?: string;
  videoSrc?: string;
  posterSrc?: string;
  isFeatured?: boolean;
  isStrongProof?: boolean;
  isDemo?: boolean;
  hidden?: boolean;
  episodes?: readonly PortfolioEpisode[];
  instagramUrl?: string;
  ctaLabel?: string;
  aspectRatio?: "9:16" | "16:9";
}

export interface FeaturedDemoCase {
  id: string;
  badge: string;
  categoryLabel: string;
  title: string;
  topicInput: string;
  angle: string;
  hook: string;
  processSteps: readonly {
    step: string;
    title: string;
    description: string;
  }[];
  description: string;
  youtubeId?: string;
  videoSrc?: string;
  posterSrc?: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
  isDemo: true;
  ratio: "9:16";
  duration: "±0:28";
}

/**
 * Level 1: Featured Transformation Demo Case
 * Membuktikan workflow: Topik Awal → Angle → Hook → Proses → Video 9:16
 */
export const featuredDemoCase: FeaturedDemoCase = {
  id: "sekolah-featured",
  badge: "Contoh Video",
  categoryLabel: "DEMO UTAMA · EDUKASI",
  title: "Kenapa Anak Takut Salah Saat Belajar?",
  topicInput: "Membangun keberanian anak saat proses belajar.",
  angle: "Kenapa anak yang sebenarnya tahu jawabannya kadang memilih diam?",
  hook: "Kadang anak bukan tidak bisa. Ia hanya takut jawabannya salah.",
  processSteps: [
    {
      step: "01",
      title: "Script",
      description: "Menyusun alur emosi dari rasa ragu menuju keberanian bertumbuh.",
    },
    {
      step: "02",
      title: "Storyboard",
      description: "Memetakan 3 scene kunci: melihat soal, rasa ragu, dan langkah mencoba.",
    },
    {
      step: "03",
      title: "Visual Direction",
      description: "Menentukan warna hangat dan karakter ekspresif bernuansa edukasi.",
    },
    {
      step: "04",
      title: "Video Production",
      description: "Produksi visual, audio, voiceover, dan motion vertikal 9:16 siap posting.",
    },
  ],
  description:
    "Topik edukasi sekolah yang diolah dari identifikasi masalah, perumusan angle, pembuatan hook emosional, storyboard visual, hingga video vertikal 9:16 siap posting.",
  youtubeId: "EeCGzUFX_HI",
  videoSrc: undefined, // Diisi path video saat asset selesai disiapkan (misal "/videos/hero-demo-sekolah.mp4")
  posterSrc: undefined,
  placeholderTitle: "Berani Mencoba",
  placeholderSubtitle: "Ruang aman untuk keliru & bertumbuh",
  isDemo: true,
  ratio: "9:16",
  duration: "±0:28",
};

export const portfolioCategories = [
  { id: "all", label: "Semua Karya" },
  { id: "education", label: "Edukasi" },
  { id: "umrah", label: "Umrah & Travel" },
  { id: "commercial", label: "Produk / Commercial" },
  { id: "original", label: "Original Series" },
] as const;

/**
 * Level 2: Karya Produksi Nyata
 * Membuktikan ragam karya yang sudah diproduksi (Education, Umrah, Product, Series)
 */
export const realProductionWorks: readonly PortfolioWork[] = [
  // --- Category: Education ---
  {
    id: "les-bahasa-arab",
    title: "Les Bahasa Arab",
    category: "education",
    categoryLabel: "Edukasi",
    format: "series",
    formatLabel: "Serial Konten",
    badge: "SERIAL · 6 VIDEO",
    description:
      "Enam konten dengan tema berbeda tetapi tetap mempertahankan visual direction dan identitas serial yang konsisten.",
    isFeatured: true,
    isStrongProof: true,
    aspectRatio: "9:16",
    episodes: [
      {
        id: "arab-ep-1",
        number: 1,
        title: "Episode 01",
        youtubeId: "2PQCY463AbE",
        url: "https://youtube.com/shorts/2PQCY463AbE",
        duration: "Shorts",
      },
      {
        id: "arab-ep-2",
        number: 2,
        title: "Episode 02",
        youtubeId: "qIompwoFeYE",
        url: "https://youtube.com/shorts/qIompwoFeYE",
        duration: "Shorts",
      },
      {
        id: "arab-ep-3",
        number: 3,
        title: "Episode 03",
        youtubeId: "h9B4rINB4Tg",
        url: "https://youtube.com/shorts/h9B4rINB4Tg",
        duration: "Shorts",
      },
      {
        id: "arab-ep-4",
        number: 4,
        title: "Episode 04",
        youtubeId: "jdcoi8pfBeY",
        url: "https://youtube.com/shorts/jdcoi8pfBeY",
        duration: "Shorts",
      },
      {
        id: "arab-ep-5",
        number: 5,
        title: "Episode 05",
        youtubeId: "puXwGbpeECw",
        url: "https://youtube.com/shorts/puXwGbpeECw",
        duration: "Shorts",
      },
      {
        id: "arab-ep-6",
        number: 6,
        title: "Episode 06",
        youtubeId: "oRhtItLlcuM",
        url: "https://youtube.com/shorts/oRhtItLlcuM",
        duration: "Shorts",
      },
    ],
  },
  {
    id: "konten-sekolah",
    title: "Konten Sekolah",
    category: "education",
    categoryLabel: "Edukasi",
    format: "short-form",
    formatLabel: "Short-form",
    youtubeId: "EeCGzUFX_HI",
    url: "https://youtube.com/shorts/EeCGzUFX_HI",
    description: "Short-form storytelling untuk kebutuhan komunikasi pendidikan.",
    aspectRatio: "9:16",
  },
  {
    id: "konten-ekskul",
    title: "Konten Ekskul",
    category: "education",
    categoryLabel: "Edukasi",
    format: "short-form",
    formatLabel: "Video Edukasi",
    youtubeId: "PXsJGSzLY3E",
    url: "https://www.youtube.com/watch?v=PXsJGSzLY3E",
    description: "Visual content untuk memperkenalkan aktivitas dan program pendidikan.",
    aspectRatio: "9:16",
  },
  {
    id: "pmc-homeschool",
    title: "PMC Homeschool",
    category: "education",
    categoryLabel: "Edukasi",
    format: "short-form",
    formatLabel: "Short-form",
    youtubeId: "5hb1H-U5o70",
    url: "https://youtube.com/shorts/5hb1H-U5o70",
    description: "Konten pendidikan dalam format vertikal untuk social media.",
    aspectRatio: "9:16",
  },

  // --- Category: Umrah & Travel ---
  {
    id: "tata-cara-umroh",
    title: "Tata Cara Umroh",
    category: "umrah",
    categoryLabel: "Umrah & Travel",
    format: "long-form",
    formatLabel: "Long-form",
    badge: "LONG-FORM · 14:42",
    duration: "14:42",
    youtubeId: "e66-GX7yM9g",
    url: "https://youtu.be/e66-GX7yM9g",
    description:
      "Produksi materi panjang dengan continuity visual dari awal hingga akhir.",
    isFeatured: true,
    isStrongProof: true,
    aspectRatio: "16:9",
  },
  {
    id: "umroh-barokah-klego-1",
    title: "Umroh Barokah Klego",
    category: "umrah",
    categoryLabel: "Umrah & Travel",
    format: "short-form",
    formatLabel: "Short-form",
    youtubeId: "_tQv3FGoCf0",
    url: "https://youtube.com/shorts/_tQv3FGoCf0",
    description:
      "Produksi video vertikal untuk dokumentasi dan komunikasi perjalanan ibadah umrah.",
    aspectRatio: "9:16",
  },
  {
    id: "umroh-barokah-klego-2",
    title: "Umroh Barokah Klego · 02",
    category: "umrah",
    categoryLabel: "Umrah & Travel",
    format: "short-form",
    formatLabel: "Short-form",
    youtubeId: "CIANvem3XzU",
    url: "https://youtube.com/shorts/CIANvem3XzU",
    description:
      "Konten serial short-form dengan visual direction dan tone yang serasi antarvideo.",
    aspectRatio: "9:16",
  },

  // --- Category: Product / Commercial ---
  {
    id: "teh-hijau-134",
    title: "Teh Hijau 134",
    category: "commercial",
    categoryLabel: "Produk / Commercial",
    format: "short-form",
    formatLabel: "Commercial Short-form",
    badge: "PRODUCT CONTENT",
    youtubeId: "2pQ62bTjaNU",
    url: "https://youtube.com/shorts/2pQ62bTjaNU",
    description:
      "Visual storytelling untuk produk fisik dalam format short-form.",
    isFeatured: true,
    isStrongProof: true,
    aspectRatio: "9:16",
  },
  {
    id: "lagoa-knife",
    title: "Lagoa Knife",
    category: "commercial",
    categoryLabel: "Produk / Commercial",
    format: "short-form",
    formatLabel: "Product Visualization",
    youtubeId: "QPU33acIYdM",
    url: "https://youtube.com/shorts/QPU33acIYdM",
    description:
      "Eksplorasi visualisasi produk fisik dengan pencahayaan dan detail material terarah.",
    aspectRatio: "9:16",
  },

  // --- Category: Original Series ---
  {
    id: "asmaul-husna-series",
    title: "Asmaul Husna Series",
    category: "original",
    categoryLabel: "Original Series",
    format: "series",
    formatLabel: "Original Series",
    badge: "ORIGINAL SERIES",
    description:
      "Serial storytelling dengan visual direction, storyboard, dan continuity antarepisode.",
    instagramUrl: "https://www.instagram.com/naufalnabila_",
    ctaLabel: "Lihat Series di Instagram",
    isFeatured: true,
    isStrongProof: true,
    aspectRatio: "9:16",
  },

  // --- Future / Hidden Demo Slots ---
  // Future portfolio category: Business / Software Explainer
  {
    id: "software-explainer-archived",
    title: "Kenapa Tagihan Bisa Terlewat?",
    category: "commercial",
    categoryLabel: "Business / Software",
    format: "short-form",
    formatLabel: "Conceptual Demo",
    badge: "Demo Konsep",
    description: "Workflow pembayaran manual dibuat konkret lewat visual sederhana.",
    hidden: true,
  },
];

export const contentRangeStrip = {
  items: [
    "Short-form",
    "Long-form",
    "Serial Content",
    "Education",
    "Travel",
    "Product",
  ],
  ctaPrompt: "Punya materi yang berbeda?",
  ctaDescription:
    "Workflow-nya bisa disesuaikan dengan jenis informasi dan visual yang dibutuhkan brand Anda.",
  ctaButtonText: "Kirim 1 Topik",
} as const;
