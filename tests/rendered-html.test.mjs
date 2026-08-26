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
  assert.match(html, /Punya ide\./);
  assert.match(html, /Demo Konsep/);
  assert.match(html, /AI Content Consultation/);
  assert.match(html, /Mulai Rp200 ribu/);
  assert.match(html, /Mulai Rp450 ribu/);
  assert.match(html, /Rp3,2 juta/);
  assert.match(html, /Revisi dibuat jelas sejak awal/);
  assert.match(html, /Pertanyaan umum/);
  assert.match(html, /wa\.me\/6282328591004/);
  assert.doesNotMatch(html, /trusted by|100\+ klien|10M views|pasti viral/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("SEO routes render", async () => {
  const [robots, sitemap] = await Promise.all([render("/robots.txt"), render("/sitemap.xml")]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.match(await robots.text(), /sitemap\.xml/i);
  assert.match(await sitemap.text(), /konten\.pembelajarbelajar\.com/i);
});
