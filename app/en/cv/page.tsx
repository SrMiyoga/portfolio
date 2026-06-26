import type { Metadata } from "next";
import { CvPage } from "@/components/site/cv-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en", "cv");

export default function Page() {
  return <CvPage locale="en" />;
}
