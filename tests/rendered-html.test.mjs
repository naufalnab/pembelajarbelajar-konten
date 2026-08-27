import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-rendered homepage contains the complete conversion path", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AI Content Factory — Ubah Ide Jadi Konten/);
  assert.match(html, /Punya satu topik\?/);
  assert.match(html, /Kirim topik, link, atau bahan mentah/);
  assert.match(html, /Kirim satu topik/);
  assert.match(html, /Lihat contoh hasil/);
  assert.match(html, /Contoh Video/);
  assert.match(html, /i\.ytimg\.com\/vi\/EeCGzUFX_HI/);
  assert.match(html, /AI Content Consultation/);
  assert.match(html, /Mulai Rp200 ribu/);
  assert.match(html, /Mulai Rp450 ribu/);
  assert.match(html, /Rp3,2 juta/);
  assert.match(html, /Belum cocok\? Revisi minor sudah termasuk/);
  assert.match(html, /Pertanyaan umum/);
  assert.match(html, /wa\.me\/6282328591004/);
  assert.doesNotMatch(html, /trusted by|100\+ klien|10M views|pasti viral/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  assert.ok(html.indexOf("Lihat bagaimana satu topik berubah menjadi cerita") < html.indexOf("Bahan Anda sudah cukup untuk mulai"));
});

test("SEO routes render", async () => {
  const [robots, sitemap] = await Promise.all([render("/robots.txt"), render("/sitemap.xml")]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.match(await robots.text(), /sitemap\.xml/i);
  assert.match(await sitemap.text(), /konten\.pembelajarbelajar\.com/i);
});

test("internal roadmap renders separately and is noindex", async () => {
  const response = await render("/roadmap");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Internal Roadmap/);
  assert.match(html, /Dari produk siap jual sampai mesin pemasukan yang berjalan/);
  assert.match(html, /Produk Siap Dijual/);
  assert.match(html, /1 Desember 2026/);
  assert.match(html, /noindex/);
});
