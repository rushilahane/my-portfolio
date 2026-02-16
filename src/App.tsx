import { useState, useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { DATA } from "./data";
import type {
  Project, ExperienceItem, SkillBar,
  SpecializationCard, MetricItem, AppItem,
} from "./types";

// ── HELPERS ───────────────────────────────────────────────────────────────────
const scrollTo = (id: string): void =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Animated counter hook
function useCountUp(target: number, duration: number = 1800, active: boolean = false) {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── SHARED STYLES ─────────────────────────────────────────────────────────────
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
};

// ── SECTION HEADER ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}
function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps): JSX.Element {
  return (
    <div style={{ marginBottom: 56, textAlign: centered ? "center" : "left" }}>
      <p style={{ color: "#4f8ef7", fontSize: 11, fontWeight: 600, letterSpacing: 3.5, textTransform: "uppercase", marginBottom: 12 }}>{label}</p>
      <h2 style={{ color: "#e2e8f0", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, margin: 0, letterSpacing: -0.5 }}>{title}</h2>
      {subtitle && <p style={{ color: "#64748b", fontSize: 15, marginTop: 12, maxWidth: 540, marginLeft: centered ? "auto" : 0, marginRight: centered ? "auto" : 0 }}>{subtitle}</p>}
      <div style={{ width: 48, height: 3, background: "#4f8ef7", borderRadius: 2, marginTop: 16, marginLeft: centered ? "auto" : 0, marginRight: centered ? "auto" : 0 }} />
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["about", "skills", "experience", "projects", "apps", "contact"];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(8,12,24,0.97)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.3s ease", padding: "0 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span onClick={() => scrollTo("hero")} style={{ color: "#e2e8f0", fontWeight: 800, fontSize: 19, cursor: "pointer" }}>
          RL<span style={{ color: "#4f8ef7" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize", letterSpacing: 0.5 }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "#e2e8f0")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = "#94a3b8")}>
              {l}
            </button>
          ))}
          <a href={`mailto:${DATA.email}`}
            style={{ background: "#4f8ef7", color: "#fff", padding: "8px 18px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.background = "#3b7de8")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.background = "#4f8ef7")}>
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
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #080c18 0%, #0c1a3a 60%, #080e20 100%)", padding: "0 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(79,142,247,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 820, textAlign: "center", position: "relative" }}>
        <p style={{ color: "#4f8ef7", fontSize: 12, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>📍 {DATA.location}</p>
        <h1 style={{ color: "#e2e8f0", fontSize: "clamp(2.8rem, 6vw, 4.8rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20, letterSpacing: -1.5 }}>
          Hi, I'm <span style={{ color: "#4f8ef7" }}>{DATA.name.split(" ")[0]}</span>
        </h1>
        <h2 style={{ color: "#93c5fd", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500, marginBottom: 20, letterSpacing: 1 }}>{DATA.role}</h2>
        <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.75, maxWidth: 580, margin: "0 auto 48px" }}>{DATA.tagline}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,4vw,56px)", marginBottom: 48, flexWrap: "wrap" }}>
          {DATA.stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ color: "#4f8ef7", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#475569", fontSize: 12, fontWeight: 500, marginTop: 6, letterSpacing: 0.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("apps")}
            style={{ background: "#4f8ef7", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "#3b7de8"; (e.target as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "#4f8ef7"; (e.target as HTMLButtonElement).style.transform = "translateY(0)"; }}>
            View Live Apps 📱
          </button>
          <a href={`mailto:${DATA.email}`}
            style={{ background: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.15)", padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-block" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SPECIALIZATION CARDS ──────────────────────────────────────────────────────
function Specializations(): JSX.Element {
  return (
    <section id="about" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader label="What I Do Best" title="My Specializations" subtitle="The specific areas where I bring exceptional depth — not just experience." centered />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {DATA.specializations.map((card: SpecializationCard) => (
            <SpecCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecCard({ card }: { card: SpecializationCard }): JSX.Element {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(79,142,247,0.07)" : "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? "rgba(79,142,247,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 14, padding: "28px 26px", transition: "all 0.25s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ fontSize: 36 }}>{card.icon}</div>
      <h3 style={{ color: "#e2e8f0", fontSize: 17, fontWeight: 700, margin: 0 }}>{card.title}</h3>
      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{card.description}</p>
      <div style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.25)", borderRadius: 20, padding: "5px 14px", width: "fit-content" }}>
        <span style={{ color: "#93c5fd", fontSize: 12, fontWeight: 600 }}>✦ {card.highlight}</span>
      </div>
    </div>
  );
}

// ── PERFORMANCE METRICS DASHBOARD ─────────────────────────────────────────────
function MetricsDashboard(): JSX.Element {
  const { ref, inView } = useInView(0.15);
  return (
    <section style={{ background: "#080c18", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }} ref={ref}>
        <SectionHeader label="Impact" title="Performance by the Numbers" subtitle="Real metrics from production apps — not estimates." centered />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {DATA.metrics.map((m: MetricItem) => (
            <MetricCard key={m.label} metric={m} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, active }: { metric: MetricItem; active: boolean }): JSX.Element {
  const numericValue = parseInt(metric.value);
  const count = useCountUp(numericValue, 1600, active);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(79,142,247,0.07)" : "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? "rgba(79,142,247,0.35)" : "rgba(255,255,255,0.07)"}`, borderRadius: 14, padding: "28px 24px", transition: "all 0.25s ease", transform: hovered ? "translateY(-3px)" : "translateY(0)" }}>
      <div style={{ fontSize: 28, marginBottom: 16 }}>{metric.icon}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
        <span style={{ color: "#4f8ef7", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1 }}>{count}</span>
        <span style={{ color: "#4f8ef7", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 700 }}>{metric.suffix}</span>
      </div>
      <p style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, margin: "0 0 6px" }}>{metric.label}</p>
      <p style={{ color: "#475569", fontSize: 13, margin: 0, lineHeight: 1.6 }}>{metric.sublabel}</p>
    </div>
  );
}

// ── TECH STACK PROFICIENCY BARS ───────────────────────────────────────────────
function SkillBars(): JSX.Element {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="skills" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }} ref={ref}>
        <SectionHeader label="Tech Stack" title="Proficiency Levels" subtitle="Confidence level across my core technologies based on daily production usage." />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {DATA.skillBars.map((skill: SkillBar) => (
            <SkillBarRow key={skill.name} skill={skill} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBarRow({ skill, active }: { skill: SkillBar; active: boolean }): JSX.Element {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: hovered ? "#e2e8f0" : "#94a3b8", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}>{skill.name}</span>
        <span style={{ color: "#4f8ef7", fontSize: 13, fontWeight: 600 }}>{skill.level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ height: "100%", width: active ? `${skill.level}%` : "0%", background: `linear-gradient(90deg, #4f8ef7, #93c5fd)`, borderRadius: 10, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)", transitionDelay: "0.1s" }} />
      </div>
    </div>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About(): JSX.Element {
  return (
    <section style={{ background: "#080c18", padding: "100px 2rem" }}>
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
              {DATA.certifications.map((c) => (<p key={c} style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>🏅 {c}</p>))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>LinkedIn ↗</a>
              <a href={DATA.github} target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>GitHub ↗</a>
              <a href={`tel:${DATA.phone}`} style={socialBtnStyle}>📞 {DATA.phone}</a>
            </div>
          </div>
          <div>
            <p style={{ color: "#475569", fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>All Technologies</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {DATA.skillGroups.map((group) => (
                <div key={group.label}>
                  <p style={{ color: "#64748b", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>{group.label}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.skills.map((skill) => (
                      <span key={skill} style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.18)", color: "#93c5fd", padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{skill}</span>
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
  const handleToggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? -1 : idx));
  return (
    <section id="experience" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionHeader label="Experience" title="Where I've worked" />
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "rgba(79,142,247,0.15)", borderRadius: 2 }} />
          {DATA.experience.map((job: ExperienceItem, idx: number) => (
            <div key={idx} style={{ display: "flex", gap: 32, marginBottom: 36 }}>
              <div style={{ flexShrink: 0, width: 38, paddingTop: 20, display: "flex", justifyContent: "center" }}>
                <div onClick={() => handleToggle(idx)} style={{ width: 14, height: 14, borderRadius: "50%", background: openIdx === idx ? "#4f8ef7" : "rgba(79,142,247,0.3)", border: "2px solid #4f8ef7", cursor: "pointer", transition: "background 0.2s", marginTop: 2 }} />
              </div>
              <div style={{ flex: 1, background: openIdx === idx ? "rgba(79,142,247,0.05)" : "rgba(255,255,255,0.02)", border: `1px solid ${openIdx === idx ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, padding: "22px 26px", cursor: "pointer", transition: "all 0.25s ease" }}
                onClick={() => handleToggle(idx)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ color: "#e2e8f0", fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{job.title}</h3>
                    <p style={{ color: "#4f8ef7", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{job.company}</p>
                    <p style={{ color: "#475569", fontSize: 12, margin: 0 }}>{job.location}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)", color: "#93c5fd", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>{job.period}</span>
                    <span style={{ color: "#475569", fontSize: 14 }}>{openIdx === idx ? "▲" : "▼"}</span>
                  </div>
                </div>
                {openIdx === idx && (
                  <ul style={{ margin: "18px 0 0", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.highlights.map((h, i) => (
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
    <section id="projects" style={{ background: "#080c18", padding: "100px 2rem" }}>
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

function ProjectCard({ project }: { project: Project }): JSX.Element {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? "rgba(79,142,247,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, padding: 28, transition: "all 0.25s ease", transform: hovered ? "translateY(-5px)" : "translateY(0)", display: "flex", flexDirection: "column", gap: 16 }}>
      <span style={{ fontSize: 32 }}>{project.emoji}</span>
      <h3 style={{ color: "#e2e8f0", fontSize: 17, fontWeight: 700, margin: 0 }}>{project.title}</h3>
      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map((t) => (<span key={t} style={{ color: "#4f8ef7", fontSize: 12, fontWeight: 600, fontFamily: "monospace" }}>{t}</span>))}
      </div>
    </div>
  );
}

// ── LIVE APPS + QR CODES ──────────────────────────────────────────────────────
function LiveApps(): JSX.Element {
  return (
    <section id="apps" style={{ background: "#060a14", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader label="Live on App Stores" title="Apps You Can Download Today" subtitle="Real production apps — scan the QR code or click the store badges to download." centered />
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {DATA.apps.map((app: AppItem) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: AppItem }): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [activeQR, setActiveQR] = useState<"play" | "apple" | null>(null);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(79,142,247,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: 16, padding: "28px 32px", transition: "all 0.25s ease" }}>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>

        {/* App Info */}
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
            <h3 style={{ color: "#e2e8f0", fontSize: 20, fontWeight: 700, margin: 0 }}>{app.name}</h3>
            <span style={{
              background: app.built === "built" ? "rgba(79,142,247,0.15)" : "rgba(148,163,184,0.1)",
              border: `1px solid ${app.built === "built" ? "rgba(79,142,247,0.35)" : "rgba(148,163,184,0.2)"}`,
              color: app.built === "built" ? "#93c5fd" : "#94a3b8",
              padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600
            }}>{app.badge}</span>
          </div>
          <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, margin: "0 0 24px" }}>{app.description}</p>

          {/* Store buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={app.playStore} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#4f8ef7")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}>
              <span style={{ fontSize: 18 }}>▶</span> Google Play
            </a>
            <a href={app.appStore} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0", padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#4f8ef7")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}>
              <span style={{ fontSize: 18 }}>🍎</span> App Store
            </a>
          </div>
        </div>

        {/* QR Codes */}
        <div style={{ display: "flex", gap: 20, flexShrink: 0, flexWrap: "wrap" }}>
          {[
            { label: "▶ Play Store", key: "play" as const, url: app.playStore },
            { label: "🍎 App Store", key: "apple" as const, url: app.appStore },
          ].map(({ label, key, url }) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveQR(key)}
              onMouseLeave={() => setActiveQR(null)}
              style={{ textAlign: "center", textDecoration: "none", cursor: "pointer" }}
            >
              <div style={{
                width: 136,
                height: 136,
                borderRadius: 12,
                overflow: "hidden",
                border: `2px solid ${activeQR === key ? "#4f8ef7" : "rgba(255,255,255,0.1)"}`,
                transition: "border-color 0.2s, transform 0.2s",
                transform: activeQR === key ? "scale(1.04)" : "scale(1)",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 6,
              }}>
                <QRCodeSVG
                  value={url}
                  size={118}
                  bgColor="#ffffff"
                  fgColor="#0a0f1c"
                  level="M"
                  includeMargin={false}
                />
              </div>
              <p style={{
                color: activeQR === key ? "#4f8ef7" : "#475569",
                fontSize: 11,
                fontWeight: 600,
                marginTop: 8,
                transition: "color 0.2s",
                letterSpacing: 0.5,
              }}>
                {label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact(): JSX.Element {
  return (
    <section id="contact" style={{ background: "#080c18", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader label="Contact" title="Let's work together" centered />
        <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.85, marginBottom: 48 }}>
          I'm open to new opportunities — full-time roles, freelance projects, or interesting collaborations. My inbox is always open!
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          <a href={`mailto:${DATA.email}`}
            style={{ display: "inline-block", background: "#4f8ef7", color: "#fff", padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.background = "#3b7de8"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.background = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
            ✉️ Say Hello
          </a>
          <a href={`tel:${DATA.phone}`}
            style={{ display: "inline-block", background: "transparent", color: "#e2e8f0", border: "1px solid rgba(255,255,255,0.13)", padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "#4f8ef7"; (e.target as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.13)"; (e.target as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
            📞 Call Me
          </a>
        </div>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {[{ label: "Email", href: `mailto:${DATA.email}` }, { label: "LinkedIn", href: DATA.linkedin }, { label: "GitHub", href: DATA.github }].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#4f8ef7")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#475569")}>
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

// ── APP ROOT ──────────────────────────────────────────────────────────────────
export default function App(): JSX.Element {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Specializations />
      <MetricsDashboard />
      <SkillBars />
      <About />
      <Experience />
      <Projects />
      <LiveApps />
      <Contact />
      <Footer />
    </div>
  );
}
