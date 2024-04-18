const ESLintWebpackPlugin = require('eslint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config, { dev, isServer }) => {
    if (!isServer && dev) {
      config.plugins.push(
        new ESLintWebpackPlugin({
          extensions: ['.ts', '.tsx'],
          exclude: ['.vscode/', '.next/', 'archive/', 'node_modules/', 'out/', 'public/'],
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
