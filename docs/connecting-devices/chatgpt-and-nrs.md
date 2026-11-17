---
title: "Connect ChatGPT to NRS"
description: "Add NRS to ChatGPT by logging in and approving, with no keys to copy."
sidebar_position: 3
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.connecting-devices"]
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/lib/nrs/harness/oauth-client.ts", "src/lib/nrs/harness/oauth-grants.ts", "src/app/oauth/consent/page.tsx", "src/app/console/settings/agents/page.tsx"]
source_urls: ["https://developers.openai.com/apps-sdk/deploy/connect-chatgpt", "https://developers.openai.com/apps-sdk/build/auth"]
---

# Connect ChatGPT to NRS

ChatGPT can connect by opening an NRS login and consent page. There is no key to create, copy or paste for this sign-in method.

:::info Check your ChatGPT setup
NRS sign-in is live. A complete ChatGPT journey still needs verification for your account. OpenAI controls which plans and organisations can add a custom connection. If an option is missing, ask NRS to check that client instead of sharing a staff login.
:::

## Ask ChatGPT to add NRS

Open ChatGPT and paste this:

> I want to connect a custom MCP server called Not Real Smart. The address is https://www.notrealsmart.com.au/api/nrs/mcp. Walk me through adding it in my ChatGPT settings one step at a time, and wait for me after each step. If I cannot see an option you mention, ask me what I can see instead.

Use the full address above. The retired `/api/mcp` address returns 404.

## Check the consent page

Sign in with your own NRS login. Check these details before you choose **Approve**:

- the app and address it returns to
- every business your login manages
- the permissions and connection lifetime

A supplied app name does not prove who made it. NRS labels an unverified app and shows its origin and full return address.

Approve only if you started this request in ChatGPT a moment ago. If someone sent you the link, choose **Do not connect**. If your login manages no business, the page does not offer approval. Ask the business owner to check your membership.

## Check the selected business

Back in ChatGPT, ask:

> Using Not Real Smart, list my businesses. Then read the Not Real Smart skills list and tell me what you can help me with. Do not publish, spend or change anything.

Check that the list is yours. Name the intended business before the next task. A business you cannot manage must not become available through the connection.

The existing protections still apply: you review the exact post, ad or amount before consequential work, spending limits still hold, and health businesses keep their AHPRA and TGA advertising checks. A successful read does not approve a later publication or expense. ChatGPT never receives your password.

## Renew or disconnect the connection

Access passes last up to 15 minutes. If ChatGPT requested ongoing access, it can renew them securely for up to 90 days. If it did not, it needs a new connection after the short pass expires.

To disconnect, open **Settings → Agents → AI apps signed in as you**, find the app and choose **Disconnect**. A later connection requires fresh sign-in and consent. Business access is checked again on each tool call.

## Resolve a failed connection

| What you see | What to check |
| --- | --- |
| No option to add a custom MCP connection | Check your ChatGPT plan and organisation settings with OpenAI |
| 404 at the server address | Use the full `/api/nrs/mcp` address above |
| This app was not connected | Start a fresh request from ChatGPT and check its return address |
| Your login does not manage any business | Ask the business owner to check your owner or approver membership |
| The app asks you to sign in again | The connection may have expired, been disconnected or failed renewal. Start a fresh sign-in |
| A previously visible business is missing | Ask the owner to check your current access; do not switch to someone else's key |

For another AI client or an existing key, use [external AI access keys and sign-in](api-keys.md).
