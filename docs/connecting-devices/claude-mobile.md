---
title: "Using NRS from a phone"
description: "Install NRS, review shared files on supported browsers and reload safely after saving."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/pwa/PwaControls.tsx", "src/components/pwa/pwa-runtime.ts", "src/components/pwa/ServiceWorkerRegistrar.tsx", "src/app/manifest.ts", "public/sw.js", "public/nrs-share-worker.js", "src/components/nrs/MediaShareReview.tsx", "src/lib/nrs/media-share.ts"]
feature_ids: ["nrs.connecting-devices", "nrs.video-and-design"]
source_urls: ["https://support.apple.com/guide/iphone/turn-a-website-into-an-app-iph42ab2f3a7/ios", "https://raw.githubusercontent.com/mdn/browser-compat-data/main/manifests/webapp/share_target.json", "https://bugs.webkit.org/show_bug.cgi?id=194593"]
---

# Using NRS from a phone

Open [the NRS Board](https://www.notrealsmart.com.au/console) in your phone's browser and sign in with your own login. Select the correct business before you review or change its work.

## Add NRS to an iPhone or iPad Home Screen

1. Open NRS in Safari.
2. Tap Safari's **Share** button.
3. Choose **Add to Home Screen**. If it is hidden, scroll down in the Share menu.
4. Choose **Add**.

The **Add NRS to Home Screen** control in NRS opens these instructions. Safari still requires you to complete the steps yourself.

## Install when your browser offers it

If your browser offers **Install NRS**, choose it and follow the browser's confirmation. The offer depends on the browser and device. If no install control appears, keep using NRS in the browser.

Some devices show app shortcuts when you press and hold the installed NRS icon:

- **Board** opens the marketing board.
- **Create a post** opens the composer.
- **Inbox** opens business conversations.
- **Approvals** opens posts waiting for review.

Your normal login, business access and approval checks still apply to each shortcut.

## Reload a new version safely

When **A new version of NRS is ready** appears, finish and save your work. Open **Board**, then choose **Reload NRS**. NRS keeps the reload control unavailable while you are editing or away from the Board. Choose **Later** if you are not ready.

If the update cannot finish, keep your saved work and try again when you are ready. Do not repeatedly reload an unsaved post.

Installing NRS does not add push notifications or offline draft saving. Keep an internet connection for work that must be saved or sent.

## Share photos or videos into NRS

:::note Limited browser support

Receiving files depends on a supported installed browser offering NRS in its Share menu. The local browser workflow has been checked; physical phone Share menus remain unverified. If NRS is not offered or the review cannot receive your files, use ordinary **Media** upload.

:::

A supported, installed Chrome-based browser may offer NRS when you share files. This depends on the browser, device and source app; installation alone does not guarantee an NRS Share option.

On iPhone or iPad Safari, use ordinary **Media** upload. Adding NRS to the Home Screen does not make it a file destination in Safari's Share menu. [Current browser support data](https://raw.githubusercontent.com/mdn/browser-compat-data/main/manifests/webapp/share_target.json) lists this receiving feature as unsupported in Safari and iOS Safari; [WebKit's implementation issue](https://bugs.webkit.org/show_bug.cgi?id=194593) remains open. Support was checked on 17 November 2026.

If your supported browser offers NRS:

1. Open NRS and sign in with your own login.
2. In Photos, Files or another exporting app, select the actual image or video files.
3. Choose **Share**, then **NRS** if it appears.
4. In **Review shared media**, check every file name, size and preview. The share limit is **10 files and 100 MiB in total**.
5. Choose the intended **Business**. The destination starts blank, even if you have only one business.
6. Choose **Upload to this business**.
7. Read each file's result, then open **Media** to inspect the uploaded assets.

Selecting a business does not begin the upload. Sharing files does not create a post or approve publication. A preview also does not confirm that the stored file has passed byte verification.

If Canva or another app shares only a link, NRS does not fetch or import that link as media. Export the photo or video file, then share the file or use [ordinary Media upload](../video-and-design/upload-and-repurpose.md).

If NRS is absent from the Share menu, use ordinary **Media** upload. If the review says no live files are available, check Media for completed uploads before sharing any missing files again. Save other work before you reload NRS. Ordinary upload also remains the fallback for files above the Share flow's batch limit.

## Keep the local review open

Shared files are held temporarily in browser memory, not saved as an offline draft. Reloading, closing the page, losing the receiving app or changing your sign-in can lose that review. The original files on your device remain unchanged.

Start Upload within **10 minutes** of sharing. Once started, an upload has up to **20 minutes**, and ends no later than **30 minutes after sharing**. If the review expires, check Media for completed files before sharing the remaining files again.

**Clear local files** removes the temporary review copies. During an upload, **Stop remaining uploads and clear local files** stops the remaining work. Completed library assets stay in Media.

If a file is marked **uncertain**, an upload may have reached storage without a confirmed library receipt. NRS does not automatically retry that batch. Check Media before sharing that file again, so you do not create a duplicate.

## Continue after a connection loss

The offline screen says: **Reconnect to continue. Check your last saved draft before resuming.** It does not confirm that unsaved edits or a local share review survived. Reconnect and check the last saved version. If the share review is empty, check Media for completed uploads before sharing only the missing files again.

## Review before you approve

For a report, read the source coverage and complete document before approving delivery. For content, inspect the text and media, not only a notification or thumbnail. Review a large design on a computer if the phone does not show enough detail.

A Claude mobile app is separate from the NRS phone app. Its connection depends on Claude's available settings and a verified NRS sign-in. Use the [AI connection guide](api-keys.md); installing NRS does not connect Claude automatically.

If a control is missing or difficult to use, record the device, browser and affected task and [contact NRS](../troubleshooting/contact-support.md). Do not share your login to complete the task on someone else's account.
