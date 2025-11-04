
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0F172A",
          color: "white",
          padding: "60px",
          fontSize: 56,
          fontWeight: 700
        }}
      >
        <div>Bruna Melgarejo</div>
        <div style={{ fontSize: 28, marginTop: 12, fontWeight: 400 }}>
          Advocacia Criminal estratégica, humana e técnica
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
