const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'main.js',
  },
  entry: './src/client/index.js',
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        
      },
    ],
  },
};