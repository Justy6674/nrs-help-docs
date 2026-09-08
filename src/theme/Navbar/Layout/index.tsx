import React, {type ComponentProps} from 'react';
import NavbarLayout from '@theme-original/Navbar/Layout';

// Wrap the stock layout: Docusaurus retains mobile focus, backdrop and menu state.
export default function NrsNavbarLayout({children, ...props}: ComponentProps<typeof NavbarLayout>) {
  return (
    <NavbarLayout {...props}>
      <div className="nrs-help-utility">
        <a href="https://www.notrealsmart.com.au"><span aria-hidden="true">← </span>Back to Not Real Smart</a>
        <a href="https://www.notrealsmart.com.au/console" target="_blank" rel="noopener noreferrer">Open console <span aria-hidden="true">↗</span><span className="nrs-sr-only"> (opens in a new tab)</span></a>
      </div>
      {children}
    </NavbarLayout>
  );
}
