module.exports = {
  title: 'Yoga CLI',
  tagline: 'Relax and build awesome apps with Angular and Go',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'gophersumit', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yoga CLI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/yoga.png',
      },
      links: [
        {to: 'docs/getting-started', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/gophersumit/yoga',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} Sumit Agrawal, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
