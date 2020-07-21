import _Vue from 'vue';

import Icon from './icon.vue';
import './utils/_icons-list';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Icon.name, Icon);
  },
};

export default Plugin;
export {
  Icon as TIcon,
};
