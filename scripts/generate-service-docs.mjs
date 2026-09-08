import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const data = JSON.parse(readFileSync(resolve(root, 'data/services.json'), 'utf8'));
const checking = process.argv.includes('--check');
const q = JSON.stringify;
const ahpra = 'https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Advertising-guidelines.aspx';
const tga = 'https://www.tga.gov.au/resources/guidance/complying-restrictions-advertising-prescription-medicines-public';
const oaic = 'https://www.oaic.gov.au/privacy/australian-privacy-principles';

// These are scoping prompts, not invented contractual inclusions. Exact names,
// prices and charging models come solely from the approved catalogue snapshot.
const areas = {
  start: {
    intro: 'Start with the business problem: what takes time, loses enquiries, creates risk or stops the team doing its work. Bec and Justin use discovery to decide what is worth fixing and what can wait.',
    prepare: 'Bring your website, the systems you use, the people involved, your current bottleneck and examples of work that is difficult. Use fictional or redacted examples where records contain personal or health information.',
    agree: 'Agree which business and workflows are in scope, who is interviewed, whether the outcome is a discussion, an assessment or a written plan, and who owns the next decisions.',
    review: 'The recommendations should identify evidence, practical next actions, responsibilities and dependencies. An initial discussion does not by itself include implementation or ongoing management.',
  },
  words: {
    intro: 'Content should explain the real business in its own voice. The audience, source material, purpose and review responsibility come before the draft.',
    prepare: 'Bring the audience, intended channel, approved product or service facts, brand examples and the action readers should take. Mark claims that need evidence and material you have permission to reuse.',
    agree: 'Agree the number and type of pieces, research depth, length, revision rounds, approval owner and delivery format. Writing, website implementation and sending a campaign are separate responsibilities unless the scope includes them.',
    review: 'Check names, prices, links, evidence and tone against the original sources. For health content, review the complete advertisement and its destination before approving use.',
  },
  social: {
    intro: 'Social work combines planning, approved content, media preparation and the actual publishing account. A content pack, managed publishing and a console licence are different offerings.',
    prepare: 'List the businesses, channels, account owners, audience and source media. Confirm who can connect the accounts and who approves content. Platform permissions can differ between accounts.',
    agree: 'Agree channels, quantities, formats, publishing responsibility, timing and reporting. Establish what happens when a platform rejects a post or a connection expires.',
    review: 'Preview the exact caption and media for each destination. A saved draft or accepted provider request is not proof that a post is live; confirm the final status and published link.',
  },
  search: {
    intro: 'Search work considers how people find and understand a business across its website, search listings and AI-generated answers. Visibility work needs a measured starting point.',
    prepare: 'Bring the site, locations served, known competitors and authorised access to relevant Google or Bing accounts. Public search results and owner-only analytics are different evidence sources.',
    agree: 'Agree the sites, locations, queries, account data and date range to examine. Separate an audit from implementing its recommendations or managing listings over time.',
    review: 'Expect clear source links, collection dates and a distinction between observed evidence and recommendations. Rankings, AI citations, reviews and platform verification cannot be guaranteed.',
  },
  web: {
    intro: 'Web work starts with the customer journey and the work the business needs the system to support. A website, booking integration and patient portal have very different requirements.',
    prepare: 'Bring the required pages and journeys, existing content, brand assets, current systems and authorised access. Identify personal data, payment steps and clinical records before choosing how the system is built.',
    agree: 'Agree content ownership, integrations, accessibility scope, devices, acceptance checks, training, hosting and maintenance. Third-party licences and processing charges need their own cost line.',
    review: 'Test the actual customer journey on a phone and desktop, including validation, errors and recovery. A deployed page or a successful build does not establish that a booking, payment or protected workflow works.',
  },
  automation: {
    intro: 'Automation is useful when the underlying process is understood. Each workflow needs a clear trigger, trusted inputs, limited permissions and a person responsible when something goes wrong.',
    prepare: 'Describe the current manual process, its exceptions, source systems, expected volume and the person who handles failures. Use synthetic examples for initial testing.',
    agree: 'Agree what the system may read and change, which actions need approval, how repeated requests are handled, how failures are noticed and how to stop the workflow. Document ongoing provider costs.',
    review: 'Test the normal path, duplicate requests, missing data, expired access and partial failure. AI output needs validation before it becomes a customer message or an operational decision.',
  },
  brand: {
    intro: 'Brand and design work should make the real business recognisable and usable. The right output depends on where customers and staff will use it.',
    prepare: 'Bring the audience, existing assets, visual references, usage rights and examples of the places the design must work: web, social, print or internal tools.',
    agree: 'Agree deliverables, formats, variants, revision rounds, font and image licensing, and responsibility for implementing the design. Clarify whether copywriting and production are included.',
    review: 'Review legibility at real sizes, mobile layouts, contrast and reproduction. Check that claims in the design remain accurate and that exported assets match the approved version.',
  },
  paid: {
    intro: 'Paid media needs an accurate offer, a usable destination and a follow-up process before spend can be judged. NRS can identify when those foundations need work first.',
    prepare: 'Bring the advertising account, objective, audience, budget, approved offer and conversion journey. Establish who owns billing and who can approve spend.',
    agree: 'Agree campaign and account scope, creative quantities, measurement, reporting cadence and budget authority. NRS fees and platform advertising spend are separate.',
    review: 'Review the advertisement, targeting and landing page together. Platform approval does not establish legal compliance, and no campaign can promise a particular number of leads or sales.',
  },
  compliance: {
    intro: 'Governance work turns obligations into practical responsibilities, evidence and review steps. It supports the people accountable for the business; a scan or AI answer does not certify compliance.',
    prepare: 'Identify the industry, jurisdiction, people responsible, relevant systems and the material to review. Use approved, redacted examples and identify the primary regulatory sources.',
    agree: 'Agree the exact obligations and workflows covered, evidence required, responsible reviewer and any need for independent legal or professional advice. Clinical governance and public advertising are related but separate questions.',
    review: 'Check that findings quote the material at issue, cite the applicable source and state what remains uncertain. Keep the decision, reviewer and reviewed version with the resulting policy or change.',
  },
  care: {
    intro: 'Ongoing support needs a written scope that says what is maintained, how work is prioritised and how the business knows a change helped. A plan name does not define unlimited work.',
    prepare: 'Bring the systems and business areas that need ongoing attention, their current condition, known risks and the person who sets priorities.',
    agree: 'Agree included work, capacity, response arrangements, reporting, exclusions and changes to scope. Confirm notice and cancellation terms in the engagement; a monthly catalogue price does not activate billing.',
    review: 'Review completed work against the agreed priorities and actual outcomes. Record unresolved dependencies and the next actions rather than treating activity counts as business results.',
  },
  programmes: {
    intro: 'A programme combines discovery, implementation and adoption across an agreed area of the business. The sequence and responsibilities matter as much as the technology.',
    prepare: 'Bring the business goals, affected teams and locations, existing systems, constraints and decision makers. Identify work that must continue safely during changes.',
    agree: 'Agree phases, deliverables, milestones, acceptance, training, dependencies and budget before starting. A from-price is a starting point; the proposal defines the final scope and fee.',
    review: 'Check each milestone with the people who use the process. Test integrations, access boundaries and recovery, and confirm handover before treating the programme as complete.',
  },
  guides: {
    intro: 'Digital guides explain practical AI choices for a particular audience. The published edition, date and contents matter because tools and obligations change.',
    prepare: 'Choose the guide for your business type and check the edition, contents, available format and delivery arrangements before purchasing.',
    agree: 'Confirm that the named edition is available and what the purchase includes. The catalogue is not confirmation that instant checkout or every guide edition is currently available.',
    review: 'Use the guide alongside current primary sources and the circumstances of your business. A guide is not a personalised assessment, implementation engagement or ongoing update subscription.',
  },
};

