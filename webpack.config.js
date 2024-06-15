const path = require('path');
const { ids } = require('webpack');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: {
    index: './index.ts',
  },
  target: 'web',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new ids.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({}),
    // new BundleAnalyzerPlugin(),
  ],
  externals: Object.keys(pkg.dependencies),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
    },
    fallback: {
      fs: false,
    },
  },
  optimization: {
    nodeEnv: 'production',
    removeAvailableModules: true,
    removeEmptyChunks: true,
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        extractComments: true,
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'bundle/[name].chunk-[contenthash].js',
    publicPath: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'umd',
      name: 'lib',
    },
    globalObject: 'this',
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
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.build.json'),
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/],
      },
    ],
  },
};
