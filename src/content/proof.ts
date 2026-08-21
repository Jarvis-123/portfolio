import { site } from "./site";

const { proofProjects } = site;

export const proof = {
  title: "Proof",
  intro:
    "Case study frames below are illustrative mocks. The public repos are personal projects built to work through these problems, running on fictional Acme Corp data only.",
  projects: [
    {
      ...proofProjects.queryForge,
      description:
        "Intent routing, retrieval, and source-linked answers over a markdown handbook.",
    },
    {
      ...proofProjects.intentRouter,
      description:
        "Domain-agnostic query intent classifier — regex rules, priority stack, zero model calls.",
    },
    {
      ...proofProjects.corpusSearch,
      description:
        "Keyword search with snippet extraction and intent-aware ranking over markdown docs.",
    },
    {
      ...proofProjects.formatdeskLite,
      description:
        "Merge PDFs in the browser — files never leave the device, no server converter.",
    },
    {
      ...proofProjects.laneForge,
      description:
        "Lane-based workflow maps with edit mode, presenter view, and JSON export — local-first.",
    },
  ],
  note: "The internal suite stays internal. These repos are the verifiable public artifacts.",
} as const;
