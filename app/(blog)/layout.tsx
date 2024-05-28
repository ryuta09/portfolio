import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
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
      <div className="mt-[20px] md:mt-[40px]">
      <div className="pl-4 my-4">
          <p
            className="cursor-pointer text-sm bg-red-200 inline-block py-2 px-4 rounded-xl hover:bg-red-300 transition duration-150"
          >
            <Link href={"/"}>TOPページへ戻る</Link>
          </p>
        </div>
        {children}
      </div>
    </>
  );
}
