import test from 'node:test';
import assert from 'node:assert/strict';
import {checkDocuments} from './check-content.mjs';

const today = '2026-09-08';
const snapshot = {schemaVersion: 1, services: Array.from({length: 108}, (_, i) => ({sku: `NRS-${String(i + 1).padStart(3, '0')}`, sectionId: 'start', amount: i, model: 'fixed'}))};
const metadata = {title: 'Current guidance', description: 'Scope and limitations', last_verified: today, review_owner: 'Bec and Justin', review_status: 'reviewed', availability: 'reference', feature_ids: [], source_urls: [], source_files: ['README.md']};
const docs = () => snapshot.services.map(service => ({file: `services/${service.sku}.md`, data: {...metadata, service_sku: service.sku, service_section: service.sectionId, service_amount: service.amount, service_model: service.model}, content: 'Discuss and agree the work before it starts.'}));
const run = documents => checkDocuments(documents, snapshot, {today}).errors;

test('accepts reviewed catalogue and explanatory negations without claiming operational proof', () => {
  const documents = docs();
  documents.push({file: 'limitations.md', data: metadata, content: 'NRS does not guarantee compliance. Earlier guidance said all testimonials are forbidden. That blanket rule was incorrect.'});
  assert.deepEqual(run(documents), []);
});

test('holds missing service references and mismatched financial terms', () => {
  const documents = docs(); documents.pop(); documents[0].data.service_amount = 9000;
  const errors = run(documents);
  assert.ok(errors.some(error => error.includes('amount differs')));
  assert.ok(errors.some(error => error.includes('Missing published service reference: NRS-108')));
});

test('rejects duplicate SKU, document ID and explicit slug', () => {
  const documents = docs();
  documents[0].data.id = 'duplicate'; documents[1].data.id = 'duplicate';
  documents[0].data.slug = '/same'; documents[1].data.slug = '/same/';
  documents[1].data.service_sku = documents[0].data.service_sku;
  const errors = run(documents);
  for (const message of ['duplicate service SKU', 'duplicate document id', 'duplicate explicit slug']) assert.ok(errors.some(error => error.includes(message)), message);
});

test('a lookalike regulator host cannot establish a primary source', () => {
  const documents = docs();
  documents.push({file: 'compliance/ahpra-rules.md', data: {...metadata, source_urls: ['https://ahpra.gov.au.example.com/guidance']}, content: 'Review applicable guidance.'});
  assert.ok(run(documents).some(error => error.includes('primary Ahpra source')));
});

test('future and overdue reviews fail, using a shorter editorial schedule for regulatory pages', () => {
  const documents = docs();
  documents[0].data.last_verified = '2026-09-09';
  documents[1].data.last_verified = '2026-02-30';
  documents[2].data.last_verified = '2026-05-01';
  documents.push({file: 'compliance/ahpra-rules.md', data: {...metadata, last_verified: '2026-08-01', source_urls: ['https://www.ahpra.gov.au/guidance']}});
  const errors = run(documents);
  assert.ok(errors.some(error => error.includes('cannot be in the future')));
  assert.ok(errors.some(error => error.includes('actual YYYY-MM-DD')));
  assert.ok(errors.some(error => error.includes('interval 90 days')));
  assert.ok(errors.some(error => error.includes('interval 30 days')));
});

test('draft pages are excluded but publicly reachable unlisted pages still need review', () => {
  const documents = docs();
  documents.push({file: 'draft.md', data: {draft: true}, content: 'Director knows everything.'});
  assert.deepEqual(run(documents), []);
  documents.push({file: 'unlisted.md', data: {...metadata, unlisted: true, review_status: 'draft'}, content: 'Director knows everything.'});
  const errors = run(documents);
  assert.ok(errors.some(error => error.includes('require review_status: reviewed')));
  assert.ok(errors.some(error => error.includes('unsupported legacy promise')));
});
