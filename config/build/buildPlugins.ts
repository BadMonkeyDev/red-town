import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(htmlPath: string, isDev: boolean):webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: htmlPath,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
