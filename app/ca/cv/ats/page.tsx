import type { Metadata } from "next";
import { CvAtsPage } from "@/components/site/cv-ats-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("ca", "cvAts");

export default function Page() {
  return <CvAtsPage locale="ca" />;
}
