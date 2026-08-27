import type { Metadata } from "next";
import { RoadmapDashboard } from "@/components/roadmap/RoadmapDashboard";

export const metadata: Metadata = {
  title: "Internal Roadmap — AI Content Factory | Pembelajar Belajar",
  description: "Internal operating roadmap AI Content Factory.",
  robots: { index: false, follow: false },
};

export default function RoadmapPage() {
  return <RoadmapDashboard />;
}
