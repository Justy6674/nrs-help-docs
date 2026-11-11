---
title: "Track real outcomes and read your results"
description: "Check conversion tracking before treating clicks or attributed conversions as customers."
sidebar_position: 4
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads", "nrs.reports"]
source_files: ["src/app/console/ads/page.tsx", "src/lib/nrs/google-ads/contracts.ts", "src/lib/nrs/google-ads/tools.ts"]
source_urls: ["https://support.google.com/google-ads/answer/1722022?hl=en-AU", "https://support.google.com/google-ads/answer/12674892?hl=en-AU"]
---

# Track real outcomes and read your results

An ad click is not a sale. A number labelled **Conversions** means the events and attribution configured in Google; it does not independently prove that a paid order, qualified enquiry or booking occurred.

## Decide what success means

Write down one primary business outcome before launch. For an online shop, that might be a completed paid order; for a service, a qualified enquiry. Choose a separate way to confirm it in the business's own records. Decide how you will recognise cancellations, duplicate orders and test activity.

For ScentSell, distinguish completed marketplace activity from a product-page view or a catalogue search. Do not send buyer details, private messages or health information into an advertising chat.

## Verify tracking before using it to make spending decisions

NRS’s Ads tools read supported reports. The separate [agent tracking workflow](./set-up-tracking-with-your-agent.md) can prepare and apply reviewed Google configuration for eligible connected workspaces. It produces an installation artifact; an authorised website developer or agent must still apply it to the actual website and prove delivery.

The person responsible for the website should confirm the intended conversion action in Google Ads and complete an authorised test of that action. [Google's conversion measurement guide](https://support.google.com/google-ads/answer/1722022?hl=en-AU) explains the available sources. Use the business's approved privacy and consent setup for tracking; do not add tags to sensitive or clinical journeys as a casual test.

In Google Ads, review **Goals → Conversions → Summary**, including the action's tracking status and whether it is the intended primary goal. Google recommends **Tag Assistant** to check a test conversion. Reporting can take time, and a new tag may not yet show active. [Google's troubleshooting guide](https://support.google.com/google-ads/answer/12674892?hl=en-AU) explains these checks, reporting delays and attribution differences.

Record the action tested, date, expected result and actual result. A correctly firing tag still needs reconciliation with the real transaction or enquiry; it is not proof of profitability.

## Read the NRS table

**Paid ads** shows **Campaigns · last seven days**, with campaign number, status, spend, clicks and conversions. If results cannot be read, NRS says so; do not interpret that as zero activity.

| Term | How to use it |
|---|---|
| Impression | An ad appearance; not necessarily a person who noticed it |
| Click | Interaction recorded as a click; not a completed outcome |
| Cost / spend | Reported advertising cost for the selected period; not automatically the same as a bank charge |
| Conversion | An attributed configured action; check what the account counts |
| Conversion value | The configured or supplied value, which may differ from revenue actually received |
| Search term | The person's actual search that was reported; different from your chosen keyword |
| Keyword | A targeting instruction that can match searches according to its match type |
| Bid | The auction setting; different from a daily budget |

The bot can request supported campaign, search-term, conversion and opportunity reports for the last seven or 30 days. Ask it to state the account, dates, available fields and missing evidence. Keep any additional pages of results together; one page is not necessarily the full report.

## Make a useful review

Compare equivalent periods and document material changes. Check which searches attracted spend, whether the landing page worked on a phone, and which verified outcomes followed. An opportunity report suggests areas to inspect; it does not prove that increasing spend will pay back.

Use [Google, Bing and analytics evidence](../reports/google-bing-and-analytics.md) for the differences between Ads, GA4, Search Console and PageSpeed. Use [client reports](../reports/prepare-a-full-report.md) to bring observations together without treating missing measurements as passes.
