---
title: "External calendars and the NRS schedule"
description: "Use the recorded NRS schedule when an external calendar feed is not available."
sidebar_position: 5
last_verified: "2026-09-08"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
source_files: ["src/app/console/calendar/page.tsx", "src/app/console/settings/queue-slots/page.tsx"]
feature_ids: ["nrs.publishing"]
source_urls: []
---

# External calendars and the NRS schedule

An external Google or Apple calendar subscription is not an established current NRS feature. The earlier instructions for copying an API-key calendar link should not be used.

Use **Calendar** and **Posts** in NRS to inspect scheduled content and delivery state. If you also keep a campaign plan in another calendar, record the link to the NRS item and make clear which system owns the actual publishing time.

Changing a meeting or reminder in an external calendar does not reschedule a post. Make publishing changes through the available NRS controls and verify the resulting record.

If a calendar integration is part of your engagement, agree its direction, permissions, refresh behaviour and failure handling with NRS first. Treat any integration as unconfirmed until the exact workflow has been tested.

For recurring reports, use [report automation](../reports/automate-client-reports.md). Its weekly or monthly schedule is distinct from both a personal calendar and the social publishing queue.
