---
title: "External AI access keys"
description: "Connect an AI app by NRS sign-in or a protected access key, then check its business access."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/lib/nrs/harness/oauth-client.ts", "src/lib/nrs/harness/oauth-grants.ts", "src/app/oauth/consent/page.tsx", "src/app/console/settings/agents/page.tsx"]
feature_ids: ["nrs.connecting-devices"]
source_urls: []
---

# External AI access keys

Use the connection method your AI app offers. Apps that support **Sign in with NRS** open an NRS login and consent page. Clients that accept a bearer token can use a named access key.

The server address is `https://www.notrealsmart.com.au/api/nrs/mcp`. The retired `/api/mcp` address returns 404. Changing your password does not repair an old server address.

## Connect an app through NRS sign-in

1. Add the server address in your AI app's MCP connection settings.
2. Sign in on the Not Real Smart page with your own NRS login.
3. Check the app, return address and businesses on the consent page. Approve only a request you started yourself.
4. Ask the AI to list your businesses, select the intended one and complete a read-only check.

NRS recognises documented hosted callback addresses for ChatGPT, Claude and Cursor. Other supported public clients can register an HTTPS callback or use a local callback for an app on your device. Apps can also identify themselves through a client metadata URL, called CIMD. NRS validates that metadata before showing consent. A supplied app name alone does not establish its identity.

An unverified app is labelled on the consent page. Check its origin and complete return address, including the port for a local app. Do not approve a request you do not recognise.

These sign-in methods use PKCE S256 to bind the return to the app that started it. NRS does not issue a client secret or support `private_key_jwt` authentication. If your app requires those, ask NRS to check compatibility rather than adding another person's credentials.

The sign-in is live, but each AI client still needs its own successful connection and business-read check. Support in NRS does not prove that every client, plan or organisation exposes a compatible setup screen. See the [ChatGPT guide](chatgpt-and-nrs.md), [Claude guide](claude-desktop.md) or [terminal client guide](claude-code-terminal.md).

## Manage a sign-in connection

Access passes last up to 15 minutes. If the app requested ongoing access, it can renew them securely for up to 90 days. Without ongoing access, connect again when the short pass ends. NRS can require fresh consent after expiry, disconnection or an invalid renewal.

Open **Settings → Agents → AI apps signed in as you**. Find your app and choose **Disconnect** to stop that connection. A later connection needs a new sign-in and approval.

A sign-in reaches businesses you own or manage as an owner or approver. Author-only membership does not grant that access. NRS checks business access again when tools run; a connection does not preserve permissions after they are removed.

## Create a key for a client that accepts one

Where external AI access is enabled, an authorised manager opens **Settings → Agents → External AI**. Create a named connection for one business. Choose only the permissions it needs and an appropriate expiry.

The token is shown once. Store it in the approved client's protected secret settings. Do not paste it into a chat, shared project file or support screenshot. Manual keys keep their own permissions and expiry; the short sign-in pass lifetime above does not change existing keys.

Read permission allows supported reads. Proposal, write and send permissions control additional operations. The normal previews, business authorisation and approval checks still apply.

Revoke a key when it is no longer needed or may be exposed. Confirm which connection used it before issuing a replacement.
