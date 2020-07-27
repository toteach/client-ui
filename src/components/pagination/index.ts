import _Vue from 'vue';

import Pagination from './pagination.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Pagination.name, Pagination);
  },
};

export default Plugin;
export {
  Pagination as TPagination,
};
