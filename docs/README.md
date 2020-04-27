---
home: true
isShowTitleInHome: false
actionText: 更多信息
actionLink: /views/about/index.html
---


## 更新记录
::: tip
**[2020-04-20]** 更新 `0.0.6`

1. 增加RawTCP协议入口
2. 增加RawUDP协议入口
---

:::

::: tip
**[2020-03-20]** 更新 `0.0.5`

1. 增加HTTP协议入口
2. 增加MQTT协议入口
3. 增加COAP协议入口
4. 增加动态界面布局效果
5. 发布Docker镜像V1.0版本
6. 优化代码，删除一些无用文件
---

:::

## 快速开始

::: warning
1. 确保操作系统装了Docker
2. 当前版本，只在UbuntuServer1804，CenterOS7上做了测试，其他系统暂时未知，请谨慎选择操作系统
:::

**拉取镜像docker**

```bash 
wget  https://github.com/wwhai/ezlinker/blob/master/resources/docker/ezlinker-app-release/docker-compose.yml
docker-compose up -d .
```

**进入系统**

[传送门：http://localhost:22500/](http://localhost:22500/ "http://localhost:22500/"). 
