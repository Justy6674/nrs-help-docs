---
title: Edit your videos with your AI
description: What your own AI (Claude, ChatGPT, Grok and others) and Eve can do with your videos in NRS, and what they cannot do.
sidebar_position: 12
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/media-agent/", "src/lib/nrs/media-reel-from-page/", "src/lib/nrs/media-typography.ts", "src/components/nrs/ReelAgentPanel.tsx", "src/components/nrs/ReelListenButton.tsx", "src/components/nrs/ReelFromPage.tsx", "src/components/nrs/ReelEditor.tsx", "src/lib/nrs/harness/draft-tools.ts", "src/lib/nrs/harness/publication-presentation.ts", "src/lib/nrs/harness/publish-tools-live.ts"]
feature_ids: ["nrs.video-and-design", "nrs.eve"]
source_urls: []
---

Listening, text styles and making a draft reel from your own website are available through your connected AI. Availability depends on your business’s media, connected services and your access. A saved reel or frame preview is ready for review; it is not a finished video or a published post.

## What your AI can do with your videos

When your AI is connected to NRS (through its NRS key, your owner key, signing in, or Eve inside NRS), it can work on
your reels the same way you can on the reel screen:

- **Listen to a video** that has no words yet, the same as pressing Listen. It waits for the words, or comes back for
  them a few seconds later. A video already heard is not listened to again unless you explicitly ask it to listen
  again. Each business can start 30 listens an
  hour. On the reel screen, a video with no words shows **Listen for words** in the list on the left.
- **Read what is said** in your own videos, word by word with times, so it can pick the best moments and make captions.
- **Join clips** from several of your videos into one reel, trim them, change their speed and add title cards.
- **Put things on top**: words, a call to action, your logo or a sticker from your library.
- **Make a reel from a page on your own website** (a product, a service or your home page): a 15–25 second reel that
  opens with a hook, shows your own videos with lines from that page, and ends on your name and the page's button,
  with a suggested caption. Every word comes from your page. It is saved for you to look at, change and make; nothing
  is posted. On the reel screen it is **From a web page**. Your AI also gets advice on each reel (a hook in the first
  two seconds, time to read each line, words clear of the app's buttons), never a block.
- **Style the words** with eight ready-made looks (a bold hook, clean captions, captions where the word being said
  lights up, a boxed label, an outlined pop, an elegant serif, neon, a small name bar). Your brand kit's font and main
  colour are used when NRS has that font. On the reel screen, pick a title card's look under **Style**.
- **Choose the thumbnail**: a moment of the reel, or a picture from your library.
- **Check the reel** before saving it. If something is wrong it is told exactly which part.
- **Look at a real frame** of the reel, as it will look once made, before making the whole video.
- **Make the finished video** in each shape you need (tall, square, wide).
- **Watch progress** and read the finished video's details.

## What your AI cannot do

- These video-editing tools do not post anything. Your connected AI can prepare a post separately, but nothing is
  posted or scheduled without your own yes to the publication preview.
- They do not change your advertising budgets. Listening uses your connected transcription service and its existing
  usage limits.
- It cannot change your original videos. Every finished video is a new copy in your library.
- It cannot see or change another business's videos.
- Only an owner or approver of the business can have finished videos made, by hand or through their AI. An AI can make
  up to 15 finished videos an hour for each business.

## Review saved YouTube settings and a cover

Where these draft options are available, tell your connected AI the YouTube **title**, **visibility** (public, unlisted or private), whether it is **made for kids**, whether it **contains synthetic media**, and any **first comment** you want saved. These choices are optional; do not assume an omitted choice was confirmed. The AI handles the draft fields and account references for the business you chose.

Choose a cover image already in that business's NRS library and attach it alongside the video on the YouTube version. A cover is a still image, not another playable video. If one post targets several YouTube accounts, they must use the same YouTube settings and cover; use separate posts when you need different versions.

In the publication preview, check the **saved platform settings and selected YouTube cover** before approving anything. If NRS says it cannot safely read the saved settings, ask your AI to repeat that warning and open the draft to check it. Do not treat unreadable settings as verified defaults.

Saving these choices does not schedule or publish the post. A saved cover, or seeing it in NRS's preview, does not prove that YouTube accepted a custom Shorts thumbnail or that it will be delivered on that channel. The actual provider result needs its own later check after an authorised release. Continue through the normal [post review](../creating-content/approve-posts.md).

## Seeing and undoing your AI's changes

Every change your AI saves shows on the reel screen with who made it (you, a named AI key, or Eve) and when. Your AI
can also leave a suggestion instead of changing the reel: open the reel and press Apply or Dismiss. If someone changed
the reel after your AI read it, your AI's change is refused and it is asked to read the reel again, so it never
writes over your work.

## Health businesses

Your AI reads the words in your own videos like any other business's. Before anything is posted, NRS gives Ahpra and
TGA advice on the words in the post and burned into the video, with the source of each line, and asks you to tick that
you accept responsibility.


## When frame information cannot be read

An unreadable worker status does not prove the render machine is offline. An unreadable frame does not prove it is missing. NRS keeps the frame reference when a request has been accepted, even if its current status or image link cannot be read.

Use **Check this frame again** to read the same frame. It does not save the reel or request another frame. The image keeps the time and shape originally requested, even when the playhead moves. A frame from a different business or reel is not shown under the new selection.

If a previous image remains visible after a failed check, NRS marks it **Last known** with the current warning. It is not presented as a newly checked result. A ready frame with an unavailable image link remains ready; it does not need to be rendered again just to repair a status read.
