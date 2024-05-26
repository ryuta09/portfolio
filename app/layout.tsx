import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContext from "@/context/activeSectionContext";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "古賀龍太のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="!scroll-smooth">
      <body
        className={`${notoSansJP.className} bg-gray-50 text-gray-950 relative mb-10 pt-28 sm:pt-36`}
      >
        {children}
      </body>
    </html>
  );
}
