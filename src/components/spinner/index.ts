import _Vue from 'vue';

import Loader from './loader.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Loader.name, Loader);
  },
};

export default Plugin;
export {
  Loader as TLoader,
};
