# Amit Singh — Portfolio

[![CI](https://github.com/Jarvis-123/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Jarvis-123/portfolio/actions/workflows/ci.yml)

Case-study site covering internal TA operations products and enablement work, plus links to the public projects below.

**Live:** https://portfolio-seven-green-y9kadbqbqz.vercel.app

## Public projects

| Project | Live | Source | What it is |
|---|---|---|---|
| QueryForge | [demo](https://queryforge-nu.vercel.app) | [repo](https://github.com/Jarvis-123/queryforge) | Citation-first document Q&A — every answer links its source |
| CorpusSearch | [demo](https://corpus-search.vercel.app) | [repo](https://github.com/Jarvis-123/corpus-search) | Markdown corpus search with snippets, no LLM |
| FormatDesk Lite | [demo](https://formatdesk-lite.vercel.app) | [repo](https://github.com/Jarvis-123/formatdesk-lite) | Client-side PDF merge, nothing uploaded |
| LaneForge | [demo](https://lane-forge.vercel.app) | [repo](https://github.com/Jarvis-123/lane-forge) | Swimlane process builder, local-first with JSON export |
| PulseDesk | [demo](https://pulse-desk-five.vercel.app) | [repo](https://github.com/Jarvis-123/pulse-desk) | Multi-profile health planner — Netflix-style switcher, learned suggestions |
| IntentRouter | [npm](https://www.npmjs.com/package/query-intent-router) | [repo](https://github.com/Jarvis-123/intent-router) | Zero-dependency query intent classification library, published as `query-intent-router` |

All demos run on fictional Acme Corp data.

## LinkedIn Featured (copy-paste)

Add these under **Add profile section → Featured → Links**:

| Title | URL | Description |
|---|---|---|
| Portfolio — TA ops & internal products | https://portfolio-seven-green-y9kadbqbqz.vercel.app | Case studies plus verifiable public builds |
| QueryForge — citation-first doc Q&A | https://queryforge-nu.vercel.app | Intent routing, retrieval, source-linked answers |
| LaneForge — swimlane process builder | https://lane-forge.vercel.app | Local-first process mapping with JSON export |
| PulseDesk — multi-profile health planner | https://pulse-desk-five.vercel.app | Netflix-style profiles, meals, workouts, local-first |
| CorpusSearch — markdown search demo | https://corpus-search.vercel.app | Keyword search and snippets, no LLM |
| FormatDesk Lite — merge PDFs in browser | https://formatdesk-lite.vercel.app | Client-side PDF merge, no server upload |

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static export lands in `out/`, ready for Vercel.

## Test

```bash
npm test
```

Checks the content modules rather than the components: every project card has a working repo link and somewhere to go beyond it, case study slugs stay unique and URL-safe, each study has a body from either its narrative or the fallback fields, and no link is relative or http. It also fails if a genericised internal product name reappears anywhere in the published copy.

## Licence

The **source code** is MIT — see [LICENSE](./LICENSE).

The **site content** is not. Case studies, principles, biography and other prose, along with images and brand assets, are all rights reserved.
