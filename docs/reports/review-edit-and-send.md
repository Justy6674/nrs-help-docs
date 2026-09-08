---
title: "Review, edit and send a report"
description: "Approve the exact saved document and its recipient before delivery."
sidebar_position: 3
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/app/console/scans/[id]/report/ReportEditor.tsx", "src/lib/nrs/scan/report-delivery.ts"]
feature_ids: ["nrs.reports"]
source_urls: []
---

# Review, edit and send a report

Open **Review report** from the client's reporting history. Inspect the source coverage and any verification concerns, then read the full assessment.

## Edit the narrative

Use the text sections in the report editor to change the title, headings or paragraphs. Source references remain attached to those sections. Check that your edit is still supported by those sources. Saving an edit invalidates the previous automatic verification, so it returns to review.

If another person has saved a newer revision, reload and review it before applying your changes. The editor rejects a stale revision rather than overwriting someone else's work.

## Review the whole preview

Open the full report preview, including the findings and service appendix. Healthcare findings need explicit contextual human review for the client. A generic Abe retrieval does not approve them. Keep unsupported findings held.

Confirm the intended recipient and use the explicit approval and delivery controls. Prices in a linked offer come from the Rate Book; changing narrative text does not authorise an invented price.

When delivery is claimed, NRS freezes the exact HTML and email payload. That version cannot be silently edited, reassigned or replaced during retry. The client portal serves the approved stored report, and PDF generation uses the same frozen HTML.

Check the recorded outcome. “Email accepted” means the provider accepted the message, not that the recipient read it. Use [delivery status and retries](retries-and-delivery-status.md) if the result is uncertain.
