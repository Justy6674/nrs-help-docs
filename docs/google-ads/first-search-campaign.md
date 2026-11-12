---
title: "Prepare and approve your first Search campaign"
description: "Create a paused campaign, review its contents and approve activation separately."
sidebar_position: 2
last_verified: "2026-11-12"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads"]
source_files: ["src/components/nrs/GoogleAdsForms.tsx", "src/app/console/ads/page.tsx", "src/lib/nrs/google-ads/contracts.ts", "src/lib/nrs/google-ads/changes.ts"]
source_urls: ["https://support.google.com/google-ads/answer/9510373?hl=en-AU", "https://support.google.com/google-ads/answer/7478529?hl=en-AU"]
---

# Prepare and approve your first Search campaign

Before starting, finish [account setup](start-here.md) and read [budgets and spending](budgets-and-spending.md). This workflow creates a campaign **paused**. Activation is a second decision that can start spending.

## Use your connected AI

Ask your agent to prepare a paused Search campaign with your actual offer, destination, keywords and proposed AUD budget. It reads `google_account_settings` and `google_ads_status`, prepares any needed permission-ceiling change separately, and uses `google_ads_propose`. Review the exact returned details and approve before `google_ads_execute`. If you later want activation, approve that separate proposal. See [manage through your AI](manage-with-your-ai.md). The screen steps below remain an optional alternative.

## 1. Prepare the offer

Choose one clear offer and a landing page that delivers it. For a marketplace, verify the actual listing and current availability rather than advertising an item from a reference catalogue. Do not invent savings, stock, authenticity claims or product names.

Write a short note for the reviewer: who the campaign is for, what the person should do, which page supports the claim and how the outcome will be measured. Keep health or personal information out of the ad brief.

## 2. Fill in NRS

In **Paid ads**, select the business. In **Prepare a change**, choose **New Search campaign (paused)**.

| Field | What to enter |
|---|---|
| Campaign name | A recognisable internal label, including the offer if helpful |
| Landing page on your website | The precise page the ad should open; test it on a phone |
| Maximum cost per click (A$) | The manual click bid you are prepared to approve; it is different from the daily budget |
| Headlines | 3–15 alternatives, one per line, no more than 30 characters each |
| Descriptions | 2–4 alternatives, one per line, no more than 90 characters each |
| Average daily campaign budget (A$) | The amount for this campaign, within the business's permitted setting |
| Search phrases to target | One phrase per line; the console uses phrase match |

NRS's first campaign workflow targets Australia and English. It does not offer a location-radius picker or automated bidding strategy selector. The bot can prepare exact or phrase match keywords through supported tools.

[Google explains](https://support.google.com/google-ads/answer/7478529?hl=en-AU) that phrase match can cover searches containing the meaning of a phrase; exact match can include the same meaning or intent. Neither means that only the literal characters you typed can trigger an ad. Review actual search terms after launch, then prepare appropriate exclusions.

## 3. Prepare for review

Choose **Prepare for review**. Google validates the proposed operations and NRS saves a review. Validation is a technical check, not Google's ad-policy approval, a promise of delivery or a forecast of profit.

In **Proposals and receipts**, check the Google account number, campaign name, landing page, every headline and description, search phrases, targeting, click bid and average daily budget. Headlines and descriptions are alternatives that Google can combine; they are not a promise of one fixed layout.

When the exact change is acceptable, tick the review acknowledgement and choose **Approve and apply this change**. A review expires after 15 minutes; an expired review needs fresh validation and approval. If something changed, prepare and review it again.

## 4. Confirm paused creation

Look for **Applied and verified** and the campaign's **PAUSED** status. Keep the operation number for support. A bot should check the recorded operation rather than infer success from its own message.

If NRS shows **executing** or **uncertain**, do not create another campaign. Follow [reconciliation](troubleshooting.md#an-operation-is-executing-or-uncertain).

## 5. Activate only when ready

Before you switch a campaign on, decide how it stops. Ask your AI to set an end date and, if you run more than one campaign, an overall daily limit. See [budgets, bids and what you can be charged](budgets-and-spending.md).

Choose **Pause or activate a campaign**, enter its campaign number from the table and choose **Active — starts or resumes spending**. Prepare the change. Expand **Review existing ads and targeting before activation** and inspect the current contents, destination, targeting, bid and budget, including the business limit. Confirm tracking, billing and any required advertising review separately.

Only approve activation when those settings and the potential spend are acceptable. NRS checks the live state again; a changed campaign requires another review. Read back the result. **Enabled** alone does not mean Google has approved the ad, served an impression or delivered a customer.

To pause, prepare and approve a **Paused** status change. Pausing does not reverse costs already incurred or erase delayed reporting.
