---
title: "Google, Bing and analytics evidence"
description: "Understand the source, period and access behind each measurement."
sidebar_position: 5
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/reporting/search-sources.ts", "src/lib/nrs/reporting/analytics-source.ts", "src/lib/nrs/reporting/listing-sources.ts"]
feature_ids: ["nrs.reports"]
source_urls: ["https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"]
---

# Google, Bing and analytics evidence

Select only the sources relevant to the client's question. Public observations and connected account data are different forms of evidence.

| Source | What it contributes |
|---|---|
| Public Google search / Serper | A dated query sample; not Search Console coverage |
| Public Maps and directories | Confirmed profile reads or unconfirmed discovery candidates |
| Search Console | Approved property performance; search query text is excluded |
| Google URL Inspection | Google's stored indexed-version result, not a fresh live test |
| PageSpeed | The available lab and field measures, kept distinct |
| GA4 | Four aggregate totals for the approved property |
| Bing Webmaster | Supported traffic data from the approved site connection |

## Optional GA4

Enter the numeric **Google Analytics property ID** and select Google reporting. NRS must already approve that property for the client and have Analytics read access. The reader requests active users, sessions, engaged sessions and key events for the last 28 complete days in the property's reporting timezone. It requests no page paths, event names, user identifiers or revenue.

Key events reflect the property's configuration; they are not automatically verified enquiries or bookings. Sampling, thresholding and restrictions require review. Recent completed-day totals may change during processing. [Google's reporting reference](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport) explains the underlying API.

Search Console uses its own reporting window and timezone; Bing can include different search verticals. Read the stated period and definition instead of comparing unlike totals. If permission is missing, the report says so without inventing a value.
