# Google Ads help release evidence — 11 November 2026

## Scope and provenance

Six new plain-English workflow articles, a Google Ads sidebar category and two Help Centre home cards. Original dirty checkout preserved; authored in detached worktree from published main `159b3ba`. No service catalogue values, healthcare advice, old verification dates, dependencies, credentials or deployment environment changed.

Product instructions checked against NRS application commit `93569d2` in `src/app/console/ads/page.tsx`, `src/app/console/ads/actions.ts`, `src/components/nrs/GoogleAdsForms.tsx`, `src/lib/nrs/google-ads/{contracts,changes,tools,workflow,store}.ts`, and `docs/google-ads.md`. Application and help deployment remain separate evidence.

Primary sources read on 11 November 2026:

- Google Search campaign setup: https://support.google.com/google-ads/answer/9510373?hl=en-AU
- Google account access: https://support.google.com/google-ads/answer/6372672?hl=en-AU
- Keyword meaning and match types: https://support.google.com/google-ads/answer/7478529?hl=en-AU
- Spending limits: https://support.google.com/google-ads/answer/10486637?hl=en-AU
- Average daily budgets: https://support.google.com/google-ads/answer/6385083?hl=en-AU
- Budget edits: https://support.google.com/google-ads/answer/10487143?hl=en-AU
- Conversion measurement: https://support.google.com/google-ads/answer/1722022?hl=en-AU
- Conversion troubleshooting: https://support.google.com/google-ads/answer/12674892?hl=en-AU
- Policy status/review: https://support.google.com/google-ads/answer/6327680?hl=en-AU
- Grok Bot remote connector: https://docs.x.ai/grok-bot/computer-and-apps
- Grok web custom connector: https://docs.x.ai/grok/connectors
- Grok Build MCP and environment syntax: https://docs.x.ai/build/features/mcp-servers
- Grok Build plugins: https://docs.x.ai/build/features/skills-plugins-marketplaces
- Cursor plugin loading: https://cursor.com/docs/plugins

The guides distinguish official Google product behaviour from the narrower NRS implementation. They explicitly separate setup, validation, human approval, paused creation, activation, provider receipt/read-back, policy eligibility and business outcomes. Google's normal budget limits are qualified for campaign type, budget changes and partial months; NRS's limit is per configured campaign, not whole-account actual spend.

## Checks

- Full `npm run build` passed: service catalogue check, content metadata/freshness checks, nine regression tests, TypeScript and strict Docusaurus internal links/anchors.
- Generated content index contains all six new routes with `limited` availability. Local total: 204 published articles, 108 service references.
- Browser Harness rendered built site on localhost port 3136 at desktop 1408 pixels and mobile 390 pixels; article H1, sidebar, guide links, persistent return-to-site and Open console controls present. Mobile document width equals viewport width (390), no horizontal page overflow. Screenshots inspected at `/tmp/nrs-help-google-ads-{desktop,mobile}.png`.
- Keyboard Tab reaches Skip to main content. Input in hidden tab initially did not accept typing; activating only the owned help tab made the search input accept text. Shared browser marker was observed to move to another agent's Google Ads tab; subsequent actions pin the owned help target before use. No Google account page was edited.
- The rendered `/search?q=Google%20Ads` page returned the new start, troubleshooting, budget/tracking and home-card results. Search discovery is demonstrated separately from article rendering.
- Both new home guide cards rendered; the home page also measured 390-pixel document/viewport width. AST-only `GRAPHIFY_BACKEND=none graphify update .` completed (1,229 nodes, 1,420 edges). Five existing MDX pages yielded no code symbols; this is not a semantic documentation graph or a failed article build. Generated output is local only.
- Live Google account binding, a real Grok connection, campaign creation/activation and advertising performance are not established by this documentation. No advertising amount or campaign was approved by this help request.

Documentation ownership metadata names Bec and Justin as the existing responsible owners; the editorial verification does not claim their personal release review.
