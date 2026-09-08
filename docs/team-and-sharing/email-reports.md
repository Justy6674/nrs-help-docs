---
title: "Email an approved report"
description: "Send the saved report through its deliberate approval step."
sidebar_position: 4
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/scan/report-delivery.ts"]
feature_ids: ["nrs.team-and-sharing"]
source_urls: []
---

# Email an approved report

Open the client's full report preview from the reporting run. Review the narrative, references, findings and any offer appendix. Confirm the intended recipient selection before using the delivery controls.

The send step freezes the exact report version and email payload. After delivery is claimed, that version cannot be edited into a different message. Prepare a new revision or report through the appropriate workflow if the content needs changing.

The email may include a PDF where one is available and within attachment limits. The approved report remains available in the permitted client portal; a PDF can be generated from the same frozen HTML. Missing an attachment does not by itself mean no report exists.

Check the recorded delivery state. If the provider outcome is unknown, use the existing delivery's safe retry or reconciliation path. Creating a second report to force a resend can create a duplicate.

For scheduled delivery, read [automatic reporting](../reports/automate-client-reports.md). Preparing a report automatically and authorising automatic sending are separate choices.
