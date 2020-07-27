import _Vue from 'vue';

import {
  Avatar,
  Button,
  Calendar,
  Card,
  Dropdown,
  Icon,
  Input,
  ListView,
  Pagination,
  ProgressBarRadial,
  Spinner,
} from './components';

const ToTeach = {
  install(Vue: typeof _Vue): void {
    Vue.use(Avatar);
    Vue.use(Calendar);
    Vue.use(Card);
    Vue.use(Button);
    Vue.use(Dropdown);
    Vue.use(Icon);
    Vue.use(Input);
    Vue.use(ListView);
    Vue.use(Pagination);
    Vue.use(ProgressBarRadial);
    Vue.use(Spinner);
  },
};

export default ToTeach;
