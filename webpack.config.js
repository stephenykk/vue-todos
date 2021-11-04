const webpack = require('webpack')
require('dotenv').config({ path: './.env' });

const fs = require('fs');
const path = require('path');
const ProgressbarWebpackPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = filePath => path.resolve(__dirname, filePath);
// const isDev = process.env.NODE_ENV === "development";
module.exports = function (env) {
  
  const isProd = env.NODE_ENV === 'production';
  
  return {
    mode: isProd ? 'production' : 'development',

    entry: {
      index: resolve('src/index.ts'),
      example: resolve('example/index.ts')
    },
    output: true ? {
      path: resolve('dist'),
      filename: '[name].js',
      publicPath: '/',
      library: 'VueTodos', // 有多个入口的话，这里导出的library会多次导出，并且后面覆盖前面的~~
      libraryTarget: 'umd',
      libraryExport: 'default'
    } : {
      path: resolve('dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    devServer:
      process.env.USE_HTTPS === 'yes'
        ? {
            host: process.env.HOST || 'localhost',
            port: 443,
            allowedHosts: 'all',
            https: {
              key: fs.readFileSync(
                path.resolve(process.env.SSL_DIR || '.', 'cert-key.pem')
              ),
              cert: fs.readFileSync(
                path.resolve(process.env.SSL_DIR || '.', 'cert.pem')
              )
            },
            hot: true,
            open: true
          }
        : {
            allowedHosts: 'all',
            port: 9000,
            hot: true,
            open: true,
            static: {
              directory: './dist',
              publicPath: '/public'
            }
          },
    resolve: {
      alias: {
        '@': resolve('src')
      },
      modules: ['node_modules'],
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    externals: {
      'vue-todos': 'VueTodos'
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?|babel|es6)$/,
          include: process.cwd(),
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(svg|jpe?g|png|gif)$/,
          loader: 'url-loader',
          options: {
            query: {
              limit: 10000,
              name: path.posix.join('images', '[name].[ext]')
            }
          }
        },
        {
          test: /\.(ttf|otf|woff2?)$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(process.env.npm_package_version)
      }),
      new ProgressbarWebpackPlugin(),
      new VueLoaderPlugin(),
      // new HtmlWebpackPlugin({
      //   title: 'vue-todos',
      //   template: resolve('./template/index.html'),
      //   filename: 'index.html',
      //   chunks: ['index'],
      //   inject: 'body'
      // }),
      new HtmlWebpackPlugin({
        title: 'vue-todos-example',
        template: resolve('./template/index.html'),
        filename: 'index.html',
        chunks: ['example'],
        inject: 'body'
      })
    ]
  };
};
