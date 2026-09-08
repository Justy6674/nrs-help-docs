---
title: "What Abe does in NRS"
description: "Understand the narrow implemented connection and the wider healthcare work."
sidebar_position: 1
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/compliance.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/scan/report.ts", "src/lib/nrs/abeai/regulatory-corpus.ts", "README.md", "ABEAIconsulting/src/lib/capabilities/registry.ts", "ABEAIconsulting/src/lib/runs/meta.ts", "ABEAIconsulting/BUILD-STATUS.md"]
feature_ids: ["nrs.health-and-abe"]
source_urls: ["https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Summary-of-the-advertising-requirements.aspx", "https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public"]
---

# What Abe does in NRS

Abe AI concerns AI readiness, governance and operations for Australian healthcare. NRS can help scope related human-led work, but that does not mean every Abe capability is an automatic feature inside NRS.

## The connection implemented in NRS

NRS can ask Abe for **generic Ahpra/TGA reference context** to support regulated rewrites and review of scan flags. This request is about the rules; it does not send the post or a patient's record to Abe for a clinical decision.

The returned material is labelled internal first-party grounding. It is not independently verified, publishable citation evidence. Staff must check the actual primary source and whether it supports the specific finding. Configuration present is not proof that a live request succeeded.

If retrieval fails, the limitation remains visible. A healthcare flag must not become client-visible merely because a generic passage was retrieved. The responsible person reviews the finding for that client.

## The wider Abe scope

The capability register separates what has been built from what has been proven in production. These are eight areas of work, not eight automatically connected NRS features.

| Area | What the work concerns | Current Abe status and NRS connection |
| --- | --- | --- |
| AI readiness | Assess the intended use, current tools, risks and next steps. | Abe backend is **Beta**. NRS can scope a human-led assessment; automated transfer of an Abe assessment into NRS is not established here. |
| Rules and reference research | Find relevant Australian rules and supporting source material. | Abe Oracle is **Beta**. NRS implements generic Ahpra/TGA retrieval for staff preparation; each request still needs to succeed and each source needs checking. |
| Policies and governance | Prepare draft policies, responsibilities and practical controls. | Abe governance generation is **Beta**. A template or draft needs client-specific review; automatic delivery through NRS is not established here. |
| Accreditation preparation | Organise evidence, identify gaps and assign follow-up tasks. | Abe accreditation roles are **Beta**. They do not award accreditation, and this is not an activated NRS accreditation workflow. |
| Privacy and information handling | Review information flows, approved tools and data risks. | Abe privacy/data roles are **Beta**. Client-specific work needs an agreed information boundary; no patient-record access is implied. |
| Public website and social review | Examine websites, deeper technical issues, search visibility and social presence. | Abe has four reconnaissance pipelines in **Beta**. NRS has its own scan/report workflow; an automatic connection to those Abe pipelines is not established. |
| Staff learning and professional development | Find learning options and prepare evidence for review. | The Finder and separate Agent 9 are **In build**, not production-ready or active NRS integrations. Wider workforce functions remain planned. |
| Monitoring and operational improvement | Follow rule changes and improve risk, workplace, meeting and other operational processes. | Wider roles remain **Planned**. Starter monitoring code is not proof of a monitored service or a chosen client automation. |

Clinical decision support remains behind a **Regulatory gate** and is not an active NRS clinical service. The register does not label these areas production-ready. Status reviewed against the Abe capability register and runtime definitions on 8 September 2026.

Related catalogue services may be human-delivered. Agree the deliverable, reviewer and evidence rather than assuming an automated Abe-to-NRS workflow exists. [AI governance work](ai-governance.md) explains the practical engagement.
