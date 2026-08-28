export type RoadmapTask = { id: string; label: string };

export type RoadmapMilestone = {
  id: string;
  number: string;
  title: string;
  startDate: string;
  endDate: string;
  objective: string;
  tasks: RoadmapTask[];
  successCriteria: string[];
  financialTarget?: string;
  note?: string;
};

const tasks = (milestone: string, labels: string[]): RoadmapTask[] =>
  labels.map((label, index) => ({ id: `${milestone}-${index + 1}`, label }));

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: "m1", number: "M1", title: "Produk Siap Dijual", startDate: "2026-08-26", endDate: "2026-08-31",
    objective: "AI Content Factory sudah memiliki produk, harga, proof awal, dan landing page yang bisa diberikan kepada calon pelanggan.",
    tasks: tasks("m1", ["Landing page konten.pembelajarbelajar.com production-ready", "Hero Topik → Story → Video selesai", "Featured Demo tersedia", "Karya Produksi dikurasi", "Model pricing final diterapkan", "AI Content Consultation tersedia", "AI Video Production tersedia", "AI Content Factory tersedia", "Revision policy tersedia", "Workflow produksi terlihat jelas", "FAQ sudah selaras dengan service model baru", "CTA WhatsApp berfungsi", "Mobile responsive sudah dicek", "Production build berhasil", "Website sudah deploy"]),
    successCriteria: ["Calon pelanggan dapat membuka website, memahami layanan, melihat contoh, memahami harga, lalu menghubungi melalui WhatsApp tanpa membutuhkan penjelasan tambahan terlebih dahulu."],
  },
  {
    id: "m2", number: "M2", title: "Sales Kit Siap", startDate: "2026-09-01", endDate: "2026-09-07",
    objective: "Semua materi yang diperlukan untuk mulai menawarkan jasa sudah tersedia.",
    tasks: tasks("m2", ["Video ‘Kenapa Anak Takut Salah Saat Belajar?’ final", "Video MP4 9:16 siap", "Poster / thumbnail tersedia", "Video masuk hero", "Video masuk Featured Demo", "Breakdown Topik → Story → Final tersedia", "Les Bahasa Arab tampil sebagai bukti series consistency", "Tata Cara Umroh 14:42 tampil sebagai long-form proof", "Teh Hijau 134 tampil sebagai commercial proof", "Asmaul Husna Series tampil sebagai original-series proof", "Template quotation siap", "Client brief siap", "Onboarding form siap", "Scope Production vs Factory tertulis", "Aturan revisi tertulis", "Template pesan WhatsApp pertama siap", "Template follow-up siap", "Template invoice sederhana siap", "Daftar pekerjaan yang tidak termasuk paket tersedia"]),
    successCriteria: ["Pada 7 September tidak ada lagi alasan operasional untuk menunda menawarkan layanan kepada calon pelanggan."],
  },
  {
    id: "m3", number: "M3", title: "First Paying Clients", startDate: "2026-09-08", endDate: "2026-09-21",
    objective: "Berhenti membangun dan mulai memvalidasi bahwa orang benar-benar bersedia membayar.",
    tasks: tasks("m3", ["Buat daftar minimal 100 prospek", "Prospek dibagi berdasarkan prioritas/niche", "Sekolah & pendidikan masuk prioritas", "Homeschool / les masuk prioritas", "Travel umrah masuk prioritas", "Software / bisnis profesional mulai dicari", "Outreach personal dimulai", "Target 10 pendekatan personal per hari kerja", "Demo relevan selalu disertakan saat outreach", "Response rate dicatat", "Diskusi serius dicatat", "Quotation dicatat", "Closing dicatat", "Dapatkan transaksi berbayar pertama", "Minimal 3 pelanggan berbayar pertama", "Alternatif validasi: 3 Consultation berbayar, atau 2 Production order, atau 1 Factory package"]),
    successCriteria: ["Sudah ada pelanggan nyata yang membayar, sehingga harga dan workflow mulai dapat dinilai berdasarkan data, bukan asumsi."],
  },
  {
    id: "m4", number: "M4", title: "Repeatable Service", startDate: "2026-09-22", endDate: "2026-09-30",
    objective: "Mengubah pekerjaan pertama menjadi workflow yang bisa diulang tanpa chaos.", financialTarget: "Target kumulatif akhir September · Rp5–8 juta",
    tasks: tasks("m4", ["SOP lead → brief", "SOP brief → quotation", "SOP quotation → payment", "SOP topic/script approval", "SOP storyboard approval", "SOP production", "SOP revision", "SOP final delivery", "SOP follow-up", "Jam kerja aktif per video mulai dicatat", "Jumlah revisi per project dicatat", "Cost tools/generation mulai dicatat", "Minimal satu repeat order diupayakan", "Minimal satu testimonial genuine diminta", "Minimal satu case study pelanggan nyata dibuat jika izin tersedia"]),
    successCriteria: ["Minimal 3 customer nyata", "Minimal 1 repeat order/paket", "Mengetahui perkiraan effort per video", "Mulai mengetahui apakah pricing sehat"],
  },
  {
    id: "m5", number: "M5", title: "Recurring Clients", startDate: "2026-10-01", endDate: "2026-10-15",
    objective: "Mulai membangun pendapatan yang berulang, bukan hanya one-off project.",
    tasks: tasks("m5", ["Target klien bulanan pertama", "Target klien bulanan kedua", "Factory volume package mulai ditawarkan", "Existing customer ditawari produksi rutin bila relevan", "Production customer potensial ditawari Factory", "Consultation customer yang kewalahan DIY ditawari Production/Factory", "2–4 sesi Consultation/bulan mulai diuji", "Monthly production capacity mulai dihitung"]),
    successCriteria: ["Minimal 2 recurring clients"], note: "Contoh target skenario, bukan pemasukan otomatis: Client A 8 video = Rp3,2 jt dan Client B 8 video = Rp3,2 jt; referensi recurring revenue Rp6,4 juta/bulan.",
  },
  {
    id: "m6", number: "M6", title: "Scale Sales + Business Portfolio", startDate: "2026-10-16", endDate: "2026-10-31",
    objective: "Memperluas pasar tanpa membuat terlalu banyak demo baru.", financialTarget: "Target kumulatif akhir Oktober · Rp17–22 juta",
    tasks: tasks("m6", ["Buat satu Business / Software Explainer Demo", "Tema kandidat: Kenapa Tagihan Bisa Terlewat Saat Semuanya Masih Manual?", "Visual demo berbeda dari konten anak", "Gunakan editorial / UI / spreadsheet / invoice / dashboard", "Demo masuk portfolio setelah final", "Outreach B2B/software ditingkatkan", "Target 3–4 klien aktif", "Follow-up leads September dilakukan", "Referral mulai diminta dari pelanggan puas", "Sales message dievaluasi berdasarkan response data"]),
    successCriteria: ["AI Content Factory tidak lagi terlihat hanya cocok untuk pendidikan atau konten Islami, dan pipeline mulai memiliki beberapa jenis customer."],
  },
  {
    id: "m7", number: "M7", title: "Stabilkan Mesin Produksi", startDate: "2026-11-01", endDate: "2026-11-15",
    objective: "Memastikan kenaikan order tidak membuat kualitas turun atau pekerjaan menjadi tidak terkendali.",
    tasks: tasks("m7", ["Identifikasi bottleneck produksi", "Creative direction tetap dipegang owner", "Script/QC critical tetap dikontrol", "Identifikasi pekerjaan yang dapat didelegasikan", "Rough editing dipetakan", "Export/file preparation dipetakan", "Thumbnail/admin work dipetakan", "SOP diperjelas agar suatu hari bisa didelegasikan", "Kapasitas produksi bulanan diketahui", "Batas jumlah project aktif ditentukan", "Revisi pelanggan dianalisis", "Project yang margin-nya buruk diidentifikasi", "Pricing dievaluasi berdasarkan jam kerja nyata"]),
    successCriteria: ["3–5 active clients tanpa chaos"], note: "Delegasi adalah readiness, bukan kewajiban untuk merekrut orang.",
  },
  {
    id: "m8", number: "M8", title: "Isi Pipeline Desember", startDate: "2026-11-16", endDate: "2026-11-30",
    objective: "Desember sudah memiliki pekerjaan yang dipesan sebelum bulan dimulai.", financialTarget: "Target kumulatif / terkontrak akhir November · Rp32–40 juta",
    tasks: tasks("m8", ["Existing clients dihubungi untuk kebutuhan Desember", "Leads lama di-follow-up", "Repeat customer dihubungi", "Referral diminta", "Factory package Desember ditawarkan", "Production → Factory upsell bila relevan", "Consultation → Production upsell bila relevan", "Customer 4 video → 8 video bila kebutuhan cocok", "Kapasitas Desember dihitung sebelum menerima order", "Project Desember mulai dibooking", "Deadline akhir tahun dibicarakan sejak awal"]),
    successCriteria: ["Tanggal 1 Desember tidak dimulai dengan pipeline kosong."],
  },
];

