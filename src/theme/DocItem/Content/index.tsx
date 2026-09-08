import React, {type ComponentProps} from 'react';
import DocItemContent from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function field(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

export default function NrsDocContent(props: ComponentProps<typeof DocItemContent>) {
  const {frontMatter, metadata} = useDoc();
  const details = frontMatter as typeof frontMatter & Record<string, unknown>;
  const verified = field(details.last_verified);
  const availability = field(details.availability);
  const owner = field(details.review_owner) ?? field(details.owner);
  const status = field(details.review_status);
  const availabilityLabels: Record<string, string> = {service: 'Agency service', limited: 'Workspace requirements apply', planned: 'Planned capability', reference: 'Reference guide'};
  return (
    <>
      {availability === 'planned' || availability === 'limited' ? (
        <div className="nrs-doc-availability" role="note">
          <strong>{availability === 'planned' ? 'Planned capability' : 'Availability depends on your workspace'}</strong>
          <p>{availability === 'planned' ? 'This is not available to use yet. The guide explains the intended work and its current limits.' : 'Read the access, setup and release requirements in this guide before relying on this feature.'}</p>
        </div>
      ) : null}
      <DocItemContent {...props} />
      {metadata.id !== 'index' && (verified || availability || status) ? (
        <aside className="nrs-doc-check" aria-label="About this guide">
          <strong>About this guide</strong>
          <dl>
            {verified ? <><dt>Source checked</dt><dd><time dateTime={verified}>{verified}</time></dd></> : null}
            {availability ? <><dt>Applies to</dt><dd>{availabilityLabels[availability] ?? availability}</dd></> : null}
            {owner ? <><dt>Documentation owners</dt><dd>{owner}</dd></> : null}
          </dl>
          {status ? <p>{status === 'reviewed' ? 'Checked against the guide’s source references.' : status}</p> : null}
        </aside>
      ) : null}
    </>
  );
}
