"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Copy, QrCode } from "lucide-react";
import type { SupportMethod } from "@/config/support";

type CopyState = "idle" | "success" | "error";

function CopyButton({ number, label }: { number: string; label: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(number);
      setState("success");
    } catch {
      setState("error");
    }
  }

  const prefix = label === "Nomor Rekening" ? "Salin Nomor Rekening" : "Salin Nomor";

  return (
    <button className={`support-copy support-copy-${state}`} type="button" onClick={copyNumber} aria-label={`${prefix} ${number}`}>
      {state === "success" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      {state === "success" ? "Disalin ✓" : state === "error" ? "Gagal menyalin" : prefix}
    </button>
  );
}

function MethodCard({ method }: { method: Exclude<SupportMethod, { type: "qris" }> }) {
  const isBank = method.type === "bank";
  const numberLabel = isBank ? "Nomor Rekening" : "Nomor";

  return (
    <article className="support-method-card">
      <span className="support-method-type">{isBank ? "Transfer bank" : "E-wallet"}</span>
      <h3>{method.label}</h3>
      <dl>
        <div><dt>{numberLabel}</dt><dd>{method.accountNumber}</dd></div>
        <div><dt>Atas Nama</dt><dd>{method.accountName}</dd></div>
      </dl>
      <CopyButton number={method.accountNumber} label={numberLabel} />
    </article>
  );
}

function QrisCard({ method }: { method: Extract<SupportMethod, { type: "qris" }> }) {
  return (
    <article className="support-method-card support-qris-card">
      <span className="support-method-type"><QrCode size={14} aria-hidden="true" /> QRIS</span>
      <h3>{method.label}</h3>
      <Image src={method.imageSrc} alt="Kode QRIS untuk mendukung produksi" width={560} height={560} />
      <p>Scan menggunakan aplikasi bank atau e-wallet yang mendukung QRIS.</p>
    </article>
  );
}

export function SupportMethods({ methods }: { methods: readonly SupportMethod[] }) {
  if (methods.length === 0) {
    return <p className="support-methods-empty">Metode dukungan akan segera tersedia.</p>;
  }

  return (
    <div className="support-methods-grid">
      {methods.map((method) => method.type === "qris" ? <QrisCard key={method.id} method={method} /> : <MethodCard key={method.id} method={method} />)}
    </div>
  );
}
