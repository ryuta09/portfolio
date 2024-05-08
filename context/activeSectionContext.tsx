"use client";
import React, { useState, createContext, useContext } from 'react'
import {links} from "@/lib/data";
import type {SectionName} from "@/lib/types";

type ActiveSectionContextTypeProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectonContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextTypeProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)
  return (
    <>
      <ActiveSectonContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}>
        {children}
      </ActiveSectonContext.Provider>
    </>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectonContext)
  if (!context) {
    throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
  }
  return context
}