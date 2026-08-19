import { proof } from "@/content/proof";

export function ProofSection() {
  return (
    <section className="mt-12 rounded-2xl border border-border bg-cool-gray p-5 md:p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{proof.title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">{proof.intro}</p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {proof.projects.map((project) => (
          <li
            key={project.name}
            className="rounded-xl bg-white p-4 ring-1 ring-border transition-shadow hover:ring-lavender/40"
          >
            <p className="text-sm font-semibold text-navy">{project.name}</p>
            <p className="mt-0.5 text-xs text-muted">{project.tagline}</p>
            <p className="mt-2 text-xs leading-relaxed text-body">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-navy underline-offset-4 hover:text-lavender hover:underline"
              >
                GitHub →
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-navy underline-offset-4 hover:text-lavender hover:underline"
                >
                  Live demo →
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">{proof.note}</p>
    </section>
  );
}
