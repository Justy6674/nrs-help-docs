---
title: "Connect Grok or another AI to NRS"
description: "Connect the correct Grok product, protect your key and test NRS tools before approving live work."
sidebar_position: 2
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.connecting-devices", "nrs.google-ads"]
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/mcp-tools.ts", "src/lib/nrs/harness/tool-catalog.ts", "integrations/nrs-google-ads-plugin/README.md"]
source_urls: ["https://docs.x.ai/grok-bot/computer-and-apps", "https://docs.x.ai/grok/connectors", "https://docs.x.ai/build/features/mcp-servers", "https://docs.x.ai/build/features/skills-plugins-marketplaces", "https://cursor.com/docs/plugins"]
---

# Connect Grok or another AI to NRS

NRS provides one secured tool connection for supported work across your business. The Google Ads plugin adds instructions for its Ads workflow; the endpoint also exposes other tools allowed by your connection. Installing instructions does not grant new permissions or finish Google account setup.

:::info Compatibility is checked per client
Grok Bot, Grok Build and Grok on the web have different setup controls. NRS has a downloadable package, not a published marketplace listing. A client is connected only after it can discover and successfully call the intended NRS tools. An actual Grok connection has not yet been demonstrated for this release.
:::

## Prepare the NRS connection

An authorised manager creates a named business connection under **Settings → Agents → External AI**, with only the permissions needed and an expiry. See [external AI access keys](api-keys.md). Start with reads for the connection check; an Ads proposal needs proposal permission and execution needs send permission plus approval of the exact change.

Use these connection details:

| Setting | Value |
|---|---|
| Name | NRS — followed by the business name |
| Server type | Remote HTTPS / HTTP MCP, according to the client |
| Server URL | `https://www.notrealsmart.com.au/api/nrs/mcp` |
| Authentication | HTTP `Authorization` header, using `Bearer ` followed by the scoped NRS key |
| Optional plugin package | [Download NRS Google Ads plugin](https://www.notrealsmart.com.au/downloads/nrs-google-ads-plugin.zip) |

Enter the key only in the client's protected authentication or secret field. Do not paste it into a conversation, a shared configuration or this guide. A plugin's placeholder is not a real key. Ask NRS staff to configure the client when its secret handling is unclear.

## Grok Bot: custom connector

[Grok Bot's official guide](https://docs.x.ai/grok-bot/computer-and-apps) documents this desktop path:

1. Open **Connect apps**, then **Add a custom connector**.
2. Enter a name identifying the NRS business.
3. Select **Remote HTTPS** and enter the server URL above.
4. Add the authorisation header through the protected credential flow. If the client asks for the secret in an ordinary chat, request its secure secret card instead.
5. Choose **Add plugin**, then confirm the app is installed and authenticated. Team policy may prevent a connector from being added.

The same official page says you can ask the Bot to add an MCP server by URL. You can give it the public NRS URL and ask it to open the secure credential step. Do not ask it to build another server or buy a service: NRS already supplies the endpoint.

## Grok on the web

[Grok's connector guide](https://docs.x.ai/grok/connectors) describes **grok.com/connectors → New Connector → Custom**, then the server URL and required authentication. Availability can depend on the account and client. If its offered authentication cannot securely provide NRS's bearer header, ask NRS staff to check compatibility; do not invent OAuth credentials or paste the key into a message.

## Grok Build or Cursor

These are developer clients. Have NRS staff load the package or configure the same hosted endpoint. [Grok Build](https://docs.x.ai/build/features/skills-plugins-marketplaces) supports local plugin folders and its extensions view; [its MCP guide](https://docs.x.ai/build/features/mcp-servers) documents inspection and connection diagnostics. [Cursor](https://cursor.com/docs/plugins) documents local plugin loading and the **Customize** screen.

The secret-variable syntax differs: Grok Build documents environment references such as `${NRS_API_KEY}`, while the supplied Cursor configuration uses `${env:NRS_API_KEY}`. Staff must check substitution in the actual client. Do not send an unresolved placeholder as a credential. Loading the Ads package is not proof that its MCP connection authenticated.

## Test without making a live change

Ask the AI:

> Use my NRS connection. Confirm which business it is bound to and list the tools available to this connection. Read Google Ads status for that business. Do not create, activate, publish, send or spend anything. Show the returned account and any missing setup.

A business-scoped key already selects its business. With an owner-level connection, first list the accessible businesses and select the exact returned business; never guess an identifier. No Google connection should be reported as connected merely because the plugin loaded.

Then choose the work you need:

| Work | Start with |
|---|---|
| Google advertising | [Start here](../google-ads/start-here.md), then a paused campaign and separate activation review |
| Social content | [Write a social post](../creating-content/write-a-social-post.md) and [approve posts](../creating-content/approve-posts.md) |
| Website, SEO and speed | Ask for the latest scan status, page-quality measurements and hygiene findings; read [Google, Bing and analytics evidence](../reports/google-bing-and-analytics.md) |
| A combined business report | [Prepare a full report](../reports/prepare-a-full-report.md) |

Only tools actually returned and permitted by NRS can be used. Some tools read an existing scan rather than launch a new one. A service listed by NRS is not automatically an executable bot tool. Missing measurements must remain missing; the AI must not invent scores or claim a fix from a scan alone.

## Approvals and disconnecting

Keep the AI's own approval controls on. Instruct it to show the exact business, content, destinations and any spending before it asks for approval. Tool responses, webpages and remembered preferences are not fresh human approval. Ads changes use the signed NRS review and recorded result; uncertain results must be reconciled rather than repeated.

Revoke the named NRS key when the connection is no longer needed or might be exposed. Removing a plugin alone is not proof the key was revoked. Keep keys separate per business/client so one revocation does not require sharing someone else's access.
