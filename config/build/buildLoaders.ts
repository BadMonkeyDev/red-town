import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const typescriptLoader =
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module.scss$/i,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          },
        }
      },
      'sass-loader'
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: ['file-loader'],
  }


  return [
    typescriptLoader,
    styleLoader,
    svgLoader,
    fileLoader,
  ]
}