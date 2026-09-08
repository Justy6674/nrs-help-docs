---
title: "Understand publishing status"
description: "Tell drafts, accepted requests and confirmed publication apart."
sidebar_position: 4
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/publish-gate.ts", "src/app/console/posts/page.tsx", "src/lib/nrs/reconciliation.ts"]
feature_ids: ["nrs.publishing"]
source_urls: []
---

# Understand publishing status

NRS keeps the post and its target accounts, then sends an authorised release through the business's configured publishing connection. The network's response and later delivery updates determine what actually happened.

## Read the status before acting

- **Draft** means saved work, not publication.
- A **scheduled** item has a recorded future release request.
- A pending or processing result needs follow-up on that existing record.
- A failed target needs its reported problem checked.
- Confirmed publication needs the delivery result or post link for that account.

A multi-account post can succeed on one platform and fail on another. Review each target; do not resend the whole item simply because one destination has a problem.

Connection permissions, media requirements and platform rules can change. Check the account and error before retrying. If the result is unknown, ask NRS to reconcile the existing request so a second post is not created accidentally.

Automatic delivery still depends on approval, the server's checks and the selected account's capabilities. It is not a guarantee that every network will accept every draft.
