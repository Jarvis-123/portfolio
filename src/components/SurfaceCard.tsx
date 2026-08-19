import type { ReactNode } from "react";

type SurfaceCardProps = {
  children?: ReactNode;
  label: string;
  variant?: "desktop" | "mobile";
  className?: string;
};

export function SurfaceCard({
  children,
  label,
  variant = "desktop",
  className = "",
}: SurfaceCardProps) {
  const frame =
    variant === "mobile"
      ? "mx-auto aspect-[9/16] max-w-[200px]"
      : "aspect-[16/10] w-full";

  return (
    <figure className={className}>
      <div
        className={`${frame} overflow-hidden rounded-2xl bg-cool-gray ring-1 ring-border`}
      >
        {children ?? (
          <div className="flex h-full flex-col justify-between p-4 md:p-6">
            <div className="space-y-2">
              <div className="h-2.5 w-1/3 rounded bg-border" />
              <div className="h-2 w-2/3 rounded bg-border/80" />
              <div className="mt-4 grid gap-2">
                <div className="h-16 rounded-xl bg-white ring-1 ring-border" />
                <div className="h-16 rounded-xl bg-white ring-1 ring-border" />
              </div>
            </div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-faint">
              Placeholder · redacted UI
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-muted">{label}</figcaption>
    </figure>
  );
}
