---
title: "Use marketing workflows through your AI"
description: "Ask your connected AI to load the right NRS workflow, show its limits and carry out only the work you approve."
sidebar_position: 1
last_verified: "2026-11-12"
review_status: "reviewed"
availability: "limited"
review_owner: "Bec and Justin"
feature_ids: ["nrs.eve", "nrs.connecting-devices", "nrs.google-ads"]
source_files: ["docs/nrs-agent-skills.md", "src/lib/nrs/agent-skills/", "src/lib/nrs/harness/mcp.ts", "src/lib/nrs/paid-ads/", "src/lib/nrs/paid-ads/onboarding.ts", "src/lib/nrs/paid-ads/onboarding-runtime.ts", "integrations/nrs-google-ads-plugin/skills/index.json", "agent/tools/paid_ads_execute.ts"]
source_urls: ["https://docs.x.ai/build/features/skills-plugins-marketplaces", "https://docs.x.ai/developers/tools/remote-mcp", "https://modelcontextprotocol.io/specification/2025-06-18/server/prompts", "https://modelcontextprotocol.io/specification/2025-06-18/server/resources"]
---

# Use marketing workflows through your AI

Ask your connected AI: **“Show the NRS workflows available for this business, load the right one, and tell me what you can actually do.”**

A workflow gives your AI the procedure for a task: which business evidence to read, how to prepare a review, when to ask for approval and how to check the result. It does not grant account access or approve publication or spending.

:::info Release availability
The **0.7.1 workflow release is available** (12 November 2026). It adds two workflows to the seven in 0.6: checking a website and how findable it is, and reporting what your marketing did. Your AI should check the version and tools advertised by your own NRS connection; a cached or older client may need to refresh its tool list. Workflow instructions and the plugin package do not establish account readiness or successful execution in every AI client. Supported Meta and LinkedIn connection setup can guide you through real owner consent where this business already has the required publishing connection. Account access, exact mapping and actual provider results are checked separately.
:::

## Keep your existing connection

If your AI already connects to NRS, start there. It should check the available tools before asking you to reinstall anything. A business connection stays within that business; an owner connection selects the exact business from your accessible list.

Use [Connect Grok or another AI](../connecting-devices/grok-and-nrs.md) if you need a connection. Keep keys in the client's protected connection settings. Do not paste keys, passwords or account secrets into the conversation. These workflows do not require Hermes or a separate Hermes advertising bot.

## Ask for the workflow you need

| Say this | What the workflow covers |
|---|---|
| “Show me what NRS can help with.” | The existing service menu and the tools your connection can use |
| “Prepare a post using this business's voice and current facts.” | Evidence, caption and media preparation, saved drafts and exact publication review |
| “Review my Google Search ads.” | Supported reports, tracking limits and reviewed Google changes |
| “Check my tracking and explain what is missing.” | Authorisation, configuration, website installation and event verification as separate steps |
| “Check whether this business is ready for Meta ads.” | The existing dedicated advertising connection and the limited supported advertising workflow |
| “Check whether this business is ready for LinkedIn ads.” | The separate advertising account and organisation requirements; organic posting access is different |
| “Understand my business and help me choose the next worthwhile step.” | Saved discovery, evidence, a reviewed business roadmap and supported follow-through |
| “Check my website and how easy it is to find.” | The latest Business Scan and how old it is, the basics checklist, speed and page-quality measurements, and watched competitors. Your AI proposes a new scan and waits for you; it does not start one unasked |
| “Tell me what my marketing did last week.” | Posts published and failed, account health, Google Ads figures and whether tracking is connected, with the period, currency and time zone named |

Two limits apply to the newest workflows. The website workflow reports only what NRS measured, with its date: it gives no overall score, and it never promises a ranking, a position or a mention in an AI answer. The reporting workflow treats anything NRS cannot see as **not measured**, never as zero: without tracking connected, it will not say an ad produced a sale or an enquiry. Both end by listing what was not measured.

