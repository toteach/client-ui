import { localeRequire } from '../../utils/locale-require';

const locales = localeRequire(require.context(
  '.',
  true,
  /\.json$/u,
));

export default locales;
