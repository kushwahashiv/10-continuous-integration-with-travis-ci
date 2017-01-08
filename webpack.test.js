const path = require('path');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = function (options) {
  return {
    devtool: 'inline-source-map',
    performance: { hints: false },
    resolve: {extensions: ['.ts', '.js'], modules: [path.resolve(__dirname, 'src'), 'node_modules']},
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
          query: {sourceMap: false, inlineSourceMap: true, compilerOptions: {removeComments: true}},
          exclude: [/\.e2e\.ts$/]
        }
      ]
    },
    node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};
