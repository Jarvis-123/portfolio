export const principles = {
  title: "Principles",
  intro:
    "How I ship internal TA products—the same discipline behind the hub.",
  items: [
    {
      title: "Honest data",
      body: "Show sync state and empty states clearly. Never imply live KPIs when the pipe isn’t connected.",
      practice:
        "when sync isn't connected, the funnel tile reads \"No live data — last synced 3 days ago,\" never a zero that could pass for a real KPI.",
    },
    {
      title: "The HRIS holds records; the hub holds how",
      body: "Link out for REQ and candidate truth. The hub owns procedure, templates, and ops clarity—not a second ATS.",
      practice:
        "a recruiter clicks a candidate in the hub and lands on the record in the system of record — the hub never stores its own copy of REQ or candidate data.",
    },
    {
      title: "Keyboard-first ops",
      body: "⌘K search, skip link, visible focus. Recruiters move fast; the UI should keep up without a mouse hunt.",
      practice:
        "⌘K opens search from any page, Tab reaches every control, and focus is always visible — a recruiter can run the hub without touching the mouse.",
    },
    {
      title: "Procedure of record vs working guide",
      body: "SOPs are versioned and formal. Playbooks are practical checklists that point back to SOPs.",
      practice:
        "the offer-approval SOP is versioned and dated; the panel-feedback playbook is a checklist that links back to it, so the formal source and the working guide never drift apart.",
    },
    {
      title: "AI cites procedure—or escalates",
      body: "Search-backed answers with links to hub pages. Weak matches say so. Humans own sensitive calls—not the bot.",
      practice:
        "ask who owns a process and the assistant answers with a linked hub page; on a weak match it says so and routes you to a human instead of guessing.",
    },
  ],
} as const;
