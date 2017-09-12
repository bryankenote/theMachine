// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
import Acl from 'vue-acl';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(Acl, { router: router, init: 'any' });
Vue.use(VueResource);

// export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
});
