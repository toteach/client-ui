import {
  extend, ValidationObserver, ValidationProvider,
} from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';
import Vue from 'vue';

extend('email', {
  ...email,
});

extend('required', required);

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
