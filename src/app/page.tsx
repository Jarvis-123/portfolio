import { HubDiagram } from "@/components/HubDiagram";
import { LinkedInButton } from "@/components/LinkedInButton";
import { ProofSection } from "@/components/ProofSection";
import { home } from "@/content/home";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">
      <p className="font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
        {home.name}
      </p>
      <p className="mt-3 text-base font-medium text-body md:text-lg">
        {home.titleLine}
      </p>
      <p className="mt-2 max-w-2xl text-sm text-body">{home.headline}</p>
      <h1 className="mt-8 max-w-2xl text-balance text-xl font-semibold leading-snug tracking-tight text-navy md:text-2xl">
        {home.heroLine}
      </h1>

      <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-navy/90">
        {home.outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ProofSection />

      <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-border">
        <HubDiagram />
      </div>

      <div className="mt-10">
        <LinkedInButton href={home.ctaHref}>{home.ctaLabel}</LinkedInButton>
      </div>

      <p className="mt-10 text-sm text-muted">{home.trustStrip}</p>
    </div>
  );
}
