export interface Project {
  id: string
  name: string
  description: string
  overview: string
  features: string[]
  techStack: string[]
  challenges: Array<{
    challenge: string
    solution: string
  }>
  teamRoles: Array<{
    name: string
    role: string
  }>
  meta: {
    duration: string
    category: string
    team: string
  }
  demoUrl: string
}

export const PROJECTS: Project[] = [
  {
    id: "xperience",
    name: "Xperience",
    description: "Internship & Job Hub",
    overview:
      "A platform bridging academic knowledge and real-world experience. Connects students with internships, mentorships, and skill-development opportunities.",
    features: [
      "Multi-auth login (Google, Facebook, Email)",
      "Internship categories",
      "Real-time notifications",
      "Application tracking dashboard",
      "Company dashboard",
      "Cross-device admin panel",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Firebase", "React Query", "WebSockets", "Vercel"],
    challenges: [
      {
        challenge: "Complex search/filter",
        solution: "Elasticsearch (or efficient indexed search).",
      },
      {
        challenge: "Real-time updates",
        solution: "WebSocket implementation.",
      },
      {
        challenge: "Cross-device design",
        solution: "Mobile-first responsive UI.",
      },
      {
        challenge: "Data-heavy pages",
        solution: "React Query optimization.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Led the entire development team, planning each piece of the process and guiding execution from start to finish. By coordinating tasks, ensuring quality, and managing delivery, the project was completed as a polished and functional web application.",
      },
      { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
    ],
    meta: {
      duration: "1 Month",
      category: "Web Development",
      team: "2 Developers • Owned by XP Digital",
    },
    demoUrl: "https://experience.mn",
  },
  {
    id: "sunrise-mongolia",
    name: "Sunrise Mongolia",
    description: "Travel Platform",
    overview:
      "An innovative travel platform showcasing the best adventures in Mongolia. Provides trip catalogs with filters, media galleries, SEO-optimized pages, and booking request forms.",
    features: [
      "Filterable trip catalog",
      "Media gallery",
      "SEO-friendly landing pages",
      "Booking request form",
      "Admin dashboard for trips, pricing, promotions",
      "Performance-focused UI",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "Vercel"],
    challenges: [
      {
        challenge: "Complex filtering system",
        solution: "MongoDB aggregation engine.",
      },
      {
        challenge: "Heavy media content",
        solution: "Cloudinary integration for optimization.",
      },
      {
        challenge: "Flexible admin panel for non-technical users",
        solution: "Custom CMS-like dashboard.",
      },
      {
        challenge: "High-performance needs",
        solution: "Next.js optimization & caching.",
      },
    ],
    teamRoles: [
      { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
      { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://sunrisemongolia.com",
  },
  {
    id: "winacademy",
    name: "WinAcademy",
    description: "Online Learning Platform",
    overview:
      "Built with modern web technologies, WinAcademy delivers online learning that is accessible and easy to understand. It includes course catalogs, membership systems, payments, video lessons, user reviews, and admin dashboards.",
    features: [
      "Course catalog with quick enrollment",
      "Membership access system",
      "Online payment with QPay integration",
      "Video training + media library",
      "User ratings & reviews",
      "CMS (news, announcements, FAQ)",
      "Admin dashboard for content, user, and payment management",
      "Performance analytics and audit logs",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "NextAuth",
      "Cloudinary",
      "QPay",
      "Bunny.net",
      "Vercel",
    ],
    challenges: [
      {
        challenge: "Online payment with instant course access",
        solution: "Webhook connection with QPay API for instant course unlock.",
      },
      {
        challenge: "Large video/media files",
        solution: "Optimized compression & streaming via Cloudinary.",
      },
      {
        challenge: "Membership/course access control",
        solution: "Role-based access on MongoDB.",
      },
      {
        challenge: "Secure authentication",
        solution: "NextAuth with Google/Facebook login.",
      },
    ],
    teamRoles: [
      {
        name: "Danny",
        role: "Led the entire development team, planning each piece of the process and guiding execution from start to finish. By coordinating tasks, ensuring quality, and managing delivery, the project was completed as a polished and functional web application.",
      },
      { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://winacademy.mn",
  },
  {
    id: "new-era",
    name: "New Era",
    description: "Education Platform",
    overview:
      "A comprehensive education platform centralizing school information, enrollment, programs, news, and media.",
    features: [
      "Enrollment system with FAQ",
      "News & announcements CMS",
      "Media gallery",
      "Reviews & ratings",
      "Role-based admin dashboard",
      "Audit logs",
      "Responsive design",
      "Online lessons streaming",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "NextAuth", "Bunny.net (with TUS uploads)", "Vercel"],
    challenges: [
      {
        challenge: "Complex content management",
        solution: "Role-based CMS.",
      },
      {
        challenge: "Responsive design",
        solution: "Tailwind mobile-first.",
      },
      {
        challenge: "Performance with heavy content",
        solution: "SSR with Next.js.",
      },
      {
        challenge: "Streaming & video mgmt",
        solution: "Bunny.net + TUS uploads.",
      },
    ],
    teamRoles: [
      { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
      { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://edunewera.mn",
  },
  {
    id: "han-education",
    name: "Han Education",
    description: "Study Abroad Platform",
    overview:
      "Helps students apply to Chinese universities & scholarships. Guides applicants step by step with documentation support and enables consultants to connect directly with students.",
    features: [
      "Student data collection",
      "Editable CMS for consultants",
      "Multi-language support",
      "SEO optimization",
      "Role-based admin access",
      "Direct communication with consultants",
      "Application documentation guidance",
      "Step-by-step process tracking",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "NextAuth", "Cloudinary", "Vercel"],
    challenges: [
      {
        challenge: "Complex application processes",
        solution: "Built guided form workflows.",
      },
      {
        challenge: "Fast communication",
        solution: "Admin & consultant dashboards.",
      },
      {
        challenge: "Data security",
        solution: "Encrypted storage and NextAuth authentication.",
      },
      {
        challenge: "Multi-language support",
        solution: "i18n integration.",
      },
    ],
    teamRoles: [
      { name: "Danny", role: "Founder, Project Manager, Lead Developer" },
      { name: "Bayarbayasgalan", role: "Senior Developer, core logic & integrations" },
    ],
    meta: {
      duration: "1 month",
      category: "Web Development",
      team: "2 developers",
    },
    demoUrl: "https://haneducation.mn",
  },
]
