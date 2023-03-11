import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            scriptLoading: "module",
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}