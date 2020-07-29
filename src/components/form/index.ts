import _Vue from 'vue';

import FormFieldset from './form-fieldset.vue';
import Form from './form.vue';

const Plugin = {
  install(Vue: typeof _Vue): void {
    Vue.component(Form.name, Form);
    Vue.component(FormFieldset.name, FormFieldset);
  },
};

export default Plugin;
export {
  Form as TForm,
  FormFieldset as TFormFieldset,
};
