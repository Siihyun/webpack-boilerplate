const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  // source-map 생성 방식
  devtool: 'inline-source-map',

  // devserver 설정
  devServer: {
    historyApiFallback: true, // 이상한
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
  },
});
