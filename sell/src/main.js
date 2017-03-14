// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */

var routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
];
var router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
