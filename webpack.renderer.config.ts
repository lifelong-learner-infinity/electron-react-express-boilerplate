import type { Configuration } from 'webpack';
import path from 'path';
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  // loads .css files
  test: /\.css$/,
  include: [path.resolve(__dirname, "src/app")],
  use: [
    "style-loader",
    "css-loader",
    "postcss-loader"
  ]
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
