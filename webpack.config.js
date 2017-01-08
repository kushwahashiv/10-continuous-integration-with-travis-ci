const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');

module.exports = function (options) {
  return {
    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'main': './src/main.browser.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var'
    },
    devtool: 'cheap-module-source-map',
    resolve: {extensions: ['.ts', '.js', '.json'], modules: [path.resolve(__dirname, 'src'), 'node_modules']},
    module: {
      exprContextCritical: false,
      rules: [
        {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
        {test: /\.html$/, loader: 'raw-loader', exclude: [path.resolve(__dirname, 'src/index.html')]},
        {test: /\.(jpg|png|gif)$/, loader: 'file'}
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new CommonsChunkPlugin({name: ['polyfills', 'vendor'].reverse()}),
      new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname)
    ],

    devServer: {
      port: 3000,
      host: 'localhost',
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};
