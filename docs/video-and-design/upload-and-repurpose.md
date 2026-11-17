---
title: "Upload and repurpose media"
description: "Keep the source, edit deliberately and attach a checked version."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/MediaDesk.tsx", "src/components/nrs/MediaEditor.tsx", "docs/designs/nrs-video-editor.md", "src/components/nrs/Composer.tsx", "src/app/console/composer/actions.ts", "src/lib/nrs/publish-gate.ts", "src/components/nrs/MediaShareReview.tsx", "src/lib/nrs/media-share.ts", "src/lib/nrs/browser-upload.ts", "public/nrs-share-worker.js"]
feature_ids: ["nrs.video-and-design"]
source_urls: []
---

# Upload and repurpose media

Open **Media** and choose the intended business before uploading. An upload without a business may remain **Unfiled** until you deliberately file it. Check the upload result and inspect the asset.

## Receive files from a phone's Share menu

Phone sharing has limited browser support. A physical phone's Share menu has not yet been verified. If NRS does not appear as a share destination, use ordinary **Media** upload above.

When available in a supported installed browser, sharing opens **Review shared media**. It accepts up to **10 image or video files, 100 MiB in total**. Choose a **Business**, then choose **Upload to this business**; this flow has no Unfiled destination. Review each file's result before continuing.

The temporary review is not a saved draft. Reload, expiry or a changed sign-in can clear its local files. If a result is **uncertain**, check Media before sharing that file again; NRS does not automatically repeat the batch. Completed uploads remain in the library.

A Canva link is not an imported photo or video. Export the actual file first. If NRS is missing from the Share menu, use ordinary Media upload; Safari on iPhone and iPad uses this fallback. The [phone guide](../connecting-devices/claude-mobile.md#share-photos-or-videos-into-nrs) covers browser support, explicit upload, expiry and safe re-sharing.

## Turn the source into a usable post

1. Keep the original intact.
2. Open the supported edit or analysis tools for the asset.
3. Review transcript or analysis results against the actual recording.
4. Make the intended edits and wait for a successful rendered version.
5. Watch the output, including captions, audio, overlays and ending.
6. Attach the correct version to a Composer draft for the chosen business.

An upload does not automatically create six approved captions or publish anything. Platform variants, account formats and claims still require review.

For health recordings, use approved source material. Do not upload patient consultations into the marketing workflow. A public speaker's words also need checking before they become promotional copy. [Multi-scene editing](multi-scene-videos.md) explains the version and render steps.
