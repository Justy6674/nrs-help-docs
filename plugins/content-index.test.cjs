const test = require('node:test');
const assert = require('node:assert/strict');
const {buildIndex} = require('./content-index.cjs');
const document = (overrides = {}) => ({id: 'reports/read-evidence', title: 'Read evidence', description: 'Use references', permalink: '/reports/read-evidence', frontMatter: {last_verified: '2026-09-08', owner: 'Bec and Justin', review_status: 'source-checked', availability: 'release pending'}, ...overrides});
const content = (docs) => ({loadedVersions: [{versionName: 'current', docs}]});

test('exports only published current documents and reviewed metadata without body or secrets', () => {
  const index = buildIndex(content([document({body: 'not exported', secret: 'not exported'}), document({id: 'hidden', permalink: '/hidden', unlisted: true}), document({id: 'draft', permalink: '/draft', frontMatter: {draft: true}})]));
  assert.equal(index.length, 1);
  assert.deepEqual(index[0], {id: 'reports/read-evidence', title: 'Read evidence', description: 'Use references', permalink: 'https://help.notrealsmart.com.au/reports/read-evidence', category: 'reports', lastVerified: '2026-09-08', reviewOwner: 'Bec and Justin', reviewStatus: 'source-checked', availability: 'release pending'});
});
test('rejects duplicate routes, off-domain routes and absent metadata', () => {
  assert.throws(() => buildIndex(content([document(), document({id: 'another'})])), /duplicate/);
  assert.throws(() => buildIndex(content([document({permalink: 'https://other.example/test'})])), /permalink/);
  assert.throws(() => buildIndex(content([document({permalink: undefined})])), /missing/);
  assert.throws(() => buildIndex(content([document({permalink: '/reports/test?token=private'})])), /permalink/);
  assert.throws(() => buildIndex(null), /unavailable/);
});
