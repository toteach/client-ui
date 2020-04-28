/* eslint no-underscore-dangle: 0 */
/* eslint import/export: 0 */
/* eslint import/order: 0 */
/* eslint import/no-duplicates: 0 */
/* eslint-disable import/unambiguous */
/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'vue-localstorage' {
  import { PluginObject } from 'vue';

  const vueLocalStorage: PluginObject<void>;
  export default vueLocalStorage;
}

declare const VERSION: string;
declare const __stage: string;
declare const __vcs: string;
declare const __config: {
  type: string;
  theme: string;
  logo: {
    desktop: string;
    mobile: string;
  };
  faviconFolder: string;
  colors: {
    'main-color': string;
    'text-color': string;
    'error-color': string;
    'warning-color': string;
    'success-color': string;
  };
  settings: {
    title: string;
    footer: {
      copyright: string;
      phone: string;
    };
    wellbore: {
      probabilities: {
        sticking_probability: boolean;
        loss_probability: boolean;
        flushing_probability: boolean;
        ogws_probability: boolean;
        breaking_probability: boolean;
        oil_seal_probability: boolean;
      };
    };
  };
};

declare module 'vue-simple-svg' {
  export const SimpleSVG: any;
}

declare module 'vue-fragment';

declare module 'chart.js';

declare interface Window {
  // TODO: поставил any временно, чтобы запустить тесты
  $app: any;
}
