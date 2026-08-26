export interface HeroStoryboardScene {
  id: number;
  label: string;
  sublabel: string;
  description: string;
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
  };
  story: {
    step: string;
    label: string;
    caption: string;
    hook: string;
    scenes: readonly HeroStoryboardScene[];
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
    label: "01 · TOPIK",
    caption: "Dari klien",
    question: "Kenapa anak takut salah saat belajar?",
    category: "Materi edukasi sekolah",
  },
  story: {
    step: "02",
    label: "02 · STORY",
    caption: "Kami olah",
    hook: "Kadang anak bukan tidak bisa. Ia hanya takut jawabannya salah.",
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
    processTags: ["Script", "Storyboard", "Visual Direction"],
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
    videoSrc: undefined,
    posterSrc: undefined,
  },
};
