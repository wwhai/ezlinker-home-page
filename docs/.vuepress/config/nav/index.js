module.exports = {
    'zh': [{
            text: '文档',
            icon: 'reco-api',
            items: [{
                    text: 'EZLINKER发布',
                    items: [
                        { text: 'V-1.0用户使用文档', link: '/views/1.0/' },
                        { text: 'V-1.0后端开发文档', link: '/views/1.0-dev/' },
                        { text: 'V-1.0前端开发文档', link: '/views/1.0-dev-front/' }
                    ],
                },
                {
                    text: '生态项目',
                    items: [
                        { text: 'EZ-EMQX', link: '/views/ezemqx/' },
                        { text: '插件市场', link: '/views/pluginmarket/' },
                        { text: '开源硬件', link: '/views/openhardware/' }

                    ]
                }
            ]

        },
        { text: '常见问题', link: '/views/question/index.html', icon: 'reco-faq' },
        { text: '案例', link: '/views/example/index.html', icon: 'reco-category' },
        { text: '博客', link: 'https://space.ezlinker.cn', icon: 'reco-blog' },
        { text: 'GitHub', link: 'https://github.com/ezlinkerteam/ezlinker', icon: 'reco-github' }
    ]
}