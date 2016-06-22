import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:3000/' // see: https://github.com/webpack/style-loader/issues/55
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
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            ['react-transform', {
              'transforms': [{
                'transform': 'react-transform-hmr',
                'imports': ['react'],
                'locals': ['module']
              }]
            }]
          ]
        }
      },
      {
        test: /\.json$/,
        exclude: [/node_modules/],
        loader: 'json'
      },
      {
        test:   /\.scss$/,
        exclude: [/node_modules/],
        loader: 'style!css?sourceMap!autoprefixer?{browsers:["last 2 version", "> 2%"]}!sass'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  target: 'web',
  stats: false,
  progress: true
}
