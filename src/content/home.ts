import { site } from "./site";

export const home = {
  name: site.name,
  titleLine: `${site.title}, ${site.company}`,
  headline: site.headline,
  heroLine: site.heroLine,
  outcomes: [
    "Recruiters find the right process in under a minute",
    "Leaders see honest funnel health—sync state visible, never fake KPIs",
    "Ask TA cites hub procedure and escalates to humans—not candidate decisions",
  ],
  ctaLabel: site.linkedInLabel,
  ctaHref: site.linkedIn,
  trustStrip: site.trustStrip,
} as const;
