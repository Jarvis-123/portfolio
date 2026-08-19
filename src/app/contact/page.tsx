import type { Metadata } from "next";
import { LinkedInButton } from "@/components/LinkedInButton";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const architectureMailto = `mailto:${site.email}?subject=${encodeURIComponent(
    contact.architectureMailtoSubject,
  )}`;

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {contact.title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
        {contact.intent}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <LinkedInButton href={contact.ctaHref}>{contact.ctaLabel}</LinkedInButton>
      </div>
      <ul className="mt-6 space-y-2">
        {contact.proofLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy underline-offset-4 hover:text-lavender hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
        {contact.emails.map((item) => (
          <li key={item.address}>
            <a
              href={`mailto:${item.address}`}
              className="text-sm font-medium text-navy underline-offset-4 hover:text-lavender hover:underline"
            >
              {item.address}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        <a
          href={architectureMailto}
          className="font-medium text-navy underline-offset-4 hover:text-lavender hover:underline"
        >
          {contact.architectureOnePagerLabel}
        </a>
      </p>
    </div>
  );
}
