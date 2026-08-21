const personas = ["Recruiter", "TA Ops", "Hiring Manager"] as const;

function DownArrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path
          d="M8 2v12M3 10l5 6 5-6"
          stroke="#8012FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HubDiagramMobile() {
  return (
    <div
      className="flex flex-col gap-1 bg-cool-gray p-4"
      role="img"
      aria-label="The HRIS feeds the TA hub, which serves Recruiter, TA Ops, and Hiring Manager"
    >
      <div className="rounded-xl bg-white px-4 py-3 text-center ring-1 ring-border">
        <p className="text-sm font-semibold text-navy">HRIS</p>
        <p className="mt-0.5 text-xs text-body">Holds records</p>
      </div>

      <DownArrow />

      <div className="rounded-xl bg-navy px-4 py-4 text-center">
        <p className="text-sm font-semibold text-white">TA hub</p>
        <p className="mt-1 text-xs text-lavender/80">Holds how we hire</p>
        <p className="mt-1 text-[11px] text-white/60">SOPs · pipeline · assistant</p>
      </div>

      <DownArrow />

      <ul className="flex flex-col gap-2">
        {personas.map((label) => (
          <li
            key={label}
            className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-navy ring-1 ring-border"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HubDiagramDesktop() {
  return (
    <svg
      viewBox="0 0 720 220"
      role="img"
      aria-label="The HRIS feeds the TA hub, which serves Recruiter, TA Ops, and Hiring Manager"
      className="hidden h-auto w-full max-w-full md:block"
    >
      <rect width="720" height="220" fill="#F7F7FC" rx="16" />

      <rect x="24" y="70" width="140" height="80" rx="12" fill="#fff" stroke="#EBEBEF" />
      <text
        x="94"
        y="108"
        textAnchor="middle"
        fill="#242452"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        HRIS
      </text>
      <text
        x="94"
        y="128"
        textAnchor="middle"
        fill="#6B6B80"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        Holds records
      </text>

      <path
        d="M172 110 H220"
        stroke="#8012FF"
        strokeWidth="2"
        markerEnd="url(#hub-arrow)"
      />

      <rect x="228" y="55" width="200" height="110" rx="12" fill="#242452" />
      <text
        x="328"
        y="100"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        TA hub
      </text>
      <text
        x="328"
        y="122"
        textAnchor="middle"
        fill="#C4B5FD"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        Holds how we hire
      </text>
      <text
        x="328"
        y="140"
        textAnchor="middle"
        fill="#A5A5B8"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
      >
        SOPs · pipeline · assistant
      </text>

      <path d="M436 90 H480" stroke="#8012FF" strokeWidth="2" markerEnd="url(#hub-arrow)" />
      <path d="M436 110 H480" stroke="#8012FF" strokeWidth="2" markerEnd="url(#hub-arrow)" />
      <path d="M436 130 H480" stroke="#8012FF" strokeWidth="2" markerEnd="url(#hub-arrow)" />

      <rect x="488" y="28" width="208" height="48" rx="10" fill="#fff" stroke="#EBEBEF" />
      <text
        x="592"
        y="57"
        textAnchor="middle"
        fill="#242452"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Recruiter
      </text>

      <rect x="488" y="86" width="208" height="48" rx="10" fill="#fff" stroke="#EBEBEF" />
      <text
        x="592"
        y="115"
        textAnchor="middle"
        fill="#242452"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        TA Ops
      </text>

      <rect x="488" y="144" width="208" height="48" rx="10" fill="#fff" stroke="#EBEBEF" />
      <text
        x="592"
        y="173"
        textAnchor="middle"
        fill="#242452"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
      >
        Hiring Manager
      </text>

      <defs>
        <marker
          id="hub-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#8012FF" />
        </marker>
      </defs>
    </svg>
  );
}

export function HubDiagram() {
  return (
    <>
      <div className="md:hidden">
        <HubDiagramMobile />
      </div>
      <HubDiagramDesktop />
    </>
  );
}
