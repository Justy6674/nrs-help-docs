import React from 'react';
import Link from '@docusaurus/Link';

const guides = [
  {number: '01', title: 'Start with NRS', description: 'The problem we take on, your workspace, and the people doing the work.', to: '/getting-started/what-is-notrealsmart'},
  {number: '02', title: 'The four jobs and the Rate Book', description: 'Be found, systems, AI integration, structure and governance. Prices live in the quote after a first chat.', to: '/services'},
  {number: '03', title: 'Create and publish', description: 'Write, attach media, check the details and approve what goes out.', to: '/creating-content/write-a-social-post'},
  {number: '04', title: 'Understand your reports', description: 'Sources, findings, review, delivery and the limits of the evidence.', to: '/reports/prepare-a-full-report'},
  {number: '05', title: 'Health advertising and Abe', description: 'Australian advertising rules, grounded checks and human review.', to: '/health-and-abe/what-abe-does'},
  {number: '06', title: 'Get help from a person', description: 'A problem, a connection or a question about your next step.', to: '/troubleshooting/contact-support'},
];

export default function HelpStart() {
  return (
    <div className="nrs-help-home">
      <header className="nrs-help-hero">
        <p className="nrs-help-eyebrow">Not Real Smart · Help centre</p>
        <h1>Use the AI shift. Protect the practice.</h1>
        <p className="nrs-help-lead">Use the AI shift. Protect the practice.</p>
        <Link className="nrs-help-search-link" to="/search">Search the help centre <span aria-hidden="true">↗</span></Link>
      </header>
      <nav className="nrs-help-cards" aria-label="Find a guide">
        {guides.map((guide) => (
          <Link key={guide.number} className="nrs-help-card" to={guide.to}>
            <span className="nrs-help-card-number" aria-hidden="true">{guide.number}</span>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
            <span className="nrs-help-card-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
      <section className="nrs-help-human">
        <p className="nrs-help-eyebrow">People behind the work</p>
        <h2>About the agency.</h2>
        <p>An Australian agency for health practices and small businesses. Each guide says what is live.</p>
        <Link to="/about/founders">About Not Real Smart <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
}
