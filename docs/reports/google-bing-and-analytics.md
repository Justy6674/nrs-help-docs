---
title: "Google, Bing and analytics evidence"
description: "Understand the source, period and access behind each measurement."
sidebar_position: 5
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/lib/nrs/reporting/search-sources.ts", "src/lib/nrs/reporting/analytics-source.ts", "src/lib/nrs/reporting/listing-sources.ts", "src/lib/nrs/findable/google-search.ts", "src/lib/nrs/findable/google-search/contracts.ts", "src/lib/nrs/harness/mcp-tools.ts"]
feature_ids: ["nrs.reports"]
source_urls: ["https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"]
---

# Google, Bing and analytics evidence

Select only the sources relevant to the client's question. Public observations and connected account data are different forms of evidence.

| Source | What it contributes |
|---|---|
| Public Google search / Serper | A dated query sample; not Search Console coverage |
| Public Maps and directories | Confirmed profile reads or unconfirmed discovery candidates |
| Search Console in a report | Approved property performance; search query text is excluded from the report workflow |
| Google URL Inspection | Google's stored indexed-version result, not a fresh live test |
| PageSpeed | The available lab and field measures, kept distinct |
| GA4 | Four aggregate totals for the approved property |
| Bing Webmaster | Supported traffic data from the approved site connection |

## Ask your AI about Google searches and index status

When these reads are available in your connected AI, select the intended business and ask which Google searches led people to its website, or what index status Google holds for the saved website. They use that business’s saved website and approved Search Console property. A connection and permission are required; availability in your AI does not establish that Google data can be read.

The explicit search-query read can return query text and page evidence. This is separate from the report workflow above, which excludes search query text. Use the returned 28-day start and end dates and Pacific timezone when quoting a result. This read covers Australian web search, not every country or search type.

Keep the returned status with the figures. **Complete**, **empty** and **partial** describe the evidence returned. An empty query list does not by itself mean zero traffic, and withheld queries are not invented. Partial results can omit rows or retain known evidence after a later read failed. Query/page rows can cover less than the aggregate totals, so their figures need not add up. Quote only measured totals that were actually returned.

The index-status read shows Google’s stored result for the saved website. It is not a live page test, sitemap submission or request for indexing. Unknown fields remain unknown; an unavailable result is not proof that the website is absent from Google. A measured result does not establish that every page is indexed or that Google accepted a sitemap.

If the result says access is needed or the data is unavailable, ask NRS support to check this business’s Search Console connection. Neither read changes the website or the Google account.

## Optional GA4

Enter the numeric **Google Analytics property ID** and select Google reporting. NRS must already approve that property for the client and have Analytics read access. The reader requests active users, sessions, engaged sessions and key events for the last 28 complete days in the property's reporting timezone. It requests no page paths, event names, user identifiers or revenue.

Key events reflect the property's configuration; they are not automatically verified enquiries or bookings. Sampling, thresholding and restrictions require review. Recent completed-day totals may change during processing. [Google's reporting reference](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport) explains the underlying API.

Search Console uses its own reporting window and timezone; Bing can include different search verticals. Read the stated period and definition instead of comparing unlike totals. If permission is missing, the report says so without inventing a value.
