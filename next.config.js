const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  images: {
    loader: 'imgix',
    path: '',
  },
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!isServer && dev) {
      config.plugins.push(
        new ESLintWebpackPlugin({
          extensions: ['.js', '.jsx'],
          exclude: [
            '.vscode/',
            '.next/',
            'archive/',
            'node_modules/',
            'out/',
            'public/',
          ],
        }),
      );
    }

    return config;
  },
};
