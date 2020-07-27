import _Vue from 'vue';

import DropdownItem from './dropdown-item.vue';
import Dropdown from './dropdown.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(DropdownItem.name, DropdownItem);
  },
};

export default Plugin;
export {
  Dropdown as TDropdown,
  DropdownItem as TDropdownItem,
};
