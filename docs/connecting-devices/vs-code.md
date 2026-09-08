---
title: "Using an editor-based AI client"
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

# Using an editor-based AI client

An editor-based AI connection is optional. The current NRS product does not require a particular VS Code extension or the retired Cowork setup described by the earlier help page.

If your team wants this integration, confirm that its chosen client supports the current HTTP MCP endpoint and bearer-token authentication. An authorised NRS manager issues a business-scoped key through Settings → Agents → External AI.

Keep the key outside source-controlled files and give it only the required permissions. Begin with a read-only task, check the business returned and verify the proposal/approval workflow before enabling writes or sends.

Do not treat a model-selected business name as permission to access a workspace. NRS authorisation remains the boundary. The setup is complete only after the actual client workflow works with the intended permissions; a configuration snippet alone is not proof.

For everyday content and report work, the NRS desk remains the direct route. See [external access keys](api-keys.md) for the maintained NRS-side contract.
