import { ImageResponse } from "next/og";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  let w = +searchParams.get("w")!;
  let h = +searchParams.get("h")!;

  const onest = fetch("http://localhost:3000/fonts/Onest-Bold.woff").then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 52,
          color: "aliceblue",
          background: "#111",
          backgroundImage:
            "radial-gradient(circle, #222 0%, #111 50%, #111 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 32,
        }}
      >
        streetwhere?
      </div>
    ),
    {
      width: w,
      height: h,
      fonts: [
        {
          name: "Onest",
          data: await onest,
          style: "normal",
          weight: 700,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, must-revalidate, no-transform",
      },
    }
  );
}
