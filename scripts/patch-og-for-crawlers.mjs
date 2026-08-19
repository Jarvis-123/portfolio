/**
 * Static export: put OG image tags at the very start of <head> so crawlers
 * (LinkedIn, Discord) see them before large font/script preloads.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const siteUrl =
  process.env.SITE_URL?.replace(/\/$/, "") ||
  "https://portfolio-seven-green-y9kadbqbqz.vercel.app";

const ogImageUrl = `${siteUrl}/linkedin-share.jpg`;
const title = "Amit Singh · Talent Acquisition Operations — Partner, RateGain";
const description =
  "Product-minded builder for TA: playbooks, pipeline truth, and AI that cites procedure—not guesswork.";

const inject = `<!-- crawler-og -->
<meta property="og:image" content="${ogImageUrl}"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="627"/>
<meta property="og:image:type" content="image/jpeg"/>
<meta property="og:title" content="${title}"/>
<meta property="og:description" content="${description}"/>
<meta property="og:url" content="${siteUrl}"/>
<meta property="og:type" content="website"/>
<link rel="canonical" href="${siteUrl}"/>
<link rel="image_src" href="${ogImageUrl}"/>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"Amit Singh","url":"${siteUrl}","image":"${ogImageUrl}"}</script>
`;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) patch(path);
  }
}

function patch(file) {
  let html = readFileSync(file, "utf8");
  if (html.includes("crawler-og")) return;

  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>${inject}`);
  } else if (html.includes("<head ")) {
    html = html.replace(/<head[^>]*>/, (m) => `${m}${inject}`);
  } else return;

  writeFileSync(file, html);
}

const outDir = join(import.meta.dirname, "..", "out");
walk(outDir);
console.log(`Patched HTML in ${outDir} (site: ${siteUrl})`);
