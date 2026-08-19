import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4 sm:gap-6 md:px-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-navy hover:text-lavender"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-nowrap items-center justify-end gap-x-2.5 sm:gap-x-5"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs text-muted transition-colors hover:text-navy sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
