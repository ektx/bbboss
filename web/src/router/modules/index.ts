import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@src/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@src/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  }
] as RouteRecordRaw[]
