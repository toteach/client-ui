import {
  TranslateResult,
} from 'vue-i18n';

type Title = string | TranslateResult;

export function getTitle(title?: Title): string {
  return `${title}`;
}

