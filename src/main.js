import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import './router/index';
import store from './store/index';
import './plugins/element.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
