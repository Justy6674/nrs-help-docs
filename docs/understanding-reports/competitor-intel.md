---
title: "Compare competitors fairly"
description: "Use dated public evidence without inventing private performance."
sidebar_position: 3
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/reporting/evidence.ts", "src/lib/nrs/scan/providers/serper.ts", "src/lib/nrs/findable/competitor-changes.ts", "src/lib/nrs/findable/competitor-changes-contracts.ts", "src/lib/nrs/findable/competitor-changes-tools.ts"]
feature_ids: ["nrs.understanding-reports"]
source_urls: []
---

# Compare competitors fairly

Select the competitor's actual website and give it a recognisable label in the client's reporting settings. Do not add the client's own website as a competitor.

A useful comparison looks at equivalent services, public information and customer journeys. Note differences in crawl coverage, dates and site structure. Raw issue counts from different-size samples are not a fair ranking of businesses.

NRS can compare retained public pages and available public search or listing evidence. It does not obtain a competitor's private traffic, appointments, revenue, conversion rate or account analytics from those sources.

Older scans whose search identity was not reliably separated from the client are held for review rather than treated as a measured competitor rank or Maps match. Rerun the selected competitor when a comparable source is needed.

Read the comparison's dated references and limitations before acting. A missing result is not proof that the competitor lacks a page, listing or service. [Evidence and references](../reports/read-evidence-and-references.md) explains the status labels.

## Ask your AI about retained change signals

When this read is available in your connected AI, select the intended business and ask for its retained competitor change signals. It reads observations already held for that business. The default window is the preceding 30 days; read the returned dates and completeness before acting.

An alert about a changed page fingerprint is a retained signal. It does not say whether wording, offers or prices changed. An unreadable-page alert means an observation could not be read; it does not establish a content change. Follow a safe public source reference when one is returned, and review the page before making a specific claim.

Incomplete results are a bounded subset and are not necessarily the latest events. Historical references can be marked removed, detached or unknown. A missing reference does not prove that a competitor was removed from the watched list.

This read starts no crawl or new scan, sends no email and does not mark an alert as seen. It does not reveal a competitor’s private account analytics.
