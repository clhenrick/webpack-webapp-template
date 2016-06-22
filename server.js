// Gets called when running npm start

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.dev.babel';

console.log('Starting server...\n');

new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  quiet: false,
  stats: { colors: true }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Listening at localhost:3000');
  }
});
