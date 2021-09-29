const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    '@storybook/addon-actions/register',
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-postcss',

    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
      core: {
        builder: 'webpack5',
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
