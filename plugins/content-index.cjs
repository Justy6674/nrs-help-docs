const {writeFile} = require('node:fs/promises');
const path = require('node:path');

const SITE = 'https://help.notrealsmart.com.au';
const field = (value) => typeof value === 'string' && value.trim() ? value.trim() : null;

function buildIndex(content) {
  const versions = content?.loadedVersions;
  if (!Array.isArray(versions)) throw new Error('NRS content index: document metadata is unavailable.');
  const articles = [];
  const ids = new Set();
  const urls = new Set();
  for (const version of versions) {
    if (version.versionName !== 'current') continue;
    for (const doc of version.docs ?? []) {
      const fm = doc.frontMatter ?? {};
      if (doc.unlisted || fm.unlisted || fm.draft) continue;
      const id = field(doc.id);
      const title = field(doc.title);
      const permalink = field(doc.permalink);
      if (!id || !title || !permalink) throw new Error('NRS content index: missing document identity or permalink.');
      const url = new URL(permalink, SITE);
      if (url.origin !== SITE || url.username || url.password || url.search || url.hash) {
        throw new Error('NRS content index: invalid document identity or permalink.');
      }
      if (ids.has(id) || urls.has(url.href)) throw new Error(`NRS content index: duplicate document ${id}.`);
      ids.add(id);
      urls.add(url.href);
      articles.push({
        id, title, description: field(doc.description) ?? '', permalink: url.href,
        category: id.includes('/') ? id.split('/')[0] : 'help',
        lastVerified: field(fm.last_verified), reviewOwner: field(fm.review_owner) ?? field(fm.owner),
        reviewStatus: field(fm.review_status), availability: field(fm.availability),
      });
    }
  }
  if (!articles.length) throw new Error('NRS content index: no published documents were loaded.');
  return articles.sort((a, b) => a.id.localeCompare(b.id));
}

module.exports = function nrsContentIndex() {
  let articles;
  return {
    name: 'nrs-content-index',
    allContentLoaded({allContent}) {
      articles = buildIndex(allContent['docusaurus-plugin-content-docs']?.default);
    },
    async postBuild({outDir}) {
      if (!articles?.length) throw new Error('NRS content index was not prepared before build.');
      await writeFile(path.join(outDir, 'content-index.json'), JSON.stringify({schemaVersion: 1, generatedAt: new Date().toISOString(), articles}, null, 2) + '\n');
    },
  };
};
module.exports.buildIndex = buildIndex;
