import type { PortfolioData } from "./types";

// ── PORTFOLIO DATA — edit this file to update your portfolio ──────────────────
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
    { value: "70%", label: "Faster Update Cycles" },
    { value: "60%", label: "Re-render Reduction" },
    { value: "95%", label: "OCR Accuracy" },
  ],

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

  projects: [
    {
      title: "Vehicle Diagnostics Dashboard",
      description:
        "Real-time analytics dashboard for vehicle data — speed, fuel consumption, and engine metrics rendered at 60 FPS with Line, Bar, Pie, and Scatter plot visualizations using Victory Native.",
      tags: ["React Native", "Victory Native", "Socket.IO", "Firebase"],
      emoji: "🚗",
    },
    {
      title: "OCR Document Scanner",
      description:
        "Mobile app feature integrating Google ML Kit for document scanning and text extraction — processing 500+ documents daily with 95% accuracy, including ID cards and invoices.",
      tags: ["React Native", "Google ML Kit", "OCR", "TypeScript"],
      emoji: "📄",
    },
    {
      title: "Cross-Platform Payment App",
      description:
        "Full-cycle React Native application with payment gateway integration, in-app purchases, social auth (Google, Facebook, Apple, LinkedIn), and OTA update delivery via Expo.",
      tags: ["React Native", "Expo OTA", "Payment Gateway", "Redux"],
      emoji: "💳",
    },
    {
      title: "Real-Time Tracking Platform",
      description:
        "Location-based mobile app with Google Maps integration, real-time geolocation tracking via Socket.IO, and WebSocket connections for live data updates on iOS and Android.",
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
