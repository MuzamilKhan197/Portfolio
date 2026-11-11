import Image from "next/image";
import { ArrowUpRight, Bell, CircleCheck, Compass, Heart, House, Layers3, MessageCircle, Plus, Search, Settings2, Sparkles, Users } from "lucide-react";
import type { Project } from "@/data/portfolio";
import "./project-preview.css";

function BrowserBar({ address }: { address: string }) {
  return <div className="preview-browser-bar"><span className="preview-browser-dots"><i /><i /><i /></span><span>{address}</span><span className="preview-browser-menu">···</span></div>;
}

function VeyroPreview() {
  return <div className="preview-scene preview-scene-social" aria-hidden="true">
    <span className="preview-background-word">connect.</span>
    <div className="preview-window preview-social-window">
      <BrowserBar address="veyro / a little more connected" />
      <div className="preview-social-app">
        <aside className="preview-social-sidebar">
          <b className="preview-social-logo">veyro<span>✳</span></b>
          <span className="preview-nav-current"><House />Home feed</span>
          <span><Compass />Explore</span>
          <span><Bell />Notifications</span>
          <span><MessageCircle />Messages</span>
          <span className="preview-create"><Plus />Create a post</span>
          <span className="preview-sidebar-bottom"><i className="preview-avatar">M</i>My corner of the web</span>
        </aside>
        <div className="preview-social-feed">
          <div className="preview-feed-heading"><b>Your daily dose of connection.</b><Search /></div>
          <div className="preview-stories">{["You", "Design", "Create", "Explore"].map((item, index) => <span key={item}><i style={{ "--avatar-hue": `${index * 65 + 20}` } as React.CSSProperties}>{index === 0 ? "+" : item.slice(0, 1)}</i>{item}</span>)}</div>
          <div className="preview-post">
            <div className="preview-post-person"><i className="preview-avatar">v</i><span><b>The creative corner</b><small>A place for your next idea</small></span><span>···</span></div>
            <div className="preview-post-art"><span>Good things<br />start with<br /><em>a connection.</em></span><i className="preview-flower">✳</i></div>
            <div className="preview-post-actions"><Heart /><MessageCircle /><ArrowUpRight /><span>Made to be shared.</span></div>
          </div>
        </div>
      </div>
    </div>
    <span className="preview-floating-note preview-social-note"><span className="preview-note-icon"><Users /></span><span><b>A little more human.</b><small>A little more connected.</small></span></span>
  </div>;
}

function HcmPreview() {
  return <div className="preview-scene preview-scene-hcm" aria-hidden="true">
    <div className="preview-hcm-orbit" />
    <div className="preview-window preview-hcm-window">
      <BrowserBar address="hcm lite / workspace" />
      <div className="preview-hcm-app">
        <aside className="preview-hcm-sidebar"><b><i>h.</i>HCM Lite</b><span className="preview-nav-current"><Layers3 />Overview</span><span><Users />People</span><span><Sparkles />AI assistant</span><span><Settings2 />Settings</span><span className="preview-workspace">YOUR WORKSPACE<br /><strong>Built around people.</strong></span></aside>
        <div className="preview-hcm-main">
          <div className="preview-hcm-heading"><span><small>WORKSPACE OVERVIEW</small><b>Good work starts here.</b></span><span className="preview-avatar">M</span></div>
          <div className="preview-stat-grid"><div><Users /><small>Your people</small><b>One team.</b></div><div><CircleCheck /><small>Your operations</small><b>In sync.</b></div><div><Sparkles /><small>Your insights</small><b>Connected.</b></div></div>
          <div className="preview-activity"><div><b>Activity at a glance</b><small>Built on real data</small></div><div className="preview-chart">{[35, 48, 42, 63, 53, 71, 65, 88, 77, 94, 86, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="preview-chart-axis"><span>People</span><span>Progress</span><span>Possibilities</span></div></div>
        </div>
      </div>
    </div>
    <div className="preview-assistant"><span className="preview-assistant-icon"><Sparkles /></span><span><small>YOUR DATA, WITH CONTEXT</small><b>Meet your AI assistant.</b><span>Less searching. More understanding.</span></span><ArrowUpRight /></div>
  </div>;
}

function PortfolioPreview() {
  return <div className="preview-scene preview-scene-portfolio" aria-hidden="true">
    <span className="preview-portfolio-orbit" />
    <div className="preview-window preview-portfolio-window">
      <BrowserBar address="muzamil / developer & curious human" />
      <div className="preview-portfolio-page">
        <div className="preview-portfolio-nav"><b><span>m.</span> muzamil</b><span>Work &nbsp;&nbsp; About &nbsp;&nbsp; Contact <i>↗</i></span></div>
        <div className="preview-portfolio-hero"><div><small>FULL STACK DEVELOPER</small><h4>Thoughtful code.<br />Meaningful<br /><em>experiences.</em></h4><p>From the first pixel to the final query.</p><span className="preview-portfolio-button">Explore my work <ArrowUpRight /></span></div><div className="preview-portfolio-art"><span className="preview-art-orbit" /><i className="preview-art-tile tile-one">&lt;/&gt;</i><i className="preview-art-tile tile-two">&#123; &#125;</i><i className="preview-art-tile tile-three">✳</i></div></div>
        <div className="preview-portfolio-bottom"><span>CURIOUS BY NATURE.</span><span>DEVELOPER BY CHOICE. ↗</span></div>
      </div>
    </div>
    <span className="preview-portfolio-stamp">A SMALL CORNER<br />OF THE INTERNET.<span>↗</span></span>
  </div>;
}

export function ProjectPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <div className={`project-preview project-preview-${project.id}${project.screenshot ? " has-project-image" : ""}`}>
    {project.screenshot ? <><Image src={project.screenshot.src} alt={project.screenshot.alt} fill sizes="(max-width: 599px) 100vw, (max-width: 859px) 50vw, 700px" className="project-preview-image" priority={priority} />{project.screenshot.kind === "concept" && <span className="preview-concept-label">Concept preview</span>}</> : <>
      <div className="project-preview-stage">{project.id === "veyro" ? <VeyroPreview /> : project.id === "hcm-lite" ? <HcmPreview /> : project.id === "developer-portfolio" ? <PortfolioPreview /> : <div className="preview-scene preview-scene-generic" aria-hidden="true"><div className="preview-generic-window"><BrowserBar address={project.name} /><div className="preview-generic-content"><span className="preview-generic-index">{project.number} / SELECTED WORK</span><strong>{project.name}</strong><span className="preview-generic-category">{project.category}</span><div className="preview-generic-wireframe"><i /><i /><i /></div><span className="preview-generic-code">&lt;/&gt;</span></div></div></div>}</div>
      <span className="preview-concept-label">Concept preview</span>
    </>}
  </div>;
}
