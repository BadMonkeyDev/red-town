import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";

export function buildPlugins( htmlPath: string):webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template:htmlPath,
    })
  ]
}