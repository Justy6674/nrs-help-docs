---
title: "Read performance in context"
description: "Separate activity, platform measurements and a full narrative assessment."
sidebar_position: 2
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/app/console/analytics/page.tsx", "src/app/console/reports/[business]/page.tsx", "src/lib/nrs/monthly-results/contracts.ts", "src/lib/nrs/monthly-results/month.ts", "src/lib/nrs/monthly-results/collect.ts", "src/lib/nrs/monthly-results/document.ts", "src/app/console/results/MonthlyPreview.tsx"]
feature_ids: ["nrs.understanding-reports"]
source_urls: []
---

# Read performance in context

NRS has different report surfaces for different questions.

**Monthly activity** summarises recorded work for a business. **Analytics** shows supported connected-account measurements. **Analysis and reports** prepares the fuller referenced assessment using the selected evidence sources.

Check the period, platform and metric before comparing values. A platform may report a lifetime figure, a daily series or a restricted subset. Missing permission or an unsupported field is not a measured zero.

For a full report, open the source coverage and read the limitations alongside the findings. Google search results, Search Console data, GA4 totals and Bing traffic answer different questions. [Google, Bing and analytics](../reports/google-bing-and-analytics.md) explains those distinctions.

A rise in views does not by itself establish more qualified enquiries, completed bookings or profit. Use an agreed business measure and evidence linking it to the work before claiming a commercial result.

## Preview a completed calendar month

Where **Calendar-month preview** is available in **Results**, choose the intended business and a completed month, then choose **Prepare unsaved preview**. Leave the month blank to use the previous completed month in that business's saved timezone. The current month and future months are not complete and cannot be used for this preview.

The month starts at local midnight on its first day and ends just before the next month starts. Read the timezone shown. If the saved timezone is missing or invalid, NRS labels Brisbane as a provisional fallback; that is not a verified business-local month.

The preview separates two kinds of retained evidence:

- **Publishing receipts:** recorded platform deliveries during the selected month. Copies sent to different platforms can belong to one post, so deliveries and distinct posts are different counts.
- **Stored readings for those posts:** retained counter readings for posts published in that month. They do not prove that all the views or other activity happened during that month. A reading's capture dates are not necessarily the dates the platform metric covers.

Check each source's coverage and the oldest and newest readings used. Missing, partial or unavailable evidence is not a measured zero. Keep platform counters separate, and do not turn a partial observed sum into the whole month's engagement or a commercial result.

This is an **unsaved preview with partial evidence**. It creates no PDF, permanent report, stable download or delivery, and nothing is sent. Reloading or preparing it later may use different retained readings. For a dated assessment that can be reviewed and delivered, use the separate [full-report workflow](../reports/prepare-a-full-report.md); this preview does not perform those steps.
