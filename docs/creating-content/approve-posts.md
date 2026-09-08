---
title: "Review and approve posts"
description: "Use the actual approval controls and record what must change."
sidebar_position: 12
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/ApprovalCard.tsx", "src/app/console/approvals/actions.ts", "src/lib/nrs/publish-gate.ts"]
feature_ids: ["nrs.creating-content"]
source_urls: []
---

# Review and approve posts

Open **Approvals** and select the relevant post. Confirm its business, platforms, text, assets, planned timing and outstanding flags. Only a person with the appropriate role can approve work for publishing.

- **Comment** records context or feedback.
- **Request changes** sends back a clear description of what needs changing.
- **Approve** records an authorised decision on the work presented.

Use specific feedback: identify the sentence, visual or destination that needs correction. After an edit, check the changed content rather than relying on a review of an earlier version. The approval timeline is the record of the decisions.

An approval does not override blocking release checks. The server checks the content again when a release is requested, and an administrator cannot use a general bypass to clear unresolved blocks.

Scheduling and publication are separate states. Once the agreed review is complete, inspect the [release result](../publishing/auto-publishing.md). Healthcare copy and images require review by the responsible person; an automated “no findings” result is not a legal clearance.
