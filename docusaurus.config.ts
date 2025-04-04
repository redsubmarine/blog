import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'redsubmarine Blog',
    tagline: '개발 경험과 지식을 공유하는 블로그',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://blog.wonseok.kr',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'redsubmarine', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: false,
                blog: {
                    routeBasePath: '/',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/redsubmarine/blog/edit/main/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                    blogSidebarTitle: '최근 게시물',
                    blogSidebarCount: 10,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'redsubmarine Blog',
            logo: {
                alt: 'redsubmarine Blog Logo',
                src: 'img/logo.svg',
            },
            items: [
                {to: '/tags', label: '태그', position: 'left'},
                {to: '/archive', label: '아카이브', position: 'left'},
                {
                    href: 'https://github.com/redsubmarine',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '콘텐츠',
                    items: [
                        {
                            label: '최신 포스트',
                            to: '/',
                        },
                        {
                            label: '태그',
                            to: '/tags',
                        },
                        {
                            label: '아카이브',
                            to: '/archive',
                        },
                    ],
                },
                {
                    title: '프로필',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/redsubmarine',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/redsubmarine',
                        },
                    ],
                },
                {
                    title: '구독',
                    items: [
                        {
                            label: 'RSS',
                            to: '/rss.xml',
                        },
                        {
                            label: 'Atom',
                            to: '/atom.xml',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} redsubmarine | Built with Docusaurus`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash', 'diff', 'json', 'ruby', 'rust', 'swift', 'go'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
