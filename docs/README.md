---
home: true
# heroImage: '/ezlinker.png'
# heroImageStyle: {
#   maxWidth: '200px',
#   width: '100%',
#   display: block,
#   margin: '5rem auto 2rem',
#   borderRadius: '1rem',
# }
isShowTitleInHome: true
actionText: 更多信息
actionLink: /views/about/index.html
features:
- title: 人性化操作
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 轻量级部署
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 可视化布局
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 更新记录

::: tip
**[2020-03-16]** 更新 `0.0.5`

1. 增加HTTP协议入口
2. 增加MQTT协议入口
3. 增加COAP协议入口
4. 增加动态界面布局效果
5. 发布Docker镜像V1.0版本
---

:::

## 快速开始

::: warning
1. 确保操作系统装了Docker
2. 当前版本，只在UbuntuServer1804，CenterOS7上做了测试，其他系统暂时未知，请谨慎选择操作系统
:::

**拉取镜像docker**

```bash
docker run \
# WEB入口
-p  22500:80 \
# MQTT端口
-p  21883:1883 \
# WebSocket端口
-p  22501:2501 \
# COAP端口
-p  22506:2506 \
# 基于TCP轻量级协议:Trap端口
-p  21884:1884 \
# 基于UDP轻量级协议:Trap端口
-p  21885:1885 \
--name ezlinker  \
--restart=always \
-d \
ezlinker \
```

**进入系统**

[传送门：http://localhost:22500/](http://localhost:22500/ "http://localhost:22500/"). 
