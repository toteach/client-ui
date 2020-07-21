import _Vue from 'vue';

import InputField from './input-field.vue';
import Input from './input.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(InputField.name, InputField);
    Vue.component(Input.name, Input);
  },
};

export default Plugin;
export {
  InputField as TInputField,
  Input as TInput,
};
