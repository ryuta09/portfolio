import React from 'react'
import { Montserrat } from "next/font/google";
const mont = Montserrat({subsets: ["latin"], variable: "--font-montserrat", display: "swap"})
interface SectionHeadingProps {
  title: string;
}
export default function SectionHeading({title}:SectionHeadingProps) {
  return (
    <div className={`${mont.className} text-3xl font-medium capitalize mb-8 text-center`}>{title}</div>
  )
}