export const checkpointMilestone: RoadmapMilestone = {
  id: "checkpoint", number: "CHECKPOINT", title: "1 Desember 2026", startDate: "2026-12-01", endDate: "2026-12-01",
  objective: "Bisnis sudah harus berjalan, bukan masih dipersiapkan.",
  tasks: tasks("checkpoint", ["Consultation aktif", "Production aktif", "Factory aktif", "Featured Demo Sekolah tersedia", "Education portfolio tersedia", "Umrah portfolio tersedia", "Commercial portfolio tersedia", "Original Series tersedia", "Business / Software demo tersedia", "Outreach SOP tersedia", "Quotation tersedia", "Onboarding tersedia", "Follow-up tersedia", "Pipeline prospek aktif", "Customer berbayar nyata", "Repeat customer", "2–4 recurring clients", "Production SOP tersedia", "Revision SOP tersedia", "Jam kerja/video terukur", "Kapasitas bulanan diketahui", "Rp32–40 juta kumulatif / terkontrak", "Sebagian pekerjaan Desember sudah booked"]),
  successCriteria: ["Desember digunakan untuk menjalankan mesin yang sudah dibangun dan mengejar sisa target menuju ≥ Rp50 juta."],
};

export const confirmedCompletedTaskIds: readonly string[] = [
  // M1 — Produk Siap Dijual (15/15 confirmed completed)
  "m1-1",  // Landing page konten.pembelajarbelajar.com production-ready
  "m1-2",  // Hero Topik → Story → Video selesai
  "m1-3",  // Featured Demo tersedia
  "m1-4",  // Karya Produksi dikurasi
  "m1-5",  // Model pricing final diterapkan
  "m1-6",  // AI Content Consultation tersedia
  "m1-7",  // AI Video Production tersedia
  "m1-8",  // AI Content Factory tersedia
  "m1-9",  // Revision policy tersedia
  "m1-10", // Workflow produksi terlihat jelas
  "m1-11", // FAQ sudah selaras dengan service model baru
  "m1-12", // CTA WhatsApp berfungsi
  "m1-13", // Mobile responsive sudah dicek
  "m1-14", // Production build berhasil
  "m1-15", // Website sudah deploy

  // M2 — Featured Demo Sekolah (6 tasks confirmed completed)
  "m2-1",  // Video ‘Kenapa Anak Takut Salah Saat Belajar?’ final
  "m2-2",  // Video MP4 9:16 siap
  "m2-3",  // Poster / thumbnail tersedia
  "m2-4",  // Video masuk hero
  "m2-5",  // Video masuk Featured Demo
  "m2-6",  // Breakdown Topik → Story → Final tersedia

  // M2 — Portfolio Karya Nyata (4 tasks confirmed completed)
  "m2-7",  // Les Bahasa Arab tampil sebagai bukti series consistency
  "m2-8",  // Tata Cara Umroh 14:42 tampil sebagai long-form proof
  "m2-9",  // Teh Hijau 134 tampil sebagai commercial proof
  "m2-10", // Asmaul Husna Series tampil sebagai original-series proof
];

export const financialCheckpoints = [
  ["30 September", "Rp5–8 juta"], ["31 Oktober", "Rp17–22 juta"], ["30 November", "Rp32–40 juta"], ["31 Desember", "≥ Rp50 juta"],
] as const;

export const weeklyKpis = [["Prospek baru", "50 / minggu"], ["Outreach personal", "30–50 / minggu"], ["Reply", "Catat"], ["Diskusi serius", "Catat"], ["Quotation", "Catat"], ["Closing", "Catat"], ["Nilai deal", "Catat"], ["Repeat order", "Catat"], ["Jam produksi / video", "Catat"], ["Jumlah revisi", "Catat"]] as const;

