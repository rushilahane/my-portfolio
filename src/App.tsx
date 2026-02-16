import { useState, useEffect } from "react";
import { DATA } from "./data";
import type { Project, ExperienceItem, SkillGroup, Stat } from "./types";

// ── HELPERS ───────────────────────────────────────────────────────────────────
const scrollTo = (id: string): void =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const fn = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links: string[] = ["about", "experience", "projects", "contact"];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,12,24,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span
          onClick={() => scrollTo("hero")}
          style={{ color: "#e2e8f0", fontWeight: 800, fontSize: 19, cursor: "pointer", letterSpacing: 0.5 }}
        >
          RL<span style={{ color: "#4f8ef7" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 14, fontWeight: 500, cursor: "pointer", textTransform: "capitalize", letterSpacing: 0.5, padding: "4px 0", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "#e2e8f0")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = "#94a3b8")}
            >
              {l}
            </button>
          ))}
          <a
            href={`mailto:${DATA.email}`}
            style={{ background: "#4f8ef7", color: "#fff", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.background = "#3b7de8")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.background = "#4f8ef7")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #080c18 0%, #0c1a3a 60%, #080e20 100%)",
        padding: "0 2rem", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(79,142,247,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 820, textAlign: "center", position: "relative" }}>
        <p style={{ color: "#4f8ef7", fontSize: 12, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>
          📍 {DATA.location}
        </p>
        <h1 style={{ color: "#e2e8f0", fontSize: "clamp(2.8rem, 6vw, 4.8rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20, letterSpacing: -1.5 }}>
          Hi, I'm <span style={{ color: "#4f8ef7" }}>{DATA.name.split(" ")[0]}</span>
        </h1>
        <h2 style={{ color: "#93c5fd", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500, marginBottom: 20, letterSpacing: 1 }}>
          {DATA.role}
        </h2>
        <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.75, maxWidth: 580, margin: "0 auto 48px" }}>
          {DATA.tagline}
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px, 4vw, 56px)", marginBottom: 48, flexWrap: "wrap" }}>
          {DATA.stats.map((s: Stat) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ color: "#4f8ef7", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#475569", fontSize: 12, fontWeight: 500, marginTop: 6, letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("projects")}
            style={{ background: "#4f8ef7", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "#3b7de8"; (e.target as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "#4f8ef7"; (e.target as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            View My Work
          </button>
          <a
            href={`mailto:${DATA.email}`}
            style={{ background: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.15)", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", display: "inline-block" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About(): JSX.Element {
  return (
    <section id="about" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader label="About Me" title="Who I am" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "start" }}>
          <div>
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.9, whiteSpace: "pre-line", marginBottom: 32 }}>{DATA.about}</p>

            <div style={{ background: "rgba(79,142,247,0.06)", border: "1px solid rgba(79,142,247,0.15)", borderRadius: 10, padding: "20px 24px", marginBottom: 20 }}>
              <p style={{ color: "#4f8ef7", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Education</p>
              <p style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>{DATA.education.degree}</p>
              <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 2px" }}>{DATA.education.university}</p>
              <p style={{ color: "#475569", fontSize: 12, margin: 0 }}>{DATA.education.period} · {DATA.education.location}</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: "#4f8ef7", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Certifications</p>
              {DATA.certifications.map((c: string) => (
                <p key={c} style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>🏅 {c}</p>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>LinkedIn ↗</a>
              <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>GitHub ↗</a>
              <a href={`tel:${DATA.phone}`} style={socialBtnStyle}>📞 {DATA.phone}</a>
            </div>
          </div>

          <div>
            <p style={{ color: "#475569", fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>Technical Skills</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {DATA.skillGroups.map((group: SkillGroup) => (
                <div key={group.label}>
                  <p style={{ color: "#64748b", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>{group.label}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.skills.map((skill: string) => (
                      <span key={skill} style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.18)", color: "#93c5fd", padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function Experience(): JSX.Element {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const handleToggle = (idx: number): void =>
    setOpenIdx((prev) => (prev === idx ? -1 : idx));

  return (
    <section id="experience" style={{ background: "#080c18", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionHeader label="Experience" title="Where I've worked" />
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "rgba(79,142,247,0.15)", borderRadius: 2 }} />
          {DATA.experience.map((job: ExperienceItem, idx: number) => (
            <div key={idx} style={{ display: "flex", gap: 32, marginBottom: 36, position: "relative" }}>
              <div style={{ flexShrink: 0, width: 38, paddingTop: 20, display: "flex", justifyContent: "center" }}>
                <div
                  onClick={() => handleToggle(idx)}
                  style={{ width: 14, height: 14, borderRadius: "50%", background: openIdx === idx ? "#4f8ef7" : "rgba(79,142,247,0.3)", border: "2px solid #4f8ef7", cursor: "pointer", transition: "background 0.2s", marginTop: 2 }}
                />
              </div>
              <div
                style={{ flex: 1, background: openIdx === idx ? "rgba(79,142,247,0.05)" : "rgba(255,255,255,0.02)", border: `1px solid ${openIdx === idx ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, padding: "22px 26px", cursor: "pointer", transition: "all 0.25s ease" }}
                onClick={() => handleToggle(idx)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ color: "#e2e8f0", fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{job.title}</h3>
                    <p style={{ color: "#4f8ef7", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{job.company}</p>
                    <p style={{ color: "#475569", fontSize: 12, margin: 0 }}>{job.location}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)", color: "#93c5fd", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>
                      {job.period}
                    </span>
                    <span style={{ color: "#475569", fontSize: 14 }}>{openIdx === idx ? "▲" : "▼"}</span>
                  </div>
                </div>
                {openIdx === idx && (
                  <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.highlights.map((h: string, i: number) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#4f8ef7", marginTop: 2, flexShrink: 0 }}>▸</span>
                        <span style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects(): JSX.Element {
  return (
    <section id="projects" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader label="Projects" title="Things I've built" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {DATA.projects.map((p: Project) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? "rgba(79,142,247,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, padding: 28, transition: "all 0.25s ease", transform: hovered ? "translateY(-5px)" : "translateY(0)", display: "flex", flexDirection: "column", gap: 16 }}
    >
      <span style={{ fontSize: 32 }}>{project.emoji}</span>
      <h3 style={{ color: "#e2e8f0", fontSize: 17, fontWeight: 700, margin: 0 }}>{project.title}</h3>
      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map((t: string) => (
          <span key={t} style={{ color: "#4f8ef7", fontSize: 12, fontWeight: 600, fontFamily: "monospace" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact(): JSX.Element {
  const footerLinks = [
    { label: "Email", href: `mailto:${DATA.email}` },
    { label: "LinkedIn", href: DATA.linkedin },
    { label: "GitHub", href: DATA.github },
  ];

  return (
    <section id="contact" style={{ background: "#080c18", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader label="Contact" title="Let's work together" centered />
        <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.85, marginBottom: 48 }}>
          I'm currently open to new opportunities — whether it's a full-time role, freelance project, or an interesting collaboration. My inbox is always open!
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <a
            href={`mailto:${DATA.email}`}
            style={{ display: "inline-block", background: "#4f8ef7", color: "#fff", padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.background = "#3b7de8"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.background = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            ✉️ Say Hello
          </a>
          <a
            href={`tel:${DATA.phone}`}
            style={{ display: "inline-block", background: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.13)", padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.13)"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            📞 Call Me
          </a>
        </div>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#4f8ef7")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#475569")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer(): JSX.Element {
  return (
    <footer style={{ background: "#040710", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 2rem", textAlign: "center" }}>
      <p style={{ color: "#1e293b", fontSize: 13, margin: 0 }}>
        © {new Date().getFullYear()} Rushikesh Lahane · Built with React & TypeScript · Hosted on Vercel
      </p>
    </footer>
  );
}

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
}

function SectionHeader({ label, title, centered = false }: SectionHeaderProps): JSX.Element {
  return (
    <div style={{ marginBottom: 56, textAlign: centered ? "center" : "left" }}>
      <p style={{ color: "#4f8ef7", fontSize: 11, fontWeight: 600, letterSpacing: 3.5, textTransform: "uppercase", marginBottom: 12 }}>{label}</p>
      <h2 style={{ color: "#e2e8f0", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, margin: 0, letterSpacing: -0.5 }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: "#4f8ef7", borderRadius: 2, marginTop: 16, marginLeft: centered ? "auto" : 0, marginRight: centered ? "auto" : 0 }} />
    </div>
  );
}

const socialBtnStyle: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#94a3b8",
  padding: "9px 18px",
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  textDecoration: "none",
  transition: "border-color 0.2s, color 0.2s",
};

// ── APP ROOT ──────────────────────────────────────────────────────────────────
export default function App(): JSX.Element {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
