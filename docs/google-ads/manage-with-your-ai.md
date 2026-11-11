---
title: "Manage limits, goals and setup through your AI"
description: "Use your connected AI to manage NRS permissions, Google Ads changes and tracking without database edits."
sidebar_position: 2
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads", "nrs.eve", "nrs.connecting-devices"]
source_files: ["src/lib/nrs/google-control/", "src/lib/nrs/google-ads/", "src/lib/nrs/google-tracking/", "agent/tools/"]
source_urls: ["https://developers.google.com/google-ads/api/docs/api-policy/developer-token", "https://support.google.com/google-ads/answer/10486637?hl=en-AU", "https://developers.google.com/identity/protocols/oauth2/web-server"]
---

# Manage limits, goals and setup through your AI

You can use your connected NRS AI to manage account limits, choose and save outcome goals, connect authorised Google assets, prepare tracking changes and stage ads. The owner reviews the exact proposed change in the conversation and approves it there. You do not need to edit a database, understand internal field names or send the task to a separate coding assistant.

The same tools are available to supported external clients, including a connected Grok client, and NRS's in-app AI. Access is checked for the selected business on every call. Account settings require the workspace owner or an authorised manager and a suitably permitted connection; paid-feature eligibility still applies. Possessing somebody else's account number is not permission to manage it.

## If your AI can prepare a change but cannot apply it

Your connection needs permission to execute changes as well as read and propose them. The workspace owner can authorise that permission for the intended AI connection. This does not replace your approval for an actual spending or publishing change, and the AI cannot grant itself permission.

A pending proposal should stay with the AI connection that prepared it. If it expires, that AI prepares a fresh review. Asking another developer to approve it is not the normal workflow. NRS should retain your existing key when its authorised permissions are corrected. A connection’s saved name does not identify which AI app is using it.

After you approve, the AI applies the exact change and reads back the receipt. It must report an access or sign-in failure clearly rather than claiming success. Google may require you to complete account security or consent yourself; the AI continues the supported setup after that step.

## Change the NRS campaign limit

Say: **“Show my Google Ads limits and current campaign budgets.”**

Your AI reads account settings and the campaign report. It should explain three separate things:

| Control | Meaning |
|---|---|
| NRS permitted campaign ceiling | The largest average daily budget NRS will allow for one campaign |
| Google's campaign budget | The average daily amount actually assigned to that campaign |
| Activation | Whether that campaign is allowed to run and spend |

The NRS ceiling is **not a hard daily limit for the whole account**. Several campaigns can each spend. Google's average daily budgets can also overdeliver; read [budgets and spending](./budgets-and-spending.md).

For example, say: **“Allow campaign budgets up to A$15 a day. Do not activate anything.”** This is an example instruction, not a recommended amount or permission to change your account just because you read it.

The AI prepares a settings proposal showing your business, current ceiling, proposed ceiling in Australian dollars, whether NRS changes remain enabled, and what will stay unchanged. After your actual approval, it applies the saved proposal and reads back the result. This changes the permission ceiling only. Assigning a campaign budget or activating ads is a separate reviewed operation. Lowering this ceiling does not rewrite campaigns that already exist in Google.

If the AI can read but cannot change settings, the owner must authorise the connection with the necessary proposal/send permissions. The AI should explain the missing permission; it must not borrow another account's key or ask you to paste a secret into chat.

## Choose outcomes for your ads

Tell your AI what a successful business outcome means. For example:

- Listings: a completed purchase, supported by the paid order record.
- Swaps: a completed swap as the primary outcome; a first offer can be a secondary funnel measure.
- Marketplace: a signup, if membership acquisition is the objective.
- Collectors: a signup as the primary acquisition outcome; a Premium upgrade can be measured separately.

These are measurement examples, not assertions that the events already exist or have fired. The AI can save your approved definitions and optional Google conversion-action IDs through the settings tools. Saving a definition does **not** create a Google conversion, assign a campaign's optimisation goal, install a tag or prove a sale. The AI must configure supported Google measurement separately and state any missing campaign-goal configuration rather than inventing it.

## Connect and set up tracking

Say: **“Check my tracking setup and take me through what is missing.”**

The AI checks actual prerequisites. If your marketing OAuth app is configured, it can issue a private, short-lived Google authorisation link. Open it yourself, sign into the intended Google account and grant the permissions you approve. You can then return to the conversation and say **“Continue tracking setup.”** The agent-started flow does not require you to find a separate NRS settings screen after consent.

Initial app provisioning remains a real prerequisite. If the business's Google Cloud project or OAuth credentials are missing, the AI provides the secure provisioning link and exact missing requirements. It cannot invent provider credentials, sign in as you, approve Google's consent screen or complete Google's review by assertion. Never paste client secrets, passwords or access keys into chat.

Google Ads developer tokens were retired in September 2026. Current access is managed in the Google Cloud project that owns the OAuth credentials; the current NRS setup does not require you to obtain a legacy developer token. [Google's migration guide](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) explains project access levels.

Once authorised, the AI can prepare the exact Ads/GA4/Tag Manager/site binding for review, including optional initial Ads permission settings in AUD. Google access and the site's brand-kit origin are checked before saving. Independent customers use their own authorised Google credentials; they cannot borrow NRS's internal house identity.

The agent then uses tracking inventory, reviewed Google configuration, preview, installation-source and verification tools. The authorised website agent must install the integration in the actual site and connect the real consent manager and successful business callback. A Google API does not grant access to an arbitrary CMS. Follow [tracking setup](./set-up-tracking-with-your-agent.md) and test actual provider delivery before relying on conversions.

## Disconnect through your AI

Ask the AI to prepare a tracking disconnection. Review and approve it in the conversation. Local disconnection remains available after membership expiry for an otherwise authorised manager. It stops NRS using that grant; it does not remove tags already installed or stop existing campaigns. Google's account permissions can also be revoked directly when offboarding.

## What the AI should call

| Request | Supported NRS tools |
|---|---|
| Read limits and saved goals | `google_account_settings` |
| Prepare/apply an exact NRS limit, goal or asset change | `google_account_propose` → owner approval → `google_account_execute` |
| Read the settings receipt | `google_account_operation` |
| Diagnose setup or request Google consent | `google_tracking_setup` |
| Prepare/apply an actual campaign budget or activation | `google_ads_propose` → owner approval → `google_ads_execute` |
| Configure and verify supported Google tracking | `google_tracking_*` tools |

Keep using your existing NRS connection. If the client caches an old tool list, refresh that connection's discovery once; reinstalling the app or issuing a new key is not the default fix. A pending or uncertain Google operation must be reconciled before rebinding accounts or changing its execution settings. The AI must report what it actually read, saved, submitted and verified as separate states.
