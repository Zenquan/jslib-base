module.exports = {
    title: 'jrfe-utils', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '悦跑h5小分队工具库', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }], //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/last-updated',
        ['@vuepress/back-to-top', true],
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [{
                        text: '说明',
                        link: '/pages/install.md'
                    },
                    {
                        text: 'API',
                        link: '/pages/api/modules.md'
                    },
                    {
                        text: '变更日志',
                        link: '/pages/CHANGELOG.md'
                    },
                    {
                        text: '计划列表',
                        link: '/pages/todo.md'
                    },
                ]
            },
            // {
            //   text: 'Github',
            //   link: 'https://github.com/Zenquan/jrfe-utils'
            // },
        ],
        sidebar: {
            '/pages/': [
                'install',
                'api/modules',
                'CHANGELOG',
                'todo'
            ],
        }
    }
}
