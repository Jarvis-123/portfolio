import Link from "next/link";
import type { ReactNode } from "react";

type LinkedInButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LinkedInButton({ href, children, className = "" }: LinkedInButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender ${className}`}
    >
      {children}
    </Link>
  );
}
