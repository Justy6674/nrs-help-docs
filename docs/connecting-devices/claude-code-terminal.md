---
title: "Using a terminal AI client"
description: "Understand the supported access boundary before connecting another AI client."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/console/settings/agents/page.tsx", "src/app/console/settings/agents/principal-actions.ts", "src/app/api/nrs/mcp/route.ts"]
feature_ids: ["nrs.connecting-devices"]
source_urls: []
---

# Using a terminal AI client

This is an optional technical integration, not a requirement for using NRS.

Ask the workspace manager to issue an external-AI key for the intended business and minimum required permissions. The current NRS endpoint is `https://www.notrealsmart.com.au/api/nrs/mcp`, using an `Authorization` bearer token with the supported HTTP MCP transport.

Configure the client using its current official instructions. Keep the key in the client's protected settings rather than a shared project file or command history. Do not reuse the retired `/api/mcp` instructions.

Verify a read-only call first. Check the business and returned scope, then test proposals before enabling consequential actions. NRS still checks permissions, approval and release requirements when tools execute.

If a call fails, retain the safe error and operation details without exposing the token. A connected terminal client does not become an unrestricted agency operator. Use [key management](api-keys.md) to revoke or replace its access.
