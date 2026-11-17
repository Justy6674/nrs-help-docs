---
title: "Using Canva with NRS"
description: "Understand the advanced-editor path and its current release boundary."
sidebar_position: 5
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["README.md", "docs/superpowers/plans/2026-08-20-nrs-canva-creative-platform.md", "src/components/nrs/ComposerCanva.tsx", "src/lib/nrs/canva-post-status/contracts.ts", "src/lib/nrs/canva-post-status/service.ts"]
feature_ids: ["nrs.video-and-design"]
source_urls: []
---

# Using Canva with NRS

Canva is the intended advanced design editor alongside NRS's native quick editor. It is not a replacement for the client workspace, media record or approval process.

The planned round trip opens the appropriate design, returns to the exact NRS work item and imports a durable exported version. That version must be reviewed before use in a post. Temporary export links or a successful return screen alone do not prove the asset is safely retained.

## Current availability

The return workflow depends on your workspace's enabled connection and integration access. This guide and the saved-status read do not check Canva grants or confirm the workflow's current commercial availability. Do not assume every visible Canva control means the complete round trip is enabled for your workspace.

Use the enabled connection only with NRS's guidance. If the round trip is unavailable, agree an ordinary approved export and upload it to Media. Keep its source design and confirm ownership, format and final appearance.

Canva content returning to NRS is a draft asset. It does not automatically authorise scheduling or publication. Continue through the normal [post review](../creating-content/approve-posts.md).

## Ask your AI about a saved Canva return

Where this read is available, ask your connected AI to check the saved Canva state of the **exact NRS post** you are reviewing. Give it the post's NRS link and confirm the business. If several Canva returns belong to that post, name the return you mean; the AI handles its saved reference.

This checks NRS's saved records only. It does not contact Canva, check your current Canva access, refresh a connection, export a design, import a file, attach an output or save the post.

Read the attachment result carefully:

- **In the library only:** returned files are recorded, but not attached to this post.
- **Shared attachments:** the returned files are attached to the post's shared version.
- **Attachments for particular networks:** the files are attached only to the listed platform versions. That does not mean every destination uses them.
- **Some attachment observed or unknown:** the saved evidence cannot establish the complete attachment state. Open the exact post before relying on it.

A saved design reference or a returned file does not prove a saved, editable post or current Canva permission. An incomplete result is not proof that no other output exists. Existing **Use returned version**, comparison and **Save** actions keep their own permission checks; this status read does not perform them.

If an export receipt is **unknown**, check the existing return with NRS support. Do not start a fresh export to make the uncertainty disappear. An unavailable read is not an empty library or a failed export. Use the [media guide](upload-and-repurpose.md) to inspect an existing file without assuming another copy needs uploading.
