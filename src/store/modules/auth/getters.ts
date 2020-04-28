import {
  GetterTree,
} from 'vuex';

import {
  AuthError,
  State,
} from '@/store/modules/auth/types';
import {
  RootState,
} from '@/store/types';

export const getters: GetterTree<State, RootState> = {
  errors(state: State): AuthError[] {
    return state.errors;
  },
};

export default getters;
