import sunny from "@/public/sunny-home.png";
import ufit from "@/public/u-fit-mockup.png";
import pommy from "@/public/pommy-bakery.png";

export const links = [
  {
    id: 1,
    name: "Home",
    hash: "#home",
  },
  {
    id: 2,
    name: "About",
    hash: "#about",
  },
  {
    id: 3,
    name: "Projects",
    hash: "#projects",
  },
  {
    id: 3,
    name: "Skills",
    hash: "#skills",
  },
  {
    id: 4,
    name: "Blog",
    hash: "#blog",
  },
  {
    id: 5,
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "介護施設サイトLP",
    description:
      "介護施設を想定したLPサイト。Astroを使用して構築。SEO対策を意識し、高速化を実現。対応業務はコーディングのみ",
    tags: ["HTML", "JavaScript", "CSS", "Scss", "Astro"],
    imageUrl: sunny,
  },
  {
    id: 2,
    title: "パーソナルジムサイト",
    description:
      "パーソナルジムを想定したコーポレートサイト。Astroを使用して構築。SEO対策を意識し、高速化を実現。対応業務はコーディングのみ",
    tags: ["HTML", "JavaScript", "CSS", "Scss", "Astro"],
    imageUrl: ufit,
  },
  {
    id: 3,
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
