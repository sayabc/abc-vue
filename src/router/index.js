import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import VueEcharts from '@/components/VueEcharts';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
}, {
  path: '/vue-echarts',
  name: 'VueEcharts',
  component: VueEcharts,
}];

export default new Router({
  mode: 'history', // 不配置这个路由带#号 location.href时候
  routes,
});
// Hash: 使用URL的hash值来作为路由。支持所有浏览器。
// History: 以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式
// Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。