## Ask for one combined report

Say "tell me what my marketing did in the last 7 days" (or 30 days). Your AI reads one combined report, `results_report`, and nothing is published, spent or changed by reading it. It covers:

| Part | What you get |
|---|---|
| Posts | Published, failed and sent for review in the period, and how many are waiting to go out |
| Post figures | What each platform reported for posts published in the period, such as views and likes. This is the latest reading for each post, counted since that post went out |
| Google Ads | Spend, clicks and impressions for each campaign, in the account's own currency |
| Tracking | Whether tracking is connected |

Each part says whether it was measured, is not connected, had no activity or could not be read. Three things to know when you read it:

- **The periods differ.** Posts are counted up to now. Google Ads covers whole days ending yesterday, in the Google account's own time zone, so today's advertising is not included.
- **Empty is not zero.** A figure that was not sent is left empty. Conversions stay empty unless tracking is connected and Google sent a figure.
- **Connected is not installed.** A connected tracking account does not prove the tag is working on your website. The report does not check that.

The report ends with a list headed not measured. Ask your AI to read it to you in full.

Brand voice and private business information remain with the authorised business. A general workflow does not let another business read them. The social workflow also includes guidance for opening lines, captions, tags and adapting the same idea to each network.

## Separate permission from a ready account

Your AI should explain these checks separately:

- **Workflow loaded:** it has read the procedure and can state the version.
- **Tool available:** the connected NRS server advertises the action.
- **Permission allowed:** your current connection or signed-in role may request it.
- **Account ready:** the relevant live status confirms the required account, connection and setup.
- **Exact action approved:** you have approved this reviewed change and its consequences.
- **Result checked:** NRS has read the outcome and retained the relevant receipt.

Passing one check does not pass the others. For example, reading the Meta workflow does not connect an advertising account. A read-only connection can inspect permitted information but cannot execute a paid change. If a role check is unavailable, the AI must report uncertainty and keep the narrower permission.

## Approve the actual change once

Ask: **“Show me the exact text, images, accounts, timing and any spending before you act.”**

Your AI prepares the current review. Read it and approve only the intended action. Permission to use an account, an earlier business plan or a workflow file does not approve a new publication or spend change.

An approval already given for the same current review remains usable within that review's rules. The AI should not repeatedly ask you to approve the identical scope. If the text, account, media, amount, timing or reviewed operation changes, it must explain what changed and obtain the necessary fresh approval. An expired review needs a current review.

In NRS's in-app AI, paid execution also uses the human approval control. Filling an approval field in a tool request is not the AI approving itself. Other connected clients must preserve the real user instruction and NRS's exact review requirements.

## Keep limits, budgets and activation separate

Say: **“Show my NRS campaign limit and the budgets actually assigned in Google.”**

The NRS limit is the maximum average daily budget NRS permits for **one campaign**. It is not a hard daily cap for your whole Google account. Several campaigns can spend, and Google can spend more than the average on individual days.

For example: **“Allow campaign budgets up to A$15 a day. Do not activate anything.”** This is an example request, not a recommended amount or existing permission to change your account. After you approve its exact review, it changes the NRS permission ceiling. It does not allocate that budget to campaigns or start them.

An actual campaign budget and activation are separate reviewed actions. Read [Manage limits, goals and setup through your AI](../google-ads/manage-with-your-ai.md) and [Budgets and spending](../google-ads/budgets-and-spending.md).

## Prepare social posts without accidental publication

Say: **“Save this as a draft and show me the complete post before publication.”**

The AI checks the selected business's facts and supported social destinations, then prepares the caption and media. It should report whether a real draft was saved and the observed publishing-engine status. A text suggestion alone is not a saved post.

For publication or scheduling, approve the current complete review. Scheduling includes the exact date, time and timezone. Loading a workflow does not create an unattended recurring schedule. An advertising account is not automatically a destination for organic posts.

After the action, the AI reports the actual post identifier and state. Scheduled, published, pending and failed mean different things. If the result is uncertain, it checks the existing record rather than making a duplicate.

