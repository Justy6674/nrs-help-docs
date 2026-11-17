---
title: "Using Claude Desktop with NRS"
description: "Connect Claude through an available sign-in method, then verify the intended business."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/lib/nrs/harness/oauth-client.ts", "src/lib/nrs/harness/oauth-grants.ts", "src/app/oauth/consent/page.tsx", "src/app/console/settings/agents/page.tsx"]
feature_ids: ["nrs.connecting-devices"]
source_urls: ["https://claude.com/docs/connectors/building/authentication.md"]
---

# Using Claude Desktop with NRS

Use `https://www.notrealsmart.com.au/api/nrs/mcp` when Claude offers a remote MCP connection. The retired `/api/mcp` address returns 404.

NRS supports public-client sign-in with PKCE, including documented Claude callback addresses and validated client metadata URLs. A particular Claude account or organisation still needs its own successful connection test. The available menus and static-header options depend on Claude.

## Connect through NRS sign-in

1. Add the server address through Claude's available connector settings.
2. Sign in on the NRS page with your own login.
3. Check the app, return address, businesses and lifetime before approving a request you started.
4. Ask Claude to list your businesses and make a read-only check for the intended business.

A supplied name is not identity proof. Check the warning and origin if NRS labels an app unverified. If Claude does not offer a compatible connection, ask NRS to check your setup or keep using the NRS desk.

Access passes last up to 15 minutes. Ongoing access, when requested, can renew for up to 90 days. Disconnect your app in **Settings → Agents → AI apps signed in as you**. NRS checks current business access on each tool call.

If your organisation uses a supported static-header connection instead, an authorised manager can issue a scoped key. Keep it in Claude's protected credential settings. Never share a staff session or create a public proxy to work around missing client support.

Use [external AI access keys and sign-in](api-keys.md) for the full NRS-side setup. A working connection does not approve a send, publication or expense.
