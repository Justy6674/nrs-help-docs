---
title: "Hashtag suggestions and where they come from"
description: "Hashtags from your own results, the brands you tag, and TikTok's ad recommendations, each with its source."
sidebar_position: 14
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/hashtag-sources/", "src/components/nrs/ComposerHashtagSources.tsx"]
feature_ids: ["nrs.creating-content", "nrs.eve"]
source_urls: ["https://zernio.com/openapi.yaml"]
---

# Hashtag suggestions and where they come from

NRS does not present a trending-hashtag list. Every suggestion says where it came from, so you can judge whether it fits your post.

In the composer, under **How each destination posts it**, press **Find hashtags**.

| Source | What it is |
|---|---|
| Your best performers | Hashtags on your own published posts, with their median engagement against your usual. NRS needs five posts with results for that hashtag before it calls the hashtag measured |
| Your saved groups | Your own hashtag groups |
| Used recently by | Hashtags in the last 90 days of posts from brands confirmed on your Tags page (Instagram) |
| TikTok ad recommendations | TikTok's own recommendations for ad targeting, when a TikTok ads account is connected |

When a source cannot be read, the panel says why (for example, no posts with results yet, or no Instagram account connected through Facebook). A hashtag on a post that did well may not be why it did well.

NRS does not give these suggestions a relevance score based on your draft. Review the source and choose the hashtags that fit what you are posting.

Tick the ones you want and press **Add ticked hashtags**: they go at the end of that network's words only.

Your own AI can ask for the same list with the tool `hashtag_suggest`.
