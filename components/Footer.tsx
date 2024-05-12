"use client";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="flex flex-col md:flex-row mt-16 py-4 max-w-[800px] mx-auto w-full justify-between items-center">
          <div>
            <p className="text-2xl font-semibold ">Ryuta's Portfolio</p>
            <span className="text-sm font-semibold inline-block">
              @2024 Ryuta's Portfolio
            </span>
          </div>
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li>
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                  )}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
