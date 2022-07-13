const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    // Allows importing sass or scss files
    config.module.rules.push({
      test: /\.lazy\.scss|.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(tsx|ts|js)?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['istanbul'],
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/typescript',
              [
                '@babel/env',
                {
                  modules: false,
                  targets: {
                    chrome: '58',
                    ie: '11',
                  },
                },
              ],
            ],
          },
        },
      ],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];

    config.resolve.extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.cjs', '.css'];

    return config;
  },
}