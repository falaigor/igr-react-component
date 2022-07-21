/* eslint-disable */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: ['./src/index.ts'],
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      libraryTarget: 'commonjs'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          loader: 'ts-loader',
          test: /\.tsx?$/,
          exclude: /node_modules/,
          options: {
            transpileOnly: false
          }
        },
        {
          test: /\.s?[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
    devtool: isProduction
      ? 'nosources-source-map'
      : 'eval-cheap-module-source-map'
  };
};