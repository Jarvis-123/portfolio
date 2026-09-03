export const site = {
  name: "Amit Singh",
  pronouns: "He/Him/His",
  title: "Talent Acquisition Operations — Partner",
  company: "RateGain",
  location: "Gurugram, Haryana, India",
  headline:
    "TA Operations & Enablement · Darwinbox Superuser · Building AI-powered recruiting systems",
  heroLine:
    "Product-minded builder for TA: playbooks, pipeline truth, and AI that cites procedure—not guesswork.",
  email: "singh.amit777.as@gmail.com",
  linkedIn:
    "https://www.linkedin.com/in/amit-singh-he-him-his-936059a9/",
  linkedInLabel: "Connect on LinkedIn",
  trustStrip:
    "WCAG AA target · keyboard search · personas for recruiter, TA Ops, HM, HR Ops",
  /** Production URL for metadata / og:image absolute paths. Update when custom domain is wired. */
  siteUrl: "https://portfolio-seven-green-y9kadbqbqz.vercel.app",
  proofProjects: {
    queryForge: {
      name: "QueryForge",
      tagline: "Citation-first document Q&A",
      github: "https://github.com/Jarvis-123/queryforge",
      demo: "https://queryforge-nu.vercel.app",
    },
    intentRouter: {
      name: "IntentRouter",
      tagline: "Regex intent classification (no LLM)",
      github: "https://github.com/Jarvis-123/intent-router",
      demo: null,
      npm: "https://www.npmjs.com/package/query-intent-router",
    },
    corpusSearch: {
      name: "CorpusSearch",
      tagline: "Markdown FTS + snippet UI",
      github: "https://github.com/Jarvis-123/corpus-search",
      demo: "https://corpus-search.vercel.app",
    },
    formatdeskLite: {
      name: "FormatDesk Lite",
      tagline: "Client-side PDF merge",
      github: "https://github.com/Jarvis-123/formatdesk-lite",
      demo: "https://formatdesk-lite.vercel.app",
    },
    laneForge: {
      name: "LaneForge",
      tagline: "Swimlane process builder",
      github: "https://github.com/Jarvis-123/lane-forge",
      demo: "https://lane-forge.vercel.app",
    },
    pulseDesk: {
      name: "PulseDesk",
      tagline: "Goal-based meals & workouts",
      github: "https://github.com/Jarvis-123/pulse-desk",
      demo: "https://pulse-desk-five.vercel.app",
    },
  },
  /** @deprecated Use proofProjects.queryForge */
  queryForge: {
    github: "https://github.com/Jarvis-123/queryforge",
    demo: "https://queryforge-nu.vercel.app",
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/principles", label: "Principles" },
  { href: "/contact", label: "Contact" },
] as const;
