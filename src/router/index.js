import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Dashboard from '@/pages/Dashboard';
import Roulette from '@/pages/RouletteCreate';
import RouletteActive from '@/pages/RouletteActive';
import RouletteHistory from '@/pages/RouletteHistory';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello,
      meta: {
        permission: 'unauth',
        fail: '/dashboard'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        permission: 'president|someoneElse',
        fail: '/'
      }
    },
    {
      path: '/roulette',
      name: 'roulette',
      component: Roulette,
      meta: {
        permission: 'president',
        fail: '/'
      }
    },
    {
      path: '/roulette-active',
      name: 'rouletteActive',
      component: RouletteActive,
      meta: {
        permission: 'president',
        fail: '/'
      }
    },
    {
      path: '/roulette-history',
      name: 'rouletteHistory',
      component: RouletteHistory,
      meta: {
        permission: 'president',
        fail: '/'
      }
    }
  ]
});
