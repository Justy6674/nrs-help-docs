---
title: "Using Claude Desktop with NRS"
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

# Using Claude Desktop with NRS

Use NRS in the browser unless an external Claude connection has been configured and verified for your workspace. The old automatic NRS OAuth connector walkthrough is not the current access contract.

An authorised NRS manager can issue a scoped external-AI key. The current connection uses the NRS MCP endpoint with a bearer token. Whether a particular desktop client supports that configuration depends on its current transport and authentication capabilities; do not assume an “Add connector” screen accepts it.

Agree the business, allowed tools and approval path before connecting. Start with a read-only operation and verify that it returns only the intended business's information. A successful connection is not authorisation to send or publish.

Use [external access keys](api-keys.md) for the NRS side of the setup. If the client cannot support it, keep the workflow in the NRS desk rather than improvising a public proxy or sharing a staff session.
