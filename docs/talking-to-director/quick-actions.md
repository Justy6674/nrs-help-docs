---
title: "From suggestion to saved work"
description: "Understand when a proposal becomes a draft or a release."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/Composer.tsx", "src/app/console/composer/actions.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts"]
feature_ids: ["nrs.eve"]
source_urls: []
---

# From suggestion to saved work

The available action depends on the screen you are using. NRS does not use the old ten-button message action bar.

| Where you are | What the action means |
|---|---|
| Composer suggestion | Review a proposed change before applying it |
| Composer → Save draft | Retain editable work; do not publish it |
| Approvals → Approve | Record an authorised review decision |
| Composer → Schedule / Post now | Start the release process for the selected accounts |
| Report editor | Save a report revision for review |
| Report delivery | Approve the exact report and recipient selection for sending |

Read the result after every action. A saved draft, scheduled post and provider-confirmed publication have different meanings. If an action is still pending or its outcome is unknown, inspect the existing record before starting another copy.

For a post use [scheduling](../publishing/schedule-a-post.md); for a report use [delivery status and retries](../reports/retries-and-delivery-status.md).
