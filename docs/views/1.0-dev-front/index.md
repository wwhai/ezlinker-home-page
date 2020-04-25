---
title: EZLinker-1.0前端开发文档
date: 2010-04-10
---
[[TOC]]

前端基于 **ant-design v4**开发，目前所有页面都是 **function component** + **react hook**。请求工具使用的是 **swr** + **axios**。表格使用 **ProTable**，图表使用**bizcharts**。后期期望实现插件化开发.

## 1.目录说明

### 1.1 pages

所有具体的业务页面，所有的页面都是 index.jsx 导出。与路由的对应关系可以查看 /config/routes.

```
DC 在UI表现为 侧边弹出
MC 在UI表现为 模态框弹出
FDC、FMC 表示为表单 弹出框，可以提交信息

|- home 首页
|- project 项目（项目列表）
|  |- design 产品设计
|  |  |- compoents/modules (产品设计下的业务组件)
|  |  |  |- AddModuleDC 添加模块 
|  |  |  |- CreateFeatureFDC 创建功能（移除） 
|  |  |  |- CreateProductFDC 创建产品 
|  |  |  |- OperationProductDC 操作产品 
|  |  |  |- SelectProductMC 选择产品 
|  |  |  |- CreateModuleFDC 创建模块 
|  |  |  |- EditModuleFDC 编辑模块 
|  |  |- console 控制台
|  |- device 设备管理 （设备列表）
|  |  |- detail 设备详情
|  |- operation 数据看板（未开发）
|- setting 设置
|- user 用户

```
### 1.2 hooks

存放react hooks

#### 1.2.1 usePopup 

后期可能有接口变换,先提供简单示例

```jsx
import { useModal` } from '@/hooks';

const ModalContent = <div> 弹出框 </div>

const Page = () => {
  const { show } = useModal(ModalContent)

  return <div>
    <button onClick={show}></button>  
  </div>  
} 

```

#### 1.2.2 createUseRestful

后期可能有接口变化,先提供简单示例, 具体使用方法请参考源码和其他页面

```jsx
import { createUseRestful } from '@/hooks';

const api = '/api/user'

const Page = () => {
  const userResources = createUseRestful(api);

  const {data：userList} = userResources.useSWRQuery(); // 获取用户列表
  const {data: userDetail} = userResources.useSWRFind(10); // /api/user/10 获取id为10的用户

  const handleCreate = (record) => {
    userResources.create(record)
  }

  const handleEdit = (id, record) => {
    userResources.update(id, record)
  }

  return <div>
    {useList}
    {userDetail}
    <button onClick={() => handleCreate({})}>创建用户</button>  
    <button onClick={() => handleEdit(10, {})}>创建用户</button>  
  </div>  
} 
```

## 2. 缩写规范

因为部分组件名称较长，所以对使用频率较高的组件的后缀进行缩写。

| 全称              | 缩写 | 备注           |
| ----------------- | ---- | -------------- |
| ModalContent      | MC   | 对话框内容     |
| FormModalContent  | FMC  | 表单对话框内容 |
| DrawerContent     | DC   | 抽屉内容       |
| FormDrawerContent | FDC  | 表单抽屉内容   |
