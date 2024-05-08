"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useSectionInView } from "@/lib/hook";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
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
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-[16px] font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ポートフォリオをご覧いただきありがとうございます。<br />
        <span className="font-bold">古賀龍太</span>と申します。
        普段は<span className="font-bold">都内のWebメディア運営会社にてフロントエンドエンジニア</span>として活動しております。
        対象業務は静的なWebサイトの制作から開発まで多岐に渡ります。また、コーディングのみならず、SEO対策やパフォーマンスチューニングにも力を入れております。お気軽にお問い合わせください。
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          お問い合わせはこちら{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com/gako0012"
            target="_blank"
            rel="noforrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/1 outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://github.com/ryuta09"
            target="_blank"
            rel="noforrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/1 outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
