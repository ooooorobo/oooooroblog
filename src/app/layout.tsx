import { PropsWithChildren } from "react";
import { Metadata } from "next"; // import "data://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css";
import Header from "@src/widgets/layout/header/Header";
import { Providers } from "@src/app/Providers";
import { AnalyticsScript } from "@src/app/AnalyticsScript";

export const metadata: Metadata = {
  title: { template: "%s | oooooroblog", default: "oooooroblog" },
  description: "웹 프론트엔드 개발 블로그",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://www.oooooroblog.com",
    title: "oooooroblog",
    description: "웹 프론트엔드 개발 블로그",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={"ko"}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
        <AnalyticsScript />
      </body>
    </html>
  );
}
