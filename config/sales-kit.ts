export const salesKitNav = ["Scope Layanan", "Yang Tidak Termasuk", "Aturan Revisi", "Client Brief", "Onboarding", "Quotation", "WhatsApp", "Follow-up", "Invoice"] as const;

export const services = [
  { id: "consultation", name: "AI Content Consultation", price: "Rp200.000 / 60 menit", for: "Orang yang ingin membuat kontennya sendiri tetapi membutuhkan arahan.", included: ["Review ide & workflow", "Bedah prompt / storyboard", "Troubleshooting visual, character/style consistency, transisi, dan workflow AI", "Tanya jawab"], output: "Sesi konsultasi. Bukan produksi video.", note: "Fokus konsultasi sebaiknya disepakati sebelum sesi agar waktu 60 menit digunakan efektif." },
  { id: "production", name: "AI Video Production", price: "Mulai Rp200.000 / video", for: "Klien yang sudah memiliki bahan yang cukup matang.", included: ["Visual production", "AI video generation", "Editing dasar", "Final export", "Storyboard opsional sesuai kebutuhan produksi"], output: "Ideal input: script final, voice-over atau materi final, CTA, dan referensi visual bila ada.", note: "Harga dasar cocok untuk short-form sederhana dengan kompleksitas normal, umumnya hingga ±45 detik sebagai guideline; bukan harga pasti untuk semua video." },
  { id: "factory", name: "AI Content Factory", price: "Mulai Rp450.000 / video", for: "Klien yang baru mempunyai topik atau materi mentah.", included: ["Ide & angle", "Hook", "Script", "Storyboard", "Visual direction", "AI-assisted visual/video production", "Editing", "Caption", "Maksimal 2 putaran revisi minor"], output: "Topik → Angle → Hook → Script → Storyboard → Visual Direction → Production → Editing → Caption", note: "Anda cukup mulai dari topiknya. Referensi: 1 video Rp450.000 · 4 Rp1.700.000 · 8 Rp3.200.000 · 12 Rp4.500.000. Durasi, jumlah scene, karakter, style visual, dan kompleksitas dapat memengaruhi estimasi." },
] as const;

export const exclusions = ["social media account management", "posting/upload rutin", "membalas komentar atau DM", "media buying / ads", "shooting live-action", "talent/influencer", "biaya lokasi", "voice talent profesional bila membutuhkan talent khusus", "unlimited revision", "perubahan konsep total setelah approval", "banyak versi bahasa", "banyak versi aspect ratio di luar scope", "source/project file mentah", "long-form yang tidak disebut dalam quotation", "aset berlisensi/berbayar pihak ketiga", "pekerjaan tambahan di luar deliverables quotation"];

export const briefQuestions = `Supaya saya bisa lihat scope dan estimasinya, boleh bantu isi beberapa informasi singkat berikut ya:\n\n1. Nama brand/organisasi:\n2. Website/Instagram/TikTok:\n3. Produk/jasa:\n4. Target audience:\n5. Konten seperti apa yang ingin dibuat?\n6. Sudah punya script/bahan atau baru punya topik?\n7. Kira-kira berapa video?\n8. Deadline jika ada:\n9. Referensi yang disukai:\n10. Nomor WhatsApp/contact person:\n11. Apa yang paling penting dari konten ini?\n\nTidak harus panjang. Jawaban singkat juga tidak masalah.`;
export const onboardingQuestions = `ONBOARDING PROJECT\n\nINFORMASI BRAND\nNama brand:\nWebsite/social media:\nProduk/jasa:\nTarget audience:\nLogo, brand colors, atau guideline (bila ada):\n\nCONTENT DIRECTION\nTopik/materi:\nTujuan konten:\nPesan utama:\nCTA:\nTone komunikasi:\nPlatform tujuan dan durasi:\nReferensi yang disukai / tidak disukai:\n\nMATERI WAJIB\nFakta, istilah, nama produk/program, harga, link tujuan, CTA final:\n\nLARANGAN\nHal yang tidak boleh divisualisasikan, klaim yang tidak boleh dibuat, atau style yang harus dihindari:\n\nAPPROVAL\nNama approver:\nWhatsApp/email approver:\n\nLogo/asset dapat dikirim melalui channel project yang disepakati. Materi dan fakta yang telah disetujui pada tahap script menjadi dasar produksi. Perubahan substansial setelah approval dapat dihitung sebagai perubahan scope.`;
export const whatsappTemplates = [
  ["Outbound prospecting", `Assalamu'alaikum Pak/Bu. Saya melihat [nama brand/sekolah] cukup aktif membagikan materi tentang [topik spesifik].\n\nSaya membuat AI Content Factory, workflow untuk mengubah materi seperti itu menjadi short-form storytelling tanpa harus membangun tim produksi sendiri.\n\nSaya membayangkan salah satu materi tentang [topik mereka] bisa divisualisasikan dengan menarik. Ini contoh hasilnya:\n[link portfolio]\n\nKalau berkenan, kirim saja satu topik. Saya bantu lihat kira-kira angle kontennya seperti apa dulu.`],
  ["Inbound lead", `Wa'alaikumussalam, terima kasih sudah menghubungi Pembelajar Belajar. 🙏\n\nBoleh kirim satu topik atau contoh materi yang ingin dibuat? Kalau sudah punya script juga boleh langsung dikirim.\n\nDari situ saya bisa bantu lihat apakah lebih cocok AI Video Production atau AI Content Factory dan memperkirakan scope-nya.`],
  ["Consultation inbound", `Terima kasih. Untuk AI Content Consultation, sesinya 60 menit dengan biaya Rp200.000.\n\nSupaya waktunya efektif, boleh ceritakan dulu masalah utama yang ingin dibahas dan workflow/tools yang sedang digunakan?`],
  ["Send quotation", `Berikut estimasi scope dan quotation berdasarkan kebutuhan yang kita bahas.\n\nSilakan dicek terutama bagian deliverables, jumlah video, revisi, timeline, dan total.\n\nKalau sudah sesuai, kita bisa lanjut ke onboarding dan persiapan produksi.`],
] as const;
export const followUps = [["Follow-up #1 · 2–3 hari", `Assalamu'alaikum Pak/Bu, izin follow-up materi yang kemarin saya kirim.\n\nSaya sempat terpikir satu angle untuk [brand/topik]:\n\n“[contoh hook singkat]”\n\nKalau topik seperti ini memang sedang dibutuhkan, saya bisa bantu jelaskan workflow produksinya.`], ["Follow-up #2 · 5–7 hari berikutnya", `Assalamu'alaikum Pak/Bu, izin follow-up terakhir terkait ide konten [topik].\n\nKalau saat ini belum menjadi prioritas tidak masalah. Saya simpan dulu kontaknya dan semoga lain waktu bisa bekerja sama.\n\nTerima kasih. 🙏`]] as const;

