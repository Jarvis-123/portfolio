import { site } from "./site";

const { proofProjects } = site;

export const proof = {
  title: "Proof",
  intro:
    "Case study frames below are illustrative mocks. The public repos are personal projects built to work through these problems, running on fictional Acme Corp data only.",
  rigor:
    "Every repo runs its tests and a build on each push — 150 tests in total. IntentRouter is published on npm and QueryForge and CorpusSearch both install it from the registry.",
  projects: [
    {
      ...proofProjects.queryForge,
      description:
        "Intent routing, retrieval, and source-linked answers over a markdown handbook.",
    },
    {
      ...proofProjects.intentRouter,
      description:
        "Domain-agnostic query intent classifier — regex rules, priority stack, zero model calls. Published on npm as query-intent-router and used in production by QueryForge.",
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
    {
      ...proofProjects.pulseDesk,
      description:
        "Pick lose weight, build muscle, or general fitness — daily calories, meal outlines, and a workout schedule. Phone-friendly, no band.",
    },
  ],
  note: "The internal suite stays internal. These repos are the verifiable public artifacts.",
} as const;
