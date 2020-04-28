const path = require('path');
const packageJson = require('./package.json');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  lintOnSave: false,
  css: {
    extract: isProduction,
    sourceMap: isDevelopment,
    loaderOptions: {
      scss: {
        data: `@import "@/assets/scss/themes/default.scss";`
      },
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.json$/,
          type: 'javascript/auto',
          include: [
            path.resolve(__dirname, 'stabs'),
            path.resolve(__dirname, 'src'),
          ],
          exclude: /node_modules/,
          loader: path.resolve('./json-loader.js'),
        },
      ],
    },
  },
  transpileDependencies: [
    'vuex-persist',
  ],
  chainWebpack: (config) => {
    config.plugin('define')
      .tap((definitions) => {
        definitions[0].VERSION = JSON.stringify(packageJson.version);
        return definitions;
      });
  },
};
