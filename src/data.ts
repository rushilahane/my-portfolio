import type { PortfolioData } from "./types";

export const DATA: PortfolioData = {
  name: "Rushikesh Lahane",
  role: "Senior Mobile Developer",
  tagline: "Building high-performance cross-platform apps with React Native & TypeScript.",
  email: "rushilahane10@gmail.com",
  phone: "+91 9561211947",
  github: "https://github.com/rushilahane",
  linkedin: "https://linkedin.com/in/rushilahane",
  location: "Pune, Maharashtra, India",

  about: `Senior Mobile Developer with 5+ years of expertise in cross-platform application development using React Native and JavaScript/TypeScript. Proven track record of building scalable, high-performance mobile applications with pixel-perfect UIs.

I bring strong experience across the full development cycle — from architecture and state management to API integrations, payment systems, and App Store deployment. I'm passionate about performance optimization and mentoring teams to ship clean, production-ready code.`,

  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "5", label: "Apps Live on Stores" },
    { value: "60%", label: "Re-render Reduction" },
    { value: "95%", label: "OCR Accuracy" },
  ],

  // ── METRICS DASHBOARD ──────────────────────────────────────────────────────
  metrics: [
    { value: "70", suffix: "%", label: "Faster Update Cycles", sublabel: "Via Expo OTA — no store release needed", icon: "🚀" },
    { value: "60", suffix: "%", label: "Re-render Reduction", sublabel: "React.memo + useMemo + useCallback", icon: "⚡" },
    { value: "40", suffix: "%", label: "Memory Usage Drop", sublabel: "Lazy loading & virtualized FlatLists", icon: "🧠" },
    { value: "45", suffix: "%", label: "Crash Rate Reduced", sublabel: "Performance monitoring & render cycles", icon: "🛡️" },
    { value: "35", suffix: "%", label: "Bundle Size Cut", sublabel: "Memoization & code splitting", icon: "📦" },
    { value: "95", suffix: "%", label: "OCR Accuracy", sublabel: "500+ documents processed daily", icon: "🔍" },
  ],

  // ── SPECIALIZATION CARDS ───────────────────────────────────────────────────
  specializations: [
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Deep expertise in React Native performance — eliminating unnecessary re-renders, optimizing FlatLists, image caching, and bundle splitting.",
      highlight: "60% fewer re-renders",
    },
    {
      icon: "🚀",
      title: "OTA Deployments (Expo)",
      description: "Architect and implement Expo Update Services for instant over-the-air bug fixes and feature releases without waiting for store approvals.",
      highlight: "70% faster releases",
    },
    {
      icon: "🔍",
      title: "OCR & ML Integration",
      description: "Production-grade Google ML Kit integration for real-time document scanning, text extraction, and intelligent data processing at scale.",
      highlight: "95% accuracy at 500+ docs/day",
    },
    {
      icon: "💳",
      title: "Payment Gateway Integration",
      description: "End-to-end payment flows including in-app purchases, subscription billing, and third-party gateway integrations on both iOS and Android.",
      highlight: "iOS + Android certified",
    },
    {
      icon: "📡",
      title: "Real-time Apps (Socket.IO)",
      description: "Building real-time mobile experiences with WebSocket connections, live telemetry dashboards, and location tracking for fleet management.",
      highlight: "60 FPS live dashboards",
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Custom chart components and interactive dashboards — Line, Bar, Pie, Scatter plots for vehicle analytics using Victory Native and D3.js.",
      highlight: "Victory Native · D3.js · Recharts",
    },
  ],

  // ── SKILL BARS ─────────────────────────────────────────────────────────────
  skillBars: [
    { name: "React Native", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Redux / Context API", level: 88 },
    { name: "Expo & OTA Updates", level: 92 },
    { name: "Firebase", level: 85 },
    { name: "REST APIs & Socket.IO", level: 88 },
    { name: "iOS (Xcode)", level: 80 },
    { name: "Android Studio", level: 82 },
    { name: "React.js", level: 78 },
    { name: "Git & CI/CD", level: 85 },
    { name: "Google ML Kit / OCR", level: 80 },
  ],

  // ── LIVE APPS ──────────────────────────────────────────────────────────────
  apps: [
    {
      name: "Intangles Installer",
      description: "Streamlines hardware device installation on vehicles — from creating a new vehicle account to full device testing — ensuring a seamless, efficient workflow.",
      playStore: "https://play.google.com/store/apps/details?id=com.intanglesapp.dolittle",
      appStore: "https://apps.apple.com/in/app/intangles-installer/id6475731267",
      badge: "Built from Scratch",
      built: "built",
    },
    {
      name: "iPulse — Force Motors",
      description: "Intelligent fleet telematics solution with cutting-edge telemetry providing powerful insights on vehicle health, performance, and real-time location for FML.",
      playStore: "https://play.google.com/store/apps/details?id=com.fml",
      appStore: "https://apps.apple.com/in/app/ipulse-force-motors-limited/id6744886994",
      badge: "Built from Scratch",
      built: "built",
    },
    {
      name: "Cost Calculator",
      description: "Detailed high-level estimation tool for mobile app project requirements — helping businesses plan and scope their mobile development needs accurately.",
      playStore: "https://play.google.com/store/apps/details?id=com.redbytes.projectcostcalculator",
      appStore: "https://apps.apple.com/in/app/id1482880672",
      badge: "Built from Scratch",
      built: "built",
    },
    {
      name: "Intangles",
      description: "Predictive and real-time vehicle health, fuel, and location monitoring platform serving thousands of fleet operators across India.",
      playStore: "https://play.google.com/store/search?q=intangles",
      appStore: "https://apps.apple.com/in/app/intangles/id1451475369",
      badge: "Maintained & Enhanced",
      built: "maintained",
    },
    {
      name: "iMAXX — Mahindra",
      description: "Mahindra's intelligent fleet telematics solution offering deep insights on vehicle health and performance with smart business management tools, 24/7.",
      playStore: "https://play.google.com/store/apps/details?id=com.imaxxapp",
      appStore: "https://apps.apple.com/in/app/mahindra-imaxx/id1641282346",
      badge: "Maintained & Enhanced",
      built: "maintained",
    },
  ],

  // ── SKILL GROUPS ───────────────────────────────────────────────────────────
  skillGroups: [
    {
      label: "Mobile Development",
      skills: ["React Native", "JavaScript", "TypeScript", "React Hooks", "Redux", "Context API", "iOS", "Android", "Expo"],
    },
    {
      label: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Responsive Design", "Component Architecture"],
    },
    {
      label: "Tools & Platforms",
      skills: ["Xcode", "Android Studio", "VS Code", "Git", "GitHub", "GitLab", "Jira", "Firebase"],
    },
    {
      label: "Integrations",
      skills: ["REST APIs", "Socket.IO", "Google Maps", "Payment Gateways", "In-App Payments", "OCR Integration"],
    },
    {
      label: "Cloud & Backend",
      skills: ["Firebase", "Push Notifications", "Crashlytics", "Social Auth (Google, Facebook, Apple, LinkedIn)"],
    },
    {
      label: "Deployment",
      skills: ["Apple App Store", "Google Play Store", "CI/CD", "Expo OTA Updates"],
    },
  ],

  // ── EXPERIENCE ─────────────────────────────────────────────────────────────
  experience: [
    {
      title: "Senior Developer — Mobile App",
      company: "Intangles Lab",
      period: "July 2025 – Present",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Leading mobile application development, architecting scalable solutions for complex business requirements.",
        "Mentoring junior developers on React Native best practices and modern development workflows.",
        "Implemented Expo OTA Updates enabling instant deployments without store releases — reducing update cycles by 70%.",
        "Executed React Native version upgrades from 0.68 → 0.73 → 0.83, improving app stability by 25%.",
        "Optimized components using React.memo, useMemo, useCallback — reducing unnecessary re-renders by 60%.",
        "Built real-time analytics dashboards with Line, Bar, Pie & Scatter plots using Victory Native and RN Charts.",
      ],
    },
    {
      title: "Software Developer",
      company: "Intangles Lab",
      period: "April 2023 – July 2025",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Developed and maintained multiple production React Native apps serving thousands of users on iOS & Android.",
        "Integrated OCR (Google ML Kit) for document scanning — processing 500+ documents daily at 95% accuracy.",
        "Built custom graph components for vehicle diagnostics (speed, fuel, engine metrics) at smooth 60 FPS.",
        "Implemented Firebase push notifications, crash reporting, and real-time database synchronization.",
        "Created reusable component libraries with lazy loading & virtualized lists — reducing memory usage by 40%.",
        "Integrated payment gateways, Socket.IO real-time communication, and location-based features.",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Redbytes Software",
      period: "December 2021 – April 2023",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Built pixel-perfect, responsive UIs for mobile and tablet following design specs with 99% accuracy.",
        "Reduced bundle size by 35% and initial load time by 2.5s through memoization and code splitting.",
        "Published and managed multiple applications on Apple App Store and Google Play Store.",
        "Implemented interactive charts (bar, line, donut) for financial & analytics apps using Recharts and D3.js.",
        "Integrated social auth flows (Google, Facebook, Apple, LinkedIn) improving user onboarding by 40%.",
      ],
    },
    {
      title: "Software Developer",
      company: "Redbytes Software",
      period: "November 2020 – December 2021",
      location: "Pune, Maharashtra, India",
      highlights: [
        "Developed cross-platform mobile apps using React Native, Redux, and modern JavaScript.",
        "Integrated Google Maps API and location services for real-time tracking and geolocation features.",
        "Reduced app crash rate by 45% through performance monitoring and optimized rendering cycles.",
        "Collaborated with designers and backend teams on RESTful API integrations and WebSocket connections.",
      ],
    },
  ],

  // ── PROJECTS ───────────────────────────────────────────────────────────────
  projects: [
    {
      title: "Vehicle Diagnostics Dashboard",
      description: "Real-time analytics dashboard for vehicle data — speed, fuel consumption, and engine metrics rendered at 60 FPS with Line, Bar, Pie, and Scatter plot visualizations.",
      tags: ["React Native", "Victory Native", "Socket.IO", "Firebase"],
      emoji: "🚗",
    },
    {
      title: "OCR Document Scanner",
      description: "Mobile feature integrating Google ML Kit for document scanning and text extraction — processing 500+ documents daily with 95% accuracy.",
      tags: ["React Native", "Google ML Kit", "OCR", "TypeScript"],
      emoji: "📄",
    },
    {
      title: "Cross-Platform Payment App",
      description: "Full-cycle React Native application with payment gateway integration, in-app purchases, social auth, and OTA update delivery via Expo.",
      tags: ["React Native", "Expo OTA", "Payment Gateway", "Redux"],
      emoji: "💳",
    },
    {
      title: "Real-Time Tracking Platform",
      description: "Location-based mobile app with Google Maps integration, real-time geolocation tracking via Socket.IO, and WebSocket connections.",
      tags: ["React Native", "Google Maps", "Socket.IO", "Android/iOS"],
      emoji: "📍",
    },
  ],

  education: {
    degree: "Bachelor of Engineering — Computer Science",
    university: "Sant Gadge Baba Amravati University",
    period: "2015 – 2019",
    location: "Amravati, India",
  },

  certifications: ["React Native and Redux Course using Hooks – Udemy"],
};
