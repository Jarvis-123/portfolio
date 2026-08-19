import type { Metadata } from "next";
import { principles } from "@/content/principles";

export const metadata: Metadata = {
  title: "Principles",
};

export default function PrinciplesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
        {principles.title}
      </h1>
      <p className="mt-4 text-base text-body">{principles.intro}</p>
      <ol className="mt-10 space-y-8">
        {principles.items.map((item, index) => (
          <li key={item.title} className="flex gap-4">
            <span className="mt-0.5 text-sm font-semibold tabular-nums text-lavender">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-body">{item.body}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-medium">In practice:</span> {item.practice}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
