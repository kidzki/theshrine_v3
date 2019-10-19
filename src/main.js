import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.use(Meta);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
