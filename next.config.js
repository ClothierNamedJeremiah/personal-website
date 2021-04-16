// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const REGEX_LESS = /\.((c|le)ss)$/i;

module.exports = {
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   /**
  //    * Only the client can create a <style> element
  //    */
  //   if (isServer) {
  //     config.module.rules.push({
  //       test: REGEX_LESS,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         'less-loader',
  //       ],
  //     });

  //     config.plugins.push(new MiniCssExtractPlugin());
  //   } else {
  //     config.module.rules.push({
  //       test: REGEX_LESS,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'less-loader',
  //       ],
  //     });
  //   }
    

  //   return config;
  // },
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
};
