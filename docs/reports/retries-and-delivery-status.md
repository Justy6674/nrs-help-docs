---
title: "Retries and delivery status"
description: "Recover the existing task without accidentally sending a duplicate."
sidebar_position: 6
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/scan/report-delivery.ts", "src/lib/nrs/reporting/notion-display.ts"]
feature_ids: ["nrs.reports"]
source_urls: []
---

# Retries and delivery status

Open the report history and its current run. The status tells you whether the problem concerns preparation, review or delivery.

**Preparation needs attention:** read the reason and resolve missing access or configuration. Use **Retry preparation for review** where offered. This continues the reporting workflow without granting new sending authority.

**Needs your review:** inspect missing sources, verification concerns and healthcare findings. Waiting or retrying alone does not resolve a judgement the reviewer needs to make.

**Delivery in progress:** the approved version is locked while the current attempt runs. Do not create a new send in another tab.

**Outcome not confirmed:** NRS retains the exact approved payload and duplicate-protection key. An allowed retry uses that same message and recipient; it cannot become a changed report. After the safe retry window ends, NRS must reconcile the provider's recorded result before further delivery.

**Email accepted · report available:** the email provider accepted the message and the approved portal snapshot is available. It is not proof that the recipient opened it. A PDF may be attached when available and within limits; portal PDF generation uses the same approved HTML.

Notion review-copy status is separate. A pending or failed Notion sync does not mean an email was sent, and a Notion page is not the authoritative delivery receipt.
