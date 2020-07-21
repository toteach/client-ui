import _Vue from 'vue';

import ListView from './listview.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(ListView.name, ListView);
  },
};

export default Plugin;
export {
  ListView as TListView,
};