const special = {
  'NRS-028': 'The self-serve licence is listed in the catalogue. General self-serve onboarding and the full subscriber workflow remain limited; confirm access and the capabilities available to your account before agreeing a licence.',
  'NRS-105': 'This is an extra scan offering for console subscribers. Subscriber entitlement, purchasing and delivery must be confirmed; the listed price is not proof that a self-serve checkout is available.',
  'NRS-100': 'A Business Scan should identify the URLs and accounts examined, source dates, findings, priorities, references and gaps. Full model-generated client reporting still needs production acceptance; do not treat a test fixture or a manually assembled report as proof of the in-app workflow.',
  'NRS-101': 'Name up to three competitors and agree comparison dimensions. Public signals can be compared; competitor revenue, private analytics and commercial performance must not be inferred from visibility alone.',
  'NRS-104': 'Search Console, GA4, Business Profile and Merchant Centre serve different purposes and require relevant account permissions. Merchant Centre may not apply to the business. Unconnected accounts must be marked unavailable, not scored as zero.',
  'NRS-108': 'Agree which competitors, pages or signals are watched, the check cadence and who reviews an alert. An alert reports a detected change; it does not establish why the competitor changed or promise continuous coverage.',
  'NRS-031': 'Google controls account verification and listing eligibility. Confirm business details, ownership and service-area requirements; NRS cannot promise verification or placement.',
  'NRS-034': 'Structured data must describe the actual page. llms.txt is a proposed convention, not a guarantee that an AI service will crawl, follow or cite your site.',
  'NRS-046': 'An accessibility pass needs defined pages and interactions, keyboard and assistive-technology checks, and a record of remaining issues. The service name is not a certification that an entire product conforms.',
  'NRS-042': 'A patient portal needs explicit clinical-data handling, access controls and acceptance by the responsible practice. General NRS marketing tools are not a destination for patient records.',
  'NRS-048': 'For healthcare, agree an administrative role and an escalation path. Capturing an enquiry does not authorise a bot to diagnose, triage or give treatment advice.',
  'NRS-052': 'Decide which documents may enter which approved system. General marketing intake, public forms and Telegram are not default destinations for clinical documents.',
  'NRS-053': 'Define the approved corpus, access boundaries, citations and how the assistant says it cannot answer. Finding a document does not establish that its advice is current or applies to a particular case.',
  'NRS-106': 'Define the tools, permissions, approval points and evaluation cases. A tool-using agent must not obtain wider authority merely because a model proposes an action.',
  'NRS-107': 'Define responsibilities between agents, shared evidence and the human decision points. More agents do not replace end-to-end validation or accountability.',
  'NRS-070': 'Tax-practitioner obligations require the relevant professional context and current Tax Practitioners Board guidance. NRS scoping must identify the responsible practitioner and any specialist advice required.',
  'NRS-071': 'Ahpra rules for regulated health-service advertising and TGA rules for therapeutic goods can both apply. Prescription brand names, ingredients, classes and indirect references need contextual review. Renaming a medicine is not a compliance workaround.',
  'NRS-073': 'Agree clinical governance, privacy, approved tools, staff responsibilities, evidence and review dates. Abe can support regulatory reference retrieval where configured; it does not replace the practice’s responsible reviewer or prove accreditation.',
  'NRS-102': 'Agree review collection and response practices that fit the industry. Health-service testimonials about clinical aspects have specific restrictions; a genuine review or patient consent is not automatically permission to use it in advertising.',
};

