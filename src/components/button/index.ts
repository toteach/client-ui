import _Vue from 'vue';

import Button from './button.vue';
import Buttons from './buttons.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Button.name, Button);
    Vue.component(Buttons.name, Buttons);
  },
};

export default Plugin;
export {
  Button as TButton,
  Buttons as TButtons,
};
