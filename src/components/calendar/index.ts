import _Vue from 'vue';

import Calendar from './calendar.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Calendar.name, Calendar);
  },
};

export default Plugin;
export {
  Calendar as TCalendar,
};
