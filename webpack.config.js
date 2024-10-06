const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    content: './src/content.js', // Entry point for content script
    background: './src/background.js', // Entry point for background script
  },
  output: {
    filename: '[name].js', // Use entry name as filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // HTML template file
      filename: 'index.html', // Output HTML filename
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' }, // Copy manifest file
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for modern JavaScript and React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
  },
  devtool: 'source-map', // Generate source maps for debugging
  mode: 'development', // Set mode to development; change to 'production' for production builds
};
