import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Background3D } from "@/components/sections/Background3D";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virelix | Dijital Geleceği İnşa Ediyoruz",
  description: "Ölçeklenebilir yapay zeka sistemleri, yüksek performanslı uygulamalar ve yeni nesil dijital altyapılar tasarlıyoruz.",
  keywords: ["Yapay Zeka", "Teknoloji", "Yazılım Mühendisliği", "Dijital Altyapı", "Virelix"],
  other: {
    "google-adsense-account": "ca-pub-1994161303501115",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1994161303501115"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://pl29641435.effectivecpmnetwork.com/8b/b3/ba/8bb3ba951d8c530940e1e9787b2ebbfc.js"
          strategy="afterInteractive"
        />
        <Script id="ad-options-setup" strategy="afterInteractive">
          {`
            window.atOptions = {
              'key' : 'd5990ff14a52669f12350fed0963114a',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
          `}
        </Script>
        <Script
          src="https://www.highperformanceformat.com/d5990ff14a52669f12350fed0963114a/invoke.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.effectivecpmnetwork.com/uvcxnpe6?key=0726bd201767cac3510703fd2e16e16c"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Background3D />
        {children}
      </body>
    </html>
  );
}

