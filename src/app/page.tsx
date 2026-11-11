import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Code2,
  Layers3,
  Mail,
  Sprout,
} from "lucide-react";
import {
  developer,
  learning,
  skillGroups,
  coreToolkit,
} from "@/data/portfolio";
import { Navigation } from "@/components/navigation";
import { StackArt } from "@/components/stack-art";
import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/reveal";
import { FeaturedProjects } from "@/components/featured-projects";
import { CopyEmail } from "@/components/copy-email";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="label-mark" />
      <span className="mono">
        {number} / {children}
      </span>
    </div>
  );
}

export default function Home() {
  const headlineLines = developer.headline.split("\n");
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section
          id="home"
          className="hero container"
          tabIndex={-1}
          aria-labelledby="hero-heading"
        >
          <div className="hero-topline">
            <span className="mono">
              {developer.name.toUpperCase()}{" "}
              <span className="topline-slash">/</span>{" "}
              {developer.shortRole.toUpperCase()}
            </span>
            <span className="availability">
              <i />
              {developer.availability}
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <div className="hero-intro mono">
                <span className="tiny-line" /> HELLO, I’M{" "}
                {developer.firstName.toUpperCase()}
              </div>
              <h1 id="hero-heading">
                {headlineLines.map((line, index) =>
                  index === headlineLines.length - 1 ? (
                    <span className="accent-word" key={index}>
                      {line}
                      <svg
                        viewBox="0 0 550 18"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path d="M3 13C150 0 325 0 545 8" />
                      </svg>
                    </span>
                  ) : (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ),
                )}
              </h1>
              <p className="hero-description">{developer.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work
                  <ArrowUpRight size={18} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Let’s connect
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-socials">
                <SocialLinks />
                <span className="social-divider" />
                <span className="hero-note">
                  Curious by nature. Developer by choice.
                </span>
              </div>
            </div>
            <div className="hero-art">
              <StackArt />
              <span className="art-note mono">
                <span>DESIGNED TO CONNECT.</span>
                <span>BUILT TO WORK.</span>
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <span className="mono">THE INTERFACE IS JUST THE BEGINNING.</span>
            <a className="scroll-link" href="#projects">
              <span>Scroll to explore</span>
              <ArrowDown size={15} />
            </a>
          </div>
        </section>

        <div className="stack-strip" aria-label="Core MERN stack">
          <div className="container stack-strip-inner">
            <span className="mono strip-label">MY EVERYDAY TOOLKIT</span>
            <div className="strip-technologies">
              {coreToolkit.map((skill) => (
                <span key={skill.icon}>
                  <Image
                    src={`/icons/${skill.icon}.svg`}
                    alt=""
                    width={22}
                    height={22}
                    className="tech-icon"
                  />
                  {skill.name}
                </span>
              ))}
            </div>
            <span className="mono strip-end">
              ONE CONNECTED STACK <ArrowUpRight size={14} />
            </span>
          </div>
        </div>

        <FeaturedProjects />

        <section
          id="about"
          className="section about-section"
          tabIndex={-1}
          aria-labelledby="about-heading"
        >
          <div className="container about-grid">
            <Reveal className="about-title">
              <SectionLabel number="02">
                ABOUT ME
              </SectionLabel>
              <h2 id="about-heading">
                Curiosity is
                <br />
                my starting
                <br />
                <span className="accent-text">point.</span>
                <Asterisk
                  className="about-asterisk"
                  strokeWidth={1.1}
                  aria-hidden="true"
                />
              </h2>
              <div className="about-signature">
                {developer.name}
                <span className="mono">{developer.role.toUpperCase()}</span>
              </div>
            </Reveal>
            <Reveal className="about-copy" delay={0.1}>
              <p className="about-lead">
                I like understanding how things work.
                <br />I like building them even more.
              </p>
              {developer.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="approach">
                <span>
                  <Code2 size={20} />
                  Build with purpose
                </span>
                <span>
                  <Layers3 size={20} />
                  Think end to end
                </span>
                <span>
                  <Sprout size={20} />
                  Keep getting better
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="skills"
          className="section skills-section container"
          tabIndex={-1}
          aria-labelledby="skills-heading"
        >
          <Reveal className="section-heading">
            <div>
              <SectionLabel number="03">TECH STACK</SectionLabel>
              <h2 id="skills-heading">
                A full stack of possibilities
                <span className="accent-text">.</span>
              </h2>
            </div>
            <p>
              The technologies I work with,
              <br />
              from first pixel to final query.
            </p>
          </Reveal>
          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <Reveal className="skill-row" key={group.id} delay={index * 0.04}>
                <div className="skill-category">
                  <span className="mono">0{index + 1}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill.icon}>
                      <Image
                        src={`/icons/${skill.icon}.svg`}
                        alt=""
                        width={21}
                        height={21}
                        className="tech-icon"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="learning-block">
            <div className="learning-symbol">
              <Braces size={28} strokeWidth={1.4} />
              <span className="learning-dot" />
            </div>
            <div className="learning-copy">
              <span className="mono accent-text">CURRENTLY LEARNING</span>
              <h3>{learning.title}</h3>
              <p>{learning.description}</p>
            </div>
            <div className="learning-topics">
              {learning.topics.map((topic) => (
                <span key={topic}>
                  <ArrowUpRight size={14} />
                  {topic}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="contact"
          className="contact-section"
          tabIndex={-1}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <Reveal>
              <div className="contact-topline">
                <SectionLabel number="04">CONTACT</SectionLabel>
                <span className="availability">
                  <i />
                  {developer.availability}
                </span>
              </div>
              <div className="contact-form-layout">
                <div className="contact-introduction">
                  <h2 id="contact-heading">
                    Good things start
                    <br />
                    with a <span>conversation.</span>
                  </h2>
                  <p>
                    Have a project in mind, an opportunity to share,
                    {" "}or just want to say hello?
                    I’d love to hear from you.
                  </p>
                  <div className="contact-direct">
                    <span className="mono">PREFER A DIRECT HELLO?</span>
                    <div className="email-group"><Mail size={20} strokeWidth={1.5} /><a href={`mailto:${developer.email}`}>{developer.email}</a><CopyEmail /></div>
                    <SocialLinks labeled />
                  </div>
                  <div className="contact-note"><span aria-hidden="true">✳</span><p>Good ideas can start anywhere.<br />Let’s see where yours can go.</p></div>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer topHref="#home" />
    </>
  );
}
