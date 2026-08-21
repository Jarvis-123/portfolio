export type ExperienceRole = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  highlights: string[];
};

export const about = {
  title: "About",
  paragraphs: [
    "I’m Amit Singh—Talent Acquisition Operations Partner at RateGain. Most recruiting teams don’t fail because they lack effort; they fail because workflow, data, and tools don’t match how hiring actually runs across regions. I support TA across APMEA, NORAM, and Europe as a Darwinbox superuser: workflows, stages, approvals, templates, and the configuration choices that decide whether reporting and adoption work.",
    "Where I’m different from typical TA Ops profiles: I design and ship internal software, not slide decks about AI. On my own initiative I’ve built an interconnected TA suite—playbooks, swimlane maps, SOPs, a citation-first assistant, in-browser document prep, JD tooling—so recruiters find procedure fast and leaders see honest funnel health. I still own the ops work that feeds those tools: BGV lifecycle, TAT breach analysis, taxonomy standardization, and reporting hygiene leaders can trust.",
  ],
  experience: [
    {
      company: "RateGain",
      role: "Talent Acquisition Operations — Partner",
      dates: "June 2026 – Present",
      location: "Noida / Gurugram",
      highlights: [
        "Designing TA compliance and process-standardization systems across APMEA, NORAM, and Europe—BGV lifecycle, Darwinbox configuration, vendor integrations.",
        "Building recruiter enablement tooling: interactive swimlane maps, role-based playbooks, and an AI-assisted TA suite (Next.js) for process clarity and operational visibility.",
        "Leading build-vs-buy for AI and HR-tech—benchmarking platforms against custom tools to guide the TA Ops roadmap.",
      ],
    },
    {
      company: "Cushman & Wakefield",
      role: "Regional Talent Acquisition Operations Specialist, APAC",
      dates: "January 2025 – June 2026",
      location: "Gurugram",
      highlights: [
        "Standardized APAC recruitment operations—policies, workflows, and tools for consistency and compliance.",
        "Integrated AI into daily TA workflows (JD generation, interview prep, market research); drove adoption of Workday, GEM, Phenom, and Calendly.",
        "Built a centralized repository of SOPs, process maps, and training guides; cut recruiter ramp-up time.",
      ],
    },
    {
      company: "Cushman & Wakefield",
      role: "Regional Talent Acquisition Specialist, APAC",
      dates: "March 2024 – December 2024",
      location: "Gurugram",
      highlights: [
        "Led executive, corporate, and niche hiring across APAC; partnered with global and regional leaders on market-specific strategies.",
        "Championed recruitment systems adoption through enablement and coaching; strengthened diversity pipelines.",
      ],
    },
    {
      company: "Radisys Corporation",
      role: "Senior Recruiter",
      dates: "March 2023 – February 2024",
      location: "Gurugram",
      highlights: [
        "Full-cycle recruiting across Devices Endpoint, Legal, Marketing, Wireless R&D, Data Engineering, and Cloud—including leadership roles.",
        "Held ~70% joining ratio; used AI to lift qualified candidates ~20% and cut recruiting time ~15%.",
      ],
    },
    {
      company: "Amazon Web Services (AWS)",
      role: "Recruiter",
      dates: "July 2022 – March 2023",
      location: "Bengaluru",
      highlights: [
        "Hired for AWS IoT, Enterprise Engineering, and functional teams across India, EMEA, and APAC.",
        "Ran hiring events and tech talks; promoted diversity hiring with ERGs and unconventional sourcing.",
      ],
    },
    {
      company: "Qualcomm",
      role: "Talent Acquisition Specialist",
      dates: "April 2021 – July 2022",
      location: "Bengaluru",
      highlights: [
        "Recruited for Qualcomm and Nuvia across cloud, kernel, embedded, ML, and functional roles.",
        "Cut TTH >40% for India leadership roles; sustained ~35% diversity inclusion while hiring ~100 candidates/year.",
      ],
    },
    {
      company: "Qualcomm (via Artech Information Systems)",
      role: "Talent Acquisition Specialist",
      dates: "August 2019 – April 2021",
      location: "Bengaluru",
      highlights: [
        "Full-lifecycle technical recruiting supporting Qualcomm hiring needs.",
      ],
    },
    {
      company: "Artech Information Systems",
      role: "Senior Technical Recruiter → Technical Recruiter → Associate Recruiter",
      dates: "September 2016 – August 2019",
      location: "Noida",
      highlights: [
        "US/Canada market recruiting for clients including Intel and Qualcomm—sourcing through close.",
        "Trained new recruiters; built consultative relationships with client coordinators and hiring managers.",
      ],
    },
  ] satisfies ExperienceRole[],
  education: {
    school: "Lovely Professional University",
    degree: "B. Tech, Information Technology",
    dates: "2012 – 2016",
  },
  skills: [
    "AI-assisted prototyping (Cursor, Claude)",
    "HRIS (Darwinbox)",
    "TA Enablement",
    "Workday / Phenom / GEM",
    "BGV lifecycle & vendor ops",
    "Recruiter training & SOP design",
  ],
  certifications: [
    "ChatGPT for HR",
    "Unconscious Bias",
    "Tech Recruitment Certified Professional",
    "Understanding and Supporting LGBTQ+ Employees",
    "AMCAT Certified Proficiency in English",
  ],
} as const;
