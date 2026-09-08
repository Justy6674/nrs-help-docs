---
title: "Reconnect a social account"
description: "Restore access to the intended profile before retrying delivery."
sidebar_position: 2
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/console/settings/accounts/page.tsx", "src/app/console/settings/accounts/connect.ts", "src/app/console/posts/page.tsx"]
feature_ids: ["nrs.troubleshooting"]
source_urls: []
---

# Reconnect a social account

Open **Settings → Accounts** and find the affected business and profile. Read its current connection status. A profile can remain listed after its permissions or token stop working.

Use the available reconnect or connect flow for that network. Sign in as someone allowed to manage the intended profile and grant the permissions required for the task. Return to NRS and verify the exact account name and health result.

## Before retrying a post

Inspect the existing post and each target's outcome. Reconnecting an account does not itself resend a failed post, and a timeout may have occurred after a provider accepted it. Reconcile an unknown result before creating another release.

If the profile still does not appear, check its management permissions and whether it was connected to the correct business. Do not substitute a similarly named account.

Record the affected platform, business and safe error when requesting help. Do not send login credentials or ask someone else to publish using your personal session.
