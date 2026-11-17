# Help regulatory-source and catalogue review, 17 November 2026

Prepared by Codex for the NRS completion handover. This is an editorial source comparison. It is not legal approval, approval of an advertisement, a claim that Bec or Justin performed this review, or proof of a live client workflow.

## Why the release check failed

The clean help baseline at `6abfe92` failed `npm run build` in its content precheck. Exactly 23 published pages carried `last_verified: 2026-09-08` and regulatory links, exceeding the repository's 30-day editorial cadence. This cadence is an internal release rule, not a regulator's legal review interval. The catalogue comparison passed against the help snapshot, but that snapshot was stale against the current NRS source.

No unrelated dirty files from `/Users/jb-downscale/nrs-help-docs` were used or changed for this repair. Initial work was isolated in `/Users/jb-downscale/.codex/worktrees/nrs-help-release-20261117`. Publication is prepared in `/Users/jb-downscale/.codex/worktrees/nrs-help-publish-20261117`, based directly on current remote main `37e7e7b`. The first tree and original three commits are retained. Only the owned source-review and guide changes were transferred; unrelated inherited draft pages are excluded. Current remote already contains the canonical service snapshot and support section, so this release does not introduce the historical catalogue differences described below.

## Primary sources checked

| Source | Dated version read | Supported scope |
| --- | --- | --- |
| [Ahpra advertising guidelines](https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Advertising-guidelines.aspx) | Guidelines effective 14 December 2020; current page read 17 November 2026 | Regulated health-service advertising, advertiser responsibility, acceptable evidence and contextual review. |
| [Ahpra summary](https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Summary-of-the-advertising-requirements.aspx) | Page reviewed 2 September 2025; current page read 17 November 2026 | Clinical-aspect testimonials differ from comments solely about service or communication. Images must not mislead or imply unreasonable benefits. |
| [Ahpra higher-risk cosmetic resources](https://www.ahpra.gov.au/Resources/Cosmetic-surgery-hub/Cosmetic-procedure-advertising-guidelines/Resources-for-advertising-higher-risk-non-surgical-cosmetic-procedures) | Current resources read 17 November 2026 | Additional procedure-specific advertising context. The general guide correctly directs readers to this source rather than granting blanket permission for images or reviews. |
| [TGA prescription-medicine advertising](https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public) | Updated 23 June 2026 | General public-advertising prohibition with limited exceptions, promotional context and direct or indirect references. Renaming a medicine is not a general workaround. |
| [TGA testimonials and endorsements](https://www.tga.gov.au/products/regulations-all-products/advertising/applying-advertising-code/testimonials-and-endorsements-advertising) | Updated 11 March 2025 | Conditions differ by contributor, product, claims and incentives. This does not remove prescription-advertising restrictions. |
| [TGA cosmetic/therapeutic boundary](https://www.tga.gov.au/resources/guidance/determining-if-your-product-cosmetic-or-therapeutic-good) | Updated 3 July 2026 | Claims, ingredients, use and exclusions affect classification; the existing guide correctly avoids determining an entire product from one phrase. |
| [OAIC Australian Privacy Principles](https://www.oaic.gov.au/privacy/australian-privacy-principles) | Current overview read 17 November 2026; no update date shown | Personal-information handling, governance, integrity and access obligations. The service pages scope responsible handling; they do not certify a client's compliance. |
| [OAIC commercially available AI guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products) | Published 21 October 2024, updated 17 January 2025 | Due diligence, intended use, information boundaries and human oversight support the existing AI-governance scoping advice. |
| [TPB(GS) 55/2026](https://www.tpb.gov.au/tpbgs-552026-use-artificial-intelligence-and-code-professional-conduct) | Issued and modified 22 July 2026 | Existing professional obligations and accountability remain with the tax practitioner. Added as a source reference for the existing NRS-070 service, without changing its service words or fee. |

Direct web fetches returned 403 for Ahpra. WebClaw successfully retrieved the three current Ahpra pages. TGA and OAIC pages were read directly; TPB's current official statement was read through its official search result. No third-party legal summary establishes these conclusions.

## Product-source comparison

The current NRS source retains generic Abe retrieval via `/api/corpus/search`, `citation_mode: first_party_grounding`, `current_only: true`. Responses must remain unverified first-party grounding, not publishable citation evidence (`src/lib/nrs/abeai/regulatory-corpus.ts`). This supports the existing help boundary; no live Abe call was made.

The current publication gate separates Ahpra/TGA advice from ordinary blocking checks and records the person's acknowledgement for that exact post (`src/lib/nrs/publish-gate.ts`, `health-acknowledgement.ts`). Existing responsibility and context-review statements remain applicable. A generic source check or acknowledgement is not legal clearance.

One concrete stale product fact was corrected in `health-and-abe/what-abe-does.md`. The Professional Development Finder is **Beta**, while the separate Agent 9 remains **In build**. Both have `productionReady: false` in `ABEAIconsulting/src/lib/capabilities/registry.ts:102` and `:120`. The article does not infer a new NRS integration or completed customer journey from that status.

## Catalogue and generator repair

The current canonical NRS snapshot was copied only after its `sourceSha256` was independently recomputed from the current `src/lib/nrs/offers/catalogue.ts`. Matching SHA-256: `3b81451ec08b5c6e9b1aaa8fe2673e1c3f320366333bd98e4193497b402b4079`.

The copied `data/services.json` retains canonical `verifiedAt: 2026-10-24`. No NRS service, name, price or scope was changed. Keyed comparisons with the old help snapshot identified canonical removal of NRS-065, addition of NRS-109, the current NRS-035 name, the `support` section, and the existing NRS-081 amount. This repair mirrors the canonical records; it does not approve new commercial terms.

`scripts/generate-service-docs.mjs` now uses the existing ongoing-support scoping words under the canonical `support` key. The retired NRS-065 and `care` area pages are retained as drafts, with their historical dates, rather than deleted or redirected to a different offer.

Regulatory-source dates now come from `data/source-reviews.json` for the exact pages below. Other generated pages retain the canonical catalogue verification date. The record names every primary URL and the separate review meaning; it does not silently treat catalogue export as regulatory review.

## Exact reviewed pages

The following eight authored pages were read against their cited current sources and implementation references. Their editorial metadata and source-review date were updated to 17 November 2026. Apart from the stated Abe Finder correction and source references, their substantive advice was preserved.

- `compliance/ahpra-rules.md`
- `compliance/tga-rules.md`
- `compliance/the-guardian-agent.md`
- `health-and-abe/ai-governance.md`
- `health-and-abe/health-advertising-review.md`
- `health-and-abe/prescription-medicines.md`
- `health-and-abe/testimonials-and-images.md`
- `health-and-abe/what-abe-does.md`

The following 15 generated pages were checked through their actual shared source paragraphs and per-service additions. Regulatory references and responsible-review scoping still match the reviewed sources. Their dates are generated from the explicit review record, not edited by hand.

- `services/area-compliance.md`
- `services/service-042.md`
- `services/service-048.md`
- `services/service-052.md`
- `services/service-067.md`
- `services/service-068.md`
- `services/service-069.md`
- `services/service-070.md`
- `services/service-071.md`
- `services/service-072.md`
- `services/service-073.md`
- `services/service-074.md`
- `services/service-075.md`
- `services/service-076.md`
- `services/service-102.md`

The tag and hashtag guides are prepared as reviewed, limited-availability guides after the live owner-key MCP responses were read. Evidence files `/tmp/nrs-live-tag_library_save.json`, `/tmp/nrs-live-tag_library_list.json`, `/tmp/nrs-live-tag_library_check.json`, `/tmp/nrs-live-tag_suggest_for_post.json` and `/tmp/nrs-live-hashtag_suggest.json` contain actual request/readback pairs. Account checking can return no handles with an explicit website-read limitation; saved-group hashtags return their source and relevance as not scored. This does not establish that every provider-dependent source worked, or confirm any Mecca account. The video guide is also prepared as reviewed and limited after actual owner-key live Listen returned a new ready analysis with 41 words, transcript readback returned the same analysis and 41 timed words, and the preset tool returned eight styles. The own-site page-to-reel call saved revision 1 with duration 18,400 ms; the parent release agent independently read back the saved edit and visually inspected its ready 1080 × 1920 serif cover frame. Evidence includes `/tmp/nrs-live-media_listen.json`, `/tmp/nrs-live-media_transcript_read.json`, `/tmp/nrs-live-media_text_presets.json`, `/tmp/nrs-live-media_reel_from_page.json` and the parent’s `/tmp/nrs-page-cover-proof.png`. These prove listening, saved composition and a frame preview, not a new full-video render or public post.

## Validation and undo

The initial normal `npm run build` passed with 198 published articles and eight tests. After reconciling current remote main and preparing tag/hashtag publication, the final normal build passed with 108 services, 121 generated references, 212 published articles, all 19 tests, typechecking and strict link/anchor checks. The source-review map covers exactly 23 pages, and the initial clean repair comparison confirmed exactly those 23 received a new 17 November source-review date. The current publication tree also carries the two previously inherited implementation-review dates for scheduling and compliance workflow guidance, checked against current NRS main. Other current generated pages retain 24 October 2026 as their catalogue date. The canonical snapshot is byte-identical and the source hash was rechecked after generation.

The initial inherited baseline exposed navigation to unpublished documents. Current remote main already has a working sidebar and fewer draft-guide links. The publication tree preserves that current sidebar byte for byte and excludes the unrelated inherited draft directories. Scheduling guidance retains current customer labels while correcting stale blocking claims against actual NRS main. Strict checks were not weakened and no unrelated draft was published to resolve a link error.

The production build was served locally at port 3193. Support reference 109 was inspected at desktop width 1400 and phone width 390, including three-month billing and set-up-only terms; both fit without horizontal overflow. Abe’s corrected Finder Beta wording and review date were verified in the rendered page, with desktop and phone screenshots inspected. Search returned Post Set-up support as its first result. Tag and hashtag guides were also inspected in the final production build at localhost:3194, at widths 1400 and 390, with their limited-availability notices and no draft notice or horizontal overflow. Search returned the tag guide. The video guide’s reviewed production route was checked separately after those live receipts. Mobile menu opening worked. Keyboard search-result activation was observed navigating to the tag guide after Arrow Down and Enter. Keyboard dismissal was not established, so no full accessibility pass is claimed.

Final publication build log: `/tmp/nrs-help-all-guides-build.log`. Tag, hashtag and video publication screenshots at `/tmp/nrs-help-publish-{tags,hashtags,video}-{desktop,mobile}.png` were inspected with URL and overflow checks. Earlier evidence logs: `/tmp/nrs-help-repaired-build-final.log`; screenshots: `/tmp/nrs-help-support-desktop.png`, `/tmp/nrs-help-support-mobile-verified.png`, `/tmp/nrs-help-abe-desktop.png`, `/tmp/nrs-help-abe-mobile.png`. A prior unverified support-mobile screenshot captured another session’s page during shared Browser Harness target contention and is excluded from evidence.

Undo is a follow-up revert of this help-only commit. Canonical NRS code and the root help worktree's unrelated files are unchanged. At preparation time nothing had been pushed or deployed; the release receipt records the later publication result.
