import Link from "next/link";
import { site } from "@/content/site";

const REPO_URL = "https://github.com/Jarvis-123/portfolio";

const LINK_CLASS =
  "rounded text-navy underline-offset-4 hover:text-lavender hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-cool-gray">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {site.name} · {site.title}, {site.company}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <Link
            href={site.linkedIn}
            className={LINK_CLASS}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href={REPO_URL}
            className={LINK_CLASS}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source on GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
