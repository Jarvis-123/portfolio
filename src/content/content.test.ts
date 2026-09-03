import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { about } from "./about";
import { caseStudies, currentlyBuilding, suiteComplements, trackRecord, workIntro } from "./case-studies";
import { contact } from "./contact";
import { home } from "./home";
import { principles } from "./principles";
import { proof } from "./proof";
import { nav, site } from "./site";

/**
 * Internal product names that were deliberately genericised. They are display
 * forms only — the lowercase slugs are a separate, intentional choice.
 */
const INTERNAL_PRODUCT_NAMES = ["Playbook Hub", "Ask TA", "Format Desk", "FormatDesk Hub"];

const PLACEHOLDERS = ["TODO", "FIXME", "Lorem ipsum", "XXX", "PLACEHOLDER"];

/** Every string reachable from the content modules, with a path for error messages. */
function collectStrings(value: unknown, path = ""): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => collectStrings(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => collectStrings(v, path ? `${path}.${k}` : k));
  }
  return [];
}

const ALL_CONTENT: Array<[string, string]> = [
  ...collectStrings(site, "site"),
  ...collectStrings(nav, "nav"),
  ...collectStrings(home, "home"),
  ...collectStrings(about, "about"),
  ...collectStrings(principles, "principles"),
  ...collectStrings(proof, "proof"),
  ...collectStrings(contact, "contact"),
  ...collectStrings(caseStudies, "caseStudies"),
  ...collectStrings(workIntro, "workIntro"),
  ...collectStrings(trackRecord, "trackRecord"),
  ...collectStrings(suiteComplements, "suiteComplements"),
  ...collectStrings({ currentlyBuilding }, "currentlyBuilding"),
];

describe("published content", () => {
  it("reaches a substantial amount of copy", () => {
    // Guards against the traversal above silently returning nothing.
    assert.ok(ALL_CONTENT.length > 100, `only found ${ALL_CONTENT.length} strings`);
  });

  it("keeps genericised internal product names out of the copy", () => {
    for (const [path, text] of ALL_CONTENT) {
      for (const name of INTERNAL_PRODUCT_NAMES) {
        assert.ok(!text.includes(name), `${path} reintroduces "${name}"`);
      }
    }
  });

  it("carries no placeholder text", () => {
    for (const [path, text] of ALL_CONTENT) {
      for (const placeholder of PLACEHOLDERS) {
        assert.ok(!text.includes(placeholder), `${path} still contains "${placeholder}"`);
      }
    }
  });

  it("has no untrimmed strings", () => {
    for (const [path, text] of ALL_CONTENT) {
      assert.equal(text, text.trim(), `${path} has stray whitespace`);
    }
  });

  it("has no empty strings outside the unused case study fallbacks", () => {
    // A study with a narrative leaves `problem` blank; CaseStudyView renders
    // the narrative instead and never reads it.
    const allowedEmpty = /^caseStudies\[\d+\]\.problem$/;
    for (const [path, text] of ALL_CONTENT) {
      if (text.length === 0 && allowedEmpty.test(path)) continue;
      assert.ok(text.length > 0, `${path} is empty`);
    }
  });

  it("points every link at an absolute https URL", () => {
    for (const [path, text] of ALL_CONTENT) {
      if (!/^(https?:|\/\/)/.test(text)) continue;
      assert.ok(text.startsWith("https://"), `${path} is not https: ${text}`);
      assert.doesNotThrow(() => new URL(text), `${path} is not a valid URL: ${text}`);
      assert.ok(!text.includes("localhost"), `${path} points at localhost`);
    }
  });
});

