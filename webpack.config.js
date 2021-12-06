const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: './src/ts/controller.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
  },

  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'jsGame',
      filename: 'index.html',
      template: './src/temp.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: ['last 5 versions', 'ie >9'],
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
