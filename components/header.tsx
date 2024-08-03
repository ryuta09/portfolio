"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import {motion} from "framer-motion";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
const mont = Montserrat({subsets: ["latin"], variable: "--font-montserrat", display: "swap"})
export default function Header() {
  return (
    <>
      <motion.header 
      initial={{opacity:0, y:-80}}
      animate={{opacity: 1, y:0}}
      className={`${mont.className} w-[min(1000px,88%)] mx-auto mt-2 h-[80px] flex items-center justify-between px-10 bg-white rounded-xl`}>
        <div>
          <a href="/" className="text-3xl">Portfolio</a>
        </div>
        <nav className="">
          <ul className="flex items-center gap-8">
            {links.map((link, index) => (
              <li key={index} className="h-full relative">
                <Link href={link.hash} className="flex items-center h-[80px] tracking-tight before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-red-300 before:transition-all before:duration-200  before:bg-left hover:before:w-full ">{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
}
