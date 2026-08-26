export interface PortfolioStoryboardFrame {
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  label: string;
  title: string;
  input: string;
  hook?: string;
  description: string;
  storyboard: readonly PortfolioStoryboardFrame[];
  visualStory?: readonly string[];
  videoSrc?: string;
  posterSrc?: string;
  placeholderText: string;
  isDemo: boolean;
  analyticsEvent: string;
}

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: "sekolah",
    category: "Sekolah",
    label: "Demo Konsep · Sekolah",
    title: "Kenapa Anak Takut Salah Saat Belajar?",
    input:
      "Topik awal: membangun keberanian anak saat proses belajar.",
    hook: "Takut salah bisa membuat anak berhenti mencoba sebelum sempat belajar.",
    description:
      "Topik parenting diolah menjadi cerita singkat tentang ruang belajar yang aman untuk mencoba, keliru, lalu bertumbuh.",
    storyboard: [
      {
        title: "Ragu untuk mencoba",
        description: "Anak menahan jawaban karena khawatir keliru.",
      },
      {
        title: "Ubah respons",
        description: "Kesalahan diposisikan sebagai bagian dari proses belajar.",
      },
      {
        title: "Berani bertumbuh",
        description: "Anak kembali mencoba dengan dukungan yang tepat.",
      },
    ],
    // Isi setelah aset final tersedia, misalnya "/portfolio/sekolah.mp4".
    videoSrc: undefined,
    posterSrc: undefined,
    placeholderText: "Demo video sedang disiapkan",
    isDemo: true,
    analyticsEvent: "portfolio_school",
  },
  {
    id: "umrah",
    category: "Travel Umrah",
    label: "Demo Konsep · Travel Umrah",
    title: "Sebelum Miqat, Apa yang Perlu Dipersiapkan Jamaah?",
    input:
      "Topik awal: informasi persiapan jamaah sebelum memasuki rangkaian ibadah.",
    hook: "Persiapan yang jelas membantu jamaah memahami langkah berikutnya.",
    description:
      "Materi travel disusun menjadi panduan visual yang tenang dan mudah diikuti. Detail ibadah serta fakta akhir tetap mengikuti materi yang telah diverifikasi dan disetujui klien.",
    storyboard: [
      {
        title: "Konteks perjalanan",
        description: "Menunjukkan posisi jamaah dalam alur perjalanan.",
      },
      {
        title: "Persiapan utama",
        description: "Checklist visual berdasarkan materi resmi dari klien.",
      },
      {
        title: "Konfirmasi berikutnya",
        description: "Arahan untuk mengikuti pembimbing dan panduan resmi travel.",
      },
    ],
    // Isi setelah aset final tersedia, misalnya "/portfolio/umrah.mp4".
    videoSrc: undefined,
    posterSrc: undefined,
    placeholderText: "Demo video sedang disiapkan",
    isDemo: true,
    analyticsEvent: "portfolio_umrah",
  },
  {
    id: "software",
    category: "Software / Business",
    label: "Demo Konsep · Software / Business",
    title: "Kenapa Tagihan Bisa Terlewat Saat Semuanya Masih Manual?",
    input:
      "Topik awal: menjelaskan masalah workflow pembayaran manual.",
    hook: "Satu invoice terlewat sering bermula dari proses kecil yang masih tersebar.",
    description:
      "Masalah workflow yang abstrak dibuat konkret lewat rangkaian visual sederhana, lalu diarahkan menuju proses pembayaran yang lebih rapi.",
    storyboard: [
      {
        title: "Data tersebar",
        description: "Invoice dan status pembayaran hidup di beberapa spreadsheet.",
      },
      {
        title: "Pekerjaan berulang",
        description: "Tim mengecek, menyalin, dan mengingatkan secara manual.",
      },
      {
        title: "Tagihan terlewat",
        description: "Satu pembaruan luput di tengah banyak pekerjaan.",
      },
      {
        title: "Workflow lebih rapi",
        description: "Status dan tindak lanjut disusun dalam satu alur yang jelas.",
      },
    ],
    visualStory: [
      "Spreadsheet",
      "Pekerjaan berulang",
      "Invoice terlewat",
      "Workflow lebih rapi",
    ],
    // Isi setelah aset final tersedia, misalnya "/portfolio/software.mp4".
    videoSrc: undefined,
    posterSrc: undefined,
    placeholderText: "Demo video sedang disiapkan",
    isDemo: true,
    analyticsEvent: "portfolio_software",
  },
];