function price(service) {
  if (service.model === 'free') return 'Free';
  if (service.model === 'poa') return 'Price on application';
  const dollars = '$' + service.amount.toLocaleString('en-AU');
  return service.model === 'from' ? 'From ' + dollars : service.model === 'monthly' ? dollars + ' per month' : dollars;
}
function metadata(title, description, extra = {}, health = false) {
  const fields = {
    title, description, last_verified: data.verifiedAt, review_owner: 'Bec and Justin',
    review_status: 'reviewed', availability: 'service', feature_ids: ['nrs.services'],
    source_files: ['src/lib/nrs/offers/catalogue.ts', 'docs/offers/rate-book-v1.md'],
    source_urls: health ? [ahpra, tga, oaic] : [], ...extra,
  };
  return '---\n' + Object.entries(fields).map(([k, v]) => `${k}: ${q(v)}`).join('\n') + '\n---\n\n';
}
const files = new Map();
const table = services => '| Service | Reference | Listed fee |\n| --- | --- | --- |\n' + services.map(s => `| [${s.name}](service-${s.sku.slice(4)}.md) | ${s.sku} | ${price(s)} |`).join('\n');
files.set('index.md', metadata('All 108 services', 'Explore every NRS service and its scope, price and review requirements.', {slug: '/services', sidebar_position: 1}) +
  '# All 108 services\n\nNot Real Smart combines consulting, marketing and implementation. Bec and Justin start with the business, then agree the work worth doing. This reference covers every offering in the approved catalogue across 12 areas.\n\nA listed service is an offering to scope with us. It is not a claim that all 108 options are software features or that every account can buy and run them automatically. See [current availability](../about/what-is-available.md).\n\n## Find the right area\n\n' +
  data.sections.map(s => `- [${s.label}](area-${s.id}.md) — ${data.services.filter(i => i.sectionId === s.id).length} options.`).join('\n') +
  '\n\n## Prices and scope\n\nAll prices are in Australian dollars, excluding GST. Fixed, from, monthly and quoted fees are labelled separately. The written engagement confirms deliverables, revisions, timing, approvals, access, third-party costs and any ongoing charges before work starts. Do not assume an outcome or inclusion that is absent from that scope.\n\nService names and prices are maintained from the same catalogue as the [public service menu](https://www.notrealsmart.com.au/services). The reference is checked against that catalogue at release.\n\n## Get started\n\nUse the [Business Reality Check](service-001.md) or [contact Bec and Justin](https://www.notrealsmart.com.au/enquire) with the problem you want to solve. For health work, also read [health advertising review](../health-and-abe/health-advertising-review.md) and [Abe’s role](../health-and-abe/what-abe-does.md).\n');

