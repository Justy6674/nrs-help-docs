---
title: "Google Ads troubleshooting and unclear results"
description: "Know what to check when setup fails, an ad does not run or an operation has an uncertain outcome."
sidebar_position: 5
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads"]
source_files: ["src/app/console/ads/page.tsx", "src/app/console/ads/actions.ts", "src/lib/nrs/google-ads/workflow.ts", "src/lib/nrs/google-ads/store.ts"]
source_urls: ["https://support.google.com/google-ads/answer/6327680?hl=en-AU", "https://support.google.com/google-ads/answer/6372672?hl=en-AU"]
---

# Google Ads troubleshooting and unclear results

Start with the exact business, Google account number, campaign number and NRS operation number. Keep keys, passwords and payment details out of support messages.

## Start with the agent’s actual tools

Ask the agent to inspect `google_account_settings` and `google_tracking_setup`. A permitted owner connection can propose and apply limits, goal definitions and verified asset bindings without database edits or a separate coding assistant. If it cannot discover these tools, refresh its existing NRS tool discovery once. Missing provider credentials, Google consent, ownership permission and a stale tool list are different problems.

## Setup or preparation fails

| What you see | Next check |
|---|---|
| Google Ads is not enabled in NRS yet | Ask the AI to inspect google_tracking_setup and finish the supported consent/binding flow; initial app provisioning may need NRS administration. Reinstalling the plugin does not enable provider access |
| No business or wrong business | Check the login or business-bound connection; do not use another business's key |
| Account cannot be verified | Confirm the correct Ads account and manager, Google's granted access and AUD currency with NRS staff |
| Account settings cannot be changed | Use google_account_settings/propose/execute for the owner’s reviewed limit. Use google_tracking_setup and verified customer-owned OAuth asset binding for account changes; legacy house-identity initial binding still needs NRS staff |
| No **Prepare a change** form | The business owner needs the verified account, website and reviewed-change setting in place |
| Google rejects the proposal | Read the returned reason; correct the proposed fields rather than repeatedly submit it |
| Review expired or state changed | Prepare and inspect a fresh review; the old approval does not transfer |
| Bot can read but cannot prepare or apply | Check the issued permissions; do not upgrade them simply to remove a warning |

## An operation is executing or uncertain

**Do not repeat the request or create a second campaign.** A timeout may occur after Google accepted the first request.

NRS blocks further account changes while the outcome is unresolved. In **Proposals and receipts**, choose **Check and reconcile result**. A bot can use its read-only reconciliation tool. An interrupted execution needs a five-minute wait before recovery; waiting does not approve another submission.

Reconciliation reads Google and compares the result with the saved review. It does not resend the change. If NRS cannot confirm the intended outcome, the block remains. Give NRS support the operation number and the visible status. Do not ask a bot to force-unlock it or rename the campaign to bypass the protection.

| NRS status | What it establishes |
|---|---|
| Awaiting approval / proposed | A saved proposal exists; no execution is established |
| Executing | Submission is in progress or its final outcome has not been recorded |
| Uncertain | NRS cannot yet confirm the exact outcome; investigate and reconcile |
| Applied and verified / succeeded | NRS recorded Google's receipt and checked the relevant result |
| Failed | The attempt is retained as failed; any retry needs a fresh review and approval |

## Campaign is enabled but no ad appears

Campaign status, ad approval and delivery are different. Open Google Ads to inspect the ad's status and full **Policy details**. Google says most ad reviews finish within one working day, with longer cases possible. **Disapproved** means the ad cannot run; **Eligible (limited)** indicates restrictions. [Google's status guide](https://support.google.com/google-ads/answer/6327680?hl=en-AU) explains its current labels and review guidance.

Do not activate a paused campaign just to test whether Google will review it unless you have approved the resulting spend. Check account and billing status, destination, targeting, search volume and bid constraints with NRS staff. Do not repeatedly edit an ad while it is under review.

Google policy approval is separate from any required business, health-advertising or legal review. See [how advertising review works](../compliance/how-compliance-works.md).

## Numbers look wrong

Check the same dates, timezone, account and campaign before comparing reports. A missing field is not a zero, recent figures can change, and attributed conversions are not automatically verified customers. Follow [tracking and results](tracking-and-results.md) before increasing the budget.