## Check the limits of Meta and LinkedIn ads

Say: **“Help me connect this business's advertising account. Show me the exact connection review first.”**

The new source flow starts from this business's existing connected Facebook/Instagram or LinkedIn posting account and its existing publisher profile. The AI can prepare a dedicated advertising connection from that exact parent. It cannot create the publisher profile, use another business's account or import every account it can see. If the required profile or active posting parent is missing, it must identify that setup gap.

Read the connection review before approving it. It identifies the business, the existing parent and any advertising account IDs already selected. If those IDs are unknown, the approved flow opens the provider's real owner sign-in, consent and account picker. Opening a link does not establish completed consent. Completing consent may refresh the original posting account's access token; the AI should explain this effect before approval. Connection approval does not create or activate an ad, and NRS does not purchase an advertising add-on for you.

After approval, open the private consent link yourself, sign into the intended provider account and choose only the accounts you authorise. Return to NRS or tell your AI **“Check the existing connection operation and finish its verified account mapping.”** NRS checks the exact business, publisher profile, posting parent, advertising platform and saved account selection before adding that one advertising connection to this business. A lost response or ambiguous selection remains unresolved; it does not justify starting another connection.

A read-only AI connection can inspect progress. It cannot retrieve the protected consent link or save the final account mapping. Those steps need a current authorised manager with proposal permission. Another currently authorised manager can finish recovery of the same operation without starting another provider connection. If a handoff expires, the AI must check the original operation rather than repeatedly generating new connections.

An already-connected advertising account has a separate scope-selection review. Changing that existing selection can remove synchronised history or subscriptions for removed accounts. Review that consequence before approval. An older dedicated connection is not proof of a new account-picker selection; the AI needs the exact reviewed account IDs before adopting or replacing its scope.

Supported creation is currently Australian-dollar, Australia/English, single-image traffic advertising using a verified image owned by the business and its approved HTTPS website. LinkedIn also needs the exact organisation identity. Broader objectives, video, carousels and extra targeting options are not added by asking the AI differently.

New ads remain held. Activation is a separate reviewed action and applies only to the supported original NRS-created hierarchy. LinkedIn does not have the same provider validation-only check as Meta. Neither a successful validation nor a provider acceptance proves that the ad is serving.

The result may verify provider records and current switches while still lacking independent checks of native creative rendering or delivery. LinkedIn campaign-group activation can be labelled accepted without an independent fresh group read. The AI must state these limits and must not describe them as verified impressions, leads or conversions. Live customer creation and activation acceptance remain separate release checks.

## If your AI does not show a skills menu

Some clients can retrieve NRS workflows through their resource or prompt menus. Others expose only tools. When the server advertises them, the AI can call `nrs_skill_list` and `nrs_skill_read` to retrieve the same versioned instructions without a separate local plugin installation.

Ask: **“Read the NRS workflow through the available tools and tell me its version.”** If those tools are absent, the AI should say which capability is missing. A package download does not prove your client has installed or loaded it.

Grok Build, Grok Bot and Grok on the web have different capabilities. Use only the connection and skill features supported by the actual product you are using. The [Grok Build documentation](https://docs.x.ai/build/features/skills-plugins-marketplaces) describes local skills/plugins; the [xAI remote MCP documentation](https://docs.x.ai/developers/tools/remote-mcp) describes remote tool use. Neither proves every Grok interface automatically loads an NRS package or retrieves prompts/resources.

## Recover an uncertain result

Say: **“Check the existing operation and reconcile its result. Do not submit it again.”**

The AI uses the retained operation or post record and read-only checks. A missing response can occur after a provider has accepted the action. Creating another operation, changing a name or switching AI clients can duplicate it. An unresolved account lock stays in place until the existing recovery process has enough evidence; asking for a fresh key does not make replay safe.

A completed operation still does not establish a sale, attributed conversion or return on investment. Measure the actual business outcome separately.
