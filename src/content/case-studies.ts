export type CaseStudySlug = "playbook" | "ask-ta" | "format-desk";

export type NarrativeBlock =
  | { type: "paragraph"; text: string }
  | { type: "labeled"; label: string; text: string };

export type NarrativeSection = {
  title: string;
  blocks: NarrativeBlock[];
};

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  eyebrow: string;
  outcome: string;
  summary: string;
  problem: string;
  whatIDid: string[];
  evidence: string[];
  quote?: string;
  next: string[];
  desktopFrameLabel: string;
  mobileFrameLabel: string;
  /** Long-form case study; replaces default Problem/Evidence sections on detail page. */
  narrative?: NarrativeSection[];
};

/** How TA leaders should read this page — not a feature gallery. */
export const workIntro = {
  title: "Work",
  thesis:
    "I build internal TA products and operating systems so hiring teams move faster without sacrificing trust—procedure of record, honest funnel data, and AI that cites the playbook. The suite is built on my own initiative; rollout is in progress. Public proof: QueryForge (open-source RAG demo).",
  stakes: [
    {
      label: "Adoption",
      text: "Recruiters find the right process in under a minute—persona-aware home, ⌘K, page-aware assistant.",
    },
    {
      label: "Trust",
      text: "Leaders see sync state and empty honesty—never fake KPIs when the HRIS isn’t connected.",
    },
    {
      label: "Governance",
      text: "The HRIS holds records; the hub holds how. No second ATS, no PII in chat, no public PDF converters.",
    },
  ],
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "playbook",
    title: "TA process hub",
    eyebrow: "Travel-tech SaaS · Flagship system · Built · rollout in progress",
    outcome: "One place for how we hire",
    summary:
      "Built on my own initiative: scattered SOPs and spreadsheet ops → a single TA hub for procedure and enablement—the HRIS stays system of record. Rollout in progress.",
    problem: "",
    whatIDid: [],
    evidence: [],
    next: [],
    desktopFrameLabel:
      "Illustrative mock — hub home with persona tabs, sync honesty, assistant",
    mobileFrameLabel: "Illustrative mock — mobile procedure find",
    narrative: [
      {
        title: "The problem",
        blocks: [
          {
            type: "paragraph",
            text: "Procedure was everywhere and nowhere. How we hire lived in slide decks, chat threads, old PDFs, and a few people's heads; ops lived in spreadsheets; funnel views got exported and then argued about over email. There was no single answer to \"what's the current offer-approval SOP?\" or \"where's the onboarding walkthrough?\" — so recruiters asked a person, and the person's answer was the source of truth until the next time someone asked.",
          },
          {
            type: "paragraph",
            text: "That's not a tooling gap you fix with another document. It's a system-of-how gap, and it compounds: the more procedure scatters, the more hiring depends on who you happen to ask.",
          },
        ],
      },
      {
        title: "The constraint I designed around",
        blocks: [
          {
            type: "paragraph",
            text: "The HRIS is already the system of record — reqs, candidates, stages, approvals. The temptation, every single time you want a nicer dashboard or a faster workflow, is to copy those records into a side tool. Do that and you've started building a shadow ATS: two versions of the truth, quiet drift between them, and a compliance story you can't defend.",
          },
          {
            type: "paragraph",
            text: "So I drew the line on day one and held it. The hub owns procedure, templates, and enablement. It does not keep its own copy of candidate or req data — click a candidate and you land on the record in the system of record, with the SOP beside it rather than a second database. The reasoning is practical, not ideological: a second copy eventually disagrees with the first, recruiters start trusting the wrong screen, and leaders argue about two numbers that are each \"right\" in their own system. My leverage is procedure of record and adoption, not re-implementing an ATS.",
          },
          {
            type: "paragraph",
            text: "The pressure to cross that line is never dramatic. It's soft: \"can we just paste this export here?\" or \"can the pipeline tile always show a number?\" Both are reasonable requests. I said no to both — no stored records, and no implied live KPIs when sync isn't connected.",
          },
        ],
      },
      {
        title: "The decision I'd defend",
        blocks: [
          {
            type: "paragraph",
            text: "The sharpest fork was building a persona-aware home — recruiter, TA Ops, hiring manager, HR Ops — instead of one universal dashboard.",
          },
          {
            type: "paragraph",
            text: "Across a multi-region org, \"TA\" isn't one job. A recruiter's first minute is find the offer-approval SOP. TA Ops needs TAT, breaches, data quality, governance. A hiring manager needs what am I supposed to do on this req without wading through ops chrome. A single generic homepage optimizes for the screenshot — the version that looks impressive in a deck — not for the first mile of actual work. Adoption dies in exactly that gap.",
          },
          {
            type: "paragraph",
            text: "That choice cost me things, and I took them on purpose:",
          },
          {
            type: "labeled",
            label: "A harder story to tell.",
            text: "One homepage is easier to explain in a slide. I accepted four tuned entry points instead — same shell and shared content, not four silos. The principle is persona-aware, not persona-siloed.",
          },
          {
            type: "labeled",
            label: "More to build and maintain.",
            text: "More information architecture, more decisions about what surfaces first for whom, and end-to-end tests gating the critical flows before anything ships. I gave up the cheap v1 that looks finished in week one.",
          },
          {
            type: "labeled",
            label: "Less serendipity for the curious.",
            text: "If you never touch search or nav, you might not stumble onto another persona's shortcuts. I mitigated that with global ⌘K search and shared library routes — not by flattening everyone into one bland home.",
          },
          {
            type: "paragraph",
            text: "I made the same kind of call on trust: honest sync and empty states instead of fixture KPIs. The hub never looks \"alive\" when sync isn't connected. Leaders see \"no live data / last synced…\" rather than a zero that reads like a real metric. I traded prettier leadership views on day one for credibility on the day it actually matters.",
          },
        ],
      },
      {
        title: "What success looks like",
        blocks: [
          {
            type: "paragraph",
            text: "The hub is built but not yet rolled out with adoption analytics, so I don't have before/after numbers I'd put on a slide — and I'd rather say that than invent one. Here's what I'm building toward, and what I'll measure with TA Ops once it's in daily use:",
          },
          {
            type: "labeled",
            label: "Adoption",
            text: "Procedure findable in under a minute, so the \"where's the offer SOP / onboarding step / BGV step?\" pings drop and answers route through the hub with a link to the versioned SOP, not tribal chat. One adoption surface, so the shadow tools — random PDF sites, one-off spreadsheets — shrink.",
          },
          {
            type: "labeled",
            label: "Trust",
            text: "Funnel and ops views that tell the truth, with sync state always visible. Success sounds like a leader saying \"we stopped arguing about a number nobody could trace back to the source.\"",
          },
          {
            type: "labeled",
            label: "Governance",
            text: "The system of record stays authoritative; the hub stays how. No second candidate database, no PII in chat logs, no compliance story I can't stand behind.",
          },
          {
            type: "paragraph",
            text: "The signals I'll actually track after rollout: time-to-find for the top SOPs, search and assistant usage versus repeat chat questions, which persona homes get traffic, and honest interviews — \"are you still exporting to Excel for X?\" Those are measurements I'll earn, not claims I'm making today.",
          },
        ],
      },
    ],
  },
  {
    slug: "ask-ta",
    title: "Procedure assistant",
    eyebrow: "Travel-tech SaaS · Trusted AI layer · Built · rollout in progress",
    outcome: "Answers that cite procedure",
    summary:
      "Built on my own initiative: tribal chat → search-backed answers with hub links, weak-match honesty, and escalation—not candidate decisions. Rollout in progress.",
    problem: "",
    whatIDid: [],
    evidence: [],
    next: [],
    desktopFrameLabel:
      "Illustrative mock — assistant citations, weak-match banner, scope",
    mobileFrameLabel: "Illustrative mock — floating assistant",
    narrative: [
      {
        title: "The problem",
        blocks: [
          {
            type: "paragraph",
            text: "\"Who owns this process?\" \"What's the current BGV step?\" \"Which offer-approval template do I use?\" The answer to every one of these lived in a person's head, and you got it by asking — me, TA Ops, or whoever happened to know. That works until the person you need is in a meeting, on leave, or misremembers. The answer isn't versioned, isn't sourced, and quietly drifts every time it's retold in a new thread. Hiring ends up bottlenecked on who's available to ask.",
          },
          {
            type: "paragraph",
            text: "An internal chatbot is the obvious fix, and also the obvious trap. The easy version — point an LLM at some docs and let it answer anything — produces confident answers to questions it shouldn't be answering, about procedure it may have gotten wrong. For hiring, that's worse than no bot at all.",
          },
        ],
      },
      {
        title: "The guardrails, and why they're there",
        blocks: [
          {
            type: "paragraph",
            text: "The assistant has a short, explicit list of what it can and can't do. The \"can\" side is enablement: cite an SOP, surface the owner of a process, link the versioned page. The \"cannot\" side is the important half, and each line is deliberate.",
          },
          {
            type: "paragraph",
            text: "It never makes candidate or hiring decisions — no \"advance them,\" no \"this candidate's fine,\" no \"should we hire X?\" This isn't about whether a model is smart enough. It's about who owns accountability. Hiring decisions touch policy, regional law, documented criteria, and audit trails, and those live in human process with an approval chain. The moment an assistant implies a decision, you've created a shadow decision record with no clear owner when something goes wrong. A model can sound authoritative on exactly the judgment calls recruiters shouldn't outsource, so the boundary is firm: cite how we hire; never substitute for hiring judgment.",
          },
          {
            type: "paragraph",
            text: "No personal data in chat. Retrieval runs over procedure content only. The moment someone pastes a name or offer details, a chat log becomes an uncontrolled datastore, and that's a data-protection problem I'm not going to introduce into what is structurally an internal wiki. \"Who owns this process?\" — yes. \"Here's this candidate's package\" — no.",
          },
        ],
      },
      {
        title: "The decision I'd defend",
        blocks: [
          {
            type: "paragraph",
            text: "The sharpest choice was making the assistant cite a source or admit it doesn't have one — instead of always producing a confident answer.",
          },
          {
            type: "paragraph",
            text: "When retrieval is weak, it says so. It shows a weak-match banner and routes you to a named owner or to search rather than generating a plausible-sounding paragraph. That costs something real, and I took the cost on purpose:",
          },
          {
            type: "labeled",
            label: "Less magic in a demo.",
            text: "A bot that always answers looks impressive in a five-minute walkthrough. \"I'm not sure — here's who owns this, or try rephrasing\" feels weaker in the room.",
          },
          {
            type: "labeled",
            label: "More friction on a miss.",
            text: "When retrieval doesn't find enough, the recruiter may still need a person or another search. It's not zero-effort every time.",
          },
          {
            type: "paragraph",
            text: "Slower initial wow than a generic wrapper that hallucinates fluently.",
          },
          {
            type: "paragraph",
            text: "I traded all of that away because a confident wrong answer about procedure is worse than no answer. Tribal chat already drifts; a bot that scales a wrong SOP across the whole org turns a small problem into a systemic one. And trust is the actual adoption bottleneck — one bad offer-step answer and TA Ops becomes the cleanup crew while leadership reaches for the off switch. It's the same philosophy as the honest funnel tiles: \"here's what I found,\" or \"I didn't find enough — go here.\" That's how you earn \"I trust this because it cites the source\" instead of \"it talks like it knows.\"",
          },
        ],
      },
      {
        title: "What success looks like",
        blocks: [
          {
            type: "paragraph",
            text: "It isn't rolled out with adoption analytics yet, so there's no before/after I'd claim. Here's the behavior I'm building toward:",
          },
          {
            type: "paragraph",
            text: "Fewer repeat pings to me and TA Ops on the same procedural questions — offer approval, onboarding, BGV, templates — because the first stop becomes search or the assistant with a linked, versioned page, not \"who do I ask?\"",
          },
          {
            type: "paragraph",
            text: "Sourced answers recruiters trust — they see links and excerpts, not an uncited paragraph, and when match quality is low they're routed rather than misled.",
          },
          {
            type: "paragraph",
            text: "Scale without informal liability — guidance stays search-backed and bounded; anything sensitive or ambiguous escalates to a human instead of being automated in v1.",
          },
          {
            type: "paragraph",
            text: "Less drift in chat — the answer is the same page the next person gets, tunable through feedback on retrieval, instead of a fresh oral tradition per thread.",
          },
          {
            type: "paragraph",
            text: "The signals I'll actually watch after rollout: assistant versus search usage, thumbs on weak versus strong matches, whether the same ownership questions keep reappearing in chat, and spot checks — \"did you get what you needed without pasting candidate data?\" Measurements I'll earn, not claims I'm making today.",
          },
        ],
      },
    ],
  },
  {
    slug: "format-desk",
    title: "In-browser document prep",
    eyebrow: "Travel-tech SaaS · Risk reduction · Built · rollout in progress",
    outcome: "Doc prep without shadow IT",
    summary:
      "Built on my own initiative: browser-first PDF prep (nothing uploaded) plus honest guidance about the cases it can't cover—not public converters. Rollout in progress.",
    problem: "",
    whatIDid: [],
    evidence: [],
    next: [],
    desktopFrameLabel:
      "Illustrative mock — merge, split & trim, images (in-browser)",
    mobileFrameLabel: "Illustrative mock — guided prep on phone",
    narrative: [
      {
        title: "The problem",
        blocks: [
          {
            type: "paragraph",
            text: "Offer letters, BGV packs, ID scans — hiring runs on sensitive documents, and those documents constantly need to be merged, split, or converted to PDF. The tool for that is one search away: a free \"convert PDF\" site that will happily accept an offer letter and process it on someone else's server. Nobody does this out of malice. Recruiters are under time pressure, and uploading to a random converter is simply the path of least resistance.",
          },
          {
            type: "paragraph",
            text: "I didn't wait for an incident to take that seriously. The logic is enough: assume someone will eventually do the convenient thing unless the convenient thing is already at hand. The signal that confirmed it was the class of question that kept surfacing in enablement — not always literally \"what's a good merge site?\", but \"how do I merge these without sending them somewhere?\" So I built the safe path first. The goal was to remove the excuse, not to document the first mistake.",
          },
        ],
      },
      {
        title: "The decision I'd defend",
        blocks: [
          {
            type: "paragraph",
            text: "It does the common tasks in the browser, where the file never leaves the machine — and it's honest about the cases where that isn't possible.",
          },
          {
            type: "paragraph",
            text: "The everyday TA prep — merge an offer pack, turn images into a PDF, split or trim a document — runs entirely client-side. Nothing uploads anywhere. That's the default, and for sensitive hiring docs it's the whole point.",
          },
          {
            type: "paragraph",
            text: "But I didn't pretend the browser can do everything. Faithful Word, Excel, and PowerPoint conversion needs a rendering engine the browser doesn't have, so the default there is guided \"Save as PDF\" rather than a silent upload. Heavier operations belong on reviewed internal infrastructure, not a public SaaS, and they stay switched off until that exists.",
          },
          {
            type: "paragraph",
            text: "That's the tradeoff I made on purpose: I shipped real, private value immediately instead of blocking on a long infrastructure project — and I refused to over-claim. The browser tools are genuinely browser-only, and the gaps are labelled as gaps rather than dressed up as the privacy story.",
          },
        ],
      },
      {
        title: "What success looks like",
        blocks: [
          {
            type: "paragraph",
            text: "It isn't rolled out with usage analytics yet, so there's no before/after I'd claim. Success here isn't \"recruiters love the PDF tools\" — it's that a public converter never becomes the obvious choice:",
          },
          {
            type: "paragraph",
            text: "No reason to open a random converter for the common prep tasks, because the safe version is right there and clearly says nothing was uploaded.",
          },
          {
            type: "paragraph",
            text: "Fewer \"anyone know a good PDF site?\" moments — and when someone does ask, the answer points here.",
          },
          {
            type: "paragraph",
            text: "The behavior prevented: sensitive hiring documents sitting in some unknown third party's retention, ad-hoc tools slipping past review, and \"just this once\" uploads quietly becoming a habit.",
          },
          {
            type: "paragraph",
            text: "The signals I'll watch after rollout: usage versus converter questions in chat, whether people travel from templates into doc prep, and whether the heavier operations ever need to switch on for real work. Directional, not claims I'm making today.",
          },
        ],
      },
    ],
  },
];

