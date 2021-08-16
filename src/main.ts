import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './utils/index';
import './styles/main.scss';

// import { Toast, Loading, Overlay } from 'vant';

// Vue.use(Toast);
// Vue.use(Loading);
// Vue.use(Overlay);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
