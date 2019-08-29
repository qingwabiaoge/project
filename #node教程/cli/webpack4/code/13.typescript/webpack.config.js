const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.ts',
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: './[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader"
    }]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};
