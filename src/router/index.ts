import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import index1_1 from '../views/index1_1.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index1_1',
    component: index1_1,
    meta: {
      title: 'HTML+CSS',
    },
  },
  {
    path: '/index1_1',
    name: 'index1_1',
    component: index1_1,
    meta: {
      title: 'HTML+CSS和SVG渲染数据图表',
    },
  },
  {
    path: '/index1_2',
    name: 'index1_2',
    component: () => import('../views/index1_2.vue'),
    meta: {
      title: 'Canvas绘制层次关系图',
    },
  },
  {
    path: '/index1_3',
    name: 'index1_3',
    component: () => import('../views/index1_3.vue'),
    meta: {
      title: 'SVG绘制层次关系图',
    },
  },
  {
    path: '/index1_4',
    name: 'index1_4',
    component: () => import('../views/index1_4.vue'),
    meta: {
      title: 'WebGL与渲染管线',
    },
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to:any, from:any, next:any) => {
  document.title = to.meta.title || '';
  next();
});

export default router;
