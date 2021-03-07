const path = require('path');

const REGEX_JS = /\.(js|jsx)$/;
const REGEX_LESS = /\.less$/;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: REGEX_JS,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: REGEX_LESS,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.less'],
  },
  devServer: {
    open: 'Google Chrome',
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hot: true,
  },
};
