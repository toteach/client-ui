import { LocaleMessageObject } from 'vue-i18n';

import RequireContext = __WebpackModuleApi.RequireContext;

export const localeRequire = (ctx: RequireContext): LocaleMessageObject => {
  const keys = [...new Set(ctx.keys())];

  return keys.reduce((acc: LocaleMessageObject, item: string) => {
    // TODO: Сейчас некрасиво, потом поправим
    const fileName = item
      .replace('./', '')
      .replace('.json', '');

    if (!acc[fileName]) {
      acc[fileName] = ctx(item);
    }

    return acc;
  }, {});
};
