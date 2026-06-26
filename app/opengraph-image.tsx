import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 50% -10%, #1b1b3a 0%, #08080a 60%)",
          color: "#f4f4f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ffffff",
              color: "#09090b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            PC
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>{profile.shortName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 30, color: "#6366f1", fontWeight: 600 }}>
            Software Engineer · End-to-end
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <span>I build software</span>
            <span style={{ color: "#6366f1" }}>end to end.</span>
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#a1a1aa" }}>
          {`Java · Spring Boot · Angular · ${profile.siteUrl.replace(
            "https://",
            "",
          )}`}
        </div>
      </div>
    ),
    size,
  );
}
