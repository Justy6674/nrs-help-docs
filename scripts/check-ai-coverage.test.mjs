import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

// 12 Nov 2026: six NRS releases went live and no guide mentioned any of them. Each entry names a guide and
// the things it must cover. Add a line here whenever a guide is added for something a customer's AI can do.
export const REQUIRED_COVERAGE = [
  { file: 'docs/connecting-devices/chatgpt-and-nrs.md', mustMention: ['https://www.notrealsmart.com.au/api/nrs/mcp', 'Approve', '90 days', 'list my businesses'] },
  { file: 'docs/google-ads/manage-with-your-ai.md', mustMention: ['pause a keyword', 'add an ad', 'pause an ad', 'end date', 'overall daily limit', 'change history'] },
  { file: 'docs/google-ads/budgets-and-spending.md', mustMention: ['overall daily limit', 'per campaign', 'end date', 'time zone'] },
  { file: 'docs/google-ads/troubleshooting.md', mustMention: ['change history', 'limited', 'appeal'] },
  { file: 'docs/using-your-ai/agent-marketing-skills.md', mustMention: ['0.7.2', 'overdue', 'how easy it is to find', 'what my marketing did', 'not measured', 'never promises a ranking', 'ending yesterday', 'Empty is not zero', 'Connected is not installed'] },
]
for (const { file, mustMention } of REQUIRED_COVERAGE) test(`${file} covers what is live`, () => {
  const text = readFileSync(file, 'utf8').toLowerCase()
  for (const phrase of mustMention) assert.ok(text.includes(phrase.toLowerCase()), `${file} must mention "${phrase}"`)
  assert.match(text, /^last_verified: "2026-11-1[2-9]"/m)
})

// A guide must never name a tool the live catalogue does not have.
const live = new Set(JSON.parse(readFileSync('data/nrs-tool-ids.json', 'utf8')))
const TOOLISH = /`((?:google_ads|google_account|google_tracking|paid_ads|findable|business_plan|business_discovery|nrs_skill|results)_[a-z_]+|list_businesses|publish_post|propose_post|posting_status|preview_post_publication|accounts_overview|account_health)`/g
for (const { file } of REQUIRED_COVERAGE) test(`${file} names only tools that exist`, () => {
  for (const [, id] of readFileSync(file, 'utf8').matchAll(TOOLISH)) assert.ok(live.has(id), `${file} names "${id}", which the live catalogue does not have`)
})
