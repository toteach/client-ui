import _Vue from 'vue';

import Card from './card.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Card.name, Card);
  },
};

export default Plugin;
export {
  Card as TCard,
};
