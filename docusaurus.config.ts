import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NotRealSmart Agency — Help Centre',
  tagline: 'Your AI marketing agency. Powered by intelligence. Owned by you.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://help.notrealsmart.com.au',
  baseUrl: '/',

  organizationName: 'Justy6674',
  projectName: 'nrs-help-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en-AU',
    locales: ['en-AU'],
  },

  // Plugins
  plugins: [
    ['docusaurus-plugin-llms', {
      generateLLMsTxt: true,
      generateLLMsFullTxt: true,
    }],
  ],

  // Search
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Justy6674/nrs-help-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.png',
    metadata: [
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'theme-color', content: '#1a1a2e' },
    ],
    announcementBar: {
      // The previous banner claimed "actively growing — new articles added
      // weekly". That stopped being true in August 2026 and was still on a
      // public page a month later. A false claim in a banner is worse than no
      // banner, and on a consumer-facing Australian site it is an exposure.
      //
      // Not closeable: the reader needs to know these articles describe a
      // product that no longer exists, and a dismissed banner does not tell
      // them that on the next page.
      id: 'v1_notice',
      content:
        'These articles describe an earlier version of NotRealSmart and are being rewritten. <a href="https://www.notrealsmart.com.au/console">Open your console</a>',
      backgroundColor: '#fff4e5',
      textColor: '#663c00',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NRS Help Centre',
      logo: {
        alt: 'NotRealSmart Agency',
        src: 'img/logo.png',
        style: { height: '28px' },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://www.notrealsmart.com.au/console',
          label: 'Open console',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Getting Started',
          items: [
            { label: 'What is NRS?', to: '/getting-started/what-is-notrealsmart' },
            { label: 'Your First Conversation', to: '/getting-started/your-first-conversation' },
            { label: 'Setting Up Your Brand', to: '/getting-started/setting-up-your-brand' },
          ],
        },
        {
          title: 'Key Features',
          items: [
            { label: 'Creating Content', to: '/creating-content/write-a-social-post' },
            { label: 'Publishing', to: '/publishing/schedule-a-post' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Not Real Smart', href: 'https://www.notrealsmart.com.au' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Black Health Intelligence Pty Ltd. ABN 23 693 026 112. Australian-built. Australian-owned.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
