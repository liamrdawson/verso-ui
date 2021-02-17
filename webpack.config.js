const path = require('path')

module.exports = {
  //  * Common problems to run in to and their solutions:
  //    Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.  --  setup eslintigonore to not watch webpack.config
  //    Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
  //    ReferenceError: React is not defined: https://github.com/webpack/webpack/issues/1275#issuecomment-245470919
  //    Error: Cannot find module './components': https://github.com/webpack/webpack/issues/2748#issuecomment-233502447
  //    TypeError: Cannot read property 'key' of null: Set target: "node"
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules/'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    // Use external version of React
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  output: {
    globalObject: 'this',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
