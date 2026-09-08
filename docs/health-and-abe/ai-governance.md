---
title: "Plan practical AI governance work"
description: "Define the workflow, information boundary and human responsibility."
sidebar_position: 5
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "service"
review_owner: "Bec and Justin"
source_files: ["README.md", "ARCHITECTURE.md", "src/lib/nrs/compliance.ts", "src/lib/nrs/publish-gate.ts", "src/lib/nrs/scan/report.ts", "src/lib/nrs/abeai/regulatory-corpus.ts"]
feature_ids: ["nrs.health-and-abe"]
source_urls: ["https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Summary-of-the-advertising-requirements.aspx", "https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public"]
---

# Plan practical AI governance work

Healthcare AI governance starts with the actual job, not a list of models. NRS can help map a process, identify information flows and prepare practical controls with the people responsible for the service.

## Agree the work

Describe the intended use, users, information involved, provider arrangement and decision the tool supports. Identify what the tool must never do, who reviews its output and how a failure is reported. Separate public business material from patient-specific information.

A useful engagement may produce a workflow map, AI-use inventory, draft policy, risk register, staff guidance, evaluation plan or incident process. The quote should name the deliverables and reviewers. A template is a draft starting point, not proof that a practice has met all its obligations.

## Test the real boundary

Use appropriate test material to examine errors, missing information, unsafe requests and access restrictions. Decide how a person can correct or stop the workflow. Record which version was evaluated and what remains untested.

Abe's wider governance capabilities are at mixed beta, build and planned stages. The only narrow connection established here is generic regulatory retrieval for NRS staff preparation. Do not assume automated policy generation, EHR access or clinical decision support has been activated for the client.

Clinical or regulated professional decisions require the appropriate authority and separate review. NRS marketing and business reporting are not a patient-care system.
