### 一个空架子
- 基于vue、element-ui构建开发
- 前后端分离，通过token进行数据交互，可独立部署
- 主题定制，通过scss变量统一一站式定制
---
#### 布局模块
1.根目录下的index.html为入口
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>企业网盘系统</title>
  <!-- 引入公共的js,css -->
</head>
<body class="manual-container">
<div id="app"></div>
</body>
</html>
```
2.main.js配置，改变id="app"的内容
```js
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App} //App.vue组件
})
```

3.App.vue组件
```html
<template>
  <transition name="fade">
    <router-view></router-view>  //根据路由改变内容
  </transition>
</template>

<script>
  export default {
  }
</script>
```

4.router/index.js 
```js
const mainRoutes = {
  path: '/',
  component: _import('main'),
  name: 'main',
  redirect: {name: 'home'},
  meta: {title: '主入口整体布局'},
  children: [
    {path: '/home', component: _import('common/home'), name: 'home', meta: {title: '首页'}},
    {path: '/more', component: _import('modules/more/more'), name: 'more', meta: {title: '更多'}},
  ]
}
```
主入口为main.vue 
登陆成功跳转到home

---
5.main.vue布局（nav,content,footer）
```html
<template>
  <div>
      <!-- 导航 -->
      <main-navbar/>
      <main-content/>
       <!--/页脚 -->
      <main-footer/>
  </div>
</template>

<script>
  //组件的方式引入
  import MainNavbar from './main-navbar'
  import MainContent from './main-content'
  import MainFooter from './main-footer'
  export default {
    components: {
      MainNavbar,
      MainContent,
      MainFooter
    }
  }
</script>
```
这样我们只需要改变MainContent组件里面的内容，达到改变路由的时候，内容也跟着改变

---

6.main-content.vue
```html
<template>
  <main class="site-content" :class="{ 'site-content--tabs': $route.meta.isTab }">
    <!-- 主入口-->
    <el-card>
      <keep-alive>
        <router-view />  //根据路由改变内容
      </keep-alive>
    </el-card>
  </main>
</template>
```

---
7.路由和页面关联配置
访问的路由怎么和页面关联起来？
答：在router/index.js里面
```js
const globalRoutes = [
  {path: '/404', component: _import('common/404'), name: '404', meta: {title: '404未找到'}},
  {path: '/login', component: _import('common/login'), name: 'login', meta: {title: '登录'}}
]

// 主入口路由
const mainRoutes = {
  path: '/',
  component: _import('main'),
  name: 'main',
  redirect: {name: 'home'},
  meta: {title: '主入口整体布局'},
  children: [
    {path: '/home', component: _import('common/home'), name: 'home', meta: {title: '首页'}},
    {path: '/echarts', component: _import('modules/more/echarts'), name: 'echarts', meta: {title: 'echarts'}},
    {path: '/ueditor', component: _import('modules/more/ueditor'), name: 'ueditor', meta: {title: 'ueditor'}},
    {path: '/disk', component: _import('modules/disk/disk'), name: 'disk', meta: {title: '网盘'}},
    {
      path: '/findresource',
      component: _import('modules/findresource/findresource'),
      name: 'findresource',
      meta: {title: '找资源'}
    },
    {path: '/share', component: _import('modules/share/share'), name: 'share', meta: {title: '分享'}},
    {path: '/user', component: _import('modules/user/user'), name: 'user', meta: {title: '个人中心'}},
    {path: '/more', component: _import('modules/more/more'), name: 'more', meta: {title: '更多'}},
  ]
}
```
