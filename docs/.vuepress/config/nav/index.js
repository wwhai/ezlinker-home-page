module.exports = {
    'zh': [{
            text: '文档',
            icon: 'reco-api',
            items: [{
                    text: '发布版本',
                    items: [
                        { text: 'V-1.0使用文档', link: '/views/1.0/' },
                        { text: 'V-1.0开发文档', link: '/views/1.0-dev/' }
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