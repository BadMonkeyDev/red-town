import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(
  {
    mode,
    paths
  }: BuildOptions): webpack.Configuration {
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(paths.html),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}