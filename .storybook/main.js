const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-postcss',
      options: {
        styleLoaderOptions: {},
        cssLoaderOptions: {},
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.it(prop.parent.fileName) : true,
  //   },
  // },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    config.context = path.resolve(__dirname, '../src');

    config.resolve.alias['components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['data'] = path.resolve(__dirname, '../src/data');

    // Return the altered config
    return config;
  },
};
