import type { Metadata } from "next";
import { SalesKitWorkspace } from "@/components/sales-kit/SalesKitWorkspace";
export const metadata: Metadata = { title: "Internal Sales Kit — AI Content Factory", robots: { index: false, follow: false } };
export default function SalesKitPage() { return <SalesKitWorkspace />; }
