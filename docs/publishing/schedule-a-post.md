---
title: "Schedule a post"
description: "Choose a queue slot or a specific time and verify the result."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/Composer.tsx", "src/app/console/composer/actions.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/publish-gate-policy.ts", "src/app/console/settings/queue-slots/page.tsx"]
feature_ids: ["nrs.publishing"]
source_urls: []
---

# Schedule a post

Open the intended draft in Composer. Confirm the business, accounts, platform versions and media. Resolve blocking release checks and complete the required human review. Read any advice NRS shows. Advice is there to help you decide and does not stop the post.

If the business has no healthcare advertising setting saved, NRS does not stop the post. Composer shows a note saying where to set it, and NRS runs the Ahpra and TGA checks as advice, showing each finding. Open **Brand kit**, choose on or off and save to settle it. If the business has no Brand kit at all, release still stops until one is created. NRS shows advice and is not legal advice. See [how NRS checks content](../compliance/how-compliance-works.md).

## Choose the time

**Next free slot** uses the business's configured queue availability. If there is no usable slot, review **Settings → Posting times** (called **Queue slots** for Not Real Smart staff) rather than repeatedly clicking the button.

**Schedule** opens the time selector, labelled with the business's own time zone. Choose a future time and confirm the displayed schedule. A time that has already passed is refused. A time less than five minutes away is allowed with a warning that the publisher sends the post straight away if the time passes first.

**Post now** is a separate action. Read the confirmation naming the selected accounts before proceeding.

The result can carry "Heads up" lines, for example that NRS could not confirm an account for 36 hours, or could not run a picture or video check. They are advice. Read them before you approve.

After a successful request, open **Posts** or **Calendar** and check the retained status and time. A request accepted for scheduling has not necessarily appeared on the network yet. Monitor the subsequent delivery result.

Before changing, cancelling or retrying an existing post, inspect its retained status and each network’s outcome. Contact support if the result is uncertain.

If the outcome is uncertain, inspect the existing item before creating another. [Delivery status](auto-publishing.md) explains why a timeout should not prompt an immediate duplicate post.

## Doing it with your own AI

If ChatGPT, Claude or Grok is connected to NRS (see [external access keys](../connecting-devices/api-keys.md)), you can ask it to prepare a draft and show you the preview: the exact pictures, words, accounts and time. A person's yes is needed before anything is published or scheduled, and your AI cannot give it for you. Nothing goes out until you approve the unchanged preview.
