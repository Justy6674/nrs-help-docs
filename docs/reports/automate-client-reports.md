---
title: "Set up reporting automation"
description: "Choose manual preparation, scheduled review or explicitly approved automatic delivery."
sidebar_position: 4
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/reporting/policy.ts", "src/lib/nrs/reporting/store.ts"]
feature_ids: ["nrs.reports"]
source_urls: []
---

# Set up reporting automation

Open the client's **Analysis and reports → Client reporting settings**. Automation is optional and belongs to that client; it is not a blanket instruction to report on every business.

| Mode | What it authorises |
|---|---|
| Manual | Staff prepare a report when needed and review its delivery |
| Prepare automatically | A scheduled report is prepared and left for review |
| Send automatically | A specifically authorised policy may deliver when all required checks pass |

For a schedule, choose **weekly** or **monthly**, its day/date and hour. The current schedule uses **Brisbane time**. Monthly dates are limited to days 1–28. Select the report reviewer and approved recipient list.

Automatic sending requires the explicit checkbox approving this exact scope, schedule and recipient list. A later change requires fresh approval. Missing selected evidence, unresolved healthcare concerns, failed verification or changed approval conditions hold delivery for review.

Use **Enable this schedule** to activate it; untick it to pause future automatic preparation. Saving a pause does not rewrite a report that is already frozen for delivery.

Check the displayed next preparation time and report history. A background schedule also needs the deployed worker and valid source connections. A saved schedule is not evidence that the next run has completed.

A retry returns preparation for review; it does not create fresh permission to send automatically.
