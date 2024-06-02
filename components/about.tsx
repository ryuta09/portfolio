"use client";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-8 sm:mb-20 pt-28 sm:pt-36"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading title="About me" />
      <div className="flex flex-col md:flex-row items-center">
        <div className="max-w-[10rem] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/person.png"}
              width={192}
              height={192}
              alt="古賀龍太"
              quality={95}
              priority={true}
              className="rounded-full border-[0.35rem] border-white shadow-xl w-[120px] h-[120px] mx-auto"
            />
          </motion.div>
        </div>
        <div className="pl-4 text-[14px] mt-4 md:mt-0">
          ポートフォリオをご覧いただきありがとうございます。
          <br />
          古賀龍太と申します。
          普段は都内のWebメディア運営会社にてフロントエンドエンジニアとして活動しております。
          対象業務は静的なWebサイト(LP・コーポーレートサイト)の制作からフロントエンドの開発まで多岐に渡ります。
          <br />
          お気軽にお問い合わせください。
        </div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-end gap-3 px-4 text-lg mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 py-2 text-sm flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          お問い合わせはこちら{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com/gako0012"
            target="_blank"
            rel="noforrer"
            className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full border border-black/1 outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://github.com/ryuta09"
            target="_blank"
            rel="noforrer"
            className="bg-white p-2 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/1 outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
