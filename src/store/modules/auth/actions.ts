import {
  Action,
} from 'vuex';

import { router } from '@/plugins/vue-router';
import types from '@/store/modules/auth/mutation-types';
import {
  State,
} from '@/store/modules/auth/types';
import {
  RootState,
} from '@/store/types';
import {
  checkCredentials,
} from '@/stubs/_api/auth/auth';
import {
  AuthTransformer,
} from '@/transformers/auth/auth-transformer';

const authTransformer = new AuthTransformer();

export const login: Action<State, RootState> = async ({ commit }, payload): Promise<boolean> => {
  try {
    const response = await checkCredentials(authTransformer.send(payload));

    if (response.status === 200) {
      commit(types.LOGIN);

      return true;
    }

    if (response.status === 401) {
      commit(types.APPEND_ERROR, {
        title: 'Вы ввели неправильный пароль или адрес электронной почты.',
        message: 'Если вы забыли пароль, обратитесь к своему руководителю для восстановления пароля.',
      });
    }

    return false;
  } catch (error) {
    throw error;
  }
};

export const logout: Action<State, RootState> = ({ commit }): void => {
  commit(types.LOGOUT);
  router.push({ name: 'login' });
};

export default {
  login,
  logout,
};
