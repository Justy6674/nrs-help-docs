---
title: "Troubleshoot the task you are doing"
description: "Identify the current record and avoid accidental duplicates."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/Composer.tsx", "src/app/console/composer/actions.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts"]
feature_ids: ["nrs.troubleshooting"]
source_urls: []
---

# Troubleshoot the task you are doing

Start with the business, screen and item involved. Read the displayed status and error before repeating an action.

| Problem | First check |
|---|---|
| Business missing | Your workspace membership and selected business |
| Account missing | Settings → Accounts, permissions and connection status |
| Post cannot schedule | Blocking flags, selected accounts, media readiness and your role |
| Media still processing | The existing upload or render job, not a second copy |
| AI unavailable | The configured business provider and its reported failure |
| Report held | Missing evidence, verification concerns and healthcare review |
| Send outcome unknown | Existing delivery record and safe reconciliation/retry path |

A refresh can show updated state, but it is not a repair for missing permissions or an unsupported feature. Do not repeatedly press a send button when the outcome is unknown.

If the problem persists, [contact NRS](contact-support.md) with the item link or reference, the action attempted, time and safe error text. Keep passwords, access keys, patient information and unrelated client details out of screenshots.
