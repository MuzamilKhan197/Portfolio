// Edit this file to update your portfolio content.

export type Skill = {
  name: string;
  /** Simple Icons slug, used to select the matching authentic brand mark. */
  icon: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "The part people see, feel, and interact with.",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      // { name: "Next.js", icon: "nextdotjs" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "The logic that makes an application work.",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
    ],
  },
  {
    id: "data",
    title: "Data & services",
    description: "Connecting applications with their data.",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      // { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "ui",
    title: "UI resources",
    description: "Small details that make interfaces feel complete.",
    skills: [
      { name: "Font Awesome", icon: "fontawesome" },
      { name: "Google Fonts", icon: "googlefonts" },
    ],
  },
];

// Technologies shown in the homepage toolkit strip.
export const coreToolkit: Skill[] = [
  { name: "MongoDB", icon: "mongodb" },
  { name: "Express.js", icon: "express" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodedotjs" },
];
