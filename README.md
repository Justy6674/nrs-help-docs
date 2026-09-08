# Not Real Smart help

This Docusaurus repository is the canonical public help centre at https://help.notrealsmart.com.au. The NRS website and console link here; their help search reads the generated `/content-index.json`. The help centre has its own build and release. Updating the main NRS application does not publish these guides.

## Sources and ownership

- `docs/` contains authored workflow, report, healthcare and agency guides. Bec and Justin are the documentation owners. A source review is not a statement that they personally approved a release.
- `data/services.json` is the approved 108-service catalogue snapshot exported from `NotRealSmartAgency-V2/src/lib/nrs/offers/catalogue.ts`. Names, amounts, charging models and sections come from that source.
- `scripts/generate-service-docs.mjs` generates the 108 service references, 12 area guides and service overview. Edit the generator or approved snapshot, then regenerate; direct edits to generated service pages fail the comparison check.
- `src/theme/`, `src/components/HelpStart/` and `src/css/custom.css` provide the reading layout and shared NRS navigation. Keep the stock Docusaurus mobile focus/menu behaviour when changing wrappers.
- `plugins/content-index.cjs` exports published current document metadata after the build. It excludes draft/unlisted guides and exposes no article source code or private data.

## Local work and validation

Use Node 24 and the committed npm lockfile:

```sh
npm ci
npm run start
npm run build
npm run serve -- --port 3008 --no-open
```

`npm run build` runs the catalogue comparison, content checks, eight regression tests and TypeScript before building all routes. Broken internal links and anchors fail the build. The output is `build/`, including the search index, sitemap, `llms.txt`, `llms-full.txt` and `content-index.json`.

Docusaurus packages are pinned together at 3.10.1. This patch fixes the [3.10.0 webpackbar build incompatibility](https://docusaurus.io/changelog/3.10.1). Review newer patch releases through the same build and browser checks.

## Keep the guides current

Every public article needs `title`, `description`, `last_verified`, `review_owner`, `review_status`, `availability`, `feature_ids`, `source_urls` and `source_files`. The availability values are `service`, `limited`, `planned` and `reference`. Describe the concrete access, release and evidence limits in the article itself.

Review guides whenever their linked product behaviour or source changes. The checker rejects future dates, incomplete metadata, duplicate identities and stale reviews: 90 days generally, 30 days for regulatory-source guides. Passing those checks establishes editorial completeness; it cannot establish legal compliance or prove a live client workflow. Do not advance a review date without checking the sources and article.

The GitHub workflow runs on main, pull requests, manual dispatch and weekly. A weekly failure is a request for source review, not permission to rewrite regulatory claims automatically.

When the approved catalogue changes, run `scripts/export-help-catalogue.ts` in the V2 application with its TypeScript runner and `--output` pointing to this repository. Then run:

```sh
node scripts/generate-service-docs.mjs
npm run build
```

The corresponding V2 documentation-impact contract and evidence live in its `docs/help/` directory. Keep the changes in both repositories together.

## Before release

Preview the built site on desktop and mobile. Exercise search, service-area navigation, both colour themes, the mobile menu, return to the NRS website, console links, report guides and healthcare source links. A static build is not browser or live-workflow acceptance.

Release this help build before the V2 search consumer that requires its new index. Check the production build, canonical URLs and `/content-index.json` after publishing. Deployment is a separate authorised operation; this repository does not deploy itself through the quality workflow.
