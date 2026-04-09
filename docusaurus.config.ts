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
      id: 'beta_notice',
      content: 'This help centre is actively growing — new articles added weekly. <a href="https://www.notrealsmart.com.au/agency">Open your agency</a>',
      backgroundColor: '#f0f0f0',
      textColor: '#333',
      isCloseable: true,
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
          href: 'https://www.notrealsmart.com.au/agency',
          label: 'Open Agency',
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
            { label: 'Compliance', to: '/compliance/ahpra-basics' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'NotRealSmart Agency', href: 'https://www.notrealsmart.com.au/agency' },
            { label: 'MCP Server', href: 'https://www.notrealsmart.com.au/api/mcp' },
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
