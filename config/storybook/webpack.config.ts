import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildResolvers } from '../build/buildResolvers';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    srcPath: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.srcPath);
  config.resolve.extensions.push('.ts, .tsx');
  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = buildResolvers(paths.srcPath).alias;

  config.module.rules.push(buildCssLoader(true));

  return config;
};
