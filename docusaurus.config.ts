import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Not Real Smart Help',
  tagline: 'Practical guides to NRS, your services, reporting and health advertising review.',
  favicon: 'img/favicon.png',
  url: 'https://help.notrealsmart.com.au',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'Justy6674',
  projectName: 'nrs-help-docs',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'en-AU', locales: ['en-AU']},
  plugins: [
    './plugins/content-index.cjs',
    ['docusaurus-plugin-llms', {generateLLMsTxt: true, generateLLMsFullTxt: true}],
  ],
  themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
    hashed: true,
    language: ['en'],
    highlightSearchTermsOnTargetPage: true,
    docsRouteBasePath: '/',
    explicitSearchResultPath: true,
  }]],
  presets: [['classic', {
    docs: {
      sidebarPath: './sidebars.ts',
      routeBasePath: '/',
      async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
        if (args.item.dirName !== 'services') return defaultSidebarItemsGenerator(args);
        const serviceDocs = args.docs.filter((doc) => doc.id.startsWith('services/service-'));
        const sections = args.docs.filter((doc) => doc.id.startsWith('services/area-'))
          .sort((a, b) => (a.sidebarPosition ?? 0) - (b.sidebarPosition ?? 0));
        const included = new Set<string>();
        const categories = sections.map((section) => {
          const sectionId = section.id.replace('services/area-', '');
          const items = serviceDocs.filter((doc) => {
            const details = doc.frontMatter as Record<string, unknown>;
            return String(details.service_section) === sectionId;
          }).sort((a, b) => (a.sidebarPosition ?? 0) - (b.sidebarPosition ?? 0))
            .map((doc) => {
              included.add(doc.id);
              return {type: 'doc' as const, id: doc.id};
            });
          return {
            type: 'category' as const, label: section.title, collapsed: true,
            link: {type: 'doc' as const, id: section.id}, items,
          };
        });
        if (included.size !== serviceDocs.length || !categories.length) {
          throw new Error('Every service must belong to a documented service area.');
        }
        return categories;
      },
    },
    blog: false,
    theme: {customCss: './src/css/custom.css'},
  } satisfies Preset.Options]],
  themeConfig: {
    image: 'img/favicon.png',
    metadata: [{name: 'theme-color', content: '#071014'}],
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Not Real Smart / Help',
      hideOnScroll: false,
      style: 'dark',
      logo: {alt: 'NRS', src: 'img/favicon.png', width: 30, height: 30},
      items: [
        {type: 'docSidebar', sidebarId: 'helpSidebar', position: 'left', label: 'Guides'},
        {to: '/services', label: 'Our services', position: 'left'},
        {to: '/health-and-abe/what-abe-does', label: 'Health & Abe', position: 'left'},
        {href: 'https://www.notrealsmart.com.au', label: 'Back to Not Real Smart', className: 'nrs-mobile-nav-link', target: '_self', position: 'right'},
        {href: 'https://www.notrealsmart.com.au/console', label: 'Open console', className: 'nrs-mobile-nav-link', target: '_blank', position: 'right'},
      ],
    },
    docs: {sidebar: {hideable: false, autoCollapseCategories: true}},
    footer: {
      style: 'dark',
      links: [
        {title: 'Start here', items: [
          {label: 'What NRS does', to: '/getting-started/what-is-notrealsmart'},
          {label: 'Our services', to: '/services'},
          {label: 'Bec and Justin', to: '/about/founders'},
        ]},
        {title: 'Get work done', items: [
          {label: 'Publish and review', to: '/creating-content/write-a-social-post'},
          {label: 'Client reports', to: '/reports/prepare-a-full-report'},
          {label: 'Health advertising and Abe', to: '/health-and-abe/what-abe-does'},
        ]},
        {title: 'Stay connected', items: [
          {label: 'Back to Not Real Smart', href: 'https://www.notrealsmart.com.au'},
          {label: 'Open console', href: 'https://www.notrealsmart.com.au/console'},
          {label: 'Ask us for help', href: 'https://www.notrealsmart.com.au/enquire'},
          {label: 'Privacy', href: 'https://www.notrealsmart.com.au/privacy'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Black Health Intelligence Pty Ltd · ABN 23 693 026 112 · Australia`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
