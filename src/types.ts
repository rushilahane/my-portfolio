export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface SkillBar {
  name: string;
  level: number;
  color?: string;
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

export interface AppItem {
  name: string;
  description: string;
  playStore: string;
  appStore: string;
  badge: string;
  built: "built" | "maintained";
}

export interface SpecializationCard {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface MetricItem {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: string;
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
  skillBars: SkillBar[];
  experience: ExperienceItem[];
  projects: Project[];
  apps: AppItem[];
  specializations: SpecializationCard[];
  metrics: MetricItem[];
  stats: Stat[];
  education: Education;
  certifications: string[];
}
