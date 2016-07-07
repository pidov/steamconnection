module.exports = {
  entry: './src/index',
  devtool: 'source-map',
  output: {
  	path: __dirname + '/dist',
  	publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
    	test: /\.css$/,
    	loader: 'style-loader!css-loader'
    },
    {
    	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    	loader: "url-loader?limit=10000&mimetype=application/font-woff"
    },
    {
      	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      	loader: "file-loader"
    }]
  }
}
