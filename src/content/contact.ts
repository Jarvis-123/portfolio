import { site } from "./site";

export const contact = {
  title: "Contact",
  intent:
    "Open to conversations on citation-first RAG, internal ops tooling, and build-vs-buy — especially with people building in the TA / people-systems space.",
  proofLinks: [
    { label: "QueryForge demo", href: site.proofProjects.queryForge.demo! },
    { label: "QueryForge on GitHub", href: site.proofProjects.queryForge.github },
    { label: "IntentRouter on GitHub", href: site.proofProjects.intentRouter.github },
    { label: "CorpusSearch demo", href: site.proofProjects.corpusSearch.demo! },
    { label: "CorpusSearch on GitHub", href: site.proofProjects.corpusSearch.github },
    { label: "FormatDesk Lite demo", href: site.proofProjects.formatdeskLite.demo! },
    { label: "FormatDesk Lite on GitHub", href: site.proofProjects.formatdeskLite.github },
  ],
  ctaLabel: site.linkedInLabel,
  ctaHref: site.linkedIn,
  emails: [{ address: site.email }],
  architectureOnePagerLabel: "Architecture one-pager available on request",
  architectureMailtoSubject: "Playbook Hub architecture one-pager",
} as const;
