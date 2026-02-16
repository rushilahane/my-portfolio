// ── TYPES ─────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  about: string;
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  stats: Stat[];
  education: Education;
  certifications: string[];
}
