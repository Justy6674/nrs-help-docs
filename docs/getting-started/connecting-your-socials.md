---
title: "Connect your social accounts"
description: "Connect the intended profiles and check their current access."
sidebar_position: 4
last_verified: "2026-11-09"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/AccountsHub.tsx", "src/lib/nrs/accounts-overview.ts", "src/components/nrs/ConnectAccounts.tsx", "src/app/console/settings/accounts/connect.ts", "src/app/console/settings/accounts/page.tsx"]
feature_ids: ["nrs.getting-started"]
source_urls: []
---

# Connect your social accounts

Open **Settings → Accounts**. The first tab, **All accounts**, shows every account across every business you can reach in one place:

- each account once, with every business it posts for (one LinkedIn can post for several businesses);
- its current status, checked with the publisher when the page opens: **Can post**, **Sign in again**, or **Not checked** if the publisher did not answer;
- a **Sign in again** button only on an account that needs it;
- filters by business and by platform;
- **Add an account**: choose the business, then the platform, then sign in on that platform;
- a table of which business has which platform, with **Connect** in each gap. An empty cell is a choice, not a fault: connect only where a business should post.

The second tab, **By business**, keeps one card per business with its connection controls, Import, Share and Remove. You must have permission to manage the account being connected.

AI assistants connected to NRS can do the same checks without the browser: they read each account's status and can hand you a sign-in link for a platform. Signing in on the platform is always done by a person.

## Check the result

1. Return to NRS after authorisation.
2. Confirm the displayed profile name and platform.
3. Check its connection or health status.
4. Open Composer and confirm that the correct account is available to select.

Connecting an account is separate from selecting it for a post or report. It also does not mean every format, inbox function or metric is supported. Options depend on the platform, account permissions and the business's configured publishing connection.

NRS normally uses Zernio for these connections. The client continues to work in NRS; a business may use a different configured engine. Do not enter unrelated credentials into a chat or copy another business's account identifiers.

If an account is absent or expired, follow [reconnecting accounts](../troubleshooting/reconnecting-socials.md). A connection label is not evidence that a particular post was published: check its delivery result separately.
