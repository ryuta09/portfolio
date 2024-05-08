import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skils from "@/components/skils";

export default function Home() {
  return <main className="flex flex-col items-center px-4 ">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skils />
  </main>;
}
