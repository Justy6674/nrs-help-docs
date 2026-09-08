---
title: "External AI access keys"
description: "Issue a scoped key for an approved external AI connection."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/console/settings/agents/page.tsx", "src/app/console/settings/agents/principal-actions.ts", "src/app/api/nrs/mcp/route.ts"]
feature_ids: ["nrs.connecting-devices"]
source_urls: []
---

# External AI access keys

Where external AI access is enabled, an authorised manager uses **Settings → Agents → External AI** to create a named connection for one business. Choose only the permissions that connection needs and set an appropriate expiry.

The token is shown once when created. Store it in the approved client's secret settings. It is not an ordinary user password and should not be pasted into a chat, public document or support screenshot.

## What the permissions mean

Read access permits supported reads. Proposal, write and send permissions govern additional operations; the normal business authorisation and approval checks still apply. A key does not bypass compliance or grant access to every business.

Revoke a key when it is no longer needed or may be exposed. Confirm which tool used it before issuing a replacement. Revoking one connection should not require sharing another person's key.

The current scoped endpoint is `/api/nrs/mcp`. Old `/api/mcp` and `nrs_sk_` onboarding instructions are retired. External-client compatibility still needs an accepted setup for that client.
