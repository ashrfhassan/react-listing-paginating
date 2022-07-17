/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  target: 'web',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(), new webpack.ids.HashedModuleIdsPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: path.resolve('tsconfig.json') }),
    ],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      console: require.resolve('console-browserify'),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      domain: require.resolve('domain-browser'),
      events: require.resolve('events'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      fs: false,
      punycode: require.resolve('punycode'),
      process: require.resolve('process/browser'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      sys: require.resolve('util'),
      timers: require.resolve('timers-browserify'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url'),
      util: require.resolve('util'),
      vm: require.resolve('vm-browserify'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 230000,
      minChunks: 1,
      cacheGroups: {
        defaultVendors: {
          name(module, chunks, cacheGroupKey) {
            return 'bundle/chunk';
          },
        },
      },
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'umd',
      name: 'lib',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/typescript',
            ],
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(tsx)?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};
