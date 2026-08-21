import Link from "next/link";
import type { ReactNode } from "react";
import {
  caseStudies,
  caseStudyEyebrow,
  type CaseStudy,
  type NarrativeBlock,
} from "@/content/case-studies";
import {
  CaseStudyDesktopMock,
  CaseStudyMobileMock,
} from "@/components/CaseStudyMocks";
import { SurfaceCard } from "@/components/SurfaceCard";

type CaseStudyViewProps = {
  study: CaseStudy;
};

export function CaseStudyView({ study }: CaseStudyViewProps) {
  const listIndex = caseStudies.findIndex((c) => c.slug === study.slug);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-lavender">
        {caseStudyEyebrow(listIndex >= 0 ? listIndex : 0, study.eyebrow)}
      </p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {study.outcome}
      </h1>
      <p className="mt-2 text-base font-medium text-navy/70">{study.title}</p>
      {!study.narrative?.length ? (
        <p className="mt-4 text-lg leading-relaxed text-body">{study.summary}</p>
      ) : null}

      <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-start">
        <SurfaceCard label={study.desktopFrameLabel}>
          <CaseStudyDesktopMock slug={study.slug} />
        </SurfaceCard>
        <SurfaceCard label={study.mobileFrameLabel} variant="mobile">
          <CaseStudyMobileMock slug={study.slug} />
        </SurfaceCard>
      </div>
      <p className="mt-2 text-xs text-faint">
        Illustrative mocks — not live screenshots. Internal URLs and data redacted by design.
      </p>

      {study.narrative?.length ? (
        study.narrative.map((section) => (
          <Section key={section.title} title={section.title}>
            {section.blocks.map((block, i) => (
              <NarrativeBlockView key={`${section.title}-${i}`} block={block} />
            ))}
          </Section>
        ))
      ) : (
        <>
          <Section title="Problem">
            <p>{study.problem}</p>
          </Section>

          <Section title="What I did">
            <ul className="list-disc space-y-2 pl-5">
              {study.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Evidence">
            <ul className="list-disc space-y-2 pl-5">
              {study.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {study.quote ? (
            <blockquote className="mt-10 border-l-2 border-lavender pl-5 text-lg italic text-navy">
              “{study.quote}”
            </blockquote>
          ) : null}

          <Section title="What I’d do next">
            <ul className="list-disc space-y-2 pl-5">
              {study.next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        </>
      )}

      <p className="mt-12">
        <Link href="/work" className="text-sm font-medium text-lavender hover:underline">
          ← All work
        </Link>
      </p>
    </article>
  );
}

function NarrativeBlockView({ block }: { block: NarrativeBlock }) {
  if (block.type === "labeled") {
    return (
      <p>
        <span className="font-semibold text-navy">{block.label}</span> {block.text}
      </p>
    );
  }
  return <p>{block.text}</p>;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-navy/90">
        {children}
      </div>
    </section>
  );
}
