---
title: "Set up tracking with your AI agent"
description: "Connect your own Google marketing account, review the exact tracking change and prove real business outcomes."
sidebar_position: 5
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.google-ads", "nrs.eve"]
source_files: ["src/lib/nrs/google-tracking/", "src/app/tracking/page.tsx", "src/app/api/nrs/tracking/", "agent/tools/google_tracking_execute.ts"]
source_urls: ["https://developers.google.com/google-ads/api/docs/conversions/getting-started", "https://developers.google.com/tag-platform/security/guides/consent", "https://developers.google.com/data-manager/api/reference/rest/v1/events/ingest", "https://support.google.com/adspolicy/answer/6169371?hl=en"]
---

# Set up tracking with your AI agent

NRS has a tracking workflow for eligible paid workspaces and the NRS owner. It lets a connected agent inspect Google tracking, prepare configuration for your review, apply an approved change and read the result back. Customer Google authorisation, website installation and a real outcome test are still required. This guide does not mean your website is already tracked or Google has approved your business's proposed use.

Use [manage through your AI](manage-with-your-ai.md) for the owner-controlled limits, saved goals, one-use Google consent link and reviewed asset binding workflow. Ask the agent to call `google_tracking_setup`; do not assume you must find manual NRS controls.

## 1. Decide what counts

Choose the business outcome before installing anything: a completed paid order, a successful enquiry or a confirmed booking. Decide which business record proves success, what value and currency to send, and how to recognise duplicate, cancelled and refunded orders.

For ScentSell, distinguish a completed transaction from a catalogue search or product-page view. Keep customer names, email addresses, private messages and sensitive information out of advertising chats and event fields.

## 2. Check workspace access

Ask your NRS-connected agent: **“Check Google tracking access for this workspace and give me its setup link.”** The link opens the signed-in tracking settings. The agent cannot choose a different customer by supplying someone else's account number.

NRS attaches paid access to a settled membership invoice for that exact workspace and an expiry date. A quote or an amount entered in billing is not payment. Refunds, voided invoices, expiry and revocation can remove access. The NRS owner workspace is included. NRS administration can resolve a missing membership entitlement without creating a new advertising charge.

## 3. Authorise your own Google marketing account

Use your business's Google Cloud marketing project and OAuth web app, separate from clinical systems. NRS stores the app details through the protected settings form. Never paste the client secret, refresh token into Grok or another agent chat.

Your Google administrator must enable the required Google APIs and configure the exact redirect address shown by NRS. Select **Authorise with Google**, sign into the intended business account and review the requested permissions. Google account roles, API access levels, OAuth verification and any required review of a secondary interface are separate requirements. NRS cannot obtain these by asserting that your app is approved. [Google's programmatic-use policy](https://support.google.com/adspolicy/answer/6169371?hl=en) governs the proposed downstream use.

Then select the Ads customer and optional GA4 property and Tag Manager account/container. Use numeric API IDs; a public `GTM-…` installation ID is different from a numeric container API ID. The website must match the workspace's brand kit. NRS checks Google access before saving the binding.

## 4. Inspect before changing

Ask the agent to inspect existing conversion actions, the effective conversion-owning account, GA4 key events and Ads links, and any Tag Manager setup. Keep one primary measurement route for the same business outcome. Counting both a direct Ads conversion and an imported GA4 event as primary can inflate totals.

Google's [conversion API guide](https://developers.google.com/google-ads/api/docs/conversions/getting-started) explains conversion ownership. A manager account can own conversions used by a child account. NRS must review the effective owner before a change.

## 5. Review one exact change

The agent can propose conversion configuration, auto-tagging, GA4 key events or an Ads link, a Tag Manager workspace/tag/version, or a consented offline event. It must show the account, exact change, before-state and warning before requesting your instruction to execute it.

A review expires. If account permissions, website binding or Google settings change, obtain a new review. A connection, an earlier build instruction or a review token is not approval of a new live change. Tag Manager publication needs its own proposal and approves the **entire container version**, including existing third-party tags. Inspect every tag, trigger, variable, template and consent setting before publication.

If NRS reports **executing** or **uncertain**, do not ask another bot to repeat the change. Ask it to inspect the operation and reconcile it. NRS saves receipts and reads Google without resending the write. An interrupted execution waits five minutes before recovery; an unresolved result can require NRS staff to inspect the original account.

## 6. Install on the actual website

The agent can produce a website integration file, its fingerprint and installation instructions. Generating that file does not install it. The website developer or an authorised agent with access to the actual website must review and apply it.

Choose one base-tag route: a direct Google tag or Tag Manager. Inspect existing tracking first. Connect the generated consent adapter to your actual consent manager, then call the outcome callback only after the website confirms the successful order or enquiry. Send a stable transaction ID, value and currency. Use trusted catalogue item IDs and prices for ecommerce. With Tag Manager, review the corresponding data-layer mappings in the workspace; a generic event tag alone does not guarantee correct purchase value or transaction mapping.

The generated integration starts with denied consent and loads its base script only after permitted choices. It does not create a consent banner or determine the applicable consent requirements. Consent mode controls Google's tag behaviour; it does not collect permission on your behalf. [Google's consent guide](https://developers.google.com/tag-platform/security/guides/consent) explains the distinction.

## 7. Prove delivery

Complete an authorised test through the real website, then inspect Tag Assistant and GA4 DebugView. Check the destination, event, transaction ID, value, currency and consent choices against the business record. Test declined and withdrawn consent, reloads, repeated callbacks and failed/cancelled checkout too.

Ask the agent to verify the exact purchase transaction in GA4. NRS distinguishes a matching Analytics report from ad attribution and does not turn an empty or delayed report into success. Its report verification uses a date range; it does not independently prove the exact event timestamp or that an ad caused the purchase. For enquiries and other non-purchase events, use Tag Assistant/DebugView because the transaction dimension is not reliable for them.

Offline events use Google's Data Manager API with explicit consent, validation and a stable transaction ID. A request receipt means submission was accepted; a later processing result is separate. Even a successful processing result does not prove ad attribution. [Google's ingestion reference](https://developers.google.com/data-manager/api/reference/rest/v1/events/ingest) describes that lifecycle. Do not upload invented click IDs, consent or sales.

## Disconnect and hand over

The workspace manager can disconnect tracking in NRS even after paid access expires. This stops NRS using the local grant. Remove the app in Google Account permissions too when no longer required, and separately review any tags already published on the website. Disconnecting NRS does not remove those tags or stop existing ad campaigns.

Record the last verified test, business outcome definition, measurement route, known delays and remaining checks. Use [tracking and results](./tracking-and-results.md) when reviewing campaign performance; change spending only against verified business evidence and a separately approved budget.
