---
title: EZLinker-1.0开发文档
date: 2010-04-10
---

[[toc]]
## 概述
因为EZLINKER是一个业务系统，核心是用Java周围的框架开发的，所以这里只讲EZLINKER的开发事项。关于EMQX的二次开发和Erlang的相关知识，还有Docker开发等等，后期会专门推出相关文章，但是不属于EZLINKER的范畴之内。如有兴趣，可就近去博客搜索相关文章。
## 1. 技术栈一览

本项目技术栈比较繁杂,但是总体来说不难,算是中等项目规模.主要用到的技术栈如下罗列:WEB后台我们用SpringBoot及其周边框架做的,想必做Java的人非常熟悉.这个就不多赘述.前端项目则是基于Ant design进行了少量自定义开发,也是很常见的技术,对于专业人员二次开发和使用应该问题不大.所有业务组成技术如下表所示:

| 名称        | 功能                 |
| ----------- | -------------------- |
| Springboot  | 后台管理系统主要框架 |
| MybatisPlus | 数据持久层框架       |
| Netty       | 实现WEB Terminal     |
| PahoMqtt    | 实现Mqtt代理         |
| Redis       | 系统数据缓存         |
| MongoDb     | 设备数据,日志保存    |
| AntDesign   | 前端框架             |

所有用到的三方服务下表所示:

| 名称           | 功能                                                  |
| -------------- | ----------------------------------------------------- |
| 阿里云短信API  | 阿里云提供短信功能                                    |
| 又拍云文件存储 | 如果用户没有文件存储资源,可以使用又拍云的文件存储功能 |
| 阿里云邮件API  | 阿里云提供邮箱功能                                    |

## 2. 开发规范

### 2.1 数据库规范
::: warning
注意：Mysql是8.0的版本，请大家更新相关驱动。
:::
#### 2.1.1 Mysql表结构规范
新建表的时候需要遵守规范,基础表结构如下:

```sql
CREATE TABLE `表名` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `record_version` int NOT NULL DEFAULT '0' COMMENT '记录版本',
  `x` tinyint(1) unsigned zerofill NOT NULL COMMENT '是否删除',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC COMMENT='产品（设备的抽象模板）';
```
#### 2.1.2 Mysql表名规范
1. 配置表全部`config`结尾.
2. 表名全部是常见名词的单数形式,意义要明确,不可出现`do object my`等模棱两可的名称.
3. 表名用名词单数形式,比如User,Student;
4. 中间关系表用 `relation`开头,后面跟关联的主表,从表,比如用户和博客的关系表:`relation_user_blog`,统一放进relation模块.
### 3. EZLinker框架的使用
#### 3.1 包名规范
1. controller:WEB控制器;
2. model:数据模型;
3. mapper:MyBatis映射;
4. service:Service层;
5. pojo:普通的Java类,一般起辅助作用;
6. form:前端的Form表单接收;
7. utils:模块私有工具代码;
8. resource:模块私有资源文件,例如配置.

#### 3.2 框架内置类
1. CurdController:有统一CURD业务场景时继承;
2. XController:简单接口继承

#### 3.3 统一返回结果
```json
{
    "id": "d4dc62783ea548b08a30ab9303ebf421",
    "appName": "ezlinker",
    "code": 200,
    "message": "Operation success",
    "i18nMessage": "操作成功",
    "data": {}
}
```

#### 3.4 内置函数
CurdController内置了一些便捷方法来获取当前的用户信息，拦截请求，参数检查等等:
##### 3.4.1 检查Model是否为null:
```shell script
void checkModelNull(XEntity entity) throws BadRequestException
```
其中Entity是要检查的实体.

##### 3.4.2 检查权限
```shell script
 boolean checkResourceAuthorize(IResourceAuthorizeService iResourceAuthorizeService, Long masterId, Long slaverId) 
```
主要用在用户需要操作某个资源的时候，需要检查权限.

##### 3.4.3 快捷分页
```shell script
 IPage<T> p(Integer current, Integer size)
```
current、size对应了分页的数据和页码。

##### 3.4.4 查询辅助
```shell script
 QueryWrapper<T> q()
```

快速取得一个SQL条件构造器

### 3. MongoDB的使用
mongodb主要用来保存大量非核心重要业务数据，使用方法：

#### 3.1 索引规范
::: warning
注意：Mongodb在使用过程中必须创建索引，不然性能十分低下。
:::
##### 3.1.1 Mongodb创建索引脚本
```shell script
//
db.getCollection("集合名").createIndex({
    node: NumberInt("类型")
}, {
    name: "索引名称"
});
```

目前版本的索引创建:
```shell script
db.getCollection("emqx_running_log_emqx@127.0.0.1").createIndex({
    node: NumberInt("-1")
}, {
    name: "emqx_running_log_index"
});
//
db.getCollection("jvm_state").createIndex({
    node: NumberInt("-1")
}, {
    name: "jvm_state_index"
});
//
db.getCollection("system_event_log").createIndex({
    node: NumberInt("-1")
}, {
    name: "system_event_log_index"
});
//
db.getCollection("system_network_state").createIndex({
    node: NumberInt("-1")
}, {
    name: "system_network_state_index"
});
//
db.getCollection("system_os_state").createIndex({
    node: NumberInt("-1")
}, {
    name: "system_os_state_index"
});
//
db.getCollection("user_login_log").createIndex({
    node: NumberInt("-1")
}, {
    name: "user_login_log_index"
});

```
### 4.代码生成器
代码生成器位于:
```shell script
ezlinker\app\src\test\java\com\ezlinker\app\CodeGenerator.java
```
使用过程中如需切换数据库，直接修改参数即可:
```shell script
private static String AUTHOR = "wangwenhai";
private static String IP = "127.0.0.1";
private static String PORT = "3306";
private static String DB_NAME = "ezlinker";
private static String USER = "easylinker";
private static String PASSWORD = "123456";
private static String PROJECT = "app";
private static String TABLE_PREFIX = "ez_";
```
### 5. 常见问题
#### 5.1 Maven构建失败
建议换阿里云的源，速度比较快点。
#### 5.2 Mysql连接失败
本项目用的Mysql8，注意一下版本。
#### 5.3 项目警告但是不报错
SpringMVC的某个版本在JDK11下会抛出警告，所以如果不放心可以用JDK8。