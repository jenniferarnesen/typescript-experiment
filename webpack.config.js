module.exports = {
  entry: ['./src/app.ts'],
  output: {
    path: __dirname,
    filename: './dist/index.js',
  },
  module: {
    loaders: [{
      test: /\.ts$/, loaders: ['babel-loader', 'ts-loader'], exclude: /node_modules/
    }],
  }
};