/** Career proof that makes the internal build credible to TA leaders. */
export const trackRecord = [
  {
    company: "Cushman & Wakefield",
    role: "Regional TA Ops · APAC",
    headline: "Enablement before the product",
    body: "Centralized SOPs, process maps, and training guides; standardized APAC workflows; drove Workday / GEM / Phenom adoption—and cut recruiter ramp-up.",
  },
  {
    company: "Qualcomm",
    role: "Talent Acquisition Specialist",
    headline: "Hiring outcomes leaders recognize",
    body: "Cut time-to-hire >40% for India leadership roles; ~100 hires/year with ~35% diversity inclusion; coached HMs on Workday interview/feedback discipline.",
  },
  {
    company: "AWS · Radisys · Artech",
    role: "Full-cycle recruiting",
    headline: "Domain fluency across tech hiring",
    body: "IoT and enterprise eng at AWS; multi-function and leadership search at Radisys (~70% joining ratio); years of technical recruiting for Qualcomm/Intel markets.",
  },
] as const;

export const suiteComplements = [
  {
    title: "Recruiter Navigator",
    body: "Reporting cadence for TA Ops—less spreadsheet chase, clearer ownership.",
  },
  {
    title: "Vendor walkthroughs",
    body: "Mid-task guides linked from the hub and the assistant—procedure where work happens.",
  },
  {
    title: "Analytics export",
    body: "Funnel snapshots for leadership with sync state still visible—honest data travels.",
  },
] as const;

export const currentlyBuilding =
  "Suite built on my own initiative; rollout in progress. Next: assistant feedback loop, document prep coverage, and adoption metrics with TA Ops—not claims of daily production use yet.";

export function caseStudyEyebrow(index: number, eyebrow: string): string {
  return `${String(index + 1).padStart(2, "0")} · ${eyebrow}`;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
