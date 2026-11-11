// Edit this file to update your portfolio content.

export type NavigationItem = {
  label: string;
  href: string;
  section: string;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/#home", section: "home" },
  { label: "Projects", href: "/projects", section: "projects" },
  { label: "About me", href: "/#about", section: "about" },
  { label: "Tech stack", href: "/#skills", section: "skills" },
  { label: "Contact", href: "/#contact", section: "contact" },
];
