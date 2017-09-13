import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Dashboard from '@/pages/Dashboard';

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
        permission: 'judge',
        fail: '/'
      }
    }
  ]
});
