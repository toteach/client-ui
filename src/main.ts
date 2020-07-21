import Vue, {
  CreateElement,
  VNode,
} from 'vue';

import App from '@/App.vue';
import '@/plugins/toteach';
import {
  router,
} from '@/plugins/vue-router';

Vue.config.productionTip = false;

// eslint-disable-next-line import/exports-last
export const app = new Vue({
  el: '#app',
  router,
  render: (h: CreateElement): VNode => h(App),
});
