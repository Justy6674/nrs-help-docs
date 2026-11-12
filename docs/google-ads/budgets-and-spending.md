---
title: "Budgets, bids and what you can be charged"
description: "Understand Google's average daily budgets and what the NRS limit does and does not control."
sidebar_position: 3
last_verified: "2026-11-12"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads"]
source_files: ["src/components/nrs/GoogleAdsForms.tsx", "src/lib/nrs/google-ads/contracts.ts", "src/lib/nrs/google-ads/workflow.ts"]
source_urls: ["https://support.google.com/google-ads/answer/10486637?hl=en-AU", "https://support.google.com/google-ads/answer/10487143?hl=en-AU", "https://support.google.com/google-ads/answer/6385083?hl=en-AU"]
---

# Budgets, bids and what you can be charged

**NRS limits cap the budgets you set through NRS. They are not a guaranteed cap on what Google charges.** Understand these controls before approving activation or a budget change.

## Set the NRS limit through your AI

Ask your connected AI to show the current limit and prepare the exact new amount in AUD. It uses `google_account_settings`, then `google_account_propose` with `ads_limits`, and applies the saved proposal with `google_account_execute` only after your approval. You do not need SQL, internal field names or a separate coding assistant. This changes the allowed ceiling, not existing campaign budgets or activation. See [manage through your AI](manage-with-your-ai.md) for short example instructions and permissions.

## Four different amounts

| Setting | Meaning in NRS |
|---|---|
| Maximum permitted average daily campaign budget | The largest configured average daily budget NRS will permit for an individual campaign in this business |
| Average daily campaign budget | The setting assigned to one campaign; Google can spend unevenly across days |
| Overall daily limit (optional) | The largest combined average daily budget NRS will permit across every campaign that is switched on. Empty unless you set it |
| Maximum cost per click | The manual bid used when NRS creates the Search ad group; it does not reserve a number of clicks or guarantee customers |

The first limit applies per campaign: without an overall daily limit, several active campaigns can each spend up to it. Set the overall daily limit when you want one ceiling across all of them. With it set, NRS refuses to switch on a campaign or raise a budget that would take the combined budgets past it; pausing and lowering are never refused. Existing campaigns, changes made directly in Google and other account activity need review in Google Ads as well.

## Stop on a date

NRS cannot stop a campaign when total spend reaches a figure. To cap a run, set an end date: tell your AI the last day, in your own time zone, and approve the stop time it shows you. As a guide, four campaigns at A$10 a day each have combined budgets of A$40 a day, so seven days is about A$280.

Your Google Ads account keeps the time zone it was opened with. If that differs from your business's time zone, the campaign stops at the latest moment Google allows that is not after the end of your last day. See [manage with your AI](manage-with-your-ai.md).

## Google's spending limits

For most average-daily-budget campaigns, Google describes a billed daily limit of up to **twice** that average and a monthly limit normally based on **30.4 times** it. For example, an unchanged A$10 average daily budget generally corresponds to up to A$20 on a day and A$304 over a full month. This is an illustration, not a recommended budget. Starting partway through a month or changing the budget changes the calculation; check Google's budget report. [Google: spending limits](https://support.google.com/google-ads/answer/10486637?hl=en-AU).

Lowering a budget later in the same day does not necessarily lower that day's maximum: Google uses the highest average daily budget selected that day for the daily calculation. The remaining monthly calculation responds differently. [Google: how budget changes take effect](https://support.google.com/google-ads/answer/10487143?hl=en-AU).

## Review before approving

1. Check the exact account and campaign. A similar campaign name is not enough.
2. Check the proposed average daily amount. For edits, compare the old and new values. For activation, inspect the existing amount being enabled.
3. Consider all other active campaigns in the account and the total commitment you are comfortable with.
4. Check whether anyone is also changing settings directly in Google. NRS cannot lock Google's own interface.
5. Read the spend notice before approving. A new paused campaign and its later activation are separate approvals.

Do not ask a bot to raise a budget just because a recommendation says it could get more traffic. First check the offer, tracking, search terms and actual business outcome. A forecast is not an instruction to spend.

## If spend looks unexpected

Compare the same campaign, account currency, reporting timezone and dates in NRS and Google Ads. Use Google's billing and budget views to distinguish reported advertising cost from the amount and timing of a charge. Stop approving further changes until the difference is understood. If needed, prepare a reviewed pause, then check its result.

Keep the campaign and operation numbers, dates and relevant amounts for NRS support. Do not include payment-card details or access keys in a screenshot. See [tracking and results](tracking-and-results.md) and [troubleshooting](troubleshooting.md).
