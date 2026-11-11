import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { developer } from "@/data/portfolio";

export function SocialLinks({ labeled = false }: { labeled?: boolean }) {
  return (
    <div className={`social-links ${labeled ? "social-labeled" : ""}`}>
      <a
        href={developer.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${developer.name} on GitHub (opens in a new tab)`}
      >
        <Github size={18} strokeWidth={1.7} />
        {labeled && (
          <>
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </>
        )}
      </a>
      <a
        href={developer.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${developer.name} on LinkedIn (opens in a new tab)`}
      >
        <Linkedin size={18} strokeWidth={1.7} />
        {labeled && (
          <>
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </>
        )}
      </a>
    </div>
  );
}
