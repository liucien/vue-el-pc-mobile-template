import Vue from 'vue';
import Router from 'vue-router';
import login from '../views/login.vue';

Vue.use(Router);
export const constantRouterMap = [
  {
    path:'/',
    name:'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/pc',
    name: 'pc',
    component: () => import('../views/pc/pc.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import('../views/mobile/mobile.vue')
  }

];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
