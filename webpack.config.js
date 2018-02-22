module.exports = {
  entry:'./src/js/index.js',
  output: {
    path:__dirname + '/src/',
    filename:'bundle.js'
  },
  resolve: {
    extensions:['.js']
  },
  devServer:{
    // color:true,
    historyApiFallback:true,
    contentBase:'./src/',
    inline:true,
    // progress:true,
    port:3000
  },
  module: {
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015','react', 'stage-1']
        },
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
