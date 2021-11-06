/* 사용할 모듈 불러오기 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js', // entry 파일 지정
  output: {
    filename: 'main.js', // 빌드 후 생성될 파일 이름
    path: path.resolve(__dirname, 'dist'), // 빌드 파일이 생성 될 경로
  },
  module: {
    rules: [
      {
        // css 파일에 로더 적용
        test: /\.css$/, // 확장자가 css파일들에 적용
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        //  오른쪽에서 왼쪽으로 적용됨
      },
      {
        // image 파일에 로더 적용
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //  html 파일 모듈화를 위해 플러그인 적용
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    //  빌드 과정에서 css 파일 따로 추출하기 위해 CssExtractPlugin 적용
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // 빌드 후 파일 삭제 플러그인 적용
    new CleanWebpackPlugin(),
  ],
};
