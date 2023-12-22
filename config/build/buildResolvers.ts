import { ResolveOptions } from 'webpack';

export function buildResolvers(srcPath: string): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      srcPath, 'node_modules',
    ],
    mainFiles: ['index'],
    alias: {
      '@': srcPath,
    },
  };
}
