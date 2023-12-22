import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  srcPath: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const port = env.port || 9999;

  return buildWebpackConfig({
    mode,
    paths,
    port,
  });
};
