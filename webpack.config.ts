import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 9999;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        port,
    })

    return config;
} ;