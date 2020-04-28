import moment from 'moment';
import Vue, {
  CreateElement,
  VNode,
} from 'vue';
import VueMeta from 'vue-meta';

import App from '@/App.vue';
import {
  i18n,
} from '@/plugins/vue-i18n';
import {
  router,
} from '@/plugins/vue-router';

import store from './store';

Vue.use(VueMeta);
Vue.config.productionTip = false;

moment.locale('en');

// eslint-disable-next-line import/exports-last
export const app = new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: (h: CreateElement): VNode => h(App),
});
