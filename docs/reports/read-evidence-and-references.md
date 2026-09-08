---
title: "Read evidence and references"
description: "Know what each observation can support before relying on it."
sidebar_position: 2
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/reporting/evidence.ts", "src/lib/nrs/reporting/narrative.ts"]
feature_ids: ["nrs.reports"]
source_urls: []
---

# Read evidence and references

Open the report run's source coverage before reading its recommendations. Each selected source has a status, and the report provides numbered references with source names, URLs where available and observation dates.

| Status | Meaning |
|---|---|
| Measured | A retained observation exists; its scope still matters |
| Needs access | The selected source requires permission or configuration |
| Unavailable | A usable result was not collected |
| Review required | The observation needs contextual human assessment |
| Not applicable | The source or check does not apply to this scope |

Follow the numbered reference for a claim you intend to use. A live search or test link may show a different result later; the retained observation date matters. A source ID or matching URL alone does not prove that a sentence is supported.

## Know the boundaries

The public website sample excludes authenticated patient journeys. Automated technical flags measure what the checker reported; they are not automatically confirmed defects. Repeated template issues are not separate business problems simply because they appear on many pages.

A retrieved healthcare rule is not a verdict on the client's wording. Unreviewed health findings remain with staff. Missing measures are never replaced with invented zeros.

Read the limitations and comparison coverage with the narrative. If a key question has no source, ask for the missing evidence or amend the conclusion before [approving the report](review-edit-and-send.md).