describe("site identity", () => {
  it("uses an absolute site URL with no trailing slash", () => {
    // og:image paths are resolved against this, so a trailing slash doubles up.
    assert.ok(site.siteUrl.startsWith("https://"), "siteUrl must be absolute");
    assert.ok(!site.siteUrl.endsWith("/"), "siteUrl must not end in a slash");
  });

  it("has a valid email and LinkedIn profile", () => {
    assert.match(site.email, /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
    assert.ok(site.linkedIn.startsWith("https://www.linkedin.com/in/"), site.linkedIn);
  });

  it("gives every nav item a label and an in-page or absolute target", () => {
    assert.ok(nav.length > 0, "nav is empty");
    const labels = nav.map((item) => item.label);
    assert.equal(new Set(labels).size, labels.length, "duplicate nav labels");

    for (const item of nav) {
      assert.ok(item.label.length > 0, "nav item with no label");
      assert.ok(
        item.href.startsWith("/") || item.href.startsWith("#") || item.href.startsWith("https://"),
        `nav "${item.label}" has an odd href: ${item.href}`,
      );
    }
  });
});

describe("proof section", () => {
  it("lists every project once", () => {
    assert.ok(proof.projects.length > 0, "no proof projects");
    const names = proof.projects.map((p) => p.name);
    assert.equal(new Set(names).size, names.length, "a project is listed twice");
  });

  it("gives every project a name, tagline, description and GitHub repo", () => {
    for (const project of proof.projects) {
      assert.ok(project.name.length > 0, "project with no name");
      assert.ok(project.tagline.length > 0, `${project.name} has no tagline`);
      assert.ok(project.description.length > 0, `${project.name} has no description`);
      assert.match(
        project.github,
        /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/,
        `${project.name} has a malformed repo URL: ${project.github}`,
      );
    }
  });

  it("gives every project somewhere to go beyond the repo", () => {
    // A card with only a repo link is a dead end for a non-technical reader.
    for (const project of proof.projects) {
      const npm = "npm" in project ? project.npm : null;
      assert.ok(project.demo || npm, `${project.name} has neither a demo nor an npm link`);
    }
  });

  it("points demo and npm links at the right hosts", () => {
    for (const project of proof.projects) {
      if (project.demo) {
        assert.doesNotThrow(() => new URL(project.demo!), `${project.name} demo is not a URL`);
        assert.ok(project.demo.startsWith("https://"), `${project.name} demo is not https`);
      }
      const npm = "npm" in project ? project.npm : null;
      if (npm) {
        assert.ok(
          npm.startsWith("https://www.npmjs.com/package/"),
          `${project.name} npm link is not a package page: ${npm}`,
        );
      }
    }
  });
});

describe("case studies", () => {
  it("gives every study a unique, URL-safe slug", () => {
    assert.ok(caseStudies.length > 0, "no case studies");
    const slugs = caseStudies.map((c) => c.slug);
    assert.equal(new Set(slugs).size, slugs.length, "duplicate slugs");

    for (const slug of slugs) {
      assert.match(slug, /^[a-z0-9-]+$/, `slug "${slug}" is not URL-safe`);
    }
  });

  it("fills in the header fields every study renders", () => {
    for (const study of caseStudies) {
      assert.ok(study.title.length > 0, `${study.slug} has no title`);
      assert.ok(study.eyebrow.length > 0, `${study.slug} has no eyebrow`);
      assert.ok(study.outcome.length > 0, `${study.slug} has no outcome`);
      assert.ok(study.summary.length > 0, `${study.slug} has no summary`);
      assert.ok(study.desktopFrameLabel.length > 0, `${study.slug} has no desktop frame label`);
      assert.ok(study.mobileFrameLabel.length > 0, `${study.slug} has no mobile frame label`);
    }
  });

  it("gives every study a body, from either a narrative or the fallback fields", () => {
    // CaseStudyView renders the narrative when it exists and the
    // problem/did/evidence trio otherwise, so a study needs one or the other.
    for (const study of caseStudies) {
      if (study.narrative?.length) continue;
      assert.ok(study.problem.length > 0, `${study.slug} has no narrative and no problem`);
      assert.ok(study.whatIDid.length > 0, `${study.slug} has no narrative and lists nothing done`);
      assert.ok(study.evidence.length > 0, `${study.slug} has no narrative and offers no evidence`);
    }
  });

  it("keeps narrative sections populated when present", () => {
    for (const study of caseStudies.filter((c) => c.narrative)) {
      assert.ok(study.narrative!.length > 0, `${study.slug} has an empty narrative`);
      for (const section of study.narrative!) {
        assert.ok(section.title.length > 0, `${study.slug} has an untitled section`);
        assert.ok(section.blocks.length > 0, `${study.slug}/"${section.title}" has no blocks`);
        for (const block of section.blocks) {
          assert.ok(block.text.length > 0, `${study.slug}/"${section.title}" has an empty block`);
          if (block.type === "labeled") {
            assert.ok(block.label.length > 0, `${study.slug}/"${section.title}" has an unlabelled block`);
          }
        }
      }
    }
  });
});
