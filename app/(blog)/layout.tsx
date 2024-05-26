import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
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
    <>
      <div>
        {children}
      </div>
    </>
  );
}
