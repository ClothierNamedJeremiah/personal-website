const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  images: {
    loader: 'imgix',
    path: '',
  },
  future: {
    webpack5: true,
  },
  /**
   * Explicitly setting files in pages/ directory so that next.js builds don't bundle
   * test files
   */
  pageExtensions: ['index.jsx', '_app.jsx', '_document.jsx'],
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
