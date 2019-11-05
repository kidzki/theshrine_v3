import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/next-generation',
    name: 'nx',
    component: () => import(/* webpackChunkName: "nx" */ '../views/NX.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
