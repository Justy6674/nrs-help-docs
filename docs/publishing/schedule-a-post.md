---
title: "Schedule a post"
description: "Choose a queue slot or a specific time and verify the result."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/Composer.tsx", "src/app/console/composer/actions.ts", "src/lib/nrs/publish-gate.ts", "src/app/console/settings/queue-slots/page.tsx"]
feature_ids: ["nrs.publishing"]
source_urls: []
---

# Schedule a post

Open the intended draft in Composer. Confirm the business, accounts, platform versions and media. Resolve blocking release checks and complete the required human review.

## Choose the time

**Next free slot** uses the business's configured queue availability. If there is no usable slot, review **Settings → Queue slots** rather than repeatedly clicking the button.

**Schedule** opens the time selector. The current Composer labels it **Brisbane time**. Choose a valid future time and confirm the displayed schedule.

**Post now** is a separate action. Read the confirmation naming the selected accounts before proceeding.

After a successful request, open **Posts** or **Calendar** and check the retained status and time. A request accepted for scheduling has not necessarily appeared on the network yet. Monitor the subsequent delivery result.

If the outcome is uncertain, inspect the existing item before creating another. [Delivery status](auto-publishing.md) explains why a timeout should not prompt an immediate duplicate post.
