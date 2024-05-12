import sunny from "@/public/sunny-home.png";
import ufit from "@/public/u-fit-mockup.png";
import pommy from "@/public/pommy-bakery.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "介護施設サイトLP",
    description:
    "介護施設を想定したLPサイト。Astroを使用して構築。SEO対策を意識し、高速化を実現。対応業務はコーディングのみ",
    tags: ["HTML", "JavaScript", "CSS", "Scss", "Astro"],
    imageUrl: sunny,
  },
  {
    title: "パーソナルジムサイト",
    description:
      "パーソナルジムを想定したコーポレートサイト。Astroを使用して構築。SEO対策を意識し、高速化を実現。対応業務はコーディングのみ",
      tags: ["HTML", "JavaScript", "CSS", "Scss", "Astro"],
    imageUrl: ufit,
  },
  {
    title: "パン屋LP",
    description:
      "パン屋を想定したLPサイト。Astroを使用して構築。SEO対策を意識し、高速化を実現。対応業務はコーディングのみ",
      tags: ["HTML", "JavaScript", "CSS", "Scss", "Astro"],
    imageUrl: pommy,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
