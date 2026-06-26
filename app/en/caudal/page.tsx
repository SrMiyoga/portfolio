import type { Metadata } from "next";
import { CaudalPage } from "@/components/site/caudal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en", "caudal");

export default function Page() {
  return <CaudalPage locale="en" />;
}
