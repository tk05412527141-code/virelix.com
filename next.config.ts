import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  // Kuranca uygulamasının yasal sayfaları. Sayfalar public/kuranca/ altında
  // düz HTML olarak duruyor; public/ içindeki dosyalar yalnızca tam yoluyla
  // (.html uzantısıyla) servis edildiği için uzantısız adresler bu rewrite
  // olmadan 404 döner. Uygulama ve App Store Connect bu uzantısız adreslere
  // bakıyor, o yüzden ikisi de çalışır durumda kalmalı.
  async rewrites() {
    return [
      { source: "/kuranca/gizlilik", destination: "/kuranca/gizlilik.html" },
      { source: "/kuranca/kosullar", destination: "/kuranca/kosullar.html" },
    ];
  },
};

export default nextConfig;
