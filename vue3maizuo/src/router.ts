import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/film/index.vue';
import List from './views/film/list.vue';
import Detail from './views/film/detail.vue';
import Login from './views/member/login.vue';
import Cinema from './views/cinema/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/film',
      name: 'film',
      component: List,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema,
    },
    {
      path: '*',
      component: Home,
    },
  ],
});
