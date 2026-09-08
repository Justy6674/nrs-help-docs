---
title: "When a task is taking longer"
description: "Distinguish background work, unavailable access and an uncertain send."
sidebar_position: 3
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/lib/nrs/reporting/runner.ts", "src/app/console/reports/[business]/analysis/ReportingSettingsForm.tsx", "src/lib/nrs/scan/report-queries.ts", "src/components/nrs/MediaDesk.tsx", "src/components/nrs/MediaEditor.tsx", "docs/designs/nrs-video-editor.md", "src/app/console/settings/agents/page.tsx", "src/app/console/settings/agents/principal-actions.ts", "src/app/api/nrs/mcp/route.ts"]
feature_ids: ["nrs.troubleshooting"]
source_urls: []
---

# When a task is taking longer

Some tasks involve a source read, an AI response, media rendering or a publishing provider. Read the status of the existing task before deciding what to do next.

**Report preparation:** open the run to see collection progress, evidence gaps and the last recorded failure. A held report needs the stated problem resolved; waiting alone will not grant missing access.

**Media:** inspect the current render or upload. Do not attach an editing preview as if it were a finished playable asset.

**AI:** a timeout or provider failure should appear explicitly. Keep the saved source and use the available retry path. A configured provider does not silently become another provider.

**Sending:** an unknown outcome needs reconciliation. Do not start a second send because the page did not return promptly.

NRS does not promise a universal completion time for every tool or external network. If progress has stopped, send NRS the business, task reference and safe error. [Common issues](common-issues.md) helps identify which part needs attention.
