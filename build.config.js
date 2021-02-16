const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/countdown.js',
  output: {
    filename: 'countdown.min.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};