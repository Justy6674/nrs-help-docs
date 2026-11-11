---
title: "Google Ads: start here"
description: "Understand what NRS can do, what needs connecting and what happens before an ad can spend."
sidebar_position: 1
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads"]
source_files: ["src/app/console/ads/page.tsx", "src/components/nrs/GoogleAdsForms.tsx", "docs/google-ads.md"]
source_urls: ["https://support.google.com/google-ads/answer/9510373?hl=en-AU", "https://support.google.com/google-ads/answer/6372672?hl=en-AU"]
---

# Google Ads: start here

**Prefer to work through your AI?** Use [manage limits, goals and setup through your AI](manage-with-your-ai.md). Your agent can inspect settings, prepare limits in AUD, request Google consent and save reviewed bindings. The console instructions below are an optional alternative, not a requirement for routine settings changes.

Use NRS to prepare a Google Search campaign, inspect the exact change and approve it when you are ready. A bot uses the same NRS account connection and approval records as the console.

:::info Limited first release
Google Ads needs NRS staff setup and a verified Google account connection for each business. A downloadable plugin does not complete that connection. Access is limited to setup and acceptance testing; account access and a live campaign still need checking separately. Commercially managed advertising is not established by this release.
:::

## What NRS supports

| You want to… | Current NRS support |
|---|---|
| See campaign spend, clicks and attributed conversions | Campaign table; the bot can request additional supported reports |
| Research search phrases | Bot keyword ideas for Australian English |
| Create an ad | Responsive Search ad, Australia, English, AUD account, manual cost-per-click bidding; created paused |
| Start or stop a supported campaign | Separate reviewed activation or pause |
| Change its average daily budget | Separate reviewed change within the business setting |
| Exclude unsuitable searches | Reviewed exact or phrase negative keywords |
| Set up Shopping, Performance Max, Display or YouTube campaigns | Not part of this NRS creation workflow |
| Install conversion tracking or fix Google's billing | Separate work; not performed by the Ads plugin |

Google offers more campaign types and settings than this release exposes. [Google's Search campaign guide](https://support.google.com/google-ads/answer/9510373?hl=en-AU) explains its own setup; use the NRS steps below when working in NRS.

## Get ready

1. Choose the business, offer and action you want a customer to take. A completed purchase and a newsletter sign-up are different outcomes.
2. Confirm that you own or are authorised to advertise through the Google Ads account. Keep its account number separate from your Analytics, Search Console and Merchant Centre identifiers.
3. Have a working landing page with accurate product or service information. Check the phone journey, availability, price and next action.
4. Agree an advertising amount you are comfortable approving. Read [budgets and spending](budgets-and-spending.md) before enabling changes.
5. Define and test the outcome you will measure. Use [tracking and results](tracking-and-results.md).

## Connect the account

Open **Paid ads** in the [NRS console](https://www.notrealsmart.com.au/console/ads) and select the correct business. Under account settings, NRS shows its Google service identity when configured. The Google account owner grants the appropriate access to that displayed identity; never send a password to a bot. [Google's access guide](https://support.google.com/google-ads/answer/6372672?hl=en-AU) describes its **Admin → Access and security** controls.

For the legacy house-identity connection, NRS staff independently confirm ownership and make the initial binding. For customer-owned OAuth access, the authorised owner can use the agent setup/asset-binding tools after Google consent and successful access verification. Enter the **Google Ads account number**, and **Manager account number (if used)** only when access is through that manager. **Verify account and save** checks the account and AUD currency. An authorised business owner can then manage the permitted campaign budget and reviewed-change setting for the existing binding.

Leave **Allow reviewed campaign changes** off until setup is checked. Turning it on permits the approval workflow; it does not approve a campaign or start one.

## Follow the first campaign journey

[Prepare a paused Search campaign](first-search-campaign.md) → [review budgets](budgets-and-spending.md) → approve a separate activation → [check tracking and results](tracking-and-results.md).

To work through a bot, use [Connect Grok or another AI](../connecting-devices/grok-and-nrs.md). For a failed or unclear result, use [Google Ads troubleshooting](troubleshooting.md).
