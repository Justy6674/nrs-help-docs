---
title: "Edit a video sequence"
description: "Review kept segments, captions and the rendered result."
sidebar_position: 2
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/MediaDesk.tsx", "src/components/nrs/MediaEditor.tsx", "docs/designs/nrs-video-editor.md"]
feature_ids: ["nrs.video-and-design"]
source_urls: []
---

# Edit a video sequence

Open the video in the native Media editor where that workflow is enabled. Start with the original and decide what should remain in the final sequence.

Use the controls shown for segment start/end times and ordering. Review transcript-assisted suggestions before accepting them. Check the aspect, captions, overlay position, cover and audio settings offered by the editor.

## Render before release

The editor can show a preview while a new version still needs rendering. **Go** queues a new immutable version; it does not overwrite the source. Wait for the render result, then watch the complete output.

Check cuts in context: a short excerpt can change what a speaker meant. Confirm captions against the audio and make sure important qualifications are not cropped or removed. Compare with the original and use the available undo or revert controls if necessary.

Rendering depends on the configured worker and supported media. A queued or failed job is not a finished video. Attach only the reviewed, usable version to the intended post.
