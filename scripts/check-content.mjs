#!/usr/bin/env node
/** Release checks for documented claims, not certification of product or legal accuracy.
 * Editorial review cadence: 90 days generally; 30 days for regulator-linked pages.
 * A changed source still needs human review immediately, regardless of this cadence.
 */
import {readFileSync, readdirSync} from 'node:fs';
import {dirname, relative, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import matter from 'gray-matter';

export const REVIEW_DAYS = {general: 90, regulatory: 30};
const DAY = 86_400_000;
const string = value => typeof value === 'string' && value.trim().length > 0;
const isoDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
const official = (value, host) => {try {const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password && [host, `www.${host}`].includes(u.hostname);} catch {return false;}};
const knownPromises = [
  /\b(?:your |the )?Director knows everything\b/i,
  /\b1 Director\s*(?:\+|and)\s*13\b/i,
  /\b14 (?:AI |specialist )?(?:agents|departments)\b/i,
  /\b(?:automatically|always) (?:keeps? you |makes? (?:you|content) )?compliant\b/i,
  /\b(?:guarantees?|ensures?) (?:your |full |legal |regulatory )?compliance\b/i,
  /\ball (?:patient )?testimonials (?:are |remain )?(?:banned|forbidden|prohibited)\b/i,
  /\ball before[- ]and[- ]after (?:photos|images) (?:are )?(?:banned|forbidden|prohibited)\b/i,
];
const excludedPromiseContext = /\b(?:not|never|no longer|earlier|outdated|incorrect|do not|does not|cannot|can.t)\b/i;

export function checkDocuments(documents, snapshot, {today = new Date().toISOString().slice(0, 10)} = {}) {
  if (!isoDate(today)) throw new Error('today must be an actual YYYY-MM-DD date');
  const errors = [], ids = new Map(), slugs = new Map(), serviceDocs = new Map();
  let published = 0;
  const add = (file, message) => errors.push(`${file}: ${message}`);
  const identity = (seen, key, file, label) => {
    if (seen.has(key)) add(file, `duplicate ${label} ${key} (also ${seen.get(key)})`);
    else seen.set(key, file);
  };
  for (const {file, data: fm, content = ''} of documents) {
    // Unlisted pages remain publicly reachable and must meet the same checks.
    if (fm.draft === true) continue;
    published++;
    for (const field of ['title', 'description', 'review_owner', 'review_status', 'availability']) {
      if (!string(fm[field])) add(file, `missing ${field}`);
    }
    if (fm.review_status !== 'reviewed') add(file, 'published pages require review_status: reviewed; use draft: true for unfinished work');
    for (const field of ['feature_ids', 'source_urls', 'source_files']) {
      if (!Array.isArray(fm[field]) || fm[field].some(value => !string(value))) add(file, `${field} must be an array of non-empty strings (empty arrays are allowed)`);
    }
    if (!(fm.source_files?.length || fm.source_urls?.length)) add(file, 'at least one source file or source URL is required');
    for (const value of Array.isArray(fm.source_urls) ? fm.source_urls : []) {
      try {const u = new URL(value); if (!['https:', 'http:'].includes(u.protocol) || u.username || u.password) throw new Error();}
      catch {add(file, `invalid source URL ${value}`);}
    }
    const sources = Array.isArray(fm.source_urls) ? fm.source_urls : [];
    const hasAhpra = sources.some(url => official(url, 'ahpra.gov.au'));
    const hasTga = sources.some(url => official(url, 'tga.gov.au'));
    if (!isoDate(fm.last_verified)) add(file, 'last_verified must be an actual YYYY-MM-DD string');
    else {
      const age = (Date.parse(today) - Date.parse(fm.last_verified)) / DAY;
      const interval = hasAhpra || hasTga ? REVIEW_DAYS.regulatory : REVIEW_DAYS.general;
      if (age < 0) add(file, 'last_verified cannot be in the future');
      if (age > interval) add(file, `editorial review overdue (${age} days; interval ${interval} days)`);
    }
    const stem = file.replace(/\.(md|mdx)$/i, '');
    // Docusaurus prefixes a custom id with the containing folder.
    const id = fm.id ? `${dirname(stem) === '.' ? '' : `${dirname(stem)}/`}${fm.id}` : stem;
    if (fm.id !== undefined && (!string(fm.id) || /\//.test(fm.id))) add(file, 'explicit id must be a non-empty local document id');
    identity(ids, id, file, 'document id');
    if (fm.slug !== undefined) {
      if (!string(fm.slug) || /[?#]/.test(fm.slug)) add(file, 'slug must be a non-empty path without a query or fragment');
      else identity(slugs, `/${fm.slug.replace(/^\/+|\/+$/g, '')}`, file, 'explicit slug');
    }
    const requiresAhpra = /(?:compliance\/(?:ahpra-rules|how-compliance-works|the-guardian-agent)|health-and-abe\/(?:health-advertising-review|testimonials-and-images))\./.test(file);
    const requiresTga = /(?:compliance\/(?:tga-rules|how-compliance-works|the-guardian-agent)|health-and-abe\/(?:health-advertising-review|prescription-medicines|testimonials-and-images))\./.test(file);
    if (requiresAhpra && !hasAhpra) add(file, 'health guidance requires an HTTPS primary Ahpra source');
    if (requiresTga && !hasTga) add(file, 'health guidance requires an HTTPS primary TGA source');
    for (const sentence of `${fm.title ?? ''}. ${fm.description ?? ''}. ${content}`.split(/(?<=[.!?])\s+|\n/)) {
      for (const pattern of knownPromises) {
        const match = pattern.exec(sentence);
        if (match && !excludedPromiseContext.test(sentence.slice(0, match.index))) add(file, `unsupported legacy promise: ${match[0]}`);
      }
    }
    if (fm.service_sku !== undefined) {
      if (!string(fm.service_sku)) add(file, 'service_sku must be a non-empty string');
      else {
        identity(serviceDocs, fm.service_sku, file, 'service SKU');
        const service = snapshot?.services?.find(item => item.sku === fm.service_sku);
        if (!service) add(file, `unknown service SKU ${fm.service_sku}`);
        else {
          if (fm.service_section !== service.sectionId) add(file, `service section differs from catalogue for ${service.sku}`);
          if (fm.service_amount !== service.amount) add(file, `service amount differs from catalogue for ${service.sku}`);
          if (fm.service_model !== service.model) add(file, `service price model differs from catalogue for ${service.sku}`);
        }
      }
    }
  }
  if (!published) errors.push('No published articles found');
  if (!snapshot || snapshot.schemaVersion !== 1 || snapshot.services?.length !== 108 || new Set(snapshot.services?.map(item => item.sku)).size !== 108) errors.push('Service snapshot must contain all 108 unique authoritative SKUs');
  else for (const item of snapshot.services) if (!serviceDocs.has(item.sku)) errors.push(`Missing published service reference: ${item.sku}`);
  return {errors, published, services: serviceDocs.size};
}

function walk(dir) {
  return readdirSync(dir, {withFileTypes: true}).flatMap(entry => entry.isDirectory() ? walk(resolve(dir, entry.name)) : /\.(md|mdx)$/i.test(entry.name) ? [resolve(dir, entry.name)] : []);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  try {
    const docsDir = resolve(root, 'docs');
    const documents = walk(docsDir).map(file => ({file: relative(docsDir, file), ...matter(readFileSync(file, 'utf8'))}));
    const snapshot = JSON.parse(readFileSync(resolve(root, 'data/services.json'), 'utf8'));
    const todayArg = process.argv.indexOf('--today');
    const result = checkDocuments(documents, snapshot, todayArg === -1 ? {} : {today: process.argv[todayArg + 1]});
    if (result.errors.length) {console.error(result.errors.join('\n')); process.exitCode = 1;}
    else console.log(`Help release checks passed: ${result.published} published articles, ${result.services} service references. Review dates are editorial records, not proof of production behaviour or legal compliance.`);
  } catch (error) {console.error(`Help release check failed: ${error.message}`); process.exitCode = 1;}
}
