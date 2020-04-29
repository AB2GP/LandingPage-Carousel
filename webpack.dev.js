const { resolve } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


const DIST_DIR = resolve(__dirname, 'client', 'dist');

module.exports = merge(common, {
  output: {
    path: DIST_DIR,
    filename: 'bundle.dev.js',
  },
  mode: 'development',
});
