'use strict';

module.exports = [
  (context) => ({
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: context.webpackBabelConfig
  })
];