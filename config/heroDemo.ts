export interface HeroStoryboardScene {
  id: number;
  label: string;
  sublabel: string;
  description: string;
}

export interface HeroScriptPoint {
  time: string;
  text: string;
}

export interface HeroDemoData {
  eyebrow: string;
  descriptor: string;
  bottomNote: string;
  topic: {
    step: string;
    label: string;
    caption: string;
    question: string;
    category: string;
    hint: string;
  };
  story: {
    step: string;
    label: string;
    caption: string;
    hook: string;
    script: {
      angle: string;
      points: readonly HeroScriptPoint[];
    };
    scenes: readonly HeroStoryboardScene[];
    visualDirection: {
      style: string;
      palette: readonly string[];
      tone: string;
    };
    processTags: readonly string[];
  };
  video: {
    step: string;
    label: string;
    status: string;
    badge: string;
    title: string;
    subtitle: string;
    ratio: string;
    duration: string;
    outputLabel: string;
    youtubeId?: string;
    videoSrc?: string;
    posterSrc?: string;
  };
}

export const heroDemoData: HeroDemoData = {
  eyebrow: "CONTOH TRANSFORMASI",
  descriptor: "1 topik → cerita → video siap posting",
  bottomNote: "Anda cukup mulai dari topiknya.",
  topic: {
    step: "01",
    label: "01 · TOPIK DARI KLIEN",
    caption: "Dari klien",
    question: "Kenapa anak takut salah saat belajar?",
    category: "Materi edukasi sekolah",
    hint: "Tanpa perlu script lengkap",
  },
  story: {
    step: "02",
    label: "02 · KAMI OLAH",
    caption: "Proses kreatif",
    hook: "Kadang anak bukan tidak bisa. Ia hanya takut jawabannya salah.",
    script: {
      angle: "Empati orang tua & pendidik",
      points: [
        { time: "00-06s", text: "Validasi ketakutan anak di kelas" },
        { time: "07-19s", text: "Mengapa salah adalah bagian belajar" },
        { time: "20-28s", text: "Ruang aman untuk berani mencoba" },
      ],
    },
    scenes: [
      {
        id: 1,
        label: "Melihat soal",
        sublabel: "anak + soal",
        description: "Menatap lembar tugas dengan ragu",
      },
      {
        id: 2,
        label: "Terasa sulit",
        sublabel: "soal terasa besar",
        description: "Khawatir jawabannya keliru",
      },
      {
        id: 3,
        label: "Mulai mencoba",
        sublabel: "mulai mencoba",
        description: "Menemukan ruang aman untuk belajar",
      },
    ],
    visualDirection: {
      style: "Ilustrasi editorial hangat",
      palette: ["#123F39", "#1C7B72", "#D9A44A", "#FBFDF8"],
      tone: "Ramah, santai, berbobot",
    },
    processTags: ["Hook", "Script", "Storyboard", "Visual Direction"],
  },
  video: {
    step: "03",
    label: "03 · SIAP POSTING",
    status: "READY",
    badge: "Demo Konsep",
    title: "Berani Mencoba",
    subtitle: "Ruang aman untuk keliru & bertumbuh",
    ratio: "9:16",
    duration: "±0:28",
    outputLabel: "Final video",
    youtubeId: "EeCGzUFX_HI",
    videoSrc: undefined,
    posterSrc: undefined,
  },
};

