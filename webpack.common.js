const { resolve } = require('path');

const SRC_DIR = resolve(__dirname, 'client', 'src', 'index.jsx');

module.exports = {
  entry: SRC_DIR,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
