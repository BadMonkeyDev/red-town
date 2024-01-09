import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: ['file-loader'],
  };

  const babelLoader = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['uk', 'en'],
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
              keyAsDefaultValue: false, // if your key can be value itself
              discardOldKeys: true,
            },
          ],
        ],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
