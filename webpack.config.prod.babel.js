import path from 'path';
import Clean from 'clean-webpack-plugin';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'false',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc')
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: [/node_modules/]
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test:   /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'autoprefixer?{browsers:["last 2 version", "> 2%"]}', 'sass'])
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'url?limit=10000&name=assets/imgs/[hash]-[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [path.resolve(__dirname, 'src/assets/fonts')],
        loader: "url?limit=10000&mimetype=image/svg+xml&name=assets/imgs/[hash]-[name].[ext]"
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: [path.resolve(__dirname, 'src/assets/fonts')],
        loader : 'url?limit=100000&name=assets/fonts/[hash]-[name].[ext]'
      }
    ]
  },
  plugins: [
    new Clean(['build/*']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractTextPlugin('./main.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  target: 'web',
  stats: false,
  progress: true

}
