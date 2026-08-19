type MockProps = {
  className?: string;
};

const caption = "Illustrative mock · not production UI";

export function PlaybookDesktopMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Persona-aware TA hub home with search and sync status.`}
    >
      <rect width="640" height="400" fill="#F7F7FC" />
      <rect width="72" height="400" fill="#242452" />
      <rect x="16" y="24" width="40" height="8" rx="2" fill="#8012FF" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="16"
          y={64 + i * 36}
          width="40"
          height="8"
          rx="2"
          fill={i === 0 ? "#FFFFFF" : "#6B6B80"}
          opacity={i === 0 ? 1 : 0.5}
        />
      ))}
      <rect x="96" y="24" width="280" height="28" rx="14" fill="#FFFFFF" stroke="#EBEBEF" />
      <text x="112" y="42" fill="#6B6B80" fontSize="11" fontFamily="system-ui,sans-serif">
        ⌘K Search playbooks, SOPs…
      </text>
      <rect x="392" y="24" width="100" height="28" rx="14" fill="#FFFFFF" stroke="#EBEBEF" />
      <text x="408" y="42" fill="#242452" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Sync: live
      </text>
      <rect x="504" y="24" width="112" height="28" rx="14" fill="#8012FF" />
      <text x="528" y="42" fill="#FFFFFF" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Ask TA
      </text>
      {["Recruiter", "TA Ops", "HM", "HR Ops"].map((label, i) => (
        <g key={label}>
          <rect
            x={96 + i * 88}
            y={72}
            width={80}
            height={28}
            rx="14"
            fill={i === 0 ? "#8012FF" : "#FFFFFF"}
            stroke="#EBEBEF"
          />
          <text
            x={136 + i * 88}
            y={90}
            textAnchor="middle"
            fill={i === 0 ? "#FFFFFF" : "#242452"}
            fontSize="11"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      ))}
      {[
        { lines: ["SOP:", "Offer approval"], s: "Procedure of record" },
        { lines: ["Playbook:", "Panel feedback"], s: "Working guide" },
        // Fits one line at this tile width; leave unwrapped
        { lines: ["Pipeline health"], s: "Honest empty states" },
      ].map((card, i) => {
        const x = 112 + i * 172;
        const titleY = 176;
        const lineGap = 16;
        const subtitleY = titleY + card.lines.length * lineGap + 6;
        return (
          <g key={card.lines.join(" ")}>
            <rect
              x={96 + i * 172}
              y={128}
              width={160}
              height={152}
              rx="16"
              fill="#FFFFFF"
              stroke="#EBEBEF"
            />
            <rect x={x} y={148} width={48} height={8} rx="2" fill="#8012FF" opacity="0.35" />
            <text
              x={x}
              y={titleY}
              fill="#242452"
              fontSize="13"
              fontFamily="system-ui,sans-serif"
              fontWeight="600"
            >
              {card.lines.map((line, li) => (
                <tspan key={line} x={x} dy={li === 0 ? 0 : lineGap}>
                  {line}
                </tspan>
              ))}
            </text>
            <text
              x={x}
              y={subtitleY}
              fill="#6B6B80"
              fontSize="11"
              fontFamily="system-ui,sans-serif"
            >
              {card.s}
            </text>
            <rect x={x} y={subtitleY + 16} width={100} height="8" rx="2" fill="#EBEBEF" />
            <rect x={x} y={subtitleY + 32} width={72} height="8" rx="2" fill="#EBEBEF" />
          </g>
        );
      })}
      <text x="96" y="380" fill="#6B7280" fontSize="10" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}

export function PlaybookMobileMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 220 390"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Mobile hub with persona and procedure cards.`}
    >
      <rect width="220" height="390" rx="24" fill="#FFFFFF" stroke="#EBEBEF" />
      <rect x="16" y="24" width="120" height="10" rx="2" fill="#242452" />
      <rect x="16" y="44" width="80" height="6" rx="2" fill="#6B6B80" opacity="0.5" />
      <rect x="16" y="68" width="188" height="32" rx="16" fill="#F7F7FC" stroke="#EBEBEF" />
      <text x="28" y="88" fill="#6B6B80" fontSize="10" fontFamily="system-ui,sans-serif">
        Search procedures
      </text>
      {["Recruiter", "TA Ops"].map((label, i) => (
        <g key={label}>
          <rect
            x={16 + i * 96}
            y={116}
            width={88}
            height={26}
            rx="13"
            fill={i === 0 ? "#8012FF" : "#F7F7FC"}
          />
          <text
            x={60 + i * 96}
            y={133}
            textAnchor="middle"
            fill={i === 0 ? "#FFFFFF" : "#242452"}
            fontSize="10"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="16"
          y={160 + i * 64}
          width="188"
          height="52"
          rx="12"
          fill="#F7F7FC"
          stroke="#EBEBEF"
        />
      ))}
      <text x="110" y="370" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}

