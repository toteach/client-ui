import Vue from 'vue';
import Vuex, {
  Store,
} from 'vuex';

import auth from './modules/auth';

Vue.use(Vuex);

const store = new Store({
  modules: {
    auth,
  },
  strict: process.env.NODE_ENV === 'production',
});

export default store;
