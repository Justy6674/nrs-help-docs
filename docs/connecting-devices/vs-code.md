---
title: "Using an editor-based AI client"
description: "Check an editor client supports NRS sign-in or protected keys before using business tools."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/lib/nrs/harness/oauth-client.ts", "src/lib/nrs/harness/oauth-grants.ts", "src/app/oauth/consent/page.tsx", "src/app/console/settings/agents/page.tsx"]
feature_ids: ["nrs.connecting-devices"]
source_urls: []
---

# Using an editor-based AI client

An editor connection is optional. NRS does not require a particular VS Code extension.

Use `https://www.notrealsmart.com.au/api/nrs/mcp` in a client that supports remote MCP. NRS supports public-client sign-in with PKCE. It recognises documented hosted callback addresses, local app callbacks and validated client metadata URLs. These server capabilities do not prove that every editor or extension offers a compatible connection.

If your client opens an NRS consent page, use your own login. Check the app, return address, businesses and lifetime before approving a request you started yourself. NRS labels an unverified app; a supplied name alone is not identity proof.

If the client uses a bearer token instead, an authorised manager can issue a named business key in **Settings → Agents → External AI**. Keep it outside source-controlled files and give it only the permissions it needs.

Begin with a read-only task and check the business returned. Review the normal proposal and approval steps before any write or send. A model-selected business name does not grant access to that business.

Sign-in passes last up to 15 minutes. Apps that requested ongoing access can renew for up to 90 days. Disconnect a sign-in in **Settings → Agents → AI apps signed in as you**. See [external AI access keys and sign-in](api-keys.md) for the maintained NRS-side setup.

The retired `/api/mcp` address returns 404. If the client cannot use the current endpoint or supported sign-in method, ask NRS to check compatibility or keep using the NRS desk.
