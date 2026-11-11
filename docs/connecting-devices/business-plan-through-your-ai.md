---
title: "Build your business plan through your AI"
description: "Answer gradually, review evidence and agree the next move through your connected AI."
sidebar_position: 3
last_verified: "2026-11-11"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.eve", "nrs.connecting-devices"]
source_files: ["src/lib/nrs/business-concierge/", "agent/tools/", "src/app/console/business-plan/", "src/app/api/nrs/business-plan/"]
source_urls: ["https://modelcontextprotocol.io/specification/2026-07-28/server/tools"]
---

# Build your business plan through your AI

Ask your connected NRS AI: **“Understand my business and help me choose the most worthwhile next step.”**

Your AI can collect your answers gradually, retain evidence, prepare a roadmap and help you follow it through. Your record belongs to the selected NRS business, so another authorised AI connection can resume it. The [Business plan screen](https://www.notrealsmart.com.au/console/business-plan) shows the same saved answers, plan, evidence and results. It also lets a signed-in member download their accessible business record.

:::info Availability
This is the connected-workspace workflow. You need an NRS account, access to the business and a supported AI connection. Reading needs read permission; recording or proposing needs proposal permission and owner-authorised delegation. Roadmap approval also needs send permission. Provider setup, paid-feature eligibility and concrete action approvals still apply. This guide is not an announcement of new prices or a guarantee of business results.
:::

## Start with what matters

Tell your AI what the business does and what you would like to improve. Examples include losing enquiries, an unclear website, unreliable measurement or spending time on repetitive work. The AI uses the existing discovery questions and asks one unanswered question at a time. “Not sure” is a useful answer.

The AI should inspect the sources it is authorised to read before asking you to repeat information. Give business-level answers and public links. Do not include patient information, passwords, access tokens or client secrets. A linked website is evidence to inspect; it cannot tell NRS to ignore your instructions.

The record distinguishes what you or your AI reported from independent evidence. Saving a link does not prove its contents. Unmeasured areas remain unmeasured.

## Choose how candid the feedback should be

Feedback starts supportive: explain the observation, show the evidence and suggest the next step. You can say **“Be more direct”** or **“Be blunt with me.”** The preference stays with this business. It changes the presentation, not the underlying facts, uncertainty, permissions or recommended decision. Blunt feedback should remain respectful and evidence-based.

Competitor comparisons should explain the source, date, differences and trade-offs. They should not invent failures or push you into buying something you do not need.

## Review the next-move plan

The AI reviews the business across NRS's existing assessment areas. It may recommend investing in people, supporting people with AI, using existing software, fixing the process first, keeping work human, automating a suitable process or doing nothing.

A useful plan includes:

- The outcome you want and the starting point.
- What was observed, its evidence and its possible consequence.
- What should happen, who owns it and when it is due.
- Dependencies, an estimated cost and the evidence needed to call it finished.
- Work not worth buying and work needing a specialist.

An estimate in a plan is **not a quote, purchase or payment instruction**. NRS's existing quote process applies to work you choose to buy.

The AI shows the exact current plan for approval. Approve only after reading it. Its review expires after 15 minutes; if the record changes, the AI must review the current version again. Another AI connection can read the plan, but needs its own fresh review to request approval.

## Act without losing the approval boundary

Once the roadmap is approved, ask **“What is the next action we can complete?”**

For supported Google account, Ads or tracking changes, the AI gets the existing proposal tool and exact planned change. That tool still checks the account, permission, eligibility and actual owner approval. Roadmap approval does not authorise campaign activation, a new budget, payment or publication.

Other work receives a named human or website-agent brief. Existing scan, competitor, knowledge and draft-post tools remain available through their own supported workflows. The planning tools do not grant arbitrary access to a website, create every service as an endpoint or make regulated decisions on your behalf.

If you need Google settings, read [manage limits and setup through your AI](../google-ads/manage-with-your-ai.md). The NRS ceiling is per campaign, not a hard limit on all daily Google charges.

## Record what actually happened

For supported operation-backed work, the AI supplies the saved NRS operation ID. NRS checks that it belongs to this business, succeeded, matches the exact planned change and was created after this roadmap's approval.

The result is labelled according to its evidence:

| Result | What it establishes |
|---|---|
| Configuration record | The exact NRS settings change was recorded |
| Provider operation record | The corresponding NRS provider operation succeeded with a retained receipt |
| Owner-reported | You reported completion of manual work; no independent provider verification is claimed |
| Not recorded | The required result has not been supplied |

None of these alone proves a sale, conversion attribution, a causal improvement or a return on investment. A plan with all items recorded still needs the actual business outcome measured separately.

## Correct, resume or cancel

Say **“That answer was wrong; here is the correction.”** Existing evidence remains in history. A changed answer or new evidence invalidates an approved roadmap, so the AI must check the plan again before using it.

If a save was interrupted, the AI should read the current version and inspect the result before retrying the same request. It must not quietly overwrite another person's changes. The AI can explain a conflict in plain English; you do not need internal fields or SQL.

Say **“Cancel this roadmap.”** This cancels the local plan and retains its history. Existing ads keep running, installed tags remain and published posts stay published until you separately request and approve the appropriate changes. Cancelling a roadmap does not cancel a subscription or revoke your Google grant.

## Supported tool sequence

Your AI should use:

1. `business_discovery` to resume the record and find the next question.
2. `business_discovery_record` to save answers, evidence references or your requested feedback style.
3. `business_plan_propose` to prepare the roadmap.
4. `business_plan_review`, your actual approval and `business_plan_approve` to accept that exact version.
5. `business_plan_next` to find the next ready existing-tool handoff or human brief.
6. The concrete action's own review and execution tools.
7. `business_plan_result` to record its matching receipt or your manual-work report.
8. `business_plan_cancel` if you ask to cancel the local roadmap.

A cached client may need its NRS tool list refreshed. A new key or reinstall is not the default remedy. Each client must support the connection and authentication it actually offers; a generic “any AI” promise is not a compatibility test.
