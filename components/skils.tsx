"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import {motion} from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate:(index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  }),
}

export default function Skils() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
        <SectionHeading title="My Skils" />
        <ul className="flex flex-wrap justify-center gap-2 text-medium md:text-lg text-gray-800">
          {skillsData.map((skils, index) => (
            <motion.li
              key={index}
              className="border bg-white border-black/[0.1] rounded-xl px-3 md:px-5 py-3"
              variants={fadeInAnimationsVariants}
              initial="initial"
              animate="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skils}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}
