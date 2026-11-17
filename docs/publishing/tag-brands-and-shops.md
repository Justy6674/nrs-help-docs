---
title: "Tag the brands, shops and people you mention"
description: "Keep a list of the brands, shops and people your business tags, with their checked accounts, and tag them in posts."
sidebar_position: 12
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/tag-library/", "src/app/console/settings/tags/", "src/components/nrs/TagLibrary.tsx", "src/components/nrs/ComposerTags.tsx"]
feature_ids: ["nrs.publishing", "nrs.creating-content", "nrs.eve"]
source_urls: ["https://zernio.com/openapi.yaml"]
---

# Tag the brands, shops and people you mention

Each business keeps its own list of the brands, shops, collaborators and people it tags. NRS finds names in your videos and drafts, checks their accounts, and suggests tags when you write a post. Confirmed accounts start ticked; accounts that need checking start unticked. Suggestions change the draft only when you apply the selection.

Availability depends on your business’s connected accounts and your access. A returned account can remain **Check** until its website or a person’s confirmation provides the required proof. A successful account check can also report that the website could not be read; that does not confirm an account.

## The Tags page

Open a business, then **Media → Tags**.

- **Names found**: names NRS heard in a video, read on screen, or saw in a draft. For each one choose **Keep as same** (it is a name you already have), **New** (add it), or **Not a name**. NRS never adds anyone for you, and never adds customers.
- **Add a name**: the name, what it is (brand or house, shop, collaborator, person, other), and its own website. Add a person only if they are happy to be tagged.
- **Check accounts** reads only that brand's own website for links to its accounts, and asks Instagram and LinkedIn themselves. NRS never searches the web and never guesses an account from a name.

Names and saved alternative spellings match against your library. An unfamiliar name stays in **Names found** for you to match, add or dismiss; NRS does not guess which saved name it means.

An owner or approver must confirm the website before NRS treats it as proof of an account. A website supplied by an AI or an ordinary member does not confirm an account by itself. Owners and approvers can also use **Confirm** or **Wrong** to record their own decision about an account.

Each account shows one of three states:

| State | What it means |
|---|---|
| Confirmed | The confirmed website links to it, Instagram lists that website on it, or an owner or approver confirmed it |
| Check | Found, but not confirmed. Tick it only if you know it is theirs |
| Wrong | You said it is not theirs. NRS never suggests it again |

Instagram accounts can be checked only through an Instagram account connected through Facebook. If yours is connected another way, NRS says so and leaves the account as Check.

## In the composer

Under **How each destination posts it**, press **Find tags**. NRS lists tags for each network:

- **Instagram**: up to three collaborators on a feed post or Reel, and tags. Tick **Paid or gifted** only when the post is paid or gifted: that adds the brand as a sponsor and Instagram shows "Paid partnership".
- **X**: tags on photos; on a video, the @name in the words.
- **LinkedIn**: a real LinkedIn tag when the company has been looked up; otherwise the name.
- **TikTok, Threads, YouTube**: the @name at the end of that network's words.
- **Facebook**: the name only, for now.

Untick anything you do not want, then press **Apply tag selection**. This updates that network's tag settings and, where the tag belongs in the words, adds one last line. Your own words stay as you wrote them. If there are no suggestions, **Remove suggested tags** removes the previous selection. Turning off **Paid or gifted** and applying the new selection removes the sponsor tag.

The preview before posting lists the tags that will go out and explains any that the network cannot accept. Save the draft to keep the changes.

## With your own AI

Your AI can do the same with the tools `tag_library_list`, `tag_library_find`, `tag_library_save`, `tag_library_check`, `tag_suggest_for_post` and `tag_apply_to_post`. It shows you every tag before applying them, and posting still needs your yes.
