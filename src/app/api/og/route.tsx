import { ImageResponse } from "next/og";
import { getPostDetail } from "@src/business/post";

export const runtime = "edge";

export async function GET(request: Request) {
  const fontData = await fetch(
    new URL("../../../../assets/EASTARJET-Medium.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const { searchParams } = new URL(request.url);

  const post = getPostDetail(searchParams.get("slug")?.slice(0, 100) ?? "");

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          fontFamily: "Easterjet",
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 100px",
          wordBreak: "keep-all",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ✍️ {post?.detail.title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Easterjet", data: fontData, style: "normal" }],
      emoji: "twemoji",
    },
  );
}
