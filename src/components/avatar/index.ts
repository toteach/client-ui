import _Vue from 'vue';

import Avatar from './avatar.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Avatar.name, Avatar);
  },
};

export default Plugin;
export {
  Avatar as TAvatar,
};