export function AskTaDesktopMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Ask TA panel with citations and scope.`}
    >
      <rect width="640" height="400" fill="#F7F7FC" />
      <rect x="40" y="28" width="360" height="344" rx="16" fill="#FFFFFF" stroke="#EBEBEF" />
      <text x="60" y="56" fill="#242452" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Ask TA
      </text>
      <text x="60" y="76" fill="#6B6B80" fontSize="11" fontFamily="system-ui,sans-serif">
        Search-backed answers · cites procedure
      </text>
      <rect x="60" y="96" width="320" height="48" rx="12" fill="#F7F7FC" />
      <text x="72" y="118" fill="#242452" fontSize="11" fontFamily="system-ui,sans-serif">
        Who is the POC for Deel EOR?
      </text>
      <rect x="60" y="160" width="320" height="88" rx="12" fill="#FFFFFF" stroke="#EBEBEF" />
      <text x="72" y="184" fill="#242452" fontSize="11" fontFamily="system-ui,sans-serif">
        Based on hub search: see Points of Contact →
      </text>
      <text x="72" y="204" fill="#6B6B80" fontSize="11" fontFamily="system-ui,sans-serif">
        Deel — EOR playbook · linked procedure
      </text>
      <rect x="72" y="220" width="140" height="16" rx="8" fill="#8012FF" opacity="0.15" />
      <text x="84" y="232" fill="#8012FF" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
        Why this link
      </text>
      <rect x="60" y="264" width="320" height="40" rx="10" fill="#FFF8E6" stroke="#FCCE0D" />
      <text x="72" y="288" fill="#242452" fontSize="11" fontFamily="system-ui,sans-serif">
        Weak match — escalate to POC if unsure
      </text>
      <rect x="60" y="320" width="220" height="28" rx="14" fill="#F7F7FC" stroke="#EBEBEF" />
      <text x="76" y="338" fill="#6B6B80" fontSize="10" fontFamily="system-ui,sans-serif">
        Ask a follow-up…
      </text>
      <rect x="420" y="28" width="180" height="200" rx="16" fill="#242452" />
      <text x="440" y="56" fill="#FFFFFF" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Can / cannot
      </text>
      <text x="440" y="88" fill="#C4B5FD" fontSize="11" fontFamily="system-ui,sans-serif">
        ✓ Cite hub SOPs
      </text>
      <text x="440" y="112" fill="#C4B5FD" fontSize="11" fontFamily="system-ui,sans-serif">
        ✓ Escalate to humans
      </text>
      <text x="440" y="136" fill="#A5A5B8" fontSize="11" fontFamily="system-ui,sans-serif">
        ✗ Candidate decisions
      </text>
      <text x="440" y="160" fill="#A5A5B8" fontSize="11" fontFamily="system-ui,sans-serif">
        ✗ PII in chat
      </text>
      <text x="40" y="392" fill="#6B7280" fontSize="10" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}

export function AskTaMobileMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 220 390"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Floating Ask TA assistant.`}
    >
      <rect width="220" height="390" rx="24" fill="#F7F7FC" />
      <rect x="20" y="40" width="180" height="280" rx="16" fill="#FFFFFF" stroke="#EBEBEF" />
      <rect x="20" y="40" width="180" height="40" rx="16" fill="#242452" />
      <text x="36" y="65" fill="#FFFFFF" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Ask TA
      </text>
      <rect x="36" y="100" width="148" height="36" rx="10" fill="#F7F7FC" />
      <rect x="36" y="152" width="148" height="72" rx="10" fill="#FFFFFF" stroke="#EBEBEF" />
      <rect x="36" y="240" width="100" height="20" rx="10" fill="#8012FF" opacity="0.15" />
      <rect x="36" y="280" width="148" height="24" rx="12" fill="#F7F7FC" stroke="#EBEBEF" />
      <text x="110" y="370" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}

export function FormatDeskDesktopMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Format Desk browser PDF tools.`}
    >
      <rect width="640" height="400" fill="#F7F7FC" />
      <text x="40" y="48" fill="#242452" fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
        Format Desk
      </text>
      <text x="40" y="72" fill="#6B6B80" fontSize="12" fontFamily="system-ui,sans-serif">
        Document prep without public converters
      </text>
      {[
        { t: "Merge PDF", s: "In-browser" },
        { t: "Split & trim", s: "In-browser" },
        { t: "Images → PDF", s: "In-browser" },
        { t: "Office → PDF", s: "IT optional" },
      ].map((card, i) => {
        const x = 40 + (i % 2) * 300;
        const y = 100 + Math.floor(i / 2) * 120;
        return (
          <g key={card.t}>
            <rect x={x} y={y} width="280" height="100" rx="16" fill="#FFFFFF" stroke="#EBEBEF" />
            <rect x={x + 20} y={y + 24} width="36" height="36" rx="10" fill="#8012FF" opacity="0.12" />
            <text x={x + 72} y={y + 40} fill="#242452" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="600">
              {card.t}
            </text>
            <text x={x + 72} y={y + 62} fill="#6B6B80" fontSize="11" fontFamily="system-ui,sans-serif">
              {card.s}
            </text>
          </g>
        );
      })}
      <text x="40" y="380" fill="#6B7280" fontSize="10" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}

export function FormatDeskMobileMock({ className = "" }: MockProps) {
  return (
    <svg
      viewBox="0 0 220 390"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`${caption}. Format Desk mobile tool list.`}
    >
      <rect width="220" height="390" rx="24" fill="#FFFFFF" stroke="#EBEBEF" />
      <text x="20" y="40" fill="#242452" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Format Desk
      </text>
      {["Merge", "Split", "Images", "Office"].map((t, i) => (
        <rect
          key={t}
          x="16"
          y={64 + i * 68}
          width="188"
          height="56"
          rx="14"
          fill="#F7F7FC"
          stroke="#EBEBEF"
        />
      ))}
      <text x="110" y="370" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="system-ui,sans-serif">
        {caption}
      </text>
    </svg>
  );
}
