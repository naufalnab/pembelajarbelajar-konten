export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    id: "ide-awal",
    question: "Apakah saya harus sudah punya ide?",
    answer:
      "Tidak. Topik kasar, FAQ, artikel, presentasi, atau informasi produk sudah cukup sebagai titik awal. Kami membantu mencari angle dan hook yang paling masuk akal.",
  },
  {
    id: "shooting",
    question: "Apakah harus shooting?",
    answer:
      "Tidak selalu. Banyak konsep dapat dibuat menggunakan visual AI, elemen grafis, motion, visualisasi layar atau UI, serta aset brand yang sudah tersedia.",
  },
  {
    id: "semua-ai",
    question: "Apakah semua dibuat menggunakan AI?",
    answer:
      "AI digunakan sebagai bagian dari workflow produksi. Fokus kami tetap pada cerita, visual direction, consistency, editing, dan kualitas hasil akhirnya.",
  },
  {
    id: "durasi",
    question: "Berapa durasi videonya?",
    answer:
      "Umumnya sekitar 20–60 detik untuk format short-form. Scope dapat disesuaikan dan dibicarakan lebih dahulu jika kebutuhan Anda berbeda.",
  },
  {
    id: "gaya-visual",
    question: "Apakah bisa meminta gaya visual tertentu?",
    answer:
      "Bisa, selama dibicarakan sebelum produksi, sesuai brand guideline, dan masih dalam scope yang disepakati. Arah visual akan dikonfirmasi sebelum tahap render yang lebih berat.",
  },
  {
    id: "revisi",
    question: "Bagaimana revisinya?",
    answer:
      "Paket mencakup maksimal dua putaran revisi minor, seperti typo, wording, CTA, timing kecil, atau koreksi visual ringan. Perubahan konsep, script, karakter, atau style secara menyeluruh setelah approval dapat memerlukan penyesuaian biaya atau scope.",
  },
  {
    id: "jaminan-viral",
    question: "Apakah bisa menjamin viral?",
    answer:
      "Tidak. Kami membantu membuat workflow dan konten lebih rapi serta layak digunakan, tetapi performa media sosial dipengaruhi banyak faktor di luar proses produksi.",
  },
  {
    id: "produksi-rutin",
    question: "Apakah bisa dibuat rutin setiap bulan?",
    answer:
      "Ya. AI Content Factory tersedia dalam paket 1, 4, 8, atau 12 video untuk produksi rutin, dengan workflow approval dan consistency antarkonten.",
  },
  {
    id: "untuk-sekolah",
    question: "Apakah bisa untuk sekolah?",
    answer:
      "Ya. Materi sekolah, program, PPDB, pendidikan karakter, parenting, atau FAQ dapat diolah menjadi short-form storytelling yang lebih mudah ditonton.",
  },
  {
    id: "untuk-umrah",
    question: "Apakah bisa untuk travel umrah?",
    answer:
      "Ya. Materi perjalanan, persiapan jamaah, FAQ, dan informasi program dapat divisualisasikan. Materi ibadah dan fakta sensitif harus diverifikasi serta disetujui pihak klien sebelum produksi.",
  },
  {
    id: "untuk-software",
    question: "Apakah bisa untuk bisnis atau software?",
    answer:
      "Ya. Konten explainer untuk produk abstrak, fitur, onboarding, workflow, FAQ, dan problem-solution adalah salah satu use case utama layanan ini.",
  },
  {
    id: "brand-safety",
    question: "Bagaimana prinsip brand safety dalam produksi?",
    answer:
      "Kami tidak membuat impersonation menyesatkan atau menggunakan wajah dan suara orang nyata tanpa hak yang sesuai. Penggunaan figur publik, aset pihak lain, dan materi sensitif perlu memiliki izin serta sumber yang jelas.",
  },
  {
    id: "validasi-fakta",
    question: "Siapa yang memastikan informasi di video sudah benar?",
    answer:
      "Kami membantu menyusun materi agar jelas, sedangkan fakta khusus tentang brand, produk, agama, kesehatan, atau keuangan perlu divalidasi oleh pihak klien yang berwenang. Approval script dilakukan sebelum produksi.",
  },
  {
    id: "audio",
    question: "Bagaimana pendekatan audio untuk videonya?",
    answer:
      "Audio disesuaikan dengan kebutuhan brand. Untuk demo Pembelajar Belajar, pendekatan default memprioritaskan voice-over, ambience, dan sound effects non-musikal bila diperlukan.",
  },
];
