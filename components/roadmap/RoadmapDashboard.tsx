"use client";

import { useEffect, useMemo, useState } from "react";
import { checkpointMilestone, financialCheckpoints, roadmapMilestones, weeklyKpis, type RoadmapMilestone } from "@/config/roadmap";

const STORAGE_KEY = "pb-content-roadmap-v1";
const targetRevenue = 50_000_000;
type LocalState = { completedTaskIds: string[]; actualRevenue?: number };

const formatMoney = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value).replace("Rp", "Rp ");
const dateAtStart = (date: string) => new Date(`${date}T00:00:00`);
const todayIso = () => { const date = new Date(); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; };
const period = (milestone: RoadmapMilestone, date: string) => date < milestone.startDate ? "upcoming" : date > milestone.endDate ? "past" : "current";

function MilestoneCard({ milestone, date, completed, onToggle, initialOpen, checkpoint = false }: { milestone: RoadmapMilestone; date: string; completed: Set<string>; onToggle: (id: string) => void; initialOpen: boolean; checkpoint?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  useEffect(() => { setOpen(initialOpen); }, [initialOpen]);
  const completedCount = milestone.tasks.filter((task) => completed.has(task.id)).length;
  const isDone = completedCount === milestone.tasks.length;
  const state = period(milestone, date);
  const overdue = state === "past" && !isDone;
  const status = isDone ? "SELESAI" : state === "current" ? "SEDANG BERJALAN" : state === "upcoming" ? "BERIKUTNYA" : "SELESAI / LEWAT DEADLINE";
  const progress = Math.round((completedCount / milestone.tasks.length) * 100);
  return <article className={`roadmap-milestone ${checkpoint ? "roadmap-checkpoint" : ""}`} id={milestone.id}>
    <div className="roadmap-rail"><span>{milestone.number}</span></div>
    <div className="roadmap-milestone-main">
      <div className="roadmap-milestone-top">
        <div><p className="roadmap-period">{new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(dateAtStart(milestone.startDate))}{milestone.startDate !== milestone.endDate ? ` – ${new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(dateAtStart(milestone.endDate))}` : ""}</p><h2>{milestone.title}</h2></div>
        <div className="roadmap-badges"><span className={`roadmap-status ${state}`}>{status}</span>{overdue && <span className="roadmap-overdue">ADA TUGAS TERTUNDA</span>}</div>
      </div>
      <p className="roadmap-objective">{milestone.objective}</p>
      {milestone.financialTarget && <p className="roadmap-financial-note">{milestone.financialTarget}</p>}
      <div className="roadmap-progress-line"><span>{completedCount} / {milestone.tasks.length} selesai</span><div className="roadmap-bar" role="progressbar" aria-label={`Progress ${milestone.title}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><i style={{ width: `${progress}%` }} /></div><strong>{progress}%</strong></div>
      <button className="roadmap-detail-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`${milestone.id}-detail`}>{open ? "Sembunyikan detail" : "Lihat checklist"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
      {open && <div id={`${milestone.id}-detail`} className="roadmap-detail">
        <fieldset><legend>Checklist</legend>{milestone.tasks.map((task) => <label className="roadmap-task" key={task.id}><input type="checkbox" checked={completed.has(task.id)} onChange={() => onToggle(task.id)} /><span>{task.label}</span></label>)}</fieldset>
        {milestone.note && <p className="roadmap-note">{milestone.note}</p>}
        <div className="roadmap-success"><strong>Kriteria sukses</strong><ul>{milestone.successCriteria.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>}
    </div>
  </article>;
}

export function RoadmapDashboard() {
  const [state, setState] = useState<LocalState>({ completedTaskIds: [] });
  const [date, setDate] = useState<string | null>(null);
  const [revenueInput, setRevenueInput] = useState("");
  useEffect(() => { setDate(todayIso()); try { const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}"); if (Array.isArray(saved.completedTaskIds)) { setState({ completedTaskIds: saved.completedTaskIds, actualRevenue: typeof saved.actualRevenue === "number" ? saved.actualRevenue : undefined }); setRevenueInput(saved.actualRevenue ? String(saved.actualRevenue) : ""); } } catch { /* Empty local state is safe. */ } }, []);
  useEffect(() => { if (date) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state, date]);
  const completed = useMemo(() => new Set(state.completedTaskIds), [state.completedTaskIds]);
  const allMilestones = [...roadmapMilestones, checkpointMilestone];
  const taskCount = allMilestones.reduce((sum, item) => sum + item.tasks.length, 0);
  const completeCount = allMilestones.reduce((sum, item) => sum + item.tasks.filter((task) => completed.has(task.id)).length, 0);
  const progress = Math.round((completeCount / taskCount) * 100);
  const active = date ? roadmapMilestones.find((item) => period(item, date) === "current") ?? roadmapMilestones.find((item) => item.startDate > date) ?? roadmapMilestones.at(-1)! : roadmapMilestones[0];
  const activeStatus = date ? (period(active, date) === "current" ? "Sedang berjalan" : period(active, date) === "upcoming" ? "Berikutnya" : "Lewat deadline") : "Memuat tanggal lokal";
  const daysLeft = date ? Math.max(0, Math.ceil((dateAtStart("2026-12-01").getTime() - dateAtStart(date).getTime()) / 86_400_000)) : null;
  const priorityTasks = active.tasks.filter((task) => !completed.has(task.id)).slice(0, 3);
  const toggle = (id: string) => setState((current) => ({ ...current, completedTaskIds: current.completedTaskIds.includes(id) ? current.completedTaskIds.filter((item) => item !== id) : [...current.completedTaskIds, id] }));
  const updateRevenue = (raw: string) => { const number = Number(raw.replace(/\D/g, "")); setRevenueInput(raw.replace(/\D/g, "")); setState((current) => ({ ...current, actualRevenue: Number.isFinite(number) && number > 0 ? number : undefined })); };
  const reset = () => { if (window.confirm("Reset semua checklist dan omzet aktual yang tersimpan di browser ini?")) { setState({ completedTaskIds: [] }); setRevenueInput(""); } };
  const revenueProgress = Math.min(100, Math.round(((state.actualRevenue || 0) / targetRevenue) * 100));
  return <><a className="skip-link" href="#roadmap-main">Lewati ke roadmap</a><header className="roadmap-header"><a href="/" className="roadmap-brand"><strong>Pembelajar Belajar <i>/</i> Konten</strong><span>Internal Roadmap</span></a><a href="/" className="roadmap-back">← Kembali ke Landing Page</a></header><main id="roadmap-main">
    <section className="roadmap-hero"><div className="roadmap-wrap"><p className="roadmap-eyebrow">AI CONTENT FACTORY · INTERNAL ROADMAP</p><div className="roadmap-hero-grid"><div><h1>Dari produk siap jual sampai mesin pemasukan yang berjalan.</h1><p>Roadmap 26 Agustus–1 Desember 2026 untuk membangun AI Content Factory menjadi layanan yang aktif dijual, memiliki pelanggan berbayar, workflow yang terukur, dan pipeline Desember yang sudah terisi.</p><span className="roadmap-dates">26 Agustus 2026 <b>→</b> 1 Desember 2026</span></div><div className="roadmap-goals"><div><span>Target akhir Desember</span><strong>Rp50 juta <small>di luar gaji utama</small></strong></div><div><span>Target 1 Desember</span><strong>Rp32–40 juta <small>kumulatif / terkontrak</small></strong></div></div></div></div></section>
    <section className="roadmap-summary roadmap-wrap" id="sekarang"><div className="summary-card"><span>Waktu</span><strong>{daysLeft === null ? "Menghitung…" : daysLeft === 0 && date && date > "2026-12-01" ? "Checkpoint 1 Desember telah lewat" : `${daysLeft} hari menuju 1 Desember`}</strong></div><div className="summary-card"><span>Milestone</span><strong>{active.number} · {active.title}</strong><small>{activeStatus}</small></div><div className="summary-card"><span>Roadmap progress</span><strong>{progress}% selesai</strong><small>{completeCount} dari {taskCount} checklist</small></div><div className="summary-card"><span>Financial checkpoint</span><strong>Target Nov: Rp32–40 jt</strong><small>Target akhir: ≥ Rp50 jt</small></div></section>
    <section className="roadmap-wrap roadmap-priority"><div><p className="roadmap-eyebrow">PRIORITAS SAAT INI</p><h2>Fokus utama sekarang: <em>{active.title.toLowerCase()}.</em></h2><p>{priorityTasks.length ? "Tiga langkah berikutnya untuk menjaga fokus harian." : "Milestone ini sudah selesai. Anda dapat mulai melihat milestone berikutnya."}</p></div>{priorityTasks.length > 0 && <ol>{priorityTasks.map((task) => <li key={task.id}><button type="button" onClick={() => toggle(task.id)} aria-label={`Tandai selesai: ${task.label}`}>○</button>{task.label}</li>)}</ol>}</section>
    <section className="roadmap-wrap roadmap-timeline" id="timeline"><div className="roadmap-section-heading"><p className="roadmap-eyebrow">RENCANA EKSEKUSI</p><h2>Timeline menuju checkpoint.</h2><p>Checklist menentukan status pekerjaan; tanggal hanya memberi konteks periodenya.</p></div>{roadmapMilestones.map((milestone, index) => <MilestoneCard key={milestone.id} milestone={milestone} date={date || ""} completed={completed} onToggle={toggle} initialOpen={milestone.id === active.id || index === roadmapMilestones.findIndex((item) => item.id === active.id) + 1} />)}<MilestoneCard milestone={checkpointMilestone} date={date || ""} completed={completed} onToggle={toggle} initialOpen={date ? date >= "2026-12-01" : false} checkpoint /></section>
    <section className="roadmap-finance" id="finansial"><div className="roadmap-wrap"><div className="roadmap-section-heading"><p className="roadmap-eyebrow">TARGET KUMULATIF</p><h2>Target finansial.</h2><p>Penanda progres bisnis, bukan target pendapatan per bulan.</p></div><div className="finance-steps">{financialCheckpoints.map(([when, value], index) => <div className="finance-step" key={when}><span>{String(index + 1).padStart(2, "0")}</span><small>{when}</small><strong>{value}</strong></div>)}</div><div className="revenue-tracker"><div><p className="roadmap-eyebrow">LOCAL ONLY</p><h3>Omzet aktual</h3><p>Masukkan omzet kumulatif saat ini untuk melihat jarak menuju target akhir.</p></div><label htmlFor="actual-revenue">Omzet kumulatif saat ini <div className="revenue-input"><span>Rp</span><input id="actual-revenue" inputMode="numeric" value={revenueInput} onChange={(event) => updateRevenue(event.target.value)} placeholder="0" /></div></label><div className="revenue-result"><strong>{state.actualRevenue ? formatMoney(state.actualRevenue) : "Belum diisi"}</strong><div className="roadmap-bar" role="progressbar" aria-label="Progress omzet menuju Rp50 juta" aria-valuemin={0} aria-valuemax={100} aria-valuenow={revenueProgress}><i style={{ width: `${revenueProgress}%` }} /></div><small>{state.actualRevenue && state.actualRevenue >= targetRevenue ? "Target terlampaui" : `${revenueProgress}% menuju Rp50 juta`}</small></div><p className="privacy-copy">Progress dan omzet aktual pada halaman ini hanya disimpan di browser ini dan tidak dikirim ke server.</p></div></div></section>
    <section className="roadmap-wrap roadmap-kpis" id="kpi"><div className="roadmap-section-heading"><p className="roadmap-eyebrow">OPERATING RHYTHM</p><h2>KPI yang harus dilihat setiap minggu.</h2></div><div className="kpi-grid">{weeklyKpis.map(([label, goal]) => <div key={label}><span>{label}</span><strong>{goal}</strong></div>)}</div><div className="funnel-card"><div><p className="roadmap-eyebrow">CONTOH FUNNEL</p><h3>Jangan hanya lihat omzet.</h3><p>Jika closing rendah, lihat titik kebocorannya. Masalahnya bisa berada pada targeting, pesan outreach, portfolio, pricing, atau proses follow-up—bukan otomatis pada websitenya.</p></div><ol><li><strong>100</strong> outreach</li><li><strong>20</strong> reply</li><li><strong>8</strong> diskusi serius</li><li><strong>3</strong> closing</li></ol></div></section>
  </main><footer className="roadmap-footer"><span>Pembelajar Belajar · AI Content Factory</span><a href="/">← Kembali ke konten.pembelajarbelajar.com</a><button type="button" onClick={reset}>Reset progress</button></footer></>;
}
