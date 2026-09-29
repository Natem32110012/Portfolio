import { ImageResponse } from "next/og";

export const alt = "Seçkin Güneri — Marketing Artist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0E13",
          color: "#E7ECF4",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#B7C0CE" }}>
          MARKETING ARTIST · ISTANBUL
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 0.9 }}>
            Seçkin Güneri
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#8EBEFF" }}>
            Performance-driven UA creatives for mobile games & non-gaming
          </div>
        </div>
      </div>
    ),
    size,
  );
}