for (const section of data.sections) {
  const a = areas[section.id];
  if (!a) throw new Error('Missing reviewed area copy: ' + section.id);
  const services = data.services.filter(s => s.sectionId === section.id);
  files.set(`area-${section.id}.md`, metadata(section.label, `Choosing and scoping NRS ${section.label.toLowerCase()} services.`, {service_section: section.id, sidebar_position: data.sections.indexOf(section) + 2}, section.id === 'compliance') +
    `# ${section.label}\n\n${a.intro}\n\n## Before you start\n\n${a.prepare}\n\n## Agree the work\n\n${a.agree}\n\n## Review the result\n\n${a.review}\n\n## Options and fees\n\n${table(services)}\n\nAll listed fees are AUD excluding GST. The written scope confirms inclusions and any third-party costs. [Back to all services](index.md).\n`);
}
for (const s of data.services) {
  const a = areas[s.sectionId];
  const limited = ['NRS-028', 'NRS-100', 'NRS-105'].includes(s.sku) || s.sectionId === 'guides';
  const health = s.sectionId === 'compliance' || ['NRS-042', 'NRS-048', 'NRS-052', 'NRS-071', 'NRS-073', 'NRS-102'].includes(s.sku);
  files.set(`service-${s.sku.slice(4)}.md`, metadata(s.name, `${s.sku}: listed fee, scope questions and review requirements.`, {
    slug: `/services/${s.sku.slice(4)}`, service_sku: s.sku, service_section: s.sectionId,
    service_amount: s.amount, service_model: s.model, sidebar_position: Number(s.sku.slice(4)) + 20,
    availability: limited ? 'limited' : 'service',
  }, health) + `# ${s.name}\n\n**${s.sku} · ${price(s)} · AUD, excluding GST**\n\nThis is a service reference for discussing and agreeing the work with NRS. The title and fee come from the approved catalogue; the written engagement defines the deliverables and acceptance.\n\n` +
    (special[s.sku] ? `## What to know\n\n${special[s.sku]}\n\n` : '') +
    `## Prepare for the conversation\n\n${a.prepare}\n\n## Confirm the scope\n\n${a.agree}\n\n## Review and accept\n\n${a.review}\n\n` +
    (health ? `## Health and professional responsibilities\n\nKeep personal or clinical records in the approved system. Regulatory assistance needs a responsible person to review the actual facts and current sources. [Ahpra advertising guidance](${ahpra}), [TGA prescription advertising guidance](${tga}) and the [Australian Privacy Principles](${oaic}) are reference points; their applicability depends on the work. Read [health advertising review](../health-and-abe/health-advertising-review.md) and [Abe’s role](../health-and-abe/what-abe-does.md).\n\n` : '') +
    `## Next step\n\n[Discuss ${s.sku} with Bec and Justin](https://www.notrealsmart.com.au/enquire), or compare the other [${data.sections.find(x => x.id === s.sectionId).label.toLowerCase()} services](area-${s.sectionId}.md). [View all 108 services](index.md).\n`);
}
if (data.services.length !== 108 || new Set(data.services.map(s => s.sku)).size !== 108) throw new Error('Expected 108 unique approved services; review generator when catalogue changes.');
const out = resolve(root, 'docs/services');
if (!checking) mkdirSync(out, {recursive: true});
const stale = [];
for (const [name, content] of files) {
  const path = resolve(out, name);
  if (checking) { if (!existsSync(path) || readFileSync(path, 'utf8') !== content) stale.push(name); }
  else writeFileSync(path, content);
}
if (stale.length) throw new Error(`Generated service references are missing or stale: ${stale.join(', ')}. Run node scripts/generate-service-docs.mjs after reviewing the source snapshot and area copy.`);
console.log(`${checking ? 'Verified' : 'Generated'} ${files.size} service reference pages: 108 services, 12 areas and overview.`);
