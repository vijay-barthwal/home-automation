import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #060810 0%, #0c1020 55%, #10162b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 22px",
            borderRadius: 999,
            alignSelf: "flex-start",
            background: "rgba(34,211,238,0.12)",
            border: "1px solid rgba(34,211,238,0.35)",
            color: "#67e8f9",
            fontSize: 26,
          }}
        >
          Z-Wave &middot; Zigbee &middot; Curtain Automation
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
          }}
        >
          <div style={{ display: "flex", color: "#f3f6fb", fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            Your home,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              backgroundImage: "linear-gradient(90deg, #67e8f9, #22d3ee, #818cf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            effortlessly intelligent.
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#93a0b8", maxWidth: 880 }}>
          {siteConfig.fullName} — smart Z-Wave, Zigbee &amp; curtain automation, installed and supported end to end.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #67e8f9, #22d3ee 45%, #818cf8)",
            }}
          />
          <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: "#f3f6fb" }}>
            {siteConfig.fullName}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
