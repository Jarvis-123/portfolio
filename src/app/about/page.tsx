import type { Metadata } from "next";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {about.title}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {site.location} · {site.pronouns}
      </p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-navy/90 md:text-lg">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-lg font-semibold text-navy">Experience</h2>
        <ol className="mt-6 space-y-8">
          {about.experience.map((job) => (
            <li key={`${job.company}-${job.role}-${job.dates}`} className="border-l border-border pl-5">
              <p className="text-sm font-semibold text-lavender">{job.company}</p>
              <h3 className="mt-1 font-semibold text-navy">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">
                {job.dates}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-navy/90">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold text-navy">Education</h2>
        <p className="mt-3 font-medium text-navy">{about.education.school}</p>
        <p className="text-sm text-muted">
          {about.education.degree} · {about.education.dates}
        </p>
      </section>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-navy">Skills</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-cool-gray px-3 py-1 text-xs font-medium text-navy"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-navy">Certifications</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-navy/90">
            {about.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
