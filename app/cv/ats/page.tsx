import type { Metadata } from "next";
import { CvAtsPage } from "@/components/site/cv-ats-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("es", "cvAts");

export default function Page() {
  return <CvAtsPage locale="es" />;
}
