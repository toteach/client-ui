import _Vue from 'vue';

import Dropdown from './dropdown.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Dropdown.name, Dropdown);
  },
};

export default Plugin;
export {
  Dropdown as TDropdown,
};
