/**
 * 全站路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
// import http from '@/utils/httpRequest'
// import {isURL} from '@/utils/validate'
import {clearLoginInfo} from '@/utils'
Vue.use(Router)
// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  {path: '/404', component: _import('common/404'), name: '404', meta: {title: '404未找到'}},
  {path: '/login', component: _import('common/login'), name: 'login', meta: {title: '登录'}}
]
// 主入口路由(需嵌套上左右整体布局)
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
    {path: '/attention', component: _import('modules/user/attention'), name: 'attention', meta: {title: '关注用户'}},
    {path: '/more', component: _import('modules/more/more'), name: 'more', meta: {title: '更多'}}
  ],
  beforeEnter (to, from, next) {
    let token = Vue.cookie.get('token')
    if (!token || !/\S/.test(token)) {
      clearLoginInfo()
      next({name: 'login'})
    }
    next()
  }
}
// 路由全局配置
const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  linkActiveClass: 'active',
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: globalRoutes.concat(mainRoutes)
})
router.beforeEach((to, from, next) => {
  // 登陆后访问login页面，跳转到home页面
  if (to.path === '/login') {
    let token = Vue.cookie.get('token')
    if (token) {
      next({name: 'home'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
