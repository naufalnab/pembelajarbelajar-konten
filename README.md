# AI Content Factory — Pembelajar Belajar

Landing page komersial untuk layanan produksi short-form storytelling Pembelajar Belajar. Situs menjelaskan layanan, demo konsep, workflow, paket, dan mengarahkan calon klien ke WhatsApp.

Target production: `https://konten.pembelajarbelajar.com`

## Internal Sales Kit

`/sales-kit` adalah toolkit operasi penjualan internal: scope layanan, kebijakan revisi, template WhatsApp, client brief, onboarding, quotation, dan invoice. Halaman ini noindex, tidak menyimpan data helper ke server, dan menyediakan tombol copy. URL tersembunyi serta noindex bukan security boundary; jangan masukkan data pelanggan sensitif.

## Development

Persyaratan: Node.js `>=22.13.0` dan npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka URL lokal yang ditampilkan terminal. Perintah penting lainnya:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

## Environment

Salin `.env.example` menjadi `.env.local`, lalu isi:

```env
NEXT_PUBLIC_SITE_URL=https://konten.pembelajarbelajar.com
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
```

- `NEXT_PUBLIC_SITE_URL`: origin publik tanpa trailing slash.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: nomor WhatsApp dalam format internasional berupa angka saja, misalnya diawali `62`; jangan gunakan `+`, spasi, atau tanda hubung.
- `NEXT_PUBLIC_CONTACT_EMAIL`: email kontak publik.

Jika variabel WhatsApp dibiarkan kosong, situs memakai kontak Pembelajar Belajar yang sudah konsisten di `video.` dan `komik.`, yaitu `6282328591004`. Email tetap opsional dan tidak ditampilkan sampai diisi. Jangan commit `.env` atau `.env.local`; keduanya dilindungi oleh `.gitignore`. Untuk production, nilai dapat ditetapkan melalui pengaturan environment di Sites sebelum build/deploy.

## Mengganti Demo Portfolio

Versi awal menampilkan tiga placeholder berlabel **Demo Konsep**. Setelah video final tersedia, letakkan aset 9:16 di:

```text
public/portfolio/sekolah.mp4
public/portfolio/umrah.mp4
public/portfolio/software.mp4
```

Kemudian buka `config/portfolio.ts` dan isi `videoSrc` masing-masing item:

```ts
videoSrc: "/portfolio/sekolah.mp4"
```

Lakukan hal yang sama untuk `umrah.mp4` dan `software.mp4`. Jika poster final tersedia, simpan di folder yang sama dan arahkan `posterSrc` ke path publiknya. Selama `videoSrc` belum diisi, komponen tetap menampilkan placeholder sehingga tidak ada media rusak.

## Build

Jalankan validasi production sebelum deploy:

```bash
npm run lint
npm run typecheck
npm run build
```

Build vinext menghasilkan bundle Cloudflare Worker-compatible di `dist/`. Jangan deploy apabila lint atau build gagal.

## Deploy

Repository ini menggunakan OpenAI Sites, vinext, dan konfigurasi `.openai/hosting.json`.

1. Pastikan environment production sudah terisi di Sites.
2. Jalankan `npm run lint` dan `npm run build` sampai berhasil.
3. Publish source tervalidasi melalui alur deployment Sites; Sites akan menyimpan project ID di `.openai/hosting.json` dan memasang hasil build.
4. Periksa URL deployment terlebih dahulu: halaman, CTA WhatsApp, metadata, dan ketiga placeholder/video portfolio.
5. Promosikan deployment yang sudah lolos pengecekan ke akses production yang dipilih.

Jangan menyimpan credential deployment atau nilai kontak privat di repository.

## Custom Domain

Domain target adalah `konten.pembelajarbelajar.com`. Setelah deployment berhasil:

1. Tambahkan `konten.pembelajarbelajar.com` sebagai custom domain pada project di provider hosting/Sites.
2. Salin persis record verifikasi atau target CNAME yang diberikan provider.
3. Minta pemilik DNS `pembelajarbelajar.com` menambahkan record tersebut.
4. Tunggu verifikasi serta penerbitan HTTPS, lalu cek `https://konten.pembelajarbelajar.com`.
5. Pastikan `NEXT_PUBLIC_SITE_URL` tetap menggunakan domain production tersebut dan deploy ulang jika nilainya berubah.

Repository ini **tidak mengubah DNS**. Jangan menambah, mengganti, atau menghapus record DNS tanpa izin eksplisit pemilik domain. Nilai record juga tidak boleh ditebak; selalu gunakan nilai yang ditampilkan provider setelah custom domain didaftarkan.

## Konfigurasi Utama

- `config/site.ts`: nama layanan, domain, kontak, navigasi, dan CTA.
- `config/pricing.ts`: paket dan pesan WhatsApp per paket.
- `config/portfolio.ts`: tiga demo konsep serta sumber video/poster.
- `config/faq.ts`: pertanyaan dan jawaban.
- `app/page.tsx`: susunan landing page.
- `app/globals.css`: design tokens, layout responsif, dan interaction styles.

## Future Improvements

Prioritas berikutnya adalah mengganti tiga placeholder dengan video demo nyata untuk Sekolah, Travel Umrah, dan Software/Business. Setelah ada kebutuhan dan data yang valid, analytics, studi kasus/testimonial terverifikasi, CMS, portal klien, pembayaran, atau otomasi produksi dapat dievaluasi—fitur-fitur tersebut sengaja tidak diimplementasikan pada versi pertama.
