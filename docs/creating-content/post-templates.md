---
title: "Use post templates"
description: "Fill a saved structure with verified details before applying it."
sidebar_position: 10
last_verified: "2026-11-17"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/components/nrs/PostTemplates.tsx", "src/app/console/composer/templates.ts", "src/lib/nrs/templates.ts", "src/lib/nrs/library-reads/contracts.ts", "src/lib/nrs/library-reads/service.ts", "agent/tools/get_post_templates.ts"]
feature_ids: ["nrs.creating-content"]
source_urls: []
---

# Use post templates

Open **Templates** in Composer. Choose a template for the selected business, then fill any variables it requests. Use the real product or service name, approved offer details and correct destination link.

## Before selecting Use template

Read the preview with the variables filled in. Check that no placeholder remains and that the result makes sense as a whole. A template saved for one campaign may contain conditions or wording that do not suit the next one.

Choose **Use template** to bring the text into the draft. Review the shared and platform-specific text, attach the intended media, then save. Applying a template is not an approval or publication.

When creating or updating a template, give it a useful name and retain only wording the business is comfortable reusing. Keep prices and dates easy to identify for review. For health work, a previously approved structure does not automatically approve a new claim or image.

## Use a saved template through your AI

If your connected AI offers the saved-template tools, ask it to list templates for the intended business. Choose the saved template from those results, then ask the AI to fill it using the verified values you provide.

The selected business's name fills `{brand}` automatically. The date fields `{date}`, `{month}`, `{year}`, and `{day_of_week}` use **Brisbane time**. Give the AI the real product, approved offer, correct link, and any other requested details. It must not invent them or replace the automatic business and date values.

Ask the AI to name every missing value. Unfilled placeholders remain visible in the returned text. A result marked ready to use means the placeholders have values; it does not mean the wording is fact-checked or approved.

Resolving a template returns text for review. It does not create or change a template, save a draft, schedule a post, or publish anything. Continue through the existing draft and review steps when you choose to use the text.

An empty successful list means no saved template was returned. An incomplete list may cover only part of the business's templates, so it cannot establish that none exist. An unavailable read is a failed read; try again later. A template from another business is not a substitute.

Use [Hashtag Manager](hashtag-groups.md) for tag groups and [approvals](approve-posts.md) for the final human decision.
