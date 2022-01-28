const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
  reactStrictMode: true,
  // webpack: (config, { dev, isServer }) => {
  //   if (!isServer && dev) {
  //     config.plugins.push(
  //       new ESLintWebpackPlugin({
  //         extensions: ['.ts', '.tsx'],
  //         exclude: [
  //           '.vscode/',
  //           '.next/',
  //           'archive/',
  //           'node_modules/',
  //           'out/',
  //           'public/',
  //         ],
  //       }),
  //     );
  //   }

  //   return config;
  // },
};
