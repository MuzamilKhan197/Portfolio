import { ImageResponse } from "next/og";
import { developer } from "@/data/portfolio";

export const alt = `${developer.name} — ${developer.shortRole}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7f6f2",
        padding: "52px 64px",
        color: "#242522",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              background: "#242522",
              color: "#f7f6f2",
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            mk
          </div>
          <span style={{ fontWeight: 700 }}>{developer.name}</span>
        </div>
        <span style={{ color: "#686963", fontSize: 19 }}>
          {developer.shortRole}
        </span>
      </div>

      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            lineHeight: 1.07,
            fontWeight: 700,
            letterSpacing: "-4px",
          }}
        >
          {developer.headline.split("\n").map((line, index, lines) => (
            <span
              key={index}
              style={{
                color: index === lines.length - 1 ? "#bd4525" : "#242722",
              }}
            >
              {line}
            </span>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: 0,
            top: 14,
            width: 236,
            height: 236,
            border: "1px solid #d5d5cd",
            borderRadius: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 178,
              height: 178,
              border: "1px solid #d5d5cd",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 116,
                height: 116,
                borderRadius: 24,
                background: "#cc4b27",
                color: "#fff",
                fontSize: 47,
                transform: "rotate(-12deg)",
              }}
            >
              {"</>"}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #d5d5cd",
          paddingTop: 22,
          color: "#686963",
          fontSize: 18,
        }}
      >
        <span>Interface. Logic. Data.</span>
        <span>Selected work &amp; explorations</span>
      </div>
    </div>,
    { ...size },
  );
}
