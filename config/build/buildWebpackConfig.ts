import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(
  {
    mode,
    paths,
    port,
  }: BuildOptions): webpack.Configuration {
  const isDev = mode === "development";

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash].js`,
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(paths.html),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths.srcPath),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  }
}