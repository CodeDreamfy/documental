// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AtComponents from 'at-ui';
import 'at-ui-style/css/at.css';
import App from './App';
import router from './router';
// import utils from './js/utils';
import './css/main.css';

Vue.config.productionTip = false;
Vue.use(AtComponents);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router(),
  template: '<App/>',
  components: { App },
});
// utils(Vue);
