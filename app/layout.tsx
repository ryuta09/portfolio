import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: '--font-noto' });
const mont = Montserrat({subsets: ["latin"], variable: "--font-montserrat", display: "swap"})
import "./globals.css";

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
    <html lang="ja" className={`${mont.variable} ${notoSansJP.variable} !scroll-smooth`}>
      <body
        className={` bg-gray-50 text-gray-950`}
      >
        <div>
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-lime-50 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
