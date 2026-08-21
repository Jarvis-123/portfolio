import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyDesktopMock } from "@/components/CaseStudyMocks";
import {
  caseStudies,
  caseStudyEyebrow,
  currentlyBuilding,
  suiteComplements,
  trackRecord,
  workIntro,
} from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: workIntro.thesis,
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {workIntro.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy/90">
        {workIntro.thesis}
      </p>

      <ul className="mt-10 grid gap-6 border-y border-border py-8 md:grid-cols-3">
        {workIntro.stakes.map((item) => (
          <li key={item.label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-lavender">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>
          </li>
        ))}
      </ul>

      <section className="mt-14">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-navy">
              Internal TA suite
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-body">
              Built on my own initiative—what I designed, why it matters for TA Ops and HR,
              and how the HRIS stays system of record. Suite is built; rollout is in progress.
              Visuals are illustrative mocks, not production screenshots.
            </p>
          </div>
        </div>

        <ul className="mt-8 space-y-6">
          {caseStudies.map((study, index) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-shadow hover:shadow-sm md:grid-cols-[1.1fr_1fr]"
              >
                <div className="aspect-[16/10] border-b border-border bg-cool-gray md:aspect-auto md:min-h-[220px] md:border-b-0 md:border-r">
                  <CaseStudyDesktopMock slug={study.slug} />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-lavender">
                    {caseStudyEyebrow(index, study.eyebrow)}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-navy group-hover:text-lavender">
                    {study.outcome}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-navy/70">{study.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {study.summary}
                  </p>
                  <span className="mt-4 text-sm font-medium text-lavender">
                    Read case study →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-navy">Also in the suite</h2>
        <p className="mt-1 text-sm text-body">
          Complements that reinforce adoption—not separate products to sell.
        </p>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {suiteComplements.map((item) => (
            <li key={item.title} className="rounded-2xl bg-cool-gray p-5">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold text-navy">
          Operating track record
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-body">
          Why TA leaders can trust the build: years of enablement, systems adoption,
          and hiring outcomes before—and alongside—building internal tools.
        </p>
        <ul className="mt-8 space-y-6">
          {trackRecord.map((item) => (
            <li
              key={item.company}
              className="border-l-2 border-lavender/40 pl-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {item.company} · {item.role}
              </p>
              <h3 className="mt-1 font-semibold text-navy">{item.headline}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/about" className="font-medium text-lavender hover:underline">
            Full experience on About →
          </Link>
        </p>
      </section>

      <p className="mt-12 rounded-2xl border border-dashed border-border px-5 py-4 text-sm text-muted">
        {currentlyBuilding}
      </p>
    </div>
  );
}
