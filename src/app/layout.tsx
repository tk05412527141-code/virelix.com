import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1994161303501115" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1994161303501115"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

