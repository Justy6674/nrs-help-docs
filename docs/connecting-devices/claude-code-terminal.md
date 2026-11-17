---
title: "Using a terminal AI client"
description: "Connect a terminal client by browser sign-in or a protected key and verify a read first."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/lib/nrs/harness/oauth-client.ts", "src/lib/nrs/harness/oauth-grants.ts", "src/app/oauth/consent/page.tsx", "src/app/console/settings/agents/page.tsx"]
feature_ids: ["nrs.connecting-devices"]
source_urls: []
---

# Using a terminal AI client

This is an optional connection. You can keep using the NRS desk in your browser.

The current server address is `https://www.notrealsmart.com.au/api/nrs/mcp`. The retired `/api/mcp` address returns 404.

If the client offers browser sign-in, add the server using its current official instructions. NRS supports public-client PKCE sign-in, including a local callback for an app on your device. Check the exact local return address and port on the consent page. An unfamiliar app is labelled unverified; its supplied name proves nothing.

If the client requires a bearer token instead, ask the workspace manager for a named key with the minimum permissions for the intended business. Keep it in the client's protected settings, outside shared project files and command history.

Start with a read-only call. Check the returned business, then review proposals before consequential work. NRS still checks permissions, approvals and publication requirements on every operation. This guide does not certify every terminal client or its current version.

Sign-in access passes last up to 15 minutes and can renew for up to 90 days when ongoing access was requested. Manual keys keep their configured expiry. To stop a sign-in connection, use **Settings → Agents → AI apps signed in as you → Disconnect**. See [key management and sign-in](api-keys.md).

If a call fails, retain the safe error and affected operation. Do not include a token, authorisation code, return URL query or private credential in a support message.
