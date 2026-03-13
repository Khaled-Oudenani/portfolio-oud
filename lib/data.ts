import { NavItem, Skill, Project, Stat, ContactInfo } from "@/types";
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "MongoDB", icon: "🍃", color: "from-green-500/20 to-green-600/10" },
  { name: "Express", icon: "⚡", color: "from-gray-500/20 to-gray-600/10" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-cyan-600/10" },
  { name: "Node.js", icon: "🟢", color: "from-green-600/20 to-green-700/10" },
  { name: "Tailwind", icon: "🎨", color: "from-sky-500/20 to-sky-600/10" },
  {
    name: "REST APIs",
    icon: "🔌",
    color: "from-orange-500/20 to-orange-600/10",
  },
  { name: "Next.js", icon: "▲", color: "from-slate-500/20 to-slate-600/10" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-500/20 to-blue-600/10" },
];

export const PROJECTS: Project[] = [
  {
    title: "University Information Platform",
    description:
      "A web platform designed to organize and present university information, including a directory of students and professors, research laboratories, and scientific events.",
    image: "/univ.jpg",
    tags: ["React", "Express js", "MongoDB", "cloudinary"],
    demoUrl: "https://studentdr.vercel.app/",
    githubUrl: "https://github.com/Khaled-Oudenani/student",
  },
  {
    title: "Kids Stories",
    description:
      "Developed a web application that offers a collection of English stories for children, designed with a simple and engaging interface to encourage reading.",
    image: "/kids.jpg",
    tags: ["React", "Express js", "MongoDB", "cloudinary"],
    demoUrl: "https://kids-stories-eta.vercel.app/",
    githubUrl: "https://github.com/Khaled-Oudenani/kids-stories-full-stack",
  },
  {
    title: "Recipe Finder",
    description:
      "Developed a web application that allows users to search and explore a variety of food recipes through a clean and user-friendly interface.",
    image: "/food.jpg",
    tags: ["React", "api"],
    demoUrl: "https://khaled-foody.netlify.app/",
    githubUrl: "https://github.com/Khaled-Oudenani/foody-app",
  },
];

export const STATS: Stat[] = [
  { value: "5+", label: "Projects" },
  { value: "1+", label: "Years Exp" },
  { value: "N/", label: "Clients" },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "email",
    label: "Email",
    value: "khaoud1234@gmail.com",
    href: "mailto:khaoud1234@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/khaled-oudenani",
    href: "https://www.linkedin.com/in/khaled-oudenani/",
  },
  {
    icon: "location",
    label: "Location",
    value: "Laghouat, Algeria",
    href: "#",
  },
];
