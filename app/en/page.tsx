import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en", "home");

export default function Page() {
  return <HomePage locale="en" />;
}
