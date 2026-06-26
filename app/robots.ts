import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const base = profile.siteUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
