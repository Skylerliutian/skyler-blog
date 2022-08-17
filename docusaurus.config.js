// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Skyler's Blog",
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    path: './blog',
                    routeBasePath: '/',
                    // showReadingTime: true,
                    // blogSidebarTitle: '最近文章',
                    // blogSidebarCount: 0,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Skyler's Blog",
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    // {
                    //     type: 'doc',
                    //     docId: 'intro',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    { to: '/', label: '博客', position: 'left' },
                    {
                        label: '首页',
                        position: 'right',
                        to: '/',
                        items: [
                            {
                                label: 'blog',
                                to: 'demoblog',
                            },
                        ],
                    },

                    // {
                    //     type: 'localeDropdown',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    // {
                    //     title: 'Docs',
                    //     items: [
                    //         {
                    //             label: 'Tutorial',
                    //             to: '/docs/intro',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'Twitter',
                    //             href: 'https://twitter.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    {
                        title: '社交媒体',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Skylerliutian',
                            },
                            {
                                label: '哔哩哔哩',
                                href: 'https://space.bilibili.com/231771308',
                            },
                        ],
                    },
                    {
                        title: '敬请期待',
                    },
                ],
                // copyright: `<p>Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" >冀ICP备14007097号-3</a></p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a>`,
                copyright: `<p>Copyright © ${new Date().getFullYear()} Skyler, Inc. Built with Docusaurus.</p> <br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" >CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            // 明暗主题切换
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            // 公告栏
            announcementBar: {
                id: 'support_us',
                content:
                    'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
        }),
};

module.exports = config;
