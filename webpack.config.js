const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: 'src/index.ts',
  externals: [nodeExternals()], // Excludes node_modules from bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aperture-ui.js', //  The library name e.g. import * from aperture-ui
    libraryTarget: 'umd' // Universal Module Definition (UMD) allows modules to be loaded via CommonJS, AMD, or script tag
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()], //  load modules whose location is specified in the paths section of tsconfig.json
    extensions: ['.tsx', '.ts', '.js'] //  Attempt to resolve these extensions in order.
  },
  devtool: 'inline-source-map', //  This option controls if and how source maps are generated
  module: {
    //  Determine how the different types of modules within a project will be treated: https://webpack.js.org/concepts/modules/
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/, /test/],
        use: [
          //  Loaders can be chained by passing multiple loaders, which will be applied from right to left (last to first configured).
          {
            loader: 'babel-loader' //  Allows transpiling JavaScript files using Babel and webpack
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/, //  Asset Modules replace deprecated url-loader: https://github.com/webpack-contrib/url-loader
        type: 'asset', //  https://webpack.js.org/guides/asset-modules/
        use: '@svgr/webpack'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      //  https://webpack.js.org/plugins/define-plugin/
      //  The DefinePlugin allows you to create global constants which can be configured at compile time.
      //  This can be useful for allowing different behavior between development builds and production builds.
      //  If you perform logging in your development build but not in the production build you might use a global constant to determine whether logging takes place.
      //  That's where DefinePlugin shines, set it and forget it rules for development and production builds.
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
      'process.env.STORYBOOK_THEME': JSON.stringify(false)
    })
  ]
}
