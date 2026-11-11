"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { developer, navigation } from "@/data/portfolio";

function ThemeToggle() {
  const reduceMotion = useReducedMotion();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={
        mounted
          ? `Switch to ${dark ? "light" : "dark"} theme`
          : "Toggle color theme"
      }
      onClick={() => setTheme(dark ? "light" : "dark")}
      disabled={!mounted}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -35 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 35 }}
          transition={{ duration: reduceMotion ? 0 : 0.15 }}
        >
          {dark ? <Sun size={19} /> : <Moon size={19} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Navigation() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const initials = developer.name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toLowerCase();
  const [activeSection, setActiveSection] = useState("home");
  const active = pathname.startsWith('/projects') ? 'projects' : activeSection;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = navigation
      .map(({ section }) => document.getElementById(section))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement,
      );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActiveSection(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function closeOnDesktop() {
      if (window.innerWidth >= 860) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const frame = requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>("#mobile-menu a")?.focus());
    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  function followLink(sectionId: string) {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link
          className="wordmark"
          href="/#home"
          aria-label={`${developer.name}, home`}
          onClick={() => followLink("home")}
        >
          <span className="monogram" aria-hidden="true">
            {initials[0]}
            <span>{initials[1]}</span>
            <i />
          </span>
          <span>
            {developer.firstName}
            <span className="wordmark-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href, section }) => (
            <Link
              key={href}
              href={href}
              onClick={() => followLink(section)}
              className={active === section ? "active" : ""}
              aria-current={active === section ? (pathname.startsWith('/projects') ? 'page' : 'location') : undefined}
            >
              {label}
              {active === section && (
                <motion.span
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Link className="nav-contact" href="/#contact" onClick={() => followLink('contact')}>
            Let’s talk <ArrowUpRight size={15} />
          </Link>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {navigation.map(({ label, href, section }, index) => (
              <Link
                key={href}
                href={href}
                aria-current={active === section ? (pathname.startsWith('/projects') ? 'page' : 'location') : undefined}
                onClick={() => followLink(section)}
              >
                <span className="mono">0{index + 1}</span>
                {label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
