---
title: "How NRS checks content"
description: "Understand automated screening, human review and the release gate."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/compliance.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/scan/report.ts", "src/lib/nrs/abeai/regulatory-corpus.ts"]
feature_ids: ["nrs.compliance"]
source_urls: ["https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Summary-of-the-advertising-requirements.aspx", "https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public"]
---

# How NRS checks content

NRS runs deterministic checks against the selected business's content and rules. Composer shows findings while work is prepared; the server checks again when release is requested. Unresolved blocking findings prevent release. A general administrator override is not the documented workflow.

A checker can miss an issue or flag acceptable wording. Read the actual sentence, context, image and destination. Correct the work or refer the finding for appropriate review. A rewrite suggestion does not itself clear a flag or establish legal acceptability.

For healthcare, the responsible person reviews the finding and supporting evidence for that client. Retrieving a generic rule through Abe is separate from that human decision. In reports, unreviewed healthcare findings remain held rather than becoming client conclusions simply because a source was retrieved.

Use [health advertising review](../health-and-abe/health-advertising-review.md) for the review process, [Ahpra](ahpra-rules.md) for regulated service advertising and [TGA](tga-rules.md) for therapeutic goods. No scan score or clean automated result is a compliance certificate.
