---
title: "Connect ChatGPT to NRS"
description: "Add NRS to ChatGPT by logging in and approving, with no keys to copy."
sidebar_position: 3
last_verified: "2026-11-12"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.connecting-devices"]
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/sign-in.ts", "src/app/oauth/consent/page.tsx"]
source_urls: ["https://developers.openai.com/apps-sdk/deploy/connect-chatgpt", "https://developers.openai.com/apps-sdk/build/auth"]
---

# Connect ChatGPT to NRS

ChatGPT connects to NRS by sending you to a Not Real Smart page where you log in and choose Approve. There is no key to create, copy or paste.

:::info This is new
The sign-in went live on 12 November 2026. It has been tested by NRS, but no customer outside NRS has completed it yet. OpenAI decides which ChatGPT plans can add a custom connection, and its menus can change. If a step looks different, send NRS a screenshot.
:::

## Step 1: ask ChatGPT to add NRS

Open ChatGPT and paste this:

> I want to connect a custom MCP server called Not Real Smart. The address is https://www.notrealsmart.com.au/api/nrs/mcp. Walk me through adding it in my ChatGPT settings one step at a time, and wait for me after each step. If I can't see an option you mention, ask me what I can see instead.

## Step 2: log in and approve

A Not Real Smart page opens. Log in with your usual NRS login. The page shows:

- the app that is asking (ChatGPT) and the address it will return to
- every business your login manages
- what the app will be able to do

Choose **Approve** only if you started this yourself in ChatGPT a moment ago. If someone sent you a link to this page, choose **Do not connect**.

## Step 3: check it worked

Back in ChatGPT, paste this:

> Using Not Real Smart, list my businesses. Then read the Not Real Smart skills list and tell me in plain English what you can help me with.

ChatGPT should name the businesses you manage. For anything else it will ask which business you mean.

## What ChatGPT can then do

It has the same permissions as your own NRS access for the businesses you manage. It can read, prepare drafts and proposals, and publish or change advertising when you tell it to. The existing protections still apply every time:

- you are shown the exact post, ad or amount before anything is published or changed
- spending limits set for the business still hold
- health businesses keep their AHPRA and TGA advertising checks

ChatGPT never receives your password.

## How long it lasts and how to disconnect

The connection lasts 90 days. After that ChatGPT sends you back to the Approve page.

Signing in again from ChatGPT replaces the earlier connection. To disconnect sooner, ask Not Real Smart and it will be switched off.

## If it does not work

| What you see | What it means |
|---|---|
| ChatGPT has no option to add a custom MCP server | Your ChatGPT plan or workspace does not allow it. This is set by OpenAI |
| "This app was not connected" on the NRS page | The request expired or was not valid. Start again from ChatGPT |
| "Your login does not manage any business" | Your login has no business to connect. Ask the business owner to add you as an owner or approver |
| ChatGPT says it is not authorised after working before | The 90 days have passed, or the connection was switched off. Connect again |

Other AI apps that hold a key, such as Claude and Grok, connect differently. See [external AI access keys](api-keys.md).
