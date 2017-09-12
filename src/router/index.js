import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Dashboard from '@/pages/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        permission: 'any',
        fail: '/error'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        permission: 'judge',
        fail: '/'
      }
    }
  ]
});