export const exclusionCopyText = `*Yang Tidak Termasuk Paket Standar*

Agar scope dan waktu produksi tetap jelas, beberapa kebutuhan berikut tidak termasuk paket standar kecuali disepakati secara terpisah:

• Social media account management
• Posting/upload rutin
• Membalas komentar atau DM
• Media buying / ads
• Shooting live-action
• Talent/influencer
• Biaya lokasi
• Voice talent profesional bila membutuhkan talent khusus
• Unlimited revision
• Perubahan konsep total setelah approval
• Banyak versi bahasa
• Banyak versi aspect ratio di luar scope
• Source/project file mentah
• Long-form yang tidak disebut dalam quotation
• Aset berlisensi/berbayar pihak ketiga
• Pekerjaan tambahan di luar deliverables quotation

*Catatan:*
Kami tidak menjamin viral, jumlah views, engagement, leads, atau penjualan tertentu.

Klien bertanggung jawab memastikan materi, logo, audio, foto, video, dan aset yang diberikan mempunyai hak penggunaan yang sesuai.`;

export const revisionPolicyCopyText = `*Aturan Revisi*

Untuk AI Video Production dan AI Content Factory, tersedia maksimal 2 putaran revisi minor sesuai workflow produksi.

*Apa yang dimaksud 1 putaran revisi?*
Satu putaran berarti seluruh feedback dikumpulkan menjadi satu feedback terstruktur, lalu dikerjakan bersama.

Contoh revisi minor:
• Koreksi typo
• Perubahan wording pendek
• Penyesuaian CTA
• Timing ringan
• Penyesuaian volume
• Koreksi elemen visual tertentu
• Adjustment ringan yang tidak mengubah creative direction

*Perubahan mayor / change of scope*
Contohnya:
• Mengganti konsep yang sudah disetujui
• Mengganti keseluruhan script
• Mengganti visual style
• Mengganti karakter utama
• Membuat ulang storyboard
• Menambah scene secara signifikan
• Meminta versi berbeda dengan arah kreatif berbeda
• Mengubah objective project setelah produksi berjalan

Perubahan mayor setelah tahap approval dapat memerlukan penyesuaian biaya dan waktu karena sebagian proses produksi perlu dibuat ulang. Penyesuaian akan diinformasikan sebelum pengerjaan dilanjutkan.

*Catatan:*
Typo, file rusak, atau hasil yang tidak sesuai dengan materi yang telah disetujui karena kesalahan dari pihak kami tidak dihitung sebagai jatah revisi.`;

export const onboardingCopyText = `*ONBOARDING AI CONTENT FACTORY*

*Informasi Brand*
• Nama brand:
• Website/social media:
• Produk/jasa:
• Target audience:
• Logo:
• Brand colors:
• Brand guideline bila ada:

*Content Direction*
• Topik/materi:
• Tujuan konten:
• Pesan utama:
• CTA:
• Tone komunikasi:
• Platform tujuan:
• Durasi yang diharapkan:
• Referensi yang disukai:
• Referensi yang tidak disukai:

*Materi Wajib*
• Fakta yang harus disebut:
• Istilah yang harus digunakan:
• Nama produk/program:
• Harga bila perlu disebut:
• Link tujuan:
• CTA final:

*Larangan*
• Hal yang tidak boleh divisualisasikan:
• Klaim yang tidak boleh dibuat:
• Visual/style yang harus dihindari:
• Brand restrictions lainnya:

*Approval*
• Nama approver:
• WhatsApp/email approver:

Materi dan fakta yang telah disetujui pada tahap script menjadi dasar produksi. Perubahan substansial setelah approval dapat dihitung sebagai perubahan scope.`;

export function normalizeClipboardText(text: string) { return text.replace(/\r\n/g, "\n").replace(/^\s+/gm, "").replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n").trim(); }
export function formatRupiah(value: string) { const digits = value.replace(/\D/g, ""); return digits ? `Rp${Number(digits).toLocaleString("id-ID")}` : "-"; }
