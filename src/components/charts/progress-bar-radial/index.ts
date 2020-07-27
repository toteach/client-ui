import _Vue from 'vue';

import ProgressBarRadial from './progress-bar-radial.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(ProgressBarRadial.name, ProgressBarRadial);
  },
};

export default Plugin;
export {
  ProgressBarRadial as TProgressBarRadial,
};
