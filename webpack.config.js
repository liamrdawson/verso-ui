const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  target: 'web',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'aperture-ui.js',
    library: 'Aperture-UI',
    //  To make the library build available on both browsers and Node.js, we used output.globalObject option to 'this' .
    //  'this' means the global object of the environment, in case of a web browser 'this' will be the object window
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /test/],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // * add some development rules here
  } else if (argv.mode === 'production') {
    // * add some prod rules here
  } else {
    throw new Error('Specify env')
  }

  return config
}
