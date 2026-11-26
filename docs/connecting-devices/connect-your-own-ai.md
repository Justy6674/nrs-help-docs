---
title: "Connect your own AI (Claude, ChatGPT, Codex, Gemini)"
description: "Connect the AI you already use to NRS, choose the smaller video tool list, and limit which tools it may use."
draft: true
sidebar_position: 2
last_verified: "2026-11-26"
review_status: "draft"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/api/nrs/mcp/route.ts", "src/lib/nrs/harness/mcp.ts", "src/lib/nrs/harness/mcp-tools.ts", "src/lib/nrs/library-reads/contracts.ts"]
feature_ids: ["nrs.connecting-devices", "nrs.eve"]
source_urls: ["https://code.claude.com/docs/en/mcp", "https://developers.openai.com/codex/mcp", "https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md"]
---

# Connect your own AI

> Draft, checked against NRS and each AI's own setup page on 26 November 2026. Ask Bec or Justin before you rely on
> it for a client.

Your own AI can work in NRS with the same tools as the screens: make and change reels, find your media, prepare a post
for you to check. It works only on businesses your login manages, and nothing is posted without your own yes on the
post's preview.

## The NRS address

Every AI connects to the same address:

`https://www.notrealsmart.com.au/api/nrs/mcp`

That lists every NRS tool (about 140). If your AI is only making videos, add `?tools=video` to the end:

`https://www.notrealsmart.com.au/api/nrs/mcp?tools=video`

That lists only what making a video needs (about 50 tools: the reel tools, your media, tags, your businesses, NRS's
how-to guides, and making a draft post). The list is half the size, so your AI starts faster and has fewer tools to
choose from. A tool left off the list still works if your AI asks for it by name. Leave `?tools=video` off whenever
you want the AI to do everything else too (Google, ads, the inbox, reports).

## Your key

Most AIs connect with a key. Make one in NRS under **Settings → Agents**. An owner key works for every business you
manage; your AI then asks NRS for the list of businesses and names the one it is working on each time. Keep the key
in the AI's own settings, never in a chat, a shared file or a screenshot. ChatGPT signs in instead of using a key (see
below).

## Claude Code

In a terminal:

```
claude mcp add --transport http nrs "https://www.notrealsmart.com.au/api/nrs/mcp?tools=video" --header "Authorization: Bearer <your NRS key>"
```

**Limiting the tools.** Claude Code asks before each tool unless you allow it. In your Claude Code settings, the rule
`mcp__nrs` allows every NRS tool, and a rule like `mcp__nrs__media_make_great` allows one. Put
`mcp__nrs__publish_post` under `deny` if this AI must never post, even with your yes.

## Codex

In Codex's `config.toml`:

```
[mcp_servers.nrs]
url = "https://www.notrealsmart.com.au/api/nrs/mcp?tools=video"
bearer_token_env_var = "NRS_KEY"
tool_timeout_sec = 120
```

Then set `NRS_KEY` to your key in the terminal Codex runs from.

**Limiting the tools.** `enabled_tools = ["media_make_great", "media_render_queue", ...]` keeps only the tools you
name, and `disabled_tools = ["publish_post"]` takes tools away. `default_tools_approval_mode = "writes"` makes Codex
ask you before any tool that changes something.

## Gemini CLI

In Gemini CLI's `settings.json`:

```
{
  "mcpServers": {
    "nrs": {
      "httpUrl": "https://www.notrealsmart.com.au/api/nrs/mcp?tools=video",
      "headers": { "Authorization": "Bearer <your NRS key>" },
      "timeout": 120000
    }
  }
}
```

Gemini's setup page does not say it fills a key in from your environment in `headers`, so the key goes in the file:
keep that file private.

**Limiting the tools.** `"includeTools": ["media_make_great", ...]` keeps only the tools you name, and
`"excludeTools": ["publish_post"]` takes tools away (it wins when a tool is in both).

## ChatGPT

Add a custom connector with the NRS address. A Not Real Smart page opens: log in with your normal NRS login and press
**Approve**. ChatGPT cannot hold a key, so it signs in this way instead. Not checked yet: whether ChatGPT keeps the
`?tools=video` ending; if it does not, it sees every tool, which still works.

## When your AI is making a reel

- Ask it to start with NRS's own how-to: it calls `nrs_skill_read` with `nrs-video`.
- `media_make_great` with your clips makes a reel with a hook, captions, joins, camera moves and music in one step.
  If it answers "listening", the AI asks again about 20 seconds later.
- The first finished video comes from your **Make my video** press on the reel's storyboard page. After that your AI can
  have new versions made.
- Every finished video is checked (size, sound level, words in the frame, contrast) and the AI is told what to fix.
- Asking `search_media` for more than 50 files returns the first 50; ask again with a narrower search for the rest.

## Health businesses

A health business gets NRS's Ahpra and TGA advice whichever AI you use. When your AI prepares a post, the preview lists
each finding with the Ahpra or TGA page it comes from. Nothing is blocked: the post goes ahead after you tick "I've read
this advice and accept responsibility", and your AI must pass your own words for that tick. A second approver is needed
only if the business has switched that on.

## Turning it off

Revoke the key, or switch off a signed-in app, under **Settings → Agents**. The AI is refused on its next call.
