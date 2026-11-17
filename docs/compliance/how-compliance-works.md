---
title: "How NRS checks content"
description: "Understand automated screening, human review and the release gate."
sidebar_position: 1
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/compliance.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/publish-gate-policy.ts", "src/lib/nrs/health-acknowledgement.ts", "src/app/console/settings/accounts/actions.ts", "src/lib/nrs/scan/report.ts", "src/lib/nrs/abeai/regulatory-corpus.ts"]
feature_ids: ["nrs.compliance"]
source_urls: ["https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Summary-of-the-advertising-requirements.aspx", "https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public"]
---

# How NRS checks content

NRS runs deterministic checks against the selected business's content and rules. Composer shows findings while work is prepared; the server checks again when release is requested. Unresolved blocking findings prevent release. A general administrator override is not the documented workflow.

Every business should have its healthcare advertising setting saved, on or off. If the setting is missing or unrecognised, NRS runs the full Ahpra and TGA checks as advice and reminds you to open **Brand kit**, choose the setting and save. A missing setting or Brand kit does not by itself refuse the post. If NRS cannot read the settings because the request fails, release stops with an explanation.

With healthcare advertising on, Ahpra and TGA findings are shown as advice with their sources. Findings that require acknowledgement do not automatically refuse the post: the person must read them and tick **I've read this advice and accept responsibility** for that specific action before it can proceed. The tick covers the exact advice and post; changed wording or findings need a fresh tick. Through your own AI, the acknowledgement must also carry your own words accepting responsibility. Your AI cannot accept for you.

Other release checks still apply, including business ownership, required review, available accounts, media readiness and blocking findings outside Ahpra and TGA. Accepting health advice does not bypass those checks.

When the image and video checks for a post cannot be read, NRS tells you and the post can still go, unless the business has healthcare advertising on. Then NRS stops it, because those checks are the Ahpra and TGA checks. The release check uses the most recent image or video check.

A checker can miss an issue or flag acceptable wording. Read the actual sentence, context, image and destination. Correct the work or refer the finding for appropriate review. A rewrite suggestion does not itself clear a flag or establish legal acceptability.

For healthcare, the responsible person reviews the finding and supporting evidence for that client. Retrieving a generic rule through Abe is separate from that human decision. In reports, unreviewed healthcare findings remain held rather than becoming client conclusions simply because a source was retrieved.

Use [health advertising review](../health-and-abe/health-advertising-review.md) for the review process, [Ahpra](ahpra-rules.md) for regulated service advertising and [TGA](tga-rules.md) for therapeutic goods. No scan score or clean automated result is a compliance certificate.
