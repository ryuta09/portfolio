"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5)
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-4 sm:gap-6 mt-[3rem]">
        {projectsData.map((project, index) => (
          <React.Fragment key={project.id}>
            <Project {...project}/>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
