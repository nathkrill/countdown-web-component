const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/countdown.js',
  output: {
    filename: 'countdown.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};
