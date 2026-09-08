# NRS canonical help

This Docusaurus repository is the canonical public help site for Not Real Smart,
confirmed by Justin on 8 September 2026. Do not retire it in favour of Notion.
Use the NRS design system, accessible Docusaurus navigation, a persistent return
link to the public site and a separate Open console action.

Read ../NotRealSmartAgency-V2/docs/MASTER-PLAN.md and its current launch completion
contract when available. Product facts come from approved owner decisions and
actual implementation. Services and prices come from data/services.json, exported
from the NRS catalogue. Run node scripts/generate-service-docs.mjs after reviewing
an updated snapshot; never hand-edit generated service prices or names.

Every workflow change requires matching help edits or an explicit documentation
impact record. All published pages need owner, verification date, review status,
availability, feature IDs and source references. An editorial review is not proof
that a feature is available in production. Identify limited and planned features.

Health guidance needs current primary Ahpra/TGA/OAIC sources as appropriate and
contextual human review. Generic Abe retrieval cannot approve a client finding.
Patient data must stay in approved clinical systems. Do not claim guaranteed
compliance, accreditation, privacy, model retention, commercial results or
unimplemented self-serve capability.

Normal npm run build runs the required catalogue/content checks, tests, typecheck
and strict link build. Do not bypass failures. General editorial review is due
within 90 days and healthcare source review within 30 days; these are internal
review cadences, not regulatory rules. Source changes need a responsible review,
not an automatic rewrite of public legal advice.

Before release, inspect desktop and phone layouts, keyboard/search navigation,
return-to-site links and article references in a browser. Publish this site's
content-index.json before an NRS release that depends on it. Do not claim local
build success means deployed or client-tested. Production deployment needs the
specific release approval required by the NRS project instructions.
