import {
  MutationTree,
} from 'vuex';

import {
  APPEND_ERROR,
  CLEAR_ERRORS,
  LOGIN,
  LOGOUT,
} from '@/store/modules/auth/mutation-types';
import {
  AuthError,
  State,
} from '@/store/modules/auth/types';

const mutations: MutationTree<State> = {
  [CLEAR_ERRORS](state: State) {
    state.errors = [];
  },

  [APPEND_ERROR](state: State, value: AuthError) {
    state.errors.push(value);
  },

  [LOGIN](state: State) {
    state.authenticated = true;
  },

  [LOGOUT](state: State) {
    state.authenticated = false;
  },
};

export default mutations;